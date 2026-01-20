// Artist data organized by category
const musicians = [
    {
        id: 1,
        name: 'Bowling Shoes',
        genre: 'Musician',
        image: 'https://via.placeholder.com/250x250?text=Bowling+Shoes',
        instagram: '',
        spotify: ''
    },
    {
        id: 2,
        name: 'Bronson Arm',
        genre: 'Musician',
        image: 'https://via.placeholder.com/250x250?text=Bronson+Arm',
        instagram: '',
        spotify: ''
    },
    {
        id: 3,
        name: 'Some Days Are Darker',
        genre: 'Musician',
        image: 'https://via.placeholder.com/250x250?text=Some+Days+Are+Darker',
        instagram: '',
        spotify: ''
    },
    {
        id: 4,
        name: 'The Drought',
        genre: 'Musician',
        image: 'https://via.placeholder.com/250x250?text=The+Drought',
        instagram: '',
        spotify: ''
    },
    {
        id: 5,
        name: 'Ethyl Cat',
        genre: 'Musician',
        image: 'https://via.placeholder.com/250x250?text=Ethyl+Cat',
        instagram: '',
        spotify: ''
    },
    {
        id: 6,
        name: 'Johnnyrook',
        genre: 'Musician',
        image: 'https://via.placeholder.com/250x250?text=Johnnyrook',
        instagram: '',
        spotify: ''
    },
    {
        id: 7,
        name: 'Topline Addicts',
        genre: 'Musician',
        image: 'https://via.placeholder.com/250x250?text=Topline+Addicts',
        instagram: '',
        spotify: ''
    },
    {
        id: 8,
        name: 'Lofi Legs',
        genre: 'Musician',
        image: 'https://via.placeholder.com/250x250?text=Lofi+Legs',
        instagram: '',
        spotify: ''
    },
    {
        id: 9,
        name: 'Stairwell Confessions',
        genre: 'Musician',
        image: 'https://via.placeholder.com/250x250?text=Stairwell+Confessions',
        instagram: '',
        spotify: ''
    },
    {
        id: 10,
        name: 'Nathan Mac',
        genre: 'Musician',
        image: 'https://via.placeholder.com/250x250?text=Nathan+Mac',
        instagram: '',
        spotify: ''
    }
];

const productionTeam = [
    {
        id: 4,
        name: 'Todd Rutherford',
        genre: 'Composer, Mixing & Production',
        image: 'https://via.placeholder.com/250x250?text=Todd+Rutherford',
        instagram: '',
        spotify: ''
    },
    {
        id: 5,
        name: 'Darren Lawson',
        genre: 'Mixing & Production',
        image: 'https://via.placeholder.com/250x250?text=Darren+Lawson',
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
    
    // Load musicians
    musicians.forEach(artist => {
        const card = createArtistCard(artist);
        musiciansGrid.appendChild(card);
    });

    // Load production team
    productionTeam.forEach(artist => {
        const card = createArtistCard(artist);
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

function createArtistCard(artist) {
    const card = document.createElement('div');
    card.className = 'artist-card';
    
    card.innerHTML = `
        <div class="artist-image-container">
            <img src="${artist.image}" alt="${artist.name}" class="artist-image">
        </div>
        <div class="artist-info">
            <h3 class="artist-name">${artist.name}</h3>
            <p class="artist-genre">${artist.genre}</p>
            <div class="artist-links">
                ${artist.instagram ? `<a href="${artist.instagram}" target="_blank">Instagram</a>` : ''}
                ${artist.spotify ? `<a href="${artist.spotify}" target="_blank">Spotify</a>` : ''}
            </div>
        </div>
    `;
    
    return card;
}
