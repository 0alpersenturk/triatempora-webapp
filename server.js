// Load environment variables first
require('dotenv').config();

const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const { param, validationResult } = require('express-validator');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV !== 'production';

// Trust proxy if behind reverse proxy (Heroku, Nginx, etc.)
if (process.env.TRUST_PROXY === 'true') {
    app.set('trust proxy', 1);
}

// Security middleware with proper CSP
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: [
                "'self'",
                "'unsafe-inline'", // Required for Matrix animations and inline scripts
                "https://www.googletagmanager.com",
                "https://www.google-analytics.com",
                "https://pagead2.googlesyndication.com",
                "https://www.googleadservices.com"
            ],
            styleSrc: [
                "'self'",
                "'unsafe-inline'", // Required for inline styles
                "https://fonts.googleapis.com"
            ],
            imgSrc: ["'self'", "data:", "https:"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            connectSrc: [
                "'self'",
                "https://www.google-analytics.com",
                "https://pagead2.googlesyndication.com"
            ],
            frameSrc: [
                "'self'",
                "https://www.google.com",
                "https://pagead2.googlesyndication.com"
            ]
        }
    },
    crossOriginEmbedderPolicy: false // Required for some external resources
}));

// Compression middleware with level configuration
app.use(compression({
    level: 6, // Balance between speed and compression ratio
    threshold: 1024 // Only compress responses larger than 1KB
}));

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'];
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (mobile apps, Postman, etc.)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1 || isDevelopment) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // Max 100 requests per window
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => isDevelopment // Skip rate limiting in development
});

app.use(limiter);

// Newsletter-specific rate limiter
const newsletterLimiter = rateLimit({
    windowMs: parseInt(process.env.NEWSLETTER_RATE_LIMIT_WINDOW_MS) || 60 * 60 * 1000, // 1 hour
    max: parseInt(process.env.NEWSLETTER_RATE_LIMIT_MAX_REQUESTS) || 3, // Max 3 subscriptions per hour
    message: 'Too many newsletter subscription attempts. Please try again later.',
    skipSuccessfulRequests: true,
    skip: (req) => isDevelopment
});

// Logging configuration
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const accessLogStream = fs.createWriteStream(
    path.join(logDir, 'access.log'),
    { flags: 'a' }
);

if (isDevelopment) {
    // Development: colorful console logging
    app.use(morgan('dev'));
} else {
    // Production: combined format to file
    app.use(morgan('combined', { stream: accessLogStream }));
}

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files with proper caching strategy
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: isDevelopment ? 0 : '1d', // Production: 1 day cache
    etag: !isDevelopment,
    setHeaders: (res, filepath) => {
        if (isDevelopment) {
            // Development: no cache for JS/CSS
            if (filepath.endsWith('.js') || filepath.endsWith('.css')) {
                res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
                res.setHeader('Pragma', 'no-cache');
                res.setHeader('Expires', '0');
            }
        } else {
            // Production: aggressive caching for images
            if (filepath.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
                res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year
            }
            // Production: moderate caching for fonts
            else if (filepath.match(/\.(woff|woff2|ttf|eot)$/)) {
                res.setHeader('Cache-Control', 'public, max-age=2592000'); // 30 days
            }
            // Production: short caching for JS/CSS (for updates)
            else if (filepath.endsWith('.js') || filepath.endsWith('.css')) {
                res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
            }
        }
    }
}));

// Serve category HTML files from root directories (ancient, consciousness, etc.)
const categoryFolders = ['ancient', 'consciousness', 'conspiracy', 'forbidden', 'mystical', 'secret', 'ufo', 'unexplained', 'matrix'];
categoryFolders.forEach(folder => {
    app.use(`/${folder}`, express.static(path.join(__dirname, folder)));
});

// Body parser middleware with size limits
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        memory: process.memoryUsage()
    });
});

// Readiness probe (for Kubernetes/Docker)
app.get('/ready', (req, res) => {
    res.status(200).json({ ready: true });
});

// Redirect .html URLs to clean URLs
app.use((req, res, next) => {
    if (req.path.endsWith('.html')) {
        const cleanPath = req.path.replace(/\.html$/, '');
        return res.redirect(301, cleanPath);
    }
    next();
});

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Triatempora - Ancient Wisdom, Consciousness & Hidden Truths',
        currentPage: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About - Triatempora',
        currentPage: 'about'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact - Triatempora',
        currentPage: 'contact'
    });
});

app.get('/privacy', (req, res) => {
    res.render('privacy', { 
        title: 'Privacy Policy - Triatempora',
        currentPage: 'privacy'
    });
});

app.get('/terms', (req, res) => {
    res.render('terms', { 
        title: 'Terms of Use - Triatempora',
        currentPage: 'terms'
    });
});

app.get('/the-matrix', (req, res) => {
    res.render('the-matrix', { 
        title: 'The Matrix - Digital Reality - Triatempora',
        currentPage: 'the-matrix'
    });
});

app.get('/ancient-wisdom', (req, res) => {
    res.render('ancient-wisdom', { 
        title: 'Ancient Wisdom & Lost Civilizations - Triatempora',
        currentPage: 'ancient-wisdom'
    });
});

app.get('/consciousness', (req, res) => {
    res.render('consciousness', { 
        title: 'Consciousness & Spiritual Reality - Triatempora',
        currentPage: 'consciousness'
    });
});

app.get('/conspiracy-theories', (req, res) => {
    res.render('conspiracy-theories', { 
        title: 'Conspiracy Theories & Global Agenda - Triatempora',
        currentPage: 'conspiracy-theories'
    });
});

app.get('/forbidden-science', (req, res) => {
    res.render('forbidden-science', { 
        title: 'Forbidden Science & Experiments - Triatempora',
        currentPage: 'forbidden-science'
    });
});

app.get('/mystical-geography', (req, res) => {
    res.render('mystical-geography', { 
        title: 'Mystical Geography & Hidden Places - Triatempora',
        currentPage: 'mystical-geography'
    });
});

app.get('/secret-projects', (req, res) => {
    res.render('secret-projects', { 
        title: 'Secret Projects & Cover-ups - Triatempora',
        currentPage: 'secret-projects'
    });
});

app.get('/ufo-files', (req, res) => {
    res.render('ufo-files', { 
        title: 'UFO Files & Alien Contact - Triatempora',
        currentPage: 'ufo-files'
    });
});

app.get('/unexplained-phenomena', (req, res) => {
    res.render('unexplained-phenomena', { 
        title: 'Unexplained Phenomena & Mysteries - Triatempora',
        currentPage: 'unexplained-phenomena'
    });
});

app.get('/newsletter-success', (req, res) => {
    res.render('newsletter-success', { 
        title: 'Newsletter Subscription Success - Triatempora',
        currentPage: 'newsletter-success'
    });
});

// Category article routes with input validation
const categories = ['ancient', 'consciousness', 'conspiracy', 'forbidden', 'mystical', 'secret', 'ufo', 'unexplained', 'matrix'];

categories.forEach(category => {
    app.get(`/${category}/:article`,
        // Input validation
        param('article')
            .trim()
            .isLength({ min: 1, max: 200 })
            .matches(/^[a-zA-Z0-9-_]+(\.html)?$/)
            .withMessage('Invalid article name'),
        (req, res, next) => {
            // Check validation results
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).render('404', {
                    title: '400 - Bad Request - Triatempora',
                    currentPage: '404'
                });
            }

            const articleName = req.params.article.replace('.html', '');
            const viewPath = `${category}/${articleName}`;
            
            res.render(viewPath, { 
                title: `${articleName} - Triatempora`,
                currentPage: category,
                category: category
            }, (err, html) => {
                if (err) {
                    if (!isDevelopment) {
                        // Production: log to file
                        const errorLog = `[${new Date().toISOString()}] Error rendering ${viewPath}: ${err.message}\n`;
                        fs.appendFileSync(path.join(logDir, 'error.log'), errorLog);
                    } else {
                        console.error(`Error rendering ${viewPath}:`, err.message);
                    }
                    next();
                } else {
                    res.send(html);
                }
            });
        }
    );
});

// RSS Feed
app.get('/rss.xml', (req, res) => {
    res.type('application/xml');
    res.sendFile(path.join(__dirname, 'public', 'rss.xml'));
});

// Sitemap
app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

// Robots.txt
app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, 'public', 'robots.txt'));
});

// Ads.txt
app.get('/ads.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(__dirname, 'public', 'ads.txt'));
});

// 404 Error Handler with fallback
app.use((req, res) => {
    res.status(404).render('404', { 
        title: '404 - Page Not Found - Triatempora',
        currentPage: '404'
    }, (err, html) => {
        if (err) {
            // Fallback if 404 template doesn't exist
            res.status(404).send('<h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
            res.send(html);
        }
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    const errorDetails = {
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.url,
        error: err.message,
        stack: err.stack
    };

    if (!isDevelopment) {
        // Production: log to file
        fs.appendFileSync(
            path.join(logDir, 'error.log'),
            JSON.stringify(errorDetails) + '\n'
        );
    } else {
        console.error('Error:', errorDetails);
    }

    res.status(err.status || 500);
    
    if (req.accepts('html')) {
        res.render('404', {
            title: '500 - Server Error - Triatempora',
            currentPage: '500'
        }, (renderErr, html) => {
            if (renderErr) {
                res.send('<h1>500 - Internal Server Error</h1>');
            } else {
                res.send(html);
            }
        });
    } else if (req.accepts('json')) {
        res.json({ error: 'Internal Server Error' });
    } else {
        res.type('txt').send('Internal Server Error');
    }
});

// Start server with graceful shutdown
const server = app.listen(PORT, () => {
    console.log(`🚀 Triatempora server is running on http://localhost:${PORT}`);
    console.log(`📁 Serving static files from: ${path.join(__dirname, 'public')}`);
    console.log(`🎨 Using views from: ${path.join(__dirname, 'views')}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔒 Security: Helmet CSP enabled, Rate limiting ${isDevelopment ? 'disabled' : 'enabled'}`);
    console.log(`📊 Logging: ${isDevelopment ? 'Console (dev)' : 'File (combined)'}`);
});

// Graceful shutdown handler
const gracefulShutdown = (signal) => {
    console.log(`\n${signal} signal received: closing HTTP server gracefully`);
    server.close(() => {
        console.log('✅ HTTP server closed');
        console.log('👋 Triatempora server shut down successfully');
        process.exit(0);
    });

    // Force shutdown after 30 seconds
    setTimeout(() => {
        console.error('⚠️  Forced shutdown after timeout');
        process.exit(1);
    }, 30000);
};

// Listen for termination signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err);
    if (!isDevelopment) {
        fs.appendFileSync(
            path.join(logDir, 'error.log'),
            `[${new Date().toISOString()}] Uncaught Exception: ${err.message}\n${err.stack}\n`
        );
    }
    gracefulShutdown('UNCAUGHT_EXCEPTION');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
    if (!isDevelopment) {
        fs.appendFileSync(
            path.join(logDir, 'error.log'),
            `[${new Date().toISOString()}] Unhandled Rejection: ${reason}\n`
        );
    }
});
