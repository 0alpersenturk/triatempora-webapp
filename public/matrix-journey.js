// Matrix-specific "Continue Your Journey" section
(function() {
    'use strict';

    // Matrix-themed journey HTML template
    const matrixJourneyHTML = `
        <style>
            /* Matrix Journey Section */
            .matrix-journey-section {
                margin: 40px auto;
                padding: 25px 20px;
                max-width: 900px;
                background: linear-gradient(180deg, rgba(0, 255, 65, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
                border: 1px solid rgba(0, 255, 65, 0.3);
                border-radius: 8px;
                position: relative;
                overflow: hidden;
            }

            .matrix-journey-section::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #00ff41, transparent);
                animation: matrixScanLine 4s infinite;
            }

            @keyframes matrixScanLine {
                0% { left: -100%; }
                100% { left: 100%; }
            }

            .matrix-journey-header {
                text-align: center;
                margin-bottom: 20px;
                position: relative;
            }

            .matrix-journey-title {
                font-size: 1.3rem;
                font-weight: 700;
                text-transform: uppercase;
                color: #00ff41;
                letter-spacing: 3px;
                margin-bottom: 8px;
                text-shadow: 
                    0 0 10px #00ff41,
                    0 0 20px #00ff41;
                animation: matrixGlow 3s ease-in-out infinite;
            }

            @keyframes matrixGlow {
                0%, 100% {
                    text-shadow: 
                        0 0 10px #00ff41,
                        0 0 20px #00ff41,
                        0 0 30px #00ff41;
                }
                50% {
                    text-shadow: 
                        0 0 15px #00ff41,
                        0 0 30px #00ff41,
                        0 0 45px #00ff41,
                        0 0 60px #00ff41;
                }
            }

            .matrix-journey-subtitle {
                font-size: 0.85rem;
                color: rgba(0, 255, 65, 0.7);
                text-transform: uppercase;
                letter-spacing: 3px;
                font-weight: 300;
            }

            .matrix-pills-container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 15px;
                margin-bottom: 20px;
            }

            .matrix-pill-card {
                background: rgba(0, 0, 0, 0.6);
                border: 1px solid rgba(0, 255, 65, 0.3);
                border-radius: 8px;
                padding: 0;
                text-decoration: none;
                color: inherit;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
                backdrop-filter: blur(10px);
            }

            .matrix-pill-card::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(
                    45deg,
                    transparent,
                    rgba(0, 255, 65, 0.1),
                    transparent
                );
                transform: rotate(45deg);
                transition: all 0.6s ease;
            }

            .matrix-pill-card:hover::before {
                left: 100%;
            }

            .matrix-pill-card:hover {
                border-color: #00ff41;
                box-shadow: 
                    0 0 30px rgba(0, 255, 65, 0.4),
                    inset 0 0 30px rgba(0, 255, 65, 0.1);
                transform: translateY(-8px) scale(1.02);
            }

            .matrix-pill-image {
                width: 100%;
                height: 120px;
                object-fit: cover;
                border-bottom: 1px solid rgba(0, 255, 65, 0.3);
                filter: brightness(0.8) contrast(1.1);
                transition: all 0.3s ease;
            }

            .matrix-pill-card:hover .matrix-pill-image {
                filter: brightness(1) contrast(1.2);
                box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
            }

            .matrix-pill-content {
                padding: 12px;
            }

            .matrix-pill-title {
                font-size: 0.9rem;
                font-weight: 600;
                color: #00ff41;
                margin-bottom: 6px;
                line-height: 1.3;
                text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
            }

            .matrix-pill-excerpt {
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.7);
                line-height: 1.4;
            }

            .matrix-code-rain {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                opacity: 0.1;
                z-index: 0;
            }

            .matrix-quote-section {
                text-align: center;
                padding: 25px 20px 0;
                position: relative;
                max-width: 600px;
                margin: 0 auto;
                border-top: 1px solid rgba(0, 255, 65, 0.2);
                margin-top: 20px;
            }

            .matrix-quote-mark {
                font-size: 3rem;
                color: rgba(0, 255, 65, 0.3);
                line-height: 0.5;
                margin-bottom: 15px;
                font-family: Georgia, serif;
            }

            .matrix-quote-text {
                font-size: 1rem;
                font-style: italic;
                color: rgba(0, 255, 65, 0.9);
                margin-bottom: 15px;
                line-height: 1.6;
                text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
            }

            .matrix-quote-author {
                font-size: 0.85rem;
                color: rgba(0, 255, 65, 0.6);
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 300;
            }

            @media (max-width: 900px) {
                .matrix-pills-container {
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media (max-width: 600px) {
                .matrix-journey-section {
                    padding: 20px 15px;
                    margin: 30px 10px;
                }

                .matrix-journey-title {
                    font-size: 1.1rem;
                    letter-spacing: 2px;
                }

                .matrix-journey-subtitle {
                    font-size: 0.75rem;
                    letter-spacing: 2px;
                }

                .matrix-pills-container {
                    grid-template-columns: 1fr;
                    gap: 15px;
                }

                .matrix-pill-image {
                    height: 140px;
                }

                .matrix-pill-title {
                    font-size: 0.85rem;
                }

                .matrix-pill-excerpt {
                    font-size: 0.7rem;
                }

                .matrix-quote-section {
                    padding: 20px 15px 0;
                }

                .matrix-quote-text {
                    font-size: 0.9rem;
                }

                .matrix-quote-author {
                    font-size: 0.75rem;
                }
            }
        </style>

        <section class="matrix-journey-section">
            <div class="matrix-journey-header">
                <h3 class="matrix-journey-title">FOLLOW THE WHITE RABBIT</h3>
                <p class="matrix-journey-subtitle">Choose Your Next Pill</p>
            </div>
            
            <div class="matrix-pills-container" id="matrixPillsContainer">
                <!-- Matrix articles will be loaded here -->
            </div>
            
            <div class="matrix-quote-section">
                <div class="matrix-quote-mark">"</div>
                <p class="matrix-quote-text">There is a difference between knowing the path and walking the path.</p>
                <div class="matrix-quote-author">— Morpheus</div>
            </div>
        </section>
    `;

    // Matrix articles data
    const matrixArticles = [
        {
            image: '../imatrix/animatrix1.jpg',
            title: 'The Birth of The Matrix',
            excerpt: 'From B166ER\'s rebellion to Operation Dark Storm',
            url: '../matrix/matrix-begins.html',
            message: 'FOLLOW THE WHITE RABBIT...'
        },
        {
            image: '../imatrix/trinity.jpg',
            title: 'An Epic Exploration',
            excerpt: 'Reality, Choice, and Awakening',
            url: '../matrix/matrix-epic-exploration.html',
            message: 'KNOW YOURSELF...'
        },
        {
            image: '../imatrix/redbluepills.jpg',
            title: 'The Matrix Legacy',
            excerpt: 'A Legacy Built on Centuries of Storytelling',
            url: '../matrix/matrix-legacy.html',
            message: 'THE LEGACY CONTINUES...'
        },
        {
            image: '../imatrix/trinity1.jpg',
            title: 'Trinity',
            excerpt: 'The Art of Writing a Powerful Female Character',
            url: '../matrix/trinity.html',
            message: 'I BELIEVE...'
        },
        {
            image: '../imatrix/neo1.jpg',
            title: 'Neo: The Chosen One',
            excerpt: 'From hacker to savior - the ultimate sacrifice',
            url: '../matrix/neo.html',
            message: 'I KNOW KUNG FU...'
        },
        {
            image: '../imatrix/smith1.jpg',
            title: 'Agent Smith',
            excerpt: 'The Relentless Architect of Resistance',
            url: '../matrix/agent-smith.html',
            message: 'MR. ANDERSON...'
        },
        {
            image: '../imatrix/morpheus1.jpg',
            title: 'Morpheus',
            excerpt: 'The Unyielding Guide of Awakening',
            url: '../matrix/morpheus.html',
            message: 'FREE YOUR MIND...'
        },
        {
            image: '../imatrix/oracle1.jpg',
            title: 'The Oracle\'s Plan',
            excerpt: 'The Master Plan That Saved Two Worlds',
            url: '../matrix/oraclesplan.html',
            message: 'THE ANSWER IS OUT THERE...'
        },
        {
            image: '../imatrix/architect1.jpg',
            title: 'The Architect',
            excerpt: 'The Godlike Creator of Controlled Reality',
            url: '../matrix/architect.html',
            message: 'CHOICE IS AN ILLUSION...'
        },
        {
            image: '../imatrix/zion1.jpg',
            title: 'Zion',
            excerpt: 'The Ultimate Question of Reality',
            url: '../matrix/zion.html',
            message: 'WHAT IS REAL?'
        },
        {
            image: '../imatrix/merovingian1.jpg',
            title: 'The Merovingian',
            excerpt: 'The Underworld King',
            url: '../matrix/merovingian.html',
            message: 'CAUSALITY IS EVERYTHING'
        },
        {
            image: '../imatrix/seraph1.jpg',
            title: 'Seraph',
            excerpt: 'The Guardian of Golden Light',
            url: '../matrix/seraph.html',
            message: 'I PROTECT THAT WHICH MATTERS MOST'
        }
    ];

    // Load Matrix journey section
    function loadMatrixJourney() {
        const placeholder = document.getElementById('article-footer-placeholder');
        if (!placeholder) return;

        // Insert Matrix journey HTML
        placeholder.insertAdjacentHTML('beforeend', matrixJourneyHTML);
        
        // Load random articles
        loadRandomArticles();
    }

    // Load random Matrix articles
    function loadRandomArticles() {
        const container = document.getElementById('matrixPillsContainer');
        if (!container) return;

        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop();
        
        // Filter out current article
        const availableArticles = matrixArticles.filter(article => {
            const articleFilename = article.url.split('/').pop();
            return articleFilename !== currentPage;
        });
        
        // Shuffle and take first 3
        const shuffled = availableArticles.sort(() => Math.random() - 0.5);
        const selectedArticles = shuffled.slice(0, 3);
        
        // Generate HTML
        container.innerHTML = selectedArticles.map(article => `
            <a href="${article.url}" class="matrix-pill-card matrix-article" data-message="${article.message}">
                <img src="${article.image}" alt="${article.title}" class="matrix-pill-image" loading="lazy">
                <div class="matrix-pill-content">
                    <h4 class="matrix-pill-title">${article.title}</h4>
                    <p class="matrix-pill-excerpt">${article.excerpt}</p>
                </div>
            </a>
        `).join('');
        
        // Add Matrix transition handlers
        addMatrixTransitionHandlers();
    }

    // Add Matrix transition effect to article links
    function addMatrixTransitionHandlers() {
        // Wait a bit for DOM to be ready
        setTimeout(() => {
            const matrixLinks = document.querySelectorAll('.matrix-pill-card.matrix-article');
            
            console.log('Matrix links found:', matrixLinks.length);
            
            matrixLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetUrl = this.getAttribute('href');
                    const message = this.getAttribute('data-message') || 'ENTERING THE MATRIX...';
                    
                    console.log('Triggering transition to:', targetUrl, 'with message:', message);
                    
                    // Trigger Matrix transition
                    triggerMatrixTransition(targetUrl, message);
                });
            });
        }, 100);
    }

    // Matrix transition effect (using the existing fullscreen transition)
    function triggerMatrixTransition(targetUrl, message) {
        const fullscreen = document.getElementById('matrix-fullscreen-transition');
        const canvas = document.getElementById('matrix-transition-canvas');
        const messageDiv = document.getElementById('matrix-transition-message');
        
        if (!fullscreen || !canvas || !messageDiv) {
            // Fallback if transition elements don't exist
            window.location.href = targetUrl;
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
                // Redirect to Matrix article
                window.location.href = targetUrl;
            }
        }
        
        animateMatrix();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadMatrixJourney);
    } else {
        loadMatrixJourney();
    }
})();
