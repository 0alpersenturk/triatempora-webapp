// Determine the correct path prefix based on current location
function getPathPrefix() {
    // Get current page path
    let path = window.location.pathname;
    
    // For local file:// protocol, use href instead
    if (window.location.protocol === 'file:') {
        path = window.location.href;
        // Remove file:// protocol and query string
        path = path.replace(/^file:\/\//, '').split('?')[0];
    }
    
    // Get the directory path (remove filename)
    const lastSlash = path.lastIndexOf('/');
    const dirPath = path.substring(0, lastSlash);
    
    // Count how many levels deep we are from the root
    // Check if we're in a subdirectory by looking for common folder names
    const subdirs = ['ancient', 'consciousness', 'conspiracy', 'forbidden', 'mystical', 'secret', 'ufo', 'matrix'];
    
    for (const subdir of subdirs) {
        if (dirPath.includes('/' + subdir) || dirPath.includes('\\' + subdir)) {
            return '../';
        }
    }
    
    // If not in a subdirectory, no prefix needed
    return '';
}

// Header HTML template
const headerHTML = `<header class="header">
    <div class="header-content">
        <div class="logo-section">
            <a href="/" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
                <img src="/triatemporalogo.png" alt="Triatempora - Ancient wisdom and consciousness exploration" class="logo-img" width="80" height="80" loading="eager">
                <h1 class="site-title" style="font-weight: normal;">triatempora</h1>
            </a>
        </div>
        <div class="hamburger-menu" id="hamburgerMenu">
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
        </div>
    </div>
</header>

<!-- Mobile Menu Overlay -->
<div class="menu-overlay" id="menuOverlay"></div>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobileMenu">
    <div class="menu-section">
        <div class="menu-section-title">Theme</div>
        <div class="menu-theme-toggle">
            <span class="menu-theme-label">Dark Mode</span>
            <div class="theme-toggle" id="themeToggle">
                <div class="switch-slider">☀️</div>
            </div>
        </div>
    </div>
    
    <div class="menu-section">
        <div class="menu-section-title">Categories</div>
        <div class="menu-categories">
            <a href="/ancient-wisdom" class="menu-category-link">
                <span>🏺</span>
                <span>Ancient Wisdom</span>
            </a>
            <a href="/consciousness" class="menu-category-link">
                <span>👁</span>
                <span>Consciousness</span>
            </a>
            <a href="/conspiracy-theories" class="menu-category-link">
                <span>🔺</span>
                <span>Conspiracy Theories</span>
            </a>
            <a href="/forbidden-science" class="menu-category-link">
                <span>⚛️</span>
                <span>Forbidden Science</span>
            </a>
            <a href="/mystical-geography" class="menu-category-link">
                <span>🗿</span>
                <span>Mystical Geography</span>
            </a>
            <a href="/secret-projects" class="menu-category-link">
                <span>🔐</span>
                <span>Secret Projects</span>
            </a>
            <a href="/ufo-files" class="menu-category-link">
                <span>🛸</span>
                <span>UFO Files</span>
            </a>
            <a href="/unexplained-phenomena" class="menu-category-link">
                <span>🌀</span>
                <span>Unexplained Phenomena</span>
            </a>
            <a href="/the-matrix" class="menu-category-link">
                <span>🟢</span>
                <span>The Matrix</span>
            </a>
        </div>
    </div>
    
    <div class="menu-section">
        <div class="menu-section-title">Social Media</div>
        <div class="menu-social-links">
            <a href="https://x.com/triatempora" class="menu-social-link" target="_blank" rel="noopener noreferrer">
                <span style="width: 24px; height: 24px; min-width: 24px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">𝕏</span>
                <span>X (Twitter)</span>
            </a>
            <a href="https://instagram.com/triatempora" class="menu-social-link" target="_blank" rel="noopener noreferrer">
                <img src="/instagramlogo.png" alt="Instagram" width="24" height="24" style="min-width: 24px; min-height: 24px; max-width: 24px; max-height: 24px; flex-shrink: 0;" loading="lazy">
                <span>Instagram</span>
            </a>
            <a href="https://www.youtube.com/channel/UC1_fND6kug5B4vGRuQYAIww" class="menu-social-link" target="_blank" rel="noopener noreferrer">
                <img src="/youtube.png" alt="YouTube" width="24" height="24" style="min-width: 24px; min-height: 24px; max-width: 24px; max-height: 24px; flex-shrink: 0;" loading="lazy">
                <span>YouTube</span>
            </a>
            <a href="https://open.spotify.com/show/7MZho0TgMshiE2XIvaNCzk?si=KG9nnArHQsuY9CL3fNGupg" class="menu-social-link" target="_blank" rel="noopener noreferrer">
                <img src="/spotify.png" alt="Spotify" width="24" height="24" style="min-width: 24px; min-height: 24px; max-width: 24px; max-height: 24px; flex-shrink: 0;" loading="lazy">
                <span>Spotify</span>
            </a>
        </div>
    </div>
</div>`;

// Footer HTML template
const footerHTML = `<!-- Footer -->
<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Use</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Categories</h4>
            <ul class="footer-links">
                <li><a href="/ancient-wisdom">Ancient Wisdom</a></li>
                <li><a href="/consciousness">Consciousness</a></li>
                <li><a href="/ufo-files">UFO Files</a></li>
                <li><a href="/conspiracy-theories">Conspiracy Theories</a></li>
                <li><a href="/forbidden-science">Forbidden Science</a></li>
                <li><a href="/mystical-geography">Mystical Geography</a></li>
                <li><a href="/secret-projects">Secret Projects</a></li>
                <li><a href="/unexplained-phenomena">Unexplained Phenomena</a></li>
                <li><a href="/the-matrix">The Matrix</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Newsletter</h4>
            <p class="newsletter-text">Get notified when we publish new mysteries</p>
            <form class="newsletter-form" id="newsletterForm" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/newsletter-success">
                <!-- Hidden honeypot field for bot protection -->
                <p style="display:none">
                    <label>Don't fill this out if you're human: <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
                </p>
                <input type="hidden" name="form-name" value="newsletter" />
                <input type="email" name="email" id="newsletterEmail" placeholder="Your email address" class="newsletter-input" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address">
                <button type="submit" class="newsletter-btn" id="newsletterBtn">Subscribe</button>
                <div id="newsletterMessage" style="display:none; margin-top:10px; padding:10px; border-radius:4px; font-size:0.9rem;"></div>
            </form>
        </div>
        <div class="footer-section">
            <h4>Connect</h4>
            <div class="social-links">
                <a href="https://x.com/triatempora" class="social-link" target="_blank" rel="noopener noreferrer" title="Follow us on X">𝕏</a>
                <a href="https://instagram.com/triatempora" class="social-link" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram">
                    <img src="/instagramlogo.png" alt="Instagram" width="24" height="24" loading="lazy">
                </a>
                <a href="https://www.youtube.com/channel/UC1_fND6kug5B4vGRuQYAIww" class="social-link" target="_blank" rel="noopener noreferrer" title="Subscribe on YouTube">
                    <img src="/youtube.png" alt="YouTube" width="24" height="24" loading="lazy">
                </a>
                <a href="https://open.spotify.com/show/7MZho0TgMshiE2XIvaNCzk?si=KG9nnArHQsuY9CL3fNGupg" class="social-link" target="_blank" rel="noopener noreferrer" title="Listen on Spotify">
                    <img src="/spotify.png" alt="Spotify" width="24" height="24" loading="lazy">
                </a>
                <a href="/rss.xml" class="social-link" target="_blank" title="RSS Feed">
                    <img src="/rss.png" alt="RSS" width="24" height="24" loading="lazy">
                </a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="footer-logo">
            <img src="/triatemporalogo.png" alt="Triatempora Logo" class="footer-logo-img" width="50" height="50" loading="lazy">
            <span class="footer-title">triatempora</span>
        </div>
        <p class="footer-tagline">Time is not a straight line</p>
        <p class="footer-disclaimer">This site is for entertainment purposes. Contains theories and speculations.</p>
        <p class="footer-copyright">© 2025 Triatempora - All rights reserved</p>
        <p class="footer-updated" id="lastUpdated">Last updated: January 2025</p>
    </div>
</footer>

<!-- Back to Top Button -->
<button class="back-to-top" id="backToTopBtn" aria-label="Back to top" title="Back to top">
    ↑
</button>

<!-- Matrix Fullscreen Transition -->
<div id="matrix-fullscreen-transition">
    <canvas id="matrix-transition-canvas"></canvas>
    <div id="matrix-transition-message"></div>
</div>`;

// Load header and footer
function loadHeaderFooter() {
    const prefix = getPathPrefix();
    
    // Load header
    const headerEl = document.getElementById('header-placeholder');
    if (headerEl) {
        headerEl.innerHTML = headerHTML;
        // Fix image and link paths in header for subdirectories
        if (prefix) {
            // Fix image sources (but not http/https or absolute paths starting with /)
            headerEl.innerHTML = headerEl.innerHTML.replace(/src="(?!https?:\/\/|\/)/g, `src="${prefix}`);
            // Fix href links (but not http/https, absolute paths, or anchors)
            headerEl.innerHTML = headerEl.innerHTML.replace(/href="(?!https?:\/\/|\/|#)/g, `href="${prefix}`);
        }
        initializeHeaderEvents();
    }

    // Load footer
    const footerEl = document.getElementById('footer-placeholder');
    if (footerEl) {
        footerEl.innerHTML = footerHTML;
        // Fix paths in footer for subdirectories
        if (prefix) {
            // Fix image sources (but not http/https or absolute paths starting with /)
            footerEl.innerHTML = footerEl.innerHTML.replace(/src="(?!https?:\/\/|\/)/g, `src="${prefix}`);
            // Fix href links (but not http/https, absolute paths, or anchors)
            footerEl.innerHTML = footerEl.innerHTML.replace(/href="(?!https?:\/\/|\/|#)/g, `href="${prefix}`);
            // Fix action attributes for forms
            footerEl.innerHTML = footerEl.innerHTML.replace(/action="(?!https?:\/\/|\/)/g, `action="${prefix}`);
        }
        updateLastUpdated();
        initNewsletterForm();
        
        // Initialize Matrix transition after footer is loaded
        setTimeout(() => {
            initMatrixTransition();
        }, 100);
    }
}

// Initialize header events (hamburger menu, theme toggle)
function initializeHeaderEvents() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const themeToggle = document.getElementById('themeToggle');
    
    function toggleMenu() {
        if (hamburgerMenu && mobileMenu && menuOverlay) {
            hamburgerMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        }
    }
    
    function closeMenu() {
        if (hamburgerMenu && mobileMenu && menuOverlay) {
            hamburgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleMenu);
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking on menu links
    if (mobileMenu) {
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
    
    // Close menu with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// Theme toggle functionality
function toggleTheme() {
    try {
        const html = document.documentElement;
        const body = document.body;
        const currentTheme = html.getAttribute('data-theme') || body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const slider = document.querySelector('.switch-slider');
        if (slider) {
            slider.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        }
        
        // Update theme label text
        const themeLabel = document.querySelector('.menu-theme-label');
        if (themeLabel) {
            themeLabel.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
    } catch (error) {
        console.error('Theme toggle error:', error);
    }
}

// Initialize theme
function initTheme() {
    try {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.body.setAttribute('data-theme', savedTheme);
        
        // Wait for header to load before updating slider and label
        setTimeout(() => {
            const slider = document.querySelector('.switch-slider');
            if (slider) {
                slider.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
            }
            
            const themeLabel = document.querySelector('.menu-theme-label');
            if (themeLabel) {
                themeLabel.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
            }
        }, 100);
    } catch (error) {
        console.warn('Theme initialization failed:', error);
    }
}

// Back to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

let ticking = false;
function toggleBackToTop() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const backToTopBtn = document.getElementById('backToTopBtn');
            if (backToTopBtn) {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('show');
                } else {
                    backToTopBtn.classList.remove('show');
                }
            }
            ticking = false;
        });
        ticking = true;
    }
}

// Update last updated date
function updateLastUpdated() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];
    const now = new Date();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    const lastUpdatedElement = document.getElementById('lastUpdated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = `Last updated: ${month} ${year}`;
    }
}

// Newsletter form validation and security
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('newsletterEmail');
    const submitBtn = document.getElementById('newsletterBtn');
    const messageDiv = document.getElementById('newsletterMessage');
    
    if (!form || !emailInput || !submitBtn) return;
    
    // Track submission time for rate limiting
    let lastSubmitTime = 0;
    const MIN_SUBMIT_INTERVAL = 5000; // 5 seconds between submissions
    
    form.addEventListener('submit', function(e) {
        const now = Date.now();
        
        // Rate limiting check
        if (now - lastSubmitTime < MIN_SUBMIT_INTERVAL) {
            e.preventDefault();
            showMessage('Please wait a few seconds before submitting again.', 'error');
            return;
        }
        
        // Additional email validation
        const email = emailInput.value.trim().toLowerCase();
        
        // Check for suspicious patterns
        if (email.includes('..') || email.startsWith('.') || email.endsWith('.')) {
            e.preventDefault();
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Check for disposable email domains (basic list)
        const disposableDomains = ['tempmail', 'throwaway', 'guerrillamail', 'mailinator', '10minutemail'];
        const domain = email.split('@')[1];
        if (domain && disposableDomains.some(d => domain.includes(d))) {
            e.preventDefault();
            showMessage('Please use a permanent email address.', 'error');
            return;
        }
        
        lastSubmitTime = now;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Subscribing...';
    });
    
    function showMessage(text, type) {
        if (!messageDiv) return;
        messageDiv.textContent = text;
        messageDiv.style.display = 'block';
        messageDiv.style.background = type === 'error' ? '#fee' : '#efe';
        messageDiv.style.color = type === 'error' ? '#c33' : '#3c3';
        messageDiv.style.border = type === 'error' ? '1px solid #fcc' : '1px solid #cfc';
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Subscribe';
            }
        }, 5000);
    }
}

// Carousel functionality for Latest Revelations
function initCarousel() {
    const postsList = document.getElementById('postsList');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!postsList || !playPauseBtn || !dotsContainer) return;
    
    // Load random articles if carousel-data.js is available
    if (typeof generateCarouselHTML === 'function') {
        postsList.innerHTML = generateCarouselHTML();
    }
    
    let currentIndex = 0;
    let autoPlayInterval;
    let isPlaying = true;
    const totalItems = postsList.querySelectorAll('.post-item').length;
    const itemsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 850 ? 2 : 3;
    const maxIndex = Math.max(0, totalItems - itemsPerView);

    // Create dots
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToPage(i));
        dotsContainer.appendChild(dot);
    }

    function updateCarousel() {
        const itemWidth = postsList.querySelector('.post-item').offsetWidth;
        const gap = 20;
        const offset = -currentIndex * (itemWidth + gap);
        postsList.style.transform = `translateX(${offset}px)`;
        
        // Update dots
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function goToPage(index) {
        currentIndex = index;
        updateCarousel();
    }

    function toggleAutoPlay() {
        if (isPlaying) {
            clearInterval(autoPlayInterval);
            playPauseBtn.textContent = '▶';
            isPlaying = false;
        } else {
            startAutoPlay();
            playPauseBtn.textContent = '❚❚';
            isPlaying = true;
        }
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }

    playPauseBtn.addEventListener('click', toggleAutoPlay);

    // Start autoplay
    startAutoPlay();

    // Pause on hover
    postsList.addEventListener('mouseenter', () => {
        if (isPlaying) {
            clearInterval(autoPlayInterval);
        }
    });

    postsList.addEventListener('mouseleave', () => {
        if (isPlaying) {
            startAutoPlay();
        }
    });

    // Update on window resize
    window.addEventListener('resize', updateCarousel);
}

// Set category-specific RGB color based on URL path
function setCategoryColor() {
    const path = window.location.pathname;
    let categoryRgb = '220, 38, 38'; // Default red
    
    if (path.includes('/ancient/')) {
        categoryRgb = '218, 165, 32'; // Gold
    } else if (path.includes('/consciousness/')) {
        categoryRgb = '147, 51, 234'; // Purple
    } else if (path.includes('/conspiracy/')) {
        categoryRgb = '220, 38, 38'; // Red
    } else if (path.includes('/forbidden/')) {
        categoryRgb = '6, 182, 212'; // Cyan
    } else if (path.includes('/mystical/')) {
        categoryRgb = '249, 115, 22'; // Orange
    } else if (path.includes('/secret/')) {
        categoryRgb = '236, 72, 153'; // Pink
    } else if (path.includes('/ufo/')) {
        categoryRgb = '34, 197, 94'; // Green
    } else if (path.includes('/matrix/')) {
        categoryRgb = '0, 255, 65'; // Matrix green
    }
    
    document.documentElement.style.setProperty('--category-rgb', categoryRgb);
}

// Convert article-category to clickable link
function convertArticleCategoryToLink() {
    const categoryMap = {
        'Ancient Wisdom': '../ancient-wisdom',
        'Consciousness': '../consciousness',
        'Conspiracy Theories': '../conspiracy-theories',
        'Forbidden Science': '../forbidden-science',
        'Mystical Geography': '../mystical-geography',
        'Secret Projects': '../secret-projects',
        'UFO Files': '../ufo-files',
        'Unexplained Phenomena': '../unexplained-phenomena',
        'The Matrix': '../the-matrix'
    };
    
    // Find the article-category div (the one above the title)
    const categoryDiv = document.querySelector('.article-category');
    if (categoryDiv) {
        const categoryText = categoryDiv.textContent.trim();
        const categoryUrl = categoryMap[categoryText];
        
        if (categoryUrl) {
            // Create a link element
            const link = document.createElement('a');
            link.href = categoryUrl;
            link.className = 'article-category';
            link.textContent = categoryText;
            link.title = `View all ${categoryText} articles`;
            link.style.cursor = 'pointer';
            link.style.textDecoration = 'none';
            
            // Replace div with link
            categoryDiv.parentNode.replaceChild(link, categoryDiv);
        }
    }
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', function () {
    setCategoryColor();
    loadHeaderFooter(); // This will call initMatrixTransition() after footer loads
    initTheme();
    initCarousel();
    convertArticleCategoryToLink(); // Convert article category to link
    
    // Back to top button
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    
    // Wait for back to top button
    setTimeout(() => {
        const backToTopBtn = document.getElementById('backToTopBtn');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', scrollToTop);
        }
    }, 200);
});

// Matrix Transition Effect for Matrix Category Icon
function initMatrixTransition() {
    
    // Find all Matrix category links and Matrix article links
    const matrixLinks = document.querySelectorAll('a[href="the-matrix"], a[href="../the-matrix"], a[href="/the-matrix"], a[href="https://triatempora.com/the-matrix"], .category-card.the-matrix, a[href^="/matrix/"], a[href^="matrix/"], a[href^="../matrix/"]');
    
    
    matrixLinks.forEach(link => {
        // Skip if already initialized
        if (link.hasAttribute('data-matrix-initialized')) {
            return;
        }
        
        // Check if it's a Matrix-related link
        const href = link.getAttribute('href') || '';
        const isMatrixCategory = href.includes('the-matrix') || link.classList.contains('the-matrix');
        const isMatrixArticle = href.includes('/matrix/');
        const isFooterLink = link.closest('footer') !== null;
        const isCategoryCard = link.classList.contains('the-matrix') || link.classList.contains('category-card');
        
        
        if (isFooterLink || isCategoryCard || isMatrixCategory || isMatrixArticle) {
            link.setAttribute('data-matrix-initialized', 'true');
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetUrl = this.getAttribute('href');
                // Use custom message from data-message attribute, or default message
                const message = this.getAttribute('data-message') || 'WAKE UP, NEO';
                
                // Get the fullscreen elements
                const fullscreen = document.getElementById('matrix-fullscreen-transition');
                const canvas = document.getElementById('matrix-transition-canvas');
                const messageDiv = document.getElementById('matrix-transition-message');
                
                
                if (!fullscreen || !canvas || !messageDiv) {
                    console.error('❌ Missing fullscreen elements!');
                    return;
                }
                
                const ctx = canvas.getContext('2d');
                
                // Set message
                messageDiv.textContent = message;
                
                // Set canvas to full screen
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                
                // Activate fullscreen overlay
                fullscreen.classList.add('active');
                
                // Matrix animation setup
                const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                const fontSize = 16;
                const columns = canvas.width / fontSize;
                
                const drops = [];
                for (let i = 0; i < columns; i++) {
                    drops[i] = 1;
                }
                
                function drawMatrix() {
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    ctx.fillStyle = '#00ff41';
                    ctx.font = fontSize + 'px monospace';
                    
                    for (let i = 0; i < drops.length; i++) {
                        const char = chars[Math.floor(Math.random() * chars.length)];
                        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                        
                        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                            drops[i] = 0;
                        }
                        drops[i]++;
                    }
                }
                
                // Animate for 2 seconds then redirect
                let frameCount = 0;
                const maxFrames = 120; // ~2 seconds at 60fps
                
                function animateMatrix() {
                    drawMatrix();
                    frameCount++;
                    
                    if (frameCount < maxFrames) {
                        requestAnimationFrame(animateMatrix);
                    } else {
                        // Redirect to Matrix page
                        window.location.href = targetUrl;
                    }
                }
                
                animateMatrix();
            });
        }
    });
}

// Clear Matrix overlay on page load (in case of back navigation)
window.addEventListener('pageshow', function(event) {
    const fullscreen = document.getElementById('matrix-fullscreen-transition');
    if (fullscreen) {
        fullscreen.classList.remove('active');
    }
});
