// Artist data organized by category
const musicians = [
    {
        id: 1,
        name: 'Bowling Shoes',
        genre: 'Band',
        image: 'unnamed.jpg',
        website: 'https://bowlingshoes.bandcamp.com/album/bowling-shoes',
        instagram: '',
        spotify: ''
    },
    {
        id: 2,
        name: 'Bronson Arm',
        genre: 'Artist',
        image: 'unnamed-3.jpg',
        website: 'https://bronsonarm.bandcamp.com/album/s-t',
        instagram: '',
        spotify: ''
    },
    {
        id: 11,
        name: 'Immateria',
        genre: 'Artist',
        image: 'IMMATERIA Photo for Website.jpg',
        website: 'https://immateria.bandzoogle.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnGDLdBaNE876SrNd3dXzOs9y4YVkjJgM4B4JeyNt8lgMjxb8F-96DSfdLJTY_aem_ZpkfrUEVYsuVlLkSpGI8bA',
        instagram: '',
        spotify: ''
    },
    {
        id: 6,
        name: 'Johnnyrook',
        genre: 'Musician',
        image: 'Johnnyrook Photo for Website.jpg',
        instagram: 'https://www.instagram.com/johnnyrookmusic/',
        spotify: ''
    },
    {
        id: 8,
        name: 'Lofi Legs',
        genre: 'Band',
        image: 'Lofi Legs Website photo.jpg',
        instagram: 'https://www.instagram.com/lofilegacy/',
        spotify: ''
    },
    {
        id: 10,
        name: 'Nathan Mac',
        genre: 'Artist',
        image: 'Nathan Mac Photo for Website.jpg',
        website: 'https://www.nathanmacmusic.com/',
        instagram: '',
        spotify: ''
    },
    {
        id: 3,
        name: 'Some Days Are Darker',
        genre: 'Band',
        image: 'unnamed-2.jpg',
        website: 'https://somedaysaredarker.com/',
        instagram: '',
        spotify: ''
    },
    {
        id: 9,
        name: 'Stairwell Confessions',
        genre: 'Band',
        image: 'Stairwell Confessions Photo for Website.jpg',
        website: 'https://stairwellconfessions.com/',
        instagram: '',
        spotify: ''
    },
    {
        id: 4,
        name: 'The Drought',
        genre: 'Band',
        image: 'Bandofficial.1.jpg',
        website: 'https://thedrought.band',
        instagram: '',
        spotify: ''
    },
    {
        id: 7,
        name: 'Topline Addicts',
        genre: 'Band',
        image: 'Topline Addicts Photo for Website.jpg',
        instagram: 'https://www.instagram.com/toplineaddicts/',
        spotify: ''
    }
];

const productionTeam = [
    {
        id: 4,
        name: 'Todd Rutherford',
        genre: 'Composer, Mixing & Production',
        image: 'unnamed-5.jpg',
        website: 'https://toddrutherfordmusic.com/splashpage',
        instagram: '',
        spotify: ''
    },
    {
        id: 5,
        name: 'Darren Lawson',
        genre: 'Mixing & Production',
        image: 'unnamed-4.jpg',
        website: 'https://www.darrenlawson.co.uk/',
        instagram: '',
        spotify: ''
    }
];

// Load artists on page load
document.addEventListener('DOMContentLoaded', function() {
    loadArtists();
    setupTabs();
    setupNavHighlight();
});

function loadArtists() {
    const musiciansGrid = document.getElementById('musiciansGrid');
    const productionGrid = document.getElementById('productionGrid');
    
    // Load musicians
    musicians.forEach(artist => {
        const card = createArtistCard(artist, 'musicians');
        musiciansGrid.appendChild(card);
    });

    // Load production team
    productionTeam.forEach(artist => {
        const card = createArtistCard(artist, 'production');
        productionGrid.appendChild(card);
    });
}

function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

function createArtistCard(artist, category) {
    const card = document.createElement('div');
    card.className = 'artist-card';
    const showRole = category === 'production' && artist.genre;
    const imageClass = artist.name === 'Immateria' ? 'artist-image fit-contain' : 'artist-image';
    
    card.innerHTML = `
        <div class="artist-image-container">
            <img src="${artist.image}" alt="${artist.name}" class="${imageClass}">
        </div>
        <div class="artist-info">
            <h3 class="artist-name">${artist.name}</h3>
            ${showRole ? `<p class="artist-genre">${artist.genre}</p>` : ''}
            <div class="artist-links">
                ${artist.website ? `<a href="${artist.website}" target="_blank">About</a>` : ''}
                ${artist.instagram ? `<a href="${artist.instagram}" target="_blank">About</a>` : ''}
                ${artist.spotify ? `<a href="${artist.spotify}" target="_blank">Spotify</a>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

function setupNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = ['home', 'roster']
        .map(id => document.getElementById(id))
        .filter(Boolean);

    if (!navLinks.length || !sections.length) {
        return;
    }

    const setActive = id => {
        navLinks.forEach(link => {
            const target = link.getAttribute('href');
            link.classList.toggle('active', target === `#${id}`);
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('href').replace('#', '');
            setActive(targetId);
        });
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0,
            }
        );

        sections.forEach(section => observer.observe(section));
    } else {
        setActive(sections[0].id);
    }
}
