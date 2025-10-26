const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();

// Security middleware
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}));

// Compression middleware
app.use(compression());

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views'));

// Serve static files
app.use(express.static(path.join(__dirname, '../../public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    console.log('Rendering index page');
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
    console.log('Rendering ancient-wisdom page');
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

// Category article routes
const categories = ['ancient', 'consciousness', 'conspiracy', 'forbidden', 'mystical', 'secret', 'ufo', 'unexplained', 'matrix'];

categories.forEach(category => {
    app.get(`/${category}/:article`, (req, res, next) => {
        const articleName = req.params.article.replace('.html', '');
        const viewPath = `${category}/${articleName}`;
        
        console.log(`Rendering article: ${viewPath}`);
        
        res.render(viewPath, { 
            title: `${articleName} - Triatempora`,
            currentPage: category,
            category: category
        }, (err, html) => {
            if (err) {
                console.error(`Error rendering ${viewPath}:`, err.message);
                next();
            } else {
                res.send(html);
            }
        });
    });
});

// 404 Error Handler
app.use((req, res) => {
    console.log(`404 - Page not found: ${req.url}`);
    res.status(404).render('404', { 
        title: '404 - Page Not Found - Triatempora',
        currentPage: '404'
    }, (err, html) => {
        if (err) {
            res.status(404).send('<h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
            res.send(html);
        }
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    console.error('Stack:', err.stack);
    console.error('Request URL:', req.url);
    console.error('Request Method:', req.method);
    
    // Try to render 404 page first
    res.status(404).render('404', { 
        title: '404 - Page Not Found - Triatempora',
        currentPage: '404'
    }, (renderErr, html) => {
        if (renderErr) {
            console.error('404 render error:', renderErr);
            res.status(404).send('<h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
            res.send(html);
        }
    });
});

// Export as serverless function
module.exports.handler = serverless(app);