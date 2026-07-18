/*
 * Copyright (c) 2026 Zahara Ali
 * All rights reserved.
 */

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
        id: 13,
        name: 'Crash Through the Floor',
        genre: 'Band',
        image: '1000012737.png',
        website: 'https://crashthroughtheflo.wixsite.com/crash-through-the-fl',
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
        id: 11,
        name: 'Ethyl Cat',
        genre: 'Artist',
        image: 'IMG_8623.JPG',
        instagram: 'https://www.instagram.com/ethylcat/',
        spotify: ''
    },
    {
        id: 12,
        name: 'SLEEPTALKER',
        genre: 'Artist',
        image: 'image.png',
        website: 'https://sleeptalker.us/home',
        instagram: '',
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
        image: 'sunlady.png',
        website: 'https://thedrought.band',
        instagram: '',
        spotify: '',
        imageClass: 'fit-contain'
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
});

function loadArtists() {
    const musiciansGrid = document.getElementById('musiciansGrid');
    const productionGrid = document.getElementById('productionGrid');

    if (!musiciansGrid || !productionGrid) {
        return;
    }
    
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

    if (!tabButtons.length || !tabContents.length) {
        return;
    }

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
    const imageClass = artist.imageClass ? `artist-image ${artist.imageClass}` : 'artist-image';
    
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
