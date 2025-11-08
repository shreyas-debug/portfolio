# Portfolio - Shreyas Satpute

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Software Engineer and Web Developer.

## 🌐 Live Demo

Visit the live site: [https://shreyas-debug.github.io/portfolio](https://shreyas-debug.github.io/portfolio)

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Animated Sections**: Smooth scroll animations and interactive elements
- **Project Showcase**: Display of various projects with GitHub links
- **Skills Section**: Interactive skills display
- **Experience Timeline**: Visual timeline of work experience and education
- **Mobile-Friendly Navigation**: Collapsible menu with smooth animations on mobile devices
- **Modern UI**: Clean and professional design with gradient accents

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shreyas-debug/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page will reload automatically when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized for best performance.

### `npm run deploy`
Builds the app and deploys it to GitHub Pages.

## 🛠️ Technologies Used

- **React** - UI library
- **React Bootstrap** - Component library
- **Bootstrap** - CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Animation library
- **Animate.css** - CSS animations
- **React Multi Carousel** - Carousel component
- **React On Screen** - Scroll animations

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Banner.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── NavBar.js
│   │   ├── ProjectCard.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── contexts/
│   │   └── ThemeContext.js
│   ├── assets/
│   │   ├── img/
│   │   └── font/
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## 🎨 Features Breakdown

### Theme Toggle
- Smooth transition between dark and light modes
- Theme preference saved in localStorage
- Light mode set as default

### Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Collapsible dropdown menu with smooth animations
- Auto-closes when navigation link is selected on mobile

### Sections
- **Banner**: Hero section with animated typing effect
- **About**: Personal introduction and resume download
- **Skills**: Interactive skills display
- **Experience**: Timeline view of work experience and education
- **Projects**: Showcase of projects with descriptions and GitHub links
- **Footer**: Simple copyright footer

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Optimized font sizes for different screen sizes
- Touch-friendly navigation
- Smooth animations and transitions
- Proper spacing and padding for mobile devices
- Timeline layout adapted for mobile screens

## 🚢 Deployment

The site is deployed on GitHub Pages. To deploy:

1. Make sure all changes are committed:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## 📝 License

This project is private and personal.

## 👤 Author

**Shreyas Satpute**
- GitHub: [@shreyas-debug](https://github.com/shreyas-debug)
- LinkedIn: [Shreyas Satpute](https://www.linkedin.com/in/shreyas-satpute-5817b41b3/)

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Icons and animations from various open-source libraries
- Design inspiration from modern portfolio websites
