# Artist Roster Website

A modern, responsive website showcasing an artist roster with a clean grid layout.

## Features

- **Responsive Grid Layout**: Displays artists in a beautiful, responsive grid
- **Artist Cards**: Each artist has a card with image, name, genre, and social links
- **Smooth Animations**: Hover effects and fade-in animations for better UX
- **Mobile Friendly**: Fully responsive design that works on all devices
- **Easy to Customize**: Simple data structure to add/remove artists

## Getting Started

1. Open `index.html` in your browser
2. Edit the `artists` array in `script.js` to add your own artists
3. Replace placeholder images with actual artist images
4. Update social media links and artist information

## Customization

### Adding Artists

Edit the `artists` array in [script.js](script.js):

```javascript
const artists = [
    {
        id: 1,
        name: 'Artist Name',
        genre: 'Genre',
        image: 'path/to/image.jpg',
        instagram: 'https://instagram.com/artist',
        spotify: 'https://spotify.com/artist/name'
    },
    // Add more artists...
];
```

### Styling

Customize colors and styles in [styles.css](styles.css). Key variables:

- `--primary-color`: Main color (black)
- `--accent-color`: Hover/highlight color (pink)
- `--secondary-color`: Background color

### Updating Images

Replace placeholder images with real artist photos by updating the `image` field in the artists array.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # Styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Tips

- Use high-quality images (at least 250x250px)
- Keep artist names short for better display
- Add multiple social links by adding fields to the artist object
- Customize the hero section text in `index.html`
