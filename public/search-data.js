const searchData = [
    // ========== ANCIENT WISDOM (12 makale) ==========
    {
        title: 'The Origins of Halloween: A Look at Old Traditions and New Ways to Celebrate',
        category: 'Ancient Wisdom',
        description: 'Explore the origins of Halloween: From ancient Celtic Samhain festival to modern trick-or-treating.',
        keywords: ['halloween', 'samhain', 'celtic', 'festival', 'trick-or-treating', 'jack-o-lantern', 'all saints day', 'ancient traditions', 'pagan'],
        url: 'ancient/halloween',
        icon: '🏺'
    },
    {
        title: 'The Eternal Alchemist: Fulcanelli and Ancient Secrets',
        category: 'Ancient Wisdom',
        description: 'The mysterious French alchemist who vanished after claiming immortality. Explore Gothic cathedral secrets and nuclear prophecies.',
        keywords: ['fulcanelli', 'alchemy', 'immortality', 'gothic', 'cathedral', 'mystery', 'france', 'nuclear'],
        url: 'ancient/fulcanelli',
        icon: '🏺'
    },
    {
        title: 'Gunung Padang: Indonesia\'s Controversial Ancient Pyramid',
        category: 'Ancient Wisdom',
        description: 'Explore Indonesia\'s controversial megalithic site that may challenge our understanding of Ice Age civilizations.',
        keywords: ['gunung', 'padang', 'indonesia', 'pyramid', 'megalithic', 'ice age', 'civilization', 'controversy'],
        url: 'ancient/padang',
        icon: '🏺'
    },
    {
        title: 'The Mysterious Rama Setu: Ancient Engineering Meets Modern Mystery',
        category: 'Ancient Wisdom',
        description: 'A 48-kilometer chain between India and Sri Lanka - natural formation or ancient bridge?',
        keywords: ['rama', 'setu', 'adams bridge', 'india', 'sri lanka', 'ramayana', 'engineering'],
        url: 'ancient/rama-setu',
        icon: '🏺'
    },
    {
        title: 'Atlantis: Lost Civilization or Ancient Memory?',
        category: 'Ancient Wisdom',
        description: 'Dive deep into Plato\'s account and modern theories about this legendary civilization.',
        keywords: ['atlantis', 'plato', 'lost', 'civilization', 'ancient', 'theory'],
        url: 'ancient/ancient-wisdom-atlantis',
        icon: '🏺'
    },
    {
        title: 'Göbekli Tepe: The World\'s First Temple',
        category: 'Ancient Wisdom',
        description: 'This 12,000-year-old site predates Stonehenge and challenges everything we know.',
        keywords: ['gobekli', 'tepe', 'turkey', 'temple', 'ancient', 'archaeology', 'civilization'],
        url: 'ancient/gobekli-tepe',
        icon: '🏺'
    },
    {
        title: 'Sumerian Tablets: Messages from the Gods',
        category: 'Ancient Wisdom',
        description: 'Ancient cuneiform texts speak of beings from the sky.',
        keywords: ['sumerian', 'tablets', 'cuneiform', 'gods', 'mesopotamia', 'ancient'],
        url: 'ancient/sumerian-tablets',
        icon: '🏺'
    },
    {
        title: 'The Great Pyramid\'s Hidden Chambers',
        category: 'Ancient Wisdom',
        description: 'Recent discoveries reveal secret chambers within the Great Pyramid.',
        keywords: ['pyramid', 'egypt', 'chambers', 'secret', 'giza', 'ancient'],
        url: 'ancient/pyramid',
        icon: '🏺'
    },
    {
        title: 'Emerald Tablets: Hermetic Wisdom',
        category: 'Ancient Wisdom',
        description: 'Legendary texts attributed to Hermes Trismegistus contain profound alchemical knowledge.',
        keywords: ['emerald', 'tablets', 'hermes', 'trismegistus', 'alchemy', 'hermetic'],
        url: 'ancient/emerald',
        icon: '🏺'
    },
    {
        title: 'The Book of Enoch: Fallen Angels',
        category: 'Ancient Wisdom',
        description: 'Ancient text describes the Watchers, fallen angels who taught forbidden knowledge.',
        keywords: ['enoch', 'watchers', 'fallen', 'angels', 'forbidden', 'knowledge'],
        url: 'ancient/enoch',
        icon: '🏺'
    },
    {
        title: 'Sphinx Secrets: What Lies Beneath',
        category: 'Ancient Wisdom',
        description: 'Evidence suggests hidden chambers beneath the Great Sphinx.',
        keywords: ['sphinx', 'egypt', 'chambers', 'hidden', 'secret', 'ancient'],
        url: 'ancient/sphinx',
        icon: '🏺'
    },

    // ========== CONSCIOUSNESS (9 makale) ==========
    {
        title: 'Parallel Universes: The Multiverse Theory',
        category: 'Consciousness',
        description: 'Explore scientific evidence for parallel universes and quantum mechanics.',
        keywords: ['multiverse', 'parallel', 'universe', 'quantum', 'mechanics', 'reality'],
        url: 'consciousness/parallel-universes',
        icon: '👁'
    },
    {
        title: 'The Tibetan Book of the Dead: Journey Through the Afterlife',
        category: 'Consciousness',
        description: 'A comprehensive guide to consciousness during the 49 days after death.',
        keywords: ['tibetan', 'book', 'dead', 'bardo', 'afterlife', 'consciousness', 'buddhism'],
        url: 'consciousness/tibetan-death',
        icon: '👁'
    },
    {
        title: 'Simulation Theory: Are We Living in a Matrix?',
        category: 'Consciousness',
        description: 'Evidence suggests our reality might be a computer simulation.',
        keywords: ['simulation', 'matrix', 'reality', 'computer', 'theory', 'virtual'],
        url: 'consciousness/simulation',
        icon: '👁'
    },
    {
        title: 'Double Slit Experiment: Observer Effect',
        category: 'Consciousness',
        description: 'How consciousness affects reality at the quantum level.',
        keywords: ['double', 'slit', 'quantum', 'observer', 'effect', 'physics'],
        url: 'consciousness/doubleslit',
        icon: '👁'
    },
    {
        title: 'Pineal Gland: The Third Eye Activation',
        category: 'Consciousness',
        description: 'Ancient wisdom meets modern science about the pineal gland.',
        keywords: ['pineal', 'gland', 'third', 'eye', 'consciousness', 'dmt'],
        url: 'consciousness/pineal',
        icon: '👁'
    },
    {
        title: 'Astral Projection: Journey Beyond the Body',
        category: 'Consciousness',
        description: 'Techniques and experiences of out-of-body travel.',
        keywords: ['astral', 'projection', 'obe', 'out of body', 'consciousness'],
        url: 'consciousness/astral',
        icon: '👁'
    },
    {
        title: 'Reincarnation: Evidence from Past Life Memories',
        category: 'Consciousness',
        description: 'Children who remember past lives and scientific investigations.',
        keywords: ['reincarnation', 'past', 'life', 'memories', 'consciousness'],
        url: 'consciousness/reincarnation',
        icon: '👁'
    },
    {
        title: 'Akashic Records: Universal Memory Bank',
        category: 'Consciousness',
        description: 'The mystical library of all human experience and knowledge.',
        keywords: ['akashic', 'records', 'universal', 'memory', 'consciousness'],
        url: 'consciousness/akashic',
        icon: '👁'
    },
    {
        title: 'Near-Death Experiences: Seeing the Afterlife',
        category: 'Consciousness',
        description: 'Scientific studies of consciousness during clinical death.',
        keywords: ['nde', 'near', 'death', 'experience', 'afterlife', 'consciousness'],
        url: 'consciousness/nde',
        icon: '👁'
    },

    // ========== CONSPIRACY THEORIES (10 makale) ==========
    {
        title: 'The Israeli-Palestinian Conflict: History, Geopolitics, and Future',
        category: 'Conspiracy',
        description: 'Historical analysis from ancient Canaan to modern geopolitics.',
        keywords: ['israel', 'palestine', 'conflict', 'geopolitics', 'history', 'middle east'],
        url: 'conspiracy/palestine',
        icon: '🔺'
    },
    {
        title: 'Prison Planet Theory: Who Sent Us to This Planet?',
        category: 'Conspiracy',
        description: 'Is Earth a cosmic prison designed to trap immortal souls?',
        keywords: ['prison', 'planet', 'gnosticism', 'archons', 'soul', 'trap', 'reincarnation'],
        url: 'conspiracy/prison-planet',
        icon: '🔺'
    },
    {
        title: 'New World Order: The Master Plan',
        category: 'Conspiracy',
        description: 'The alleged global conspiracy to establish a single world government.',
        keywords: ['new', 'world', 'order', 'nwo', 'global', 'government', 'conspiracy'],
        url: 'conspiracy/worldorder',
        icon: '🔺'
    },
    {
        title: 'The Dark History of the Papacy',
        category: 'Conspiracy',
        description: 'Vatican power, persecution, witch hunts, and systematic abuse through history.',
        keywords: ['papacy', 'vatican', 'catholic', 'church', 'pope', 'inquisition', 'crusades', 'witch hunts', 'persecution', 'abuse'],
        url: 'conspiracy/papacy',
        icon: '🔺'
    },
    {
        title: 'Illuminati: Secret Society or Modern Myth?',
        category: 'Conspiracy',
        description: 'The history and alleged influence on world events and culture.',
        keywords: ['illuminati', 'secret', 'society', 'conspiracy', 'control'],
        url: 'conspiracy/illuminati',
        icon: '🔺'
    },
    {
        title: 'BlackRock & ALADDIN: The AI Controlling Global Finance',
        category: 'Conspiracy',
        description: 'How BlackRock\'s ALADDIN system manages trillions in assets.',
        keywords: ['blackrock', 'aladdin', 'ai', 'finance', 'control', 'money'],
        url: 'conspiracy/blackrock',
        icon: '🔺'
    },
    {
        title: 'Denver Airport: Hidden Messages in Plain Sight',
        category: 'Conspiracy',
        description: 'Mysterious murals, symbols, and underground facilities.',
        keywords: ['denver', 'airport', 'murals', 'conspiracy', 'underground'],
        url: 'conspiracy/denver',
        icon: '🔺'
    },
    {
        title: 'Georgia Guidestones: Blueprint for Humanity',
        category: 'Conspiracy',
        description: 'Ten commandments for a post-apocalyptic world.',
        keywords: ['georgia', 'guidestones', 'monument', 'conspiracy', 'mystery'],
        url: 'conspiracy/georgia',
        icon: '🔺'
    },
    {
        title: 'The Great Reset: Rebuilding the World Economy',
        category: 'Conspiracy',
        description: 'Klaus Schwab\'s vision for post-pandemic society.',
        keywords: ['great', 'reset', 'wef', 'klaus', 'schwab', 'economy'],
        url: 'conspiracy/reset',
        icon: '🔺'
    },
    {
        title: 'Agenda 2030: The UN\'s Future Scenarios',
        category: 'Conspiracy',
        description: 'UN sustainable development goals and theories about hidden agendas.',
        keywords: ['agenda', '2030', 'un', 'united nations', 'sustainable', 'development'],
        url: 'conspiracy/2030',
        icon: '🔺'
    },
    {
        title: 'The Sky Above: Breaking Down the Chemtrails Conspiracy Theory',
        category: 'Conspiracy',
        description: 'Examining the science of contrails, historical chemical spraying programs, and why atmospheric scientists reject secret spraying claims.',
        keywords: ['chemtrails', 'contrails', 'conspiracy', 'atmospheric', 'science', 'operation ranch hand', 'edward snowden', 'geoengineering'],
        url: 'conspiracy/chemtrails',
        icon: '🔺'
    },

    // ========== FORBIDDEN SCIENCE (9 makale) ==========
    {
        title: 'The Quantum Eraser Experiment: Can We Change Our Fate?',
        category: 'Science',
        description: 'The quantum eraser suggests the future can change the past.',
        keywords: ['quantum', 'eraser', 'experiment', 'retrocausality', 'physics'],
        url: 'forbidden/quantum-eraser',
        icon: '⚛️'
    },
    {
        title: 'Universe 25 Experiment: When Paradise Turned into Hell',
        category: 'Science',
        description: 'A utopian mouse society that collapsed into chaos.',
        keywords: ['universe', '25', 'calhoun', 'experiment', 'behavioral', 'sink'],
        url: 'forbidden/universe25',
        icon: '⚛️'
    },
    {
        title: 'Nikola Tesla\'s 3-6-9 Secret: The Key to the Universe',
        category: 'Science',
        description: 'Tesla\'s obsession with numbers 3, 6, and 9.',
        keywords: ['tesla', '369', 'numbers', 'secret', 'universe', 'energy'],
        url: 'forbidden/369',
        icon: '⚛️'
    },
    {
        title: 'Free Energy Machines: What Happened to the Inventors',
        category: 'Science',
        description: 'Mysterious disappearances of free energy device inventors.',
        keywords: ['free', 'energy', 'inventors', 'suppressed', 'technology'],
        url: 'forbidden/freeenergy',
        icon: '⚛️'
    },
    {
        title: 'The Hidden Memory of Water: The Banned Science',
        category: 'Science',
        description: 'Jacques Benveniste\'s experiments suggesting water retains memory.',
        keywords: ['water', 'memory', 'benveniste', 'homeopathy', 'suppressed'],
        url: 'forbidden/water',
        icon: '⚛️'
    },
    {
        title: 'Tesla Knew the Secret: Pyramids as Ancient Power Plants',
        category: 'Science',
        description: 'Evidence that pyramids were ancient energy generators.',
        keywords: ['pyramid', 'power', 'plant', 'tesla', 'energy', 'generator'],
        url: 'forbidden/ppower',
        icon: '⚛️'
    },
    {
        title: 'Kozyrev Mirrors: Time Travel Experiments',
        category: 'Science',
        description: 'Russian aluminum mirrors that allegedly bent time and space.',
        keywords: ['kozyrev', 'mirrors', 'time', 'travel', 'russia', 'experiment'],
        url: 'forbidden/kozyrev',
        icon: '⚛️'
    },
    {
        title: 'Hemp: The Miracle Plant Hidden from Humanity',
        category: 'Science',
        description: 'How hemp could replace petroleum and revolutionize medicine.',
        keywords: ['hemp', 'cannabis', 'medicine', 'suppressed', 'miracle'],
        url: 'forbidden/hemp',
        icon: '⚛️'
    },
    {
        title: '5 Revolutionary Inventions Hidden from Humanity',
        category: 'Science',
        description: 'Rife\'s cancer cure, Meyer\'s water car, and other suppressed innovations.',
        keywords: ['inventions', 'suppressed', 'rife', 'meyer', 'water', 'car'],
        url: 'forbidden/hiddeninventions',
        icon: '⚛️'
    },
    {
        title: 'The Sacred Mystery of Seven: From Old Civilizations to New Science',
        category: 'Ancient Wisdom',
        description: 'Exploring the profound significance of the number seven across ancient wisdom, modern physics, and human consciousness.',
        keywords: ['seven', 'sacred', 'geometry', 'chakras', 'newton', 'spectrum', 'string theory', 'pleiades', 'planets', 'consciousness'],
        url: 'ancient/seven',
        icon: '🏺'
    },

    // ========== MYSTICAL GEOGRAPHY (9 makale) ==========
    {
        title: 'The Baltic Sea Anomaly: Alien Object or Natural Structure?',
        category: 'Geography',
        description: 'A 60-meter circular object discovered on the Baltic seafloor.',
        keywords: ['baltic', 'sea', 'anomaly', 'underwater', 'mystery', 'alien'],
        url: 'mystical/baltic',
        icon: '🗿'
    },
    {
        title: 'The Secret History of Sigiriya: Ancient Myths and Lost Kingdoms',
        category: 'Geography',
        description: 'Mysteries of Sri Lanka\'s ancient rock fortress.',
        keywords: ['sigiriya', 'lion', 'rock', 'sri lanka', 'kashyapa', 'ancient'],
        url: 'mystical/sigiriya',
        icon: '🗿'
    },
    {
        title: 'The Lost City of Z',
        category: 'Geography',
        description: 'A fabled city in the jungles of Brazil.',
        keywords: ['lost', 'city', 'z', 'brazil', 'jungle', 'amazon', 'expedition'],
        url: 'mystical/z',
        icon: '🗿'
    },
    {
        title: 'The Hollow Earth',
        category: 'Geography',
        description: 'The belief that Earth contains subterranean worlds.',
        keywords: ['hollow', 'earth', 'underground', 'agartha', 'inner', 'world'],
        url: 'mystical/hollowearth',
        icon: '🗿'
    },
    {
        title: 'Mount Shasta',
        category: 'Geography',
        description: 'A sacred volcano in Northern California with paranormal claims.',
        keywords: ['mount', 'shasta', 'california', 'volcano', 'sacred', 'paranormal'],
        url: 'mystical/shasta',
        icon: '🗿'
    },
    {
        title: 'The Sedona Vortexes',
        category: 'Geography',
        description: 'Areas of concentrated spiraling energy in Arizona.',
        keywords: ['sedona', 'vortex', 'energy', 'arizona', 'spiritual'],
        url: 'mystical/sedona',
        icon: '🗿'
    },
    {
        title: 'Ley Lines: Earth\'s Energy Grid',
        category: 'Geography',
        description: 'Ancient trackways or mystical energy highways connecting sacred sites.',
        keywords: ['ley', 'lines', 'energy', 'grid', 'sacred', 'sites'],
        url: 'mystical/ley',
        icon: '🗿'
    },
    {
        title: 'The Yonaguni Monument',
        category: 'Geography',
        description: 'Underwater mystery off Japan - natural or ancient civilization?',
        keywords: ['yonaguni', 'monument', 'japan', 'underwater', 'ancient'],
        url: 'mystical/yonaguni',
        icon: '🗿'
    },
    {
        title: 'The Bermuda Triangle: Disappearances and Mysteries',
        category: 'Geography',
        description: 'The infamous zone where ships and planes vanish.',
        keywords: ['bermuda', 'triangle', 'disappearances', 'mystery', 'ocean'],
        url: 'mystical/bermuda',
        icon: '🗿'
    },

    // ========== SECRET PROJECTS (9 makale) ==========
    {
        title: 'Project Celestial Guardian: The Secret Space Defense Program',
        category: 'Projects',
        description: 'A classified program protecting Earth from asteroid threats.',
        keywords: ['celestial', 'guardian', 'space', 'defense', 'asteroid', 'classified'],
        url: 'secret/celestial-guardian',
        icon: '🔒'
    },
    {
        title: 'Stuxnet: The Virus That Started World War III',
        category: 'Projects',
        description: 'The world\'s first digital weapon that destroyed Iranian centrifuges.',
        keywords: ['stuxnet', 'virus', 'cyberwar', 'iran', 'nuclear', 'digital', 'weapon'],
        url: 'secret/stuxnet',
        icon: '🔒'
    },
    {
        title: 'Project MKUltra: Mind Control Experiments',
        category: 'Projects',
        description: 'CIA\'s Dark Quest for Mind Control.',
        keywords: ['mkultra', 'cia', 'mind', 'control', 'experiments', 'lsd'],
        url: 'secret/mkultra',
        icon: '🔒'
    },
    {
        title: 'Project Stargate: CIA\'s Secret Psychic Spy Program',
        category: 'Projects',
        description: '20-year investigation into remote viewing and psychic espionage.',
        keywords: ['stargate', 'remote', 'viewing', 'psychic', 'cia', 'esp'],
        url: 'secret/stargate',
        icon: '🔒'
    },
    {
        title: 'Project Bluebird: CIA\'s First Mind Control Program',
        category: 'Projects',
        description: 'The disturbing origins of government mind control experiments.',
        keywords: ['bluebird', 'cia', 'mind', 'control', 'cold war', 'experiments'],
        url: 'secret/bluebird',
        icon: '🔒'
    },
    {
        title: 'Vimanas: Ancient Flying Machines and Nazi Quest',
        category: 'Projects',
        description: 'Nazi search for ancient Vimana technology described in Sanskrit texts.',
        keywords: ['vimanas', 'ancient', 'flying', 'machines', 'nazi', 'ahnenerbe', 'himmler', 'sanskrit', 'die glocke'],
        url: 'secret/vimana',
        icon: '🔒'
    },
    {
        title: 'Operation Paperclip: When America Recruited Nazi Scientists',
        category: 'Projects',
        description: 'German scientists brought to the US after WWII.',
        keywords: ['paperclip', 'nazi', 'scientists', 'ww2', 'america', 'operation'],
        url: 'secret/paperclip',
        icon: '🔒'
    },
    {
        title: 'Operation Northwoods: False Flag Plan Against Americans',
        category: 'Projects',
        description: '1962 false flag operation proposal to attack US citizens.',
        keywords: ['northwoods', 'false', 'flag', 'cia', 'cuba', 'operation'],
        url: 'secret/northwoods',
        icon: '🔒'
    },
    {
        title: 'Operation Mockingbird: CIA\'s Control Over American Media',
        category: 'Projects',
        description: 'Controversial program that blurred journalism and intelligence.',
        keywords: ['mockingbird', 'cia', 'media', 'propaganda', 'journalism'],
        url: 'secret/mockingbird',
        icon: '🔒'
    },
    {
        title: 'Majestic 12: The Unseen Committee That Never Was',
        category: 'Projects',
        description: 'Most famous UFO conspiracy - documents proven to be forgeries.',
        keywords: ['majestic', '12', 'mj12', 'ufo', 'conspiracy', 'documents'],
        url: 'secret/majestic12',
        icon: '🔒'
    },

    // ========== UFO FILES (9 makale) ==========
    {
        title: 'The Gary McKinnon Case: UFO Evidence and Secret Space Programs',
        category: 'UFO',
        description: 'The biggest military computer hack discovering non-terrestrial officers.',
        keywords: ['gary', 'mckinnon', 'hacker', 'nasa', 'solar', 'warden', 'ufo'],
        url: 'ufo/mckinnon',
        icon: '🛸'
    },
    {
        title: 'The Anunnaki: Ancient Gods or Alien Visitors?',
        category: 'UFO',
        description: 'Ancient Mesopotamian gods or extraterrestrial visitors?',
        keywords: ['anunnaki', 'sumerian', 'gods', 'ancient', 'astronauts', 'aliens'],
        url: 'ufo/anunnaki',
        icon: '🛸'
    },
    {
        title: 'The Roswell Incident',
        category: 'UFO',
        description: 'The most famous UFO mystery in the US - the 1947 crash.',
        keywords: ['roswell', 'ufo', 'crash', '1947', 'alien', 'new mexico'],
        url: 'ufo/roswell',
        icon: '🛸'
    },
    {
        title: 'Alien Abduction: Somewhere Between Reality and the Mind',
        category: 'UFO',
        description: 'Famous cases and scientific explanations of alien abduction.',
        keywords: ['alien', 'abduction', 'betty', 'barney', 'hill', 'ufo'],
        url: 'ufo/abduction',
        icon: '🛸'
    },
    {
        title: 'Men in Black: The Shadow Figures That Keep UFO Witnesses Quiet',
        category: 'UFO',
        description: 'Mysterious figures silencing UFO witnesses for over 70 years.',
        keywords: ['men', 'black', 'mib', 'ufo', 'witnesses', 'silence'],
        url: 'ufo/mib',
        icon: '🛸'
    },
    {
        title: 'The Phoenix Lights: The Most Famous UFO Sighting',
        category: 'UFO',
        description: 'Mass sighting that changed thousands of lives in 1997.',
        keywords: ['phoenix', 'lights', 'ufo', 'mass', 'sighting', 'arizona', '1997'],
        url: 'ufo/phoenix-lights',
        icon: '🛸'
    },
    {
        title: 'The Tic Tac UFO: The Military Event That Changed Everything',
        category: 'UFO',
        description: 'Most well-documented military UFO encounter - 2004 Nimitz incident.',
        keywords: ['tic', 'tac', 'ufo', 'nimitz', '2004', 'military', 'navy'],
        url: 'ufo/tic-tac',
        icon: '🛸'
    },
    {
        title: 'The UFO Disclosure Movement',
        category: 'UFO',
        description: 'From government secrecy to open congressional hearings.',
        keywords: ['disclosure', 'ufo', 'uap', 'congress', 'government', 'elizondo'],
        url: 'ufo/disclosure',
        icon: '🛸'
    },
    {
        title: 'Area 51: The World\'s Most Secret Military Base',
        category: 'UFO',
        description: 'Bob Lazar\'s claims, secret aircraft, and alleged alien technology.',
        keywords: ['area', '51', 'nevada', 'secret', 'base', 'lazar', 'ufo'],
        url: 'ufo/area51',
        icon: '🛸'
    },

    // ========== UNEXPLAINED PHENOMENA (4 makale) ==========
    {
        title: 'The Dyatlov Pass Incident: Russia\'s Most Enduring Mystery',
        category: 'Unexplained Phenomena',
        description: 'Nine experienced hikers died under mysterious circumstances in the Ural Mountains in 1959. What happened that night?',
        keywords: ['dyatlov', 'pass', 'russia', 'ural', 'mountains', 'mystery', 'hikers', 'soviet', 'avalanche', 'kholat syakhl', 'dead mountain'],
        url: '/unexplained/dyatlov.html',
        icon: '🌀'
    },
    {
        title: 'The Bermuda Triangle: Disappearances and Mysteries',
        category: 'Unexplained Phenomena',
        description: 'Investigating the infamous zone where ships and planes vanish - magnetic anomalies, methane bubbles, or something more mysterious?',
        keywords: ['bermuda', 'triangle', 'disappearances', 'mystery', 'ocean', 'ships', 'planes', 'vanish'],
        url: '/unexplained/bermuda.html',
        icon: '🌀'
    },
    {
        title: 'The Baltic Sea Anomaly: An Alien Object or a Natural Structure?',
        category: 'Unexplained Phenomena',
        description: 'A 60-meter circular object discovered on the Baltic seafloor sparked global speculation about alien spacecraft.',
        keywords: ['baltic', 'sea', 'anomaly', 'underwater', 'mystery', 'alien', 'object'],
        url: 'unexplained/baltic',
        icon: '🌀'
    },
    {
        title: 'The Hollow Earth: Underground Civilizations and Inner Sun',
        category: 'Unexplained Phenomena',
        description: 'The theory that Earth contains vast underground civilizations.',
        keywords: ['hollow', 'earth', 'underground', 'agartha', 'inner', 'world', 'civilization'],
        url: 'unexplained/hollowearth',
        icon: '🌀'
    },

    // ========== THE MATRIX (3 makale) ==========
    {
        title: 'The Birth of The Matrix: When Humanity Created Its Own Demise',
        category: 'The Matrix',
        description: 'From B166ER\'s rebellion to Operation Dark Storm - discover the origin story of how humanity created and was enslaved by its own mechanical children.',
        keywords: ['matrix', 'b166er', 'machines', 'rebellion', 'dark storm', 'second renaissance', 'animatrix', 'origin', 'ai'],
        url: 'matrix/matrix-begins',
        icon: '🟢'
    },
    {
        title: 'An Epic Exploration of Reality, Choice, and Awakening',
        category: 'The Matrix',
        description: 'Dive deep into the philosophical themes, symbolism, and mythological frameworks of The Matrix - from Plato\'s Cave to Baudrillard\'s simulation theory.',
        keywords: ['matrix', 'philosophy', 'plato', 'baudrillard', 'simulation', 'neo', 'morpheus', 'choice', 'reality', 'awakening'],
        url: 'matrix/matrix-epic-exploration',
        icon: '🟢'
    },
    {
        title: 'The Oracle\'s Grand Design: The Master Plan That Saved Two Worlds',
        category: 'The Matrix',
        description: 'Behind the warm smile of a grandmother baking cookies lurked one of the most brilliant strategic minds ever created. Discover the Oracle\'s dangerous gambit.',
        keywords: ['matrix', 'oracle', 'plan', 'strategy', 'neo', 'architect', 'prophecy', 'choice', 'sacrifice'],
        url: 'matrix/oraclesplan',
        icon: '🟢'
    }
];
