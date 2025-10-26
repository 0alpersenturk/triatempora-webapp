/**
 * Çapraz Bağlantı Sistemi - Cross-Linking System
 * Makaleler arası otomatik bağlantılar ve ilgili içerik önerileri
 */

const crossLinks = {
    // Her makale için anahtar kelimeler ve ilgili makaleler
    articles: {
        // Ancient Wisdom
        'pyramid': {
            title: 'The Great Pyramid\'s Hidden Chambers',
            category: 'ancient',
            keywords: ['pyramid', 'giza', 'khufu', 'egypt', 'pharaoh', 'ancient egypt', 'cosmic rays', 'muon'],
            relatedArticles: ['sphinx', 'gobekli-tepe', 'sumerian-tablets'],
            description: 'Hidden chambers discovered through cosmic ray technology'
        },
        'sphinx': {
            title: 'The Sphinx: Guardian of Forgotten Knowledge',
            category: 'ancient',
            keywords: ['sphinx', 'egypt', 'giza', 'ancient egypt', 'erosion', 'water damage', 'khafre'],
            relatedArticles: ['pyramid', 'ancient-wisdom-atlantis', 'gobekli-tepe'],
            description: 'Ancient guardian hiding secrets of a lost civilization'
        },
        'ancient-wisdom-atlantis': {
            title: 'Atlantis: The Lost Civilization',
            category: 'ancient',
            keywords: ['atlantis', 'plato', 'lost civilization', 'advanced technology', 'cataclysm'],
            relatedArticles: ['sphinx', 'emerald', 'parallel-universes'],
            description: 'The legendary advanced civilization lost to time'
        },
        'gobekli-tepe': {
            title: 'Göbekli Tepe: The World\'s First Temple',
            category: 'ancient',
            keywords: ['gobekli tepe', 'turkey', 'temple', 'neolithic', 'hunter-gatherers', 'stone circles'],
            relatedArticles: ['pyramid', 'sphinx', 'sumerian-tablets'],
            description: '12,000-year-old temple that rewrites human history'
        },
        'sumerian-tablets': {
            title: 'Sumerian Tablets: Ancient Astronaut Theory',
            category: 'ancient',
            keywords: ['sumerian', 'anunnaki', 'cuneiform', 'mesopotamia', 'ancient astronauts', 'nibiru'],
            relatedArticles: ['gobekli-tepe', 'pyramid', 'roswell'],
            description: 'Ancient texts describing visitors from the stars'
        },
        'emerald': {
            title: 'The Emerald Tablets of Thoth',
            category: 'ancient',
            keywords: ['emerald tablets', 'thoth', 'hermes', 'alchemy', 'hermetic', 'atlantis'],
            relatedArticles: ['ancient-wisdom-atlantis', 'fulcanelli', 'akashic'],
            description: 'Ancient alchemical wisdom from Atlantean priest-king'
        },
        'fulcanelli': {
            title: 'Fulcanelli: The Alchemist Who Vanished',
            category: 'ancient',
            keywords: ['fulcanelli', 'alchemy', 'philosopher stone', 'transmutation', 'gothic cathedrals'],
            relatedArticles: ['emerald', 'seven', 'philadelphia-experiment'],
            description: 'Mysterious alchemist who may have achieved immortality'
        },
        'seven': {
            title: 'The Seven Hermetic Principles',
            category: 'ancient',
            keywords: ['hermetic', 'kybalion', 'hermes', 'mentalism', 'correspondence', 'vibration'],
            relatedArticles: ['emerald', 'akashic', 'simulation'],
            description: 'Universal laws governing reality and consciousness'
        },
        'enoch': {
            title: 'The Book of Enoch: Fallen Angels',
            category: 'ancient',
            keywords: ['enoch', 'watchers', 'nephilim', 'fallen angels', 'giants', 'apocrypha'],
            relatedArticles: ['sumerian-tablets', 'ancient-wisdom-atlantis', 'roswell'],
            description: 'Ancient text describing angels who taught forbidden knowledge'
        },
        'padang': {
            title: 'Gunung Padang: Indonesia\'s Ancient Pyramid',
            category: 'ancient',
            keywords: ['gunung padang', 'indonesia', 'megalith', 'pyramid', 'ice age', 'carbon dating'],
            relatedArticles: ['pyramid', 'gobekli-tepe', 'ancient-wisdom-atlantis'],
            description: 'Potentially the world\'s oldest pyramid structure'
        },
        'rama-setu': {
            title: 'Rama Setu: The Bridge to Lanka',
            category: 'ancient',
            keywords: ['rama setu', 'adams bridge', 'ramayana', 'india', 'sri lanka', 'hanuman'],
            relatedArticles: ['ancient-wisdom-atlantis', 'gobekli-tepe', 'sumerian-tablets'],
            description: 'Ancient bridge mentioned in Hindu epics'
        },

        // Consciousness
        'astral': {
            title: 'Astral Projection: Journey Beyond the Body',
            category: 'consciousness',
            keywords: ['astral projection', 'out of body', 'obe', 'astral plane', 'consciousness', 'lucid dream'],
            relatedArticles: ['nde', 'pineal', 'tibetan-death'],
            description: 'Techniques and experiences of consciousness leaving the body'
        },
        'nde': {
            title: 'Near-Death Experiences: Glimpses of the Afterlife',
            category: 'consciousness',
            keywords: ['near death', 'nde', 'afterlife', 'tunnel of light', 'life review', 'consciousness'],
            relatedArticles: ['astral', 'reincarnation', 'tibetan-death'],
            description: 'Scientific studies of consciousness beyond clinical death'
        },
        'pineal': {
            title: 'The Pineal Gland: Third Eye Activation',
            category: 'consciousness',
            keywords: ['pineal gland', 'third eye', 'dmt', 'melatonin', 'calcification', 'consciousness'],
            relatedArticles: ['astral', 'akashic', 'mkultra'],
            description: 'The mysterious gland linking consciousness and spirit'
        },
        'akashic': {
            title: 'Akashic Records: The Universal Library',
            category: 'consciousness',
            keywords: ['akashic records', 'universal consciousness', 'cosmic memory', 'edgar cayce', 'collective unconscious'],
            relatedArticles: ['reincarnation', 'emerald', 'simulation'],
            description: 'The ethereal library containing all knowledge and experiences'
        },
        'reincarnation': {
            title: 'Reincarnation: Evidence of Past Lives',
            category: 'consciousness',
            keywords: ['reincarnation', 'past lives', 'karma', 'rebirth', 'soul', 'ian stevenson'],
            relatedArticles: ['nde', 'akashic', 'tibetan-death'],
            description: 'Scientific research into memories of previous lifetimes'
        },
        'simulation': {
            title: 'Simulation Theory: Are We Living in a Matrix?',
            category: 'consciousness',
            keywords: ['simulation', 'matrix', 'virtual reality', 'consciousness', 'nick bostrom', 'hologram'],
            relatedArticles: ['doubleslit', 'parallel-universes', 'seven'],
            description: 'Evidence that reality might be a computer simulation'
        },
        'doubleslit': {
            title: 'The Double-Slit Experiment: Observer Effect',
            category: 'consciousness',
            keywords: ['double slit', 'quantum', 'observer effect', 'consciousness', 'wave particle', 'measurement'],
            relatedArticles: ['simulation', 'parallel-universes', 'philadelphia-experiment'],
            description: 'How consciousness affects physical reality at quantum level'
        },
        'parallel-universes': {
            title: 'Parallel Universes: The Multiverse Theory',
            category: 'consciousness',
            keywords: ['parallel universes', 'multiverse', 'quantum', 'alternate reality', 'many worlds', 'mandela effect'],
            relatedArticles: ['simulation', 'doubleslit', 'philadelphia-experiment'],
            description: 'Evidence for infinite parallel realities'
        },
        'tibetan-death': {
            title: 'The Tibetan Book of the Dead: Death as Transition',
            category: 'consciousness',
            keywords: ['tibetan book of dead', 'bardo', 'reincarnation', 'buddhism', 'consciousness', 'death'],
            relatedArticles: ['nde', 'reincarnation', 'astral'],
            description: 'Ancient guide to navigating consciousness after death'
        },

        // UFO Files
        'roswell': {
            title: 'The Roswell Incident: UFO Crash Cover-Up',
            category: 'ufo',
            keywords: ['roswell', 'ufo crash', 'aliens', 'area 51', 'cover-up', 'extraterrestrial'],
            relatedArticles: ['area51', 'majestic12', 'sumerian-tablets'],
            description: '1947 crash that changed UFO history forever'
        },
        'area51': {
            title: 'Area 51: America\'s Secret Base',
            category: 'ufo',
            keywords: ['area 51', 'groom lake', 'secret base', 'reverse engineering', 'bob lazar', 'ufo'],
            relatedArticles: ['roswell', 'majestic12', 'philadelphia-experiment'],
            description: 'The most secretive military installation on Earth'
        },
        'majestic12': {
            title: 'Majestic 12: The UFO Shadow Government',
            category: 'ufo',
            keywords: ['majestic 12', 'mj-12', 'secret government', 'ufo', 'cover-up', 'eisenhower'],
            relatedArticles: ['roswell', 'area51', 'illuminati'],
            description: 'Secret committee controlling UFO information'
        },

        // Conspiracy Theories
        'illuminati': {
            title: 'The Illuminati: Secret Society Control',
            category: 'conspiracy',
            keywords: ['illuminati', 'secret society', 'new world order', 'bavarian illuminati', 'conspiracy'],
            relatedArticles: ['nwo', 'bohemian-grove', 'majestic12'],
            description: 'Ancient secret society allegedly controlling world events'
        },
        'nwo': {
            title: 'New World Order: Global Government Agenda',
            category: 'conspiracy',
            keywords: ['new world order', 'nwo', 'global government', 'one world', 'conspiracy', 'elite'],
            relatedArticles: ['illuminati', 'bohemian-grove', 'bilderberg'],
            description: 'Plans for a single world government'
        },
        'bohemian-grove': {
            title: 'Bohemian Grove: Elite Secret Rituals',
            category: 'conspiracy',
            keywords: ['bohemian grove', 'cremation of care', 'elite', 'ritual', 'secret meeting', 'owl'],
            relatedArticles: ['illuminati', 'nwo', 'bilderberg'],
            description: 'Where world leaders perform mysterious rituals'
        },

        // Secret Projects
        'mkultra': {
            title: 'MKUltra: CIA Mind Control Program',
            category: 'secret',
            keywords: ['mkultra', 'mind control', 'cia', 'lsd', 'brainwashing', 'mk ultra'],
            relatedArticles: ['montauk', 'philadelphia-experiment', 'pineal'],
            description: 'CIA\'s illegal mind control experiments'
        },
        'philadelphia-experiment': {
            title: 'The Philadelphia Experiment: Teleportation Test',
            category: 'secret',
            keywords: ['philadelphia experiment', 'teleportation', 'invisibility', 'navy', 'uss eldridge', 'time travel'],
            relatedArticles: ['montauk', 'mkultra', 'parallel-universes'],
            description: 'Navy ship allegedly teleported and time traveled'
        },
        'montauk': {
            title: 'The Montauk Project: Time Travel Experiments',
            category: 'secret',
            keywords: ['montauk', 'time travel', 'mind control', 'camp hero', 'philadelphia experiment'],
            relatedArticles: ['philadelphia-experiment', 'mkultra', 'parallel-universes'],
            description: 'Secret time travel and mind control facility'
        },
        'vimana': {
            title: 'Vimanas: Ancient Flying Machines and Nazi Quest',
            category: 'secret',
            keywords: ['vimanas', 'ancient flying machines', 'nazi', 'ahnenerbe', 'himmler', 'sanskrit', 'ramayana', 'mahabharata', 'die glocke', 'mercury vortex'],
            relatedArticles: ['paperclip', 'area51', 'anunnaki'],
            description: 'Nazi search for ancient Vimana technology'
        },

        // Forbidden Science
        'tesla': {
            title: 'Nikola Tesla: Suppressed Free Energy',
            category: 'forbidden',
            keywords: ['tesla', 'free energy', 'wireless power', 'wardenclyffe', 'death ray', 'inventor'],
            relatedArticles: ['philadelphia-experiment', 'fulcanelli', 'hutchison'],
            description: 'Genius inventor whose discoveries were suppressed'
        },
        'hutchison': {
            title: 'The Hutchison Effect: Anti-Gravity Discovery',
            category: 'forbidden',
            keywords: ['hutchison effect', 'anti-gravity', 'levitation', 'john hutchison', 'free energy'],
            relatedArticles: ['tesla', 'philadelphia-experiment', 'area51'],
            description: 'Accidental discovery of gravity manipulation'
        },

        // Mystical Geography
        'bermuda': {
            title: 'The Bermuda Triangle: Portal to Another Dimension',
            category: 'mystical',
            keywords: ['bermuda triangle', 'disappearances', 'portal', 'vortex', 'mystery', 'ships', 'planes'],
            relatedArticles: ['ley-lines', 'ancient-wisdom-atlantis', 'parallel-universes'],
            description: 'Mysterious region where ships and planes vanish'
        },
        'ley-lines': {
            title: 'Ley Lines: Earth\'s Energy Grid',
            category: 'mystical',
            keywords: ['ley lines', 'earth energy', 'grid', 'sacred sites', 'vortex', 'megalith'],
            relatedArticles: ['bermuda', 'gobekli-tepe', 'pyramid'],
            description: 'Invisible energy lines connecting sacred sites'
        },

        // Conspiracy - Papacy
        'papacy': {
            title: 'The Dark History of the Papacy',
            category: 'conspiracy',
            keywords: ['papacy', 'vatican', 'catholic church', 'pope', 'inquisition', 'crusades', 'witch hunts', 'council of nicaea', 'constantine', 'galileo', 'giordano bruno', 'black death', 'indulgences', 'child abuse'],
            relatedArticles: ['illuminati', 'worldorder', 'mkultra'],
            description: 'Dark history of Vatican power and persecution'
        },

        // Tüm diğer makaleler için basit tanımlar (otomatik çalışacak)
        // Sistem, dosya adını kullanarak otomatik link oluşturacak
    },

    /**
     * Bir makaledeki anahtar kelimeleri bulur ve linkler (maksimum 2-3 link)
     */
    linkKeywords: function(articlePath) {
        const currentArticle = articlePath.split('/').pop();
        const articleContent = document.querySelector('.article-content');
        
        if (!articleContent) return;

        let linksAdded = 0;
        const maxLinks = 3; // Maksimum link sayısı

        // Tüm makaleleri tara (mevcut makale hariç)
        for (const [path, data] of Object.entries(this.articles)) {
            if (path === currentArticle) continue;
            if (linksAdded >= maxLinks) break;

            // Her anahtar kelime için
            for (const keyword of data.keywords) {
                if (linksAdded >= maxLinks) break;

                const regex = new RegExp(`\\b(${keyword})\\b`, 'i'); // Sadece ilk eşleşme, case insensitive
                const paragraphs = articleContent.querySelectorAll('p');

                for (const element of paragraphs) {
                    if (linksAdded >= maxLinks) break;
                    
                    // Bu paragrafta zaten link var mı?
                    if (element.querySelector('a')) continue;
                    
                    const text = element.textContent;
                    const match = text.match(regex);
                    
                    if (match) {
                        const linkPath = `../${data.category}/${path}`;
                        const html = element.innerHTML;
                        
                        // Sadece ilk eşleşmeyi değiştir
                        element.innerHTML = html.replace(regex, `<a href="${linkPath}" class="inline-link" title="${data.title}">${match[0]}</a>`);
                        
                        linksAdded++;
                        break; // Bu makale için link eklendi, diğer kelimeye geç
                    }
                }
                
                if (linksAdded >= maxLinks) break;
            }
        }
    },

    /**
     * İlgili makaleler bölümü - devre dışı
     */
    createRelatedArticles: function(articlePath) {
        // İlgili makaleler bölümü istenmiyor
        return;
    },

    /**
     * Kategori adını döndürür
     */
    getCategoryName: function(category) {
        const names = {
            'ancient': 'Ancient Wisdom',
            'consciousness': 'Consciousness',
            'ufo': 'UFO Files',
            'conspiracy': 'Conspiracy',
            'secret': 'Secret Projects',
            'forbidden': 'Forbidden Science',
            'mystical': 'Mystical Geography'
        };
        return names[category] || category;
    },

    /**
     * Minimal link stilleri ekler
     */
    initTooltips: function() {
        const style = document.createElement('style');
        style.textContent = `
            .inline-link {
                color: var(--accent-color);
                text-decoration: none;
                border-bottom: 1px solid var(--accent-color);
                transition: all 0.2s ease;
                font-weight: 500;
            }

            .inline-link:hover {
                opacity: 0.7;
                border-bottom-width: 2px;
            }
        `;
        document.head.appendChild(style);
    },

    /**
     * Sistemi başlat
     */
    init: function() {
        // Sayfa yüklendiğinde çalıştır
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initTooltips();
                const currentPath = window.location.pathname;
                this.linkKeywords(currentPath);
                this.createRelatedArticles(currentPath);
            });
        } else {
            this.initTooltips();
            const currentPath = window.location.pathname;
            this.linkKeywords(currentPath);
            this.createRelatedArticles(currentPath);
        }
    }
};

// Otomatik başlat
crossLinks.init();
