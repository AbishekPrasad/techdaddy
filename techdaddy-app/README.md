# TechDaddy - Responsive React App

A modern, responsive React application inspired by the TechDaddy website design with parallax effects similar to the Vercel app. Built with React, Vite, GSAP, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive across all desktop sizes and mobile devices
- **Parallax Effects**: Smooth GSAP-powered parallax scrolling animations
- **Modern UI/UX**: Clean, professional design with gradient backgrounds and animations
- **Service Registration**: Direct integration with Google Forms for customer registration
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Friendly**: Semantic HTML structure and optimized meta tags

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **GSAP** - Professional-grade animation library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## 📁 Folder Structure

```
techdaddy-app/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with responsive menu
│   │   ├── Footer.jsx          # Footer with contact info and links
│   │   ├── HeroSection.jsx     # Hero section with parallax background
│   │   ├── ServicesSection.jsx # Services showcase with process steps
│   │   ├── AboutSection.jsx    # About section with features
│   │   └── ContactSection.jsx  # Contact info and registration CTA
│   ├── pages/
│   │   └── Home.jsx            # Main home page with all sections
│   ├── assets/
│   │   └── images/             # Image assets (to be added)
│   ├── hooks/                  # Custom React hooks (if needed)
│   ├── utils/                  # Utility functions (if needed)
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles and Tailwind imports
├── package.json
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js            # Vite configuration
└── README.md
```

## 🎨 Design Features

### Hero Section
- Animated gradient background with floating elements
- Parallax scrolling effects
- Company logo and branding
- Call-to-action buttons
- Statistics display

### Services Section
- Four main service categories:
  - Mobile Responsive Websites
  - Mobile App Development
  - Software Development
  - Digital Marketing
- 6-step process visualization
- Service registration buttons

### About Section
- Company features and benefits
- Interactive animated cards
- Statistics and achievements
- Visual elements with hover effects

### Contact Section
- Complete contact information
- Service registration form link
- Multiple contact methods
- Working hours and location

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd techdaddy-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🔗 Google Form Integration

To integrate your Google Form for service registration:

1. Create a Google Form for service registration
2. Get the form's public URL
3. Replace `YOUR_FORM_ID` in the following files:
   - `src/components/Header.jsx`
   - `src/components/HeroSection.jsx`
   - `src/components/ServicesSection.jsx`
   - `src/components/AboutSection.jsx`
   - `src/components/ContactSection.jsx`

Example URL format:
```
https://forms.google.com/d/e/1FAIpQLSe_YOUR_ACTUAL_FORM_ID/viewform
```

## 📱 Responsive Design

The application is fully responsive and tested on:
- **Desktop**: 1920px, 1440px, 1024px
- **Tablet**: 768px, 640px
- **Mobile**: 375px, 320px

### Responsive Features
- Collapsible navigation menu
- Adaptive grid layouts
- Scalable typography
- Touch-friendly interactions
- Optimized images and animations

## 🎭 Animations & Effects

### GSAP Animations
- Parallax scrolling backgrounds
- Fade-in animations for sections
- Staggered card animations
- Floating element effects
- Smooth scroll triggers

### CSS Animations
- Hover effects on buttons and cards
- Loading animations
- Gradient transitions
- Transform animations

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  },
  secondary: {
    500: '#10b981',
    600: '#059669',
  }
}
```

### Fonts
The application uses Inter font family. You can change it in `src/index.css`.

### Content
All content can be easily modified by editing the respective component files.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support and questions, please contact:
- Email: contact@techdaddy.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using React, GSAP, and Tailwind CSS
