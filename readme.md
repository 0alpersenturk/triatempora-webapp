# 🌟 Triatempora

> *"Time is not a straight line"*

Triatempora is a comprehensive website exploring ancient wisdom, consciousness mysteries, UFO files, conspiracy theories, forbidden science, mystical geography, and secret projects.

---

## 📁 Project Structure

```
triatempora/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of use
├── 404.html                # Custom 404 page
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
│
├── ancient/                # Ancient Wisdom articles (7)
├── consciousness/          # Consciousness articles (7)
├── conspiracy/             # Conspiracy Theories articles (7)
├── forbidden/              # Forbidden Science articles (7)
├── mystical/               # Mystical Geography articles (7)
├── secret/                 # Secret Projects articles (7)
├── ufo/                    # UFO Files articles (7)
│
├── images/                 # Article images
├── fonts/                  # Custom fonts
│
├── common.js               # Common JavaScript functions
├── article-footer.js       # Article footer functionality
└── search-data.js          # Search data
```

---

## ✨ Features

### 🎨 Design
- ✅ Modern, clean design
- ✅ Dark/Light mode with smooth transitions
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Category-based color coding

### 🚀 User Experience
- ✅ **Breadcrumb Navigation** - Easy site navigation
- ✅ **Reading Progress Bar** - Track article reading progress
- ✅ **Back to Top Button** - Quick navigation
- ✅ **Search Functionality** - Find articles easily
- ✅ **Exit Intent Popup** - Newsletter subscription
- ✅ **Cookie Consent Banner** - GDPR compliant

### 📱 SEO & Social
- ✅ **Open Graph Tags** - Optimized for Facebook sharing
- ✅ **Twitter Card Tags** - Optimized for Twitter sharing
- ✅ **Canonical URLs** - Prevent duplicate content
- ✅ **Schema.org Markup** - Rich snippets
- ✅ **Sitemap.xml** - Search engine indexing
- ✅ **Robots.txt** - Crawler instructions

### 🎯 Content
- **49 Articles** across 7 categories
- **7 Articles per category**
- High-quality, engaging content
- Related articles suggestions

---

## 🏗️ Categories

| Icon | Category | Articles | Color |
|------|----------|----------|-------|
| 🏺 | Ancient Wisdom | 7 | Red (#ff0000) |
| 👁 | Consciousness | 7 | Orange (#ff8000) |
| 🔺 | Conspiracy Theories | 7 | Yellow (#ffff00) |
| ⚛️ | Forbidden Science | 7 | Green (#00ff00) |
| 🗿 | Mystical Geography | 7 | Blue (#0080ff) |
| 🔐 | Secret Projects | 7 | Purple (#4000ff) |
| 🛸 | UFO Files | 7 | Violet (#8000ff) |

---

## 🛠️ Technologies

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript** - Vanilla JS for client-side interactions
- **EJS** - Template engine for server-side rendering
- **Google Fonts** - Varela Round

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Helmet** - Security middleware with CSP
- **Compression** - Gzip compression
- **Morgan** - HTTP request logger
- **Express Rate Limit** - DDoS protection
- **Express Validator** - Input validation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables management

---

## 📊 Statistics

- **Total Pages:** 62 HTML files
- **Total Articles:** 49
- **Categories:** 7
- **Code Lines:** ~90,000+
- **Images:** Custom illustrations
- **Performance:** Optimized for speed

---

## 🚀 Deployment

### Prerequisites
- **Node.js** >= 14.0.0
- **npm** or **yarn**
- Modern web browser support

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd triatempora-webapp
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
# Copy example environment file
cp .env.example .env

# Edit .env file with your settings
nano .env
```

4. **Environment Variables**
Create a `.env` file with the following:
```env
NODE_ENV=production
PORT=3000
TRUST_PROXY=true
SESSION_SECRET=your-secure-random-string
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
NEWSLETTER_RATE_LIMIT_WINDOW_MS=3600000
NEWSLETTER_RATE_LIMIT_MAX_REQUESTS=3
ALLOWED_ORIGINS=https://yourdomain.com
LOG_LEVEL=info
```

5. **Run the application**

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm run prod
# or
npm start
```

### Recommended Hosting
- ✅ **Heroku** - Easy Node.js deployment
- ✅ **Railway** - Modern platform
- ✅ **Render** - Free tier available
- ✅ **DigitalOcean App Platform** - Scalable
- ✅ **AWS Elastic Beanstalk** - Enterprise
- ✅ **Netlify** - With serverless functions
- ✅ **Vercel** - Optimized for Node.js

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Configure strong `SESSION_SECRET`
- [ ] Set appropriate `ALLOWED_ORIGINS`
- [ ] Enable `TRUST_PROXY` if behind reverse proxy
- [ ] Configure rate limiting values
- [ ] Set up monitoring (logs directory)
- [ ] Configure SSL/TLS certificate
- [ ] Set up backup strategy

---

## 📝 Documentation

- **readme.md** - This file (project overview)
- **quick_reference.md** - Quick reference guide
- **rss_guide.md** - RSS feed documentation
- **HEADER_FOOTER_README.md** - Header/Footer management guide
- **ARTICLE_FOOTER_README.md** - Article footer system guide

---

## 🔧 JavaScript Files

- `common.js` - Header/footer loading and common functions
- `article-footer.js` - Share buttons and related articles
- `search-data.js` - Search functionality data

---

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 📱 Mobile Responsive

All pages are fully responsive with breakpoints:
- 📱 Mobile: < 768px
- 💻 Desktop: ≥ 768px

---

## 🔒 Security Features

- ✅ **Helmet.js** - Security headers
- ✅ **Content Security Policy (CSP)** - XSS protection
- ✅ **Rate Limiting** - DDoS protection
- ✅ **Input Validation** - SQL injection & XSS prevention
- ✅ **CORS** - Cross-origin protection
- ✅ **Environment Variables** - Sensitive data protection
- ✅ **Graceful Shutdown** - Safe server termination
- ✅ **Error Logging** - Production error tracking
- ✅ **Health Checks** - Monitoring endpoints

## 🔒 Privacy & Legal

- ✅ GDPR compliant cookie consent
- ✅ Privacy policy page
- ✅ Terms of use page
- ✅ Transparent data handling

---

## 🌐 Social Media

- **Twitter/X:** [@triatempora](https://x.com/triatempora)
- **Website:** triatempora.com

---

## 📄 License

All content is for entertainment purposes. Contains theories and speculations.

© 2025 Triatempora - All rights reserved

---

## 🙏 Credits

- **Design & Development:** Cascade AI
- **Content:** Original research and compilation
- **Images:** Custom illustrations
- **Fonts:** Google Fonts (Varela Round)

---

## 📞 Support

For issues or questions:
1. Check documentation in `_docs/`
2. Review scripts in `_scripts/`
3. Contact via contact page

---

## 🎉 Status

**🟢 PRODUCTION READY**

- ✅ All features implemented
- ✅ All bugs fixed
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ GDPR compliant
- ✅ Performance optimized

---

**Made with ❤️ for truth seekers and mystery explorers**

*Time is not a straight line...*
