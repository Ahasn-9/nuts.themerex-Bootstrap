# Nuts Poker Home Page (Bootstrap)

A modern, responsive landing page for an online poker and casino platform, built with [Bootstrap 5](https://getbootstrap.com/), custom CSS, and JavaScript. This project demonstrates a visually engaging homepage with animated statistics, smooth scrolling, and a variety of interactive UI elements.

## Features

- **Responsive Design:** Fully mobile-friendly layout using Bootstrap 5 grid and utilities.
- **Animated Hero Section:** Eye-catching video background and animated text.
- **Smooth Scrolling:** Scroll-down and scroll-to-top buttons for seamless navigation.
- **Animated Statistics:** Count-up animation for key stats using Intersection Observer.
- **Service & Blog Sections:** Highlighted services and recent news with engaging cards.
- **Newsletter Signup:** Prominent subscription form with privacy policy agreement.
- **Custom Styling:** Unique casino-themed gradients, icons, and imagery.
- **Accessible:** ARIA labels and semantic HTML for better accessibility.
- **Easy Customization:** All assets and styles are organized for quick updates.

## Project Structure

```
nuts.themerex-Bootstrap/
│
├── app.js                # JavaScript for interactivity and animations
├── index.html            # Main HTML file
├── package.json          # Project dependencies (Bootstrap)
├── README.md             # Project documentation
├── .gitignore            # Git ignore rules
│
├── assets/               # Images and video assets
│   ├── 124_3-video.mp4
│   ├── ace-card.jpg
│   ├── card1.jpg, card2.jpg, ... card6.jpg
│   ├── man-image.jpg
│   ├── nut logo.webp
│   ├── poker-newsletter-back.webp
│   ├── poker-newsletter-chips-left.webp
│   └── poker-newsletter-chips-right.webp
│
└── style/
    └── style.css         # Custom CSS styles
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (optional, only if you want to manage dependencies via npm)
- Modern web browser

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/nuts.themerex-Bootstrap.git
   cd nuts.themerex-Bootstrap
   ```

2. **Install dependencies (optional):**
   If you want to manage Bootstrap locally:
   ```sh
   npm install
   ```

   > By default, Bootstrap and icons are loaded via CDN in `index.html`.

3. **Open the project:**
   - Simply open `index.html` in your browser to view the homepage.

## Usage

- **Development:** Edit `index.html`, `style/style.css`, or `app.js` as needed. Refresh your browser to see changes.
- **Assets:** Replace images in the `assets/` folder to customize visuals.
- **Deployment:** Upload the project to your web server or deploy via static hosting (e.g., GitHub Pages, Netlify).

## Customization

- **Branding:** Update the logo (`assets/nut logo.webp`) and color scheme in `style/style.css`.
- **Content:** Modify text, links, and sections in `index.html`.
- **Animations:** Adjust or add animations using [Animate.css](https://animate.style/) or custom CSS.

## Scripts

- `app.js` handles:
  - Smooth scroll for navigation buttons
  - Show/hide scroll-to-top button
  - Animated count-up for statistics

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/) (CDN)
- [Bootstrap Icons](https://icons.getbootstrap.com/) (CDN)
- [Animate.css](https://animate.style/) (CDN)

## License

This project is for educational and demonstration purposes. Replace or remove any copyrighted assets before using in production.

---

**Developed by ThemeRex. All rights reserved.**
