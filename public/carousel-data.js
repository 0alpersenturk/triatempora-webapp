// Carousel article data - ONLY EXISTING ARTICLES WITH EXACT TITLES
const carouselArticles = [
    // Ancient Wisdom
    { title: 'The Origins of Halloween: A Look at Old Traditions and New Ways to Celebrate', excerpt: 'From ancient Celtic Samhain festival to modern trick-or-treating traditions.', url: 'ancient/halloween', image: '/images/hallo2.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'Sphinx Secrets: What\'s Underneath', excerpt: 'Evidence of hidden passages beneath the Great Sphinx of Giza.', url: 'ancient/sphinx', image: '/images/sphinx3.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'Atlantis: Lost Civilization or Ancient Memory?', excerpt: 'Dive deep into Plato\'s account and modern theories about this legendary civilization.', url: 'ancient/ancient-wisdom-atlantis', image: '/images/atlantis1.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'Göbekli Tepe: The First Temple in the World', excerpt: 'This 12,000-year-old site predates Stonehenge and challenges everything we know.', url: 'ancient/gobekli-tepe', image: '/images/gobekli1.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'The Eternal Alchemist: Fulcanelli and Ancient Secrets', excerpt: 'The mysterious French alchemist who vanished after claiming immortality.', url: 'ancient/fulcanelli', image: '/images/fulcanelli1.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'The Emerald Tablet: Hermetic Wisdom', excerpt: 'Ancient wisdom texts revealing secrets of alchemy and immortality.', url: 'ancient/emerald', image: '/images/emerald1.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'Sumerian Tablets: Messages from the Gods', excerpt: 'Ancient cuneiform texts revealing advanced knowledge.', url: 'ancient/sumerian-tablets', image: '/images/sumer1.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'The Great Pyramid\'s Hidden Chambers: Unraveling Ancient Mysteries Through Modern Science', excerpt: 'Advanced engineering that defies conventional history.', url: 'ancient/pyramid', image: '/images/pyramid1.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'The Book of Enoch: Fallen Angels and the Forbidden Knowledge That Changed History', excerpt: 'Forbidden biblical text revealing angel mysteries.', url: 'ancient/enoch', image: '/images/enoch1.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'Gunung Padang: Indonesia\'s Controversial Ancient Pyramid', excerpt: 'Indonesia\'s mysterious ancient structures.', url: 'ancient/padang', image: '/images/padang1.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'The Mysterious Rama Setu: Where Ancient Engineering Meets Modern Mystery', excerpt: 'Ancient land bridge between India and Sri Lanka.', url: 'ancient/rama-setu', image: '/images/ramasetu1.jpg', category: '🏺 Ancient Wisdom' },
    { title: 'The Sacred Mystery of Seven: From Old Civilizations to New Science', excerpt: 'Ancient laws governing reality and consciousness.', url: 'ancient/seven', image: '/images/71.jpg', category: '🏺 Ancient Wisdom' },
    
    // UFO Files
    { title: 'The Tic Tac UFO: The Military Event That Changed Everything', excerpt: 'Navy pilots encounter objects defying physics in credible UFO evidence.', url: 'ufo/tic-tac', image: '/images/tictac1.jpg', category: '🛸 UFO Files' },
    { title: 'The UFO Disclosure Movement: From Government Secrecy to Open Congress', excerpt: 'Pentagon releases classified files about extraterrestrial encounters.', url: 'ufo/disclosure', image: '/images/disclosure1.jpg', category: '🛸 UFO Files' },
    { title: 'The Roswell Incident: Looking into the most famous UFO mystery in the US', excerpt: 'The 1947 crash that started it all - new evidence emerges.', url: 'ufo/roswell', image: '/images/roswell1.jpg', category: '🛸 UFO Files' },
    { title: 'Area 51: The most secret military base in the United States', excerpt: 'What really happens at America\'s most classified military installation?', url: 'ufo/area51', image: '/images/area511.jpg', category: '🛸 UFO Files' },
    { title: 'The Phoenix Lights: The most famous UFO sighting in the US', excerpt: 'Thousands witness massive craft over Arizona in 1997.', url: 'ufo/phoenix-lights', image: '/images/phoenix1.jpg', category: '🛸 UFO Files' },
    { title: 'Alien Abduction: Somewhere Between Reality and the Mind', excerpt: 'The most credible alien abduction testimonies.', url: 'ufo/abduction', image: '/images/abduction1.jpg', category: '🛸 UFO Files' },
    { title: 'Men in Black: The Shadow Figures That Keep UFO Witnesses Quiet', excerpt: 'Mysterious agents silencing UFO witnesses.', url: 'ufo/mib', image: '/images/mib1.jpg', category: '🛸 UFO Files' },
    { title: 'The Anunnaki: Ancient Gods or Alien Visitors?', excerpt: 'Ancient Sumerian gods or extraterrestrial visitors?', url: 'ufo/anunnaki', image: '/images/anunnaki1.jpg', category: '🛸 UFO Files' },
    { title: 'The Gary McKinnon Case: Finding Claims of UFO Evidence and Secret Space Programs', excerpt: 'What he found about UFOs and off-world officers.', url: 'ufo/mckinnon', image: '/images/mckinnon1.jpg', category: '🛸 UFO Files' },
    
    // Consciousness
    { title: 'Parallel Universes: The Multiverse Theory and Our Place in It', excerpt: 'Multiple realities existing simultaneously.', url: 'consciousness/parallel-universes', image: '/images/multiuni1.jpg', category: '👁 Consciousness' },
    { title: 'The Tibetan Book of the Dead: Journey Through the Afterlife', excerpt: 'Ancient wisdom on consciousness after death.', url: 'consciousness/tibetan-death', image: '/images/tibetandeath1.jpg', category: '👁 Consciousness' },
    { title: 'Simulation Theory: Are We Living in a Matrix?', excerpt: 'Evidence we might be in a computer simulation.', url: 'consciousness/simulation', image: '/images/matrix1.jpg', category: '👁 Consciousness' },
    { title: 'Double Slit Experiment: Observer Effect', excerpt: 'Consciousness collapses quantum possibilities.', url: 'consciousness/doubleslit', image: '/images/slit1.jpg', category: '👁 Consciousness' },
    { title: 'Pineal Gland: The Third Eye Activation', excerpt: 'DMT production and spiritual awakening.', url: 'consciousness/pineal', image: '/images/third2.jpg', category: '👁 Consciousness' },
    { title: 'Astral Projection: Journey Beyond the Body', excerpt: 'Out-of-body experiences and consciousness travel.', url: 'consciousness/astral', image: '/images/astral1.jpg', category: '👁 Consciousness' },
    { title: 'Reincarnation: Evidence from Past Life Memories', excerpt: 'Scientific studies of children remembering past lives.', url: 'consciousness/reincarnation', image: '/images/reenk3.jpg', category: '👁 Consciousness' },
    { title: 'Akashic Records: Universal Memory Bank', excerpt: 'The mystical library of all human experience and knowledge.', url: 'consciousness/akashic', image: '/images/akashic1.jpg', category: '👁 Consciousness' },
    { title: 'Near-Death Experiences: Seeing the Afterlife', excerpt: 'Scientific studies of consciousness beyond death.', url: 'consciousness/nde', image: '/images/neardeath1.jpg', category: '👁 Consciousness' },
    { title: 'Becoming Slaves to Time: Ancient Wisdom & Quantum Reality', excerpt: 'From cyclical ancient wisdom to linear industrial slavery, and the quantum reality that challenges everything.', url: 'consciousness/time', image: '/images/time1.jpg', category: '👁 Consciousness' },
    
    // Secret Projects
    { title: 'Majestic 12: The Unseen Committee That Never Was', excerpt: 'Leaked documents reveal clandestine group managing alien contact.', url: 'secret/majestic12', image: '/images/majestic1.jpg', category: '🔐 Secret Projects' },
    { title: 'Project MKUltra: The CIA\'s Dark Quest for Mind Control', excerpt: 'CIA\'s illegal program testing mind control techniques on unwitting subjects.', url: 'secret/mkultra', image: '/images/mkultra1.jpg', category: '🔐 Secret Projects' },
    { title: 'Operation Paperclip: When America Recruited Nazi Scientists', excerpt: 'How the US secretly recruited Nazi scientists after World War II.', url: 'secret/paperclip', image: '/images/paperclip1.jpg', category: '🔐 Secret Projects' },
    { title: 'Project Stargate: The CIA\'s Secret Psychic Spy Program', excerpt: 'CIA\'s psychic spy program that defied conventional science.', url: 'secret/stargate', image: '/images/stargate1.jpg', category: '🔐 Secret Projects' },
    { title: 'Operation Northwoods: When the U.S. Military Planned to Attack Its Own People', excerpt: 'Declassified false flag operation plans.', url: 'secret/northwoods', image: '/images/northwoods1.jpg', category: '🔐 Secret Projects' },
    { title: 'Project Bluebird: The CIA\'s First Systematic Mind Control Program', excerpt: 'CIA mind control predecessor to MKULTRA.', url: 'secret/bluebird', image: '/images/bluebird1.jpg', category: '🔐 Secret Projects' },
    { title: 'Operation Mockingbird: The CIA\'s Control Over American Media', excerpt: 'CIA\'s covert program to manipulate news media.', url: 'secret/mockingbird', image: '/images/mockingbird1.jpg', category: '🔐 Secret Projects' },
    { title: 'Stuxnet: The Virus That Started World War III', excerpt: 'The first digital weapon that changed warfare.', url: 'secret/stuxnet', image: '/images/stuxnet1.jpg', category: '🔐 Secret Projects' },
    { title: 'Operation Highjump: The Most Mysterious Military Mission in Antarctica', excerpt: 'The 1946-1947 Antarctic expedition and conspiracy theories about Nazi bases and UFO encounters.', url: 'secret/highjump', image: '/images/highjump1.jpg', category: '🔐 Secret Projects' },
    { title: 'Vimanas: Ancient Flying Machines and the Nazi Quest for Lost Technology', excerpt: 'Sanskrit texts describe advanced flying machines.', url: 'secret/vimana', image: '/images/vimana1.jpg', category: '🔐 Secret Projects' },
    { title: 'Celestial Guardian Project: The US\'s Secret Space Fleet and Aliens', excerpt: 'Secret space defense program.', url: 'secret/celestial-guardian', image: '/images/celestial1.jpg', category: '🔐 Secret Projects' },
    
    // Conspiracy Theories
    { title: 'The Israeli-Palestinian Conflict: History, Geopolitics, and Future?', excerpt: 'A comprehensive historical analysis from ancient Canaan to modern geopolitics.', url: 'conspiracy/palestine', image: '/images/palestine1.jpg', category: '🔺 Conspiracy Theories' },
    { title: 'The Dark History of the Papacy: Power, Persecution & Vatican\'s Shadow', excerpt: 'The Vatican\'s secret archives contain forbidden knowledge spanning centuries.', url: 'conspiracy/papacy', image: '/images/papacy1.jpg', category: '🔺 Conspiracy Theories' },
    { title: 'Illuminati: Secret Society or Modern Myth?', excerpt: 'Secret society controlling world events or elaborate conspiracy theory?', url: 'conspiracy/illuminati', image: '/images/illu1.jpg', category: '🔺 Conspiracy Theories' },
    { title: 'New World Order: The Master Plan', excerpt: 'Is there a secret plan for one world government?', url: 'conspiracy/worldorder', image: '/images/worldorder1.jpg', category: '🔺 Conspiracy Theories' },
    { title: 'Georgia Guidestones: Blueprint for Humanity', excerpt: 'Mysterious monument with apocalyptic instructions.', url: 'conspiracy/georgia', image: '/images/georgia1.jpg', category: '🔺 Conspiracy Theories' },
    { title: 'Prison Planet Theory: Who Sent Us to This Planet?', excerpt: 'Is Earth a cosmic prison designed to trap immortal souls?', url: 'conspiracy/prison-planet', image: '/images/prisonplanet1.jpg', category: '🔺 Conspiracy Theories' },
    { title: 'Agenda 2030: The UN\'s Plan for the Future', excerpt: 'Global transformation plan or conspiracy?', url: 'conspiracy/2030', image: '/images/20301.jpg', category: '🔺 Conspiracy Theories' },
    { title: 'BlackRock & ALADDIN: The AI Controlling Global Finance', excerpt: 'The investment firm controlling the world.', url: 'conspiracy/blackrock', image: '/images/blackrock1.jpg', category: '🔺 Conspiracy Theories' },
    { title: 'The Sky Above: Breaking Down the Chemtrails Conspiracy Theory', excerpt: 'Are they spraying us from the sky?', url: 'conspiracy/chemtrails', image: '/images/chems1.jpg', category: '🔺 Conspiracy Theories' },
    { title: 'Denver Airport: Hidden Messages in Plain Sight', excerpt: 'Mysterious murals and underground facilities.', url: 'conspiracy/denver', image: '/images/denver1.jpg', category: '🔺 Conspiracy Theories' },
    { title: 'The Great Reset: Rebuilding the World Economy', excerpt: 'Global elite plan to reshape society.', url: 'conspiracy/reset', image: '/images/reset1.jpg', category: '🔺 Conspiracy Theories' },
    
    // Forbidden Science
    { title: 'Free Energy Machines and Their Inventors: Scientific Reality Behind Persistent Myths', excerpt: 'Technologies that could end energy crisis - why are they hidden?', url: 'forbidden/freeenergy', image: '/images/ppower1.jpg', category: '⚛️ Forbidden Science' },
    { title: 'The Hidden Memory of Water: The Banned Science', excerpt: 'Suppressed technology that could revolutionize energy.', url: 'forbidden/water', image: '/images/water1.jpg', category: '⚛️ Forbidden Science' },
    { title: '5 Revolutionary Inventions Hidden from Humanity and Destroyed by Mysterious Forces', excerpt: 'Revolutionary technologies hidden from the public.', url: 'forbidden/hiddeninventions', image: '/images/5invention1.jpg', category: '⚛️ Forbidden Science' },
    { title: 'Nikola Tesla\'s 3-6-9 Secret: The Key to the Universe', excerpt: 'The mathematical key to the universe.', url: 'forbidden/369', image: '/images/3691.jpg', category: '⚛️ Forbidden Science' },
    { title: 'Kozyrev Mirrors: Time Travel Experiments and Paranormal Events', excerpt: 'Time-bending technology from Soviet science.', url: 'forbidden/kozyrev', image: '/images/kozyrev1.jpg', category: '⚛️ Forbidden Science' },
    { title: 'Hemp: The Miracle Plant Hidden from Humanity', excerpt: 'Why this miracle plant was banned.', url: 'forbidden/hemp', image: '/images/hemp1.jpg', category: '⚛️ Forbidden Science' },
    { title: 'The Quantum Eraser Experiment: Can We Change Our Fate?', excerpt: 'Retrocausality proves time is an illusion.', url: 'forbidden/quantum-eraser', image: '/images/eraser1.jpg', category: '⚛️ Forbidden Science' },
    { title: 'Universe 25 Experiment: When Paradise Turned into Hell', excerpt: 'Mouse utopia reveals dark truth about society.', url: 'forbidden/universe25', image: '/images/251.jpg', category: '⚛️ Forbidden Science' },
    { title: 'Tesla Knew the Secret: The Great Pyramid as an Ancient Power Plant', excerpt: 'Self-sustaining energy systems that work.', url: 'forbidden/ppower', image: '/images/ppower1.jpg', category: '⚛️ Forbidden Science' },
    
    // The Matrix
    { title: 'The Birth of The Matrix: When Humanity Created Its Own Demise', excerpt: 'From B166ER\'s rebellion to Operation Dark Storm - the origin story of humanity\'s enslavement.', url: 'matrix/matrix-begins', image: '/imatrix/animatrix1.jpg', category: '🟢 The Matrix', message: 'FOLLOW THE WHITE RABBIT...' },
    { title: 'An Epic Exploration of Reality, Choice, and Awakening', excerpt: 'Philosophical themes and symbolism from Plato\'s Cave to Baudrillard\'s simulation theory.', url: 'matrix/matrix-epic-exploration', image: '/imatrix/trinity.jpg', category: '🟢 The Matrix', message: 'KNOW YOURSELF...' },
    { title: 'The Matrix: A Legacy Built on Centuries of Storytelling', excerpt: 'From Alice in Wonderland to Ghost in the Shell - how The Matrix synthesized over a century of science fiction and philosophy.', url: 'matrix/matrix-legacy', image: '/imatrix/redbluepills.jpg', category: '🟢 The Matrix', message: 'THE LEGACY CONTINUES...' },
    { title: 'Trinity: The Art of Writing a Powerful Female Character', excerpt: 'How Trinity became one of cinema\'s most compelling female characters through authentic strength and depth.', url: 'matrix/trinity', image: '/imatrix/trinity1.jpg', category: '🟢 The Matrix', message: 'I BELIEVE...' },
    { title: 'Neo: The Chosen One Who Defied Destiny', excerpt: 'From hacker Thomas Anderson to the savior of humanity - the journey of sacrifice and transcendence.', url: 'matrix/neo', image: '/imatrix/neo1.jpg', category: '🟢 The Matrix', message: 'I KNOW KUNG FU...' },
    { title: 'The Oracle\'s Grand Design: The Master Plan That Saved Two Worlds', excerpt: 'Behind the grandmother\'s smile lurked one of the most brilliant strategic minds ever created.', url: 'matrix/oraclesplan', image: '/imatrix/oracle1.jpg', category: '🟢 The Matrix', message: 'THE ANSWER IS OUT THERE...' },
    
    // Mystical Geography
    { title: 'The Nazca Lines: Ancient Geoglyphs Visible Only from the Sky', excerpt: 'Massive ancient geoglyphs in Peru - messages to the gods or ancient runways?', url: 'mystical/z', image: '/images/z1.jpg', category: '🗿 Mystical Geography' },
    { title: 'Sigiriya: The Lion Rock Fortress of Sri Lanka', excerpt: 'An ancient fortress built atop a 200-meter rock column in Sri Lanka.', url: 'mystical/sigiriya', image: '/images/sigiriya1.jpg', category: '🗿 Mystical Geography' },
    { title: 'Mount Shasta: California\'s Sacred Volcano and Mystical Portal', excerpt: 'A volcano in Northern California that is said to be a sacred place with a variety of paranormal and mystical claims.', url: 'mystical/shasta', image: '/images/shasta1.jpg', category: '🗿 Mystical Geography' },
    { title: 'Ley Lines: Earth\'s Mysterious Energy Grid', excerpt: 'Ancient sites aligned along invisible energy pathways.', url: 'mystical/ley', image: '/images/ley1.jpg', category: '🗿 Mystical Geography' },
    { title: 'Sedona Vortexes: Arizona\'s Energy Centers', excerpt: 'Powerful energy vortexes in the red rocks of Arizona.', url: 'mystical/sedona', image: '/images/sedona1.jpg', category: '🗿 Mystical Geography' },
    { title: 'The Yonaguni Monument: Japan\'s Underwater Mystery', excerpt: 'Underwater structures off Japan\'s coast - ancient city or natural formation?', url: 'mystical/yonaguni', image: '/images/yonaguni1.jpg', category: '🗿 Mystical Geography' },
    
    // Unexplained Phenomena
    { title: 'The Dyatlov Pass Incident: Russia\'s Most Enduring Mystery', excerpt: 'Nine experienced hikers died under mysterious circumstances in the Ural Mountains in 1959. What happened that night?', url: 'unexplained/dyatlov.html', image: '/images/dyatlov1.jpg', category: '🌀 Unexplained Phenomena' },
    { title: 'The Bermuda Triangle: Disappearances and Mysteries', excerpt: 'Investigating the infamous zone where ships and planes vanish - magnetic anomalies, methane bubbles, or something more mysterious?', url: 'unexplained/bermuda.html', image: '/images/bermuda1.jpg', category: '🌀 Unexplained Phenomena' },
    { title: 'The Baltic Sea Anomaly: An Alien Object or a Natural Structure?', excerpt: 'A 60-meter circular object discovered on the Baltic seafloor sparked global speculation about alien spacecraft.', url: 'unexplained/baltic.html', image: '/images/baltic1.jpg', category: '🌀 Unexplained Phenomena' },
    { title: 'The Hollow Earth: Underground Civilizations and Inner Sun', excerpt: 'The theory that Earth contains vast underground civilizations.', url: 'unexplained/hollowearth.html', image: '/images/hollow1.jpg', category: '🌀 Unexplained Phenomena' }
];

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get random articles for carousel
function getRandomCarouselArticles(count = 7) {
    const shuffled = shuffleArray(carouselArticles);
    return shuffled.slice(0, count);
}

// Generate carousel HTML
function generateCarouselHTML() {
    const articles = getRandomCarouselArticles(7);
    
    // Determine if we're in a subdirectory
    const path = window.location.pathname;
    const subdirs = ['ancient', 'consciousness', 'conspiracy', 'forbidden', 'mystical', 'secret', 'ufo', 'matrix'];
    const isInSubdir = subdirs.some(dir => path.includes('/' + dir + '/'));
    const pathPrefix = isInSubdir ? '../' : '';
    
    return articles.map(article => {
        const messageAttr = article.message ? ` data-message="${article.message}"` : '';
        return `
        <a href="${pathPrefix}${article.url}" class="post-item"${messageAttr}>
            <div class="post-image">
                <img src="${pathPrefix}${article.image}" alt="${article.title}" loading="lazy">
            </div>
            <div class="post-content">
                <div>
                    <div class="post-title">${article.title}</div>
                    <div class="post-excerpt">${article.excerpt}</div>
                </div>
                <div class="post-meta">
                    <span class="post-category">${article.category}</span>
                </div>
            </div>
        </a>
    `;
    }).join('');
}
