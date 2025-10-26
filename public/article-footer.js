// Article Footer Loader - Share buttons and random related articles
(function() {
    'use strict';

    // Amazon Affiliate HTML (for top of article)
    const affiliateHTML = `
        <div class="affiliate-section">
            <div class="affiliate-disclaimer">
                <small>📢 Affiliate Disclosure: This page contains affiliate links. We may earn a commission from qualifying purchases at no extra cost to you.</small>
            </div>
            <div class="affiliate-container">
                <div class="affiliate-icon">🎃</div>
                <div class="affiliate-content">
                    <h3 class="affiliate-title">Halloween Essentials on Amazon</h3>
                    <p class="affiliate-description">Discover spooky decorations, costumes, and Halloween must-haves to make your celebration unforgettable.</p>
                    <a href="https://www.amazon.com/b?node=118248191011&linkCode=ll2&tag=triatempora-20&linkId=ecd957614ea3aaac440c477fa8566b62&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="nofollow noopener sponsored" class="affiliate-btn">
                        Shop Halloween Collection →
                    </a>
                </div>
            </div>
        </div>
    `;

    // Article footer HTML template
    const footerHTML = `
        <!-- Share Section -->
        <div class="share-section">
            <h3>Share This Article</h3>
            <div class="share-buttons">
                <a href="#" class="share-btn share-x" id="shareX">
                    <span>𝕏</span> Share on X
                </a>
                <a href="#" class="share-btn share-facebook" id="shareFacebook">
                    <span>📘</span> Share on Facebook
                </a>
                <button class="share-btn share-copy" id="shareCopy">
                    <span>🔗</span> Copy Link
                </button>
            </div>
        </div>

        <!-- Continue Your Journey Carousel -->
        <section class="recent-posts">
            <div class="recent-posts-title">
                <h3>Continue Your Journey</h3>
            </div>
            <div class="carousel-container">
                <div class="posts-list" id="postsList">
                    <!-- Carousel content will be dynamically loaded -->
                </div>
            </div>
            <div class="carousel-controls">
                <button class="carousel-btn play-pause-btn" id="playPauseBtn" aria-label="Play/Pause">❚❚</button>
                <div class="carousel-dots" id="carouselDots"></div>
            </div>
        </section>
    `;

    // Amazon Affiliate HTML for bottom (Autumn)
    const affiliateBottomHTML = `
        <div class="affiliate-section affiliate-bottom">
            <div class="affiliate-disclaimer">
                <small>📢 Affiliate Disclosure: This page contains affiliate links. We may earn a commission from qualifying purchases at no extra cost to you.</small>
            </div>
            <div class="affiliate-container">
                <div class="affiliate-icon">🍂</div>
                <div class="affiliate-content">
                    <h3 class="affiliate-title">Autumn Adventure Shop</h3>
                    <p class="affiliate-description">Explore our curated collection of autumn essentials, outdoor gear, and seasonal must-haves for your fall adventures.</p>
                    <a href="https://amzn.to/3L3v3v6" target="_blank" rel="nofollow noopener sponsored" class="affiliate-btn">
                        Discover Autumn Collection →
                    </a>
                </div>
            </div>
        </div>
    `;

    // Load Amazon Affiliate after first image
    function loadAffiliateAfterFirstImage() {
        // Try to find the first image container in article content
        const articleContent = document.querySelector('.article-content, article.article-content');
        if (!articleContent) return;
        
        const firstImageContainer = articleContent.querySelector('.article-image-container');
        if (firstImageContainer) {
            // Create a div for affiliate and insert after first image
            const affiliateDiv = document.createElement('div');
            affiliateDiv.innerHTML = affiliateHTML;
            firstImageContainer.insertAdjacentElement('afterend', affiliateDiv.firstElementChild);
            console.log('✅ Halloween affiliate placed after first image');
        } else {
            // Fallback: use placeholder if exists
            const placeholder = document.getElementById('affiliate-top-placeholder');
            if (placeholder) {
                placeholder.innerHTML = affiliateHTML;
                console.log('⚠️ No image found, using placeholder');
            }
        }
    }

    // Load Autumn Affiliate before references or at end of article
    function loadAffiliateBeforeReferences() {
        // Find references section
        const references = document.querySelector('.references');
        
        if (references) {
            // Insert before references
            const affiliateDiv = document.createElement('div');
            affiliateDiv.innerHTML = affiliateBottomHTML;
            references.insertAdjacentElement('beforebegin', affiliateDiv.firstElementChild);
            console.log('✅ Autumn affiliate placed before references');
        } else {
            // Fallback: insert at end of article content
            const articleContent = document.querySelector('.article-content, article.article-content');
            if (articleContent) {
                const affiliateDiv = document.createElement('div');
                affiliateDiv.innerHTML = affiliateBottomHTML;
                articleContent.insertAdjacentElement('afterend', affiliateDiv.firstElementChild);
                console.log('✅ Autumn affiliate placed after article content');
            }
        }
    }

    // Load article footer HTML
    function loadArticleFooter() {
        const placeholder = document.getElementById('article-footer-placeholder');
        if (!placeholder) return;

        // Check if we're on a Matrix page
        const isMatrixPage = window.location.pathname.includes('/matrix/');
        
        if (isMatrixPage) {
            // Matrix pages: Only load share section (no carousel)
            const shareOnlyHTML = footerHTML.split('<!-- Continue Your Journey Carousel -->')[0];
            placeholder.innerHTML = shareOnlyHTML;
            initializeShareButtons();
        } else {
            // Other pages: Load everything including carousel
            placeholder.innerHTML = footerHTML;
            initializeShareButtons();
            initCarousel();
        }
    }

    // Initialize share buttons
    function initializeShareButtons() {
        const shareX = document.getElementById('shareX');
        const shareFacebook = document.getElementById('shareFacebook');
        const shareCopy = document.getElementById('shareCopy');

        const currentUrl = window.location.href;
        const pageTitle = document.querySelector('h1')?.textContent || document.title;

        if (shareX) {
            shareX.href = `https://x.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(currentUrl)}&via=triatempora`;
            shareX.target = '_blank';
        }

        if (shareFacebook) {
            shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
            shareFacebook.target = '_blank';
        }

        if (shareCopy) {
            shareCopy.addEventListener('click', function() {
                navigator.clipboard.writeText(currentUrl).then(() => {
                    const originalText = this.innerHTML;
                    this.innerHTML = '<span>✓</span> Copied!';
                    this.style.background = '#16a34a';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.background = '';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy:', err);
                });
            });
        }
    }

    // Initialize carousel for article footer
    function initCarousel() {
        const postsList = document.getElementById('postsList');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const dotsContainer = document.getElementById('carouselDots');
        
        if (!postsList || !playPauseBtn || !dotsContainer) return;
        
        // Load random articles if carousel-data.js is available
        if (typeof generateCarouselHTML === 'function') {
            postsList.innerHTML = generateCarouselHTML();
        } else {
            console.error('carousel-data.js not loaded');
            return;
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


    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            loadAffiliateAfterFirstImage();
            loadAffiliateBeforeReferences();
            loadArticleFooter();
        });
    } else {
        loadAffiliateAfterFirstImage();
        loadAffiliateBeforeReferences();
        loadArticleFooter();
    }
})();
