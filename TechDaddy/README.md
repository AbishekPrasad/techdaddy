# TechDaddy Portfolio Website

A modern, responsive React portfolio website for TechDaddy, featuring stunning animations, glass morphism effects, and a comprehensive showcase of technology services.

## 🚀 Features

### Design & Animation
- **Parallax Background**: Animated tech-themed background with floating icons
- **Glass Morphism**: Modern glass effect cards and components
- **Framer Motion**: Smooth animations and transitions throughout
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Mobile-first approach with perfect mobile experience

### Pages & Sections
- **Home**: Hero section with animated stats and service highlights
- **About**: Company story, values, and team members
- **Services**: Detailed service offerings with pricing
- **Portfolio**: Project showcase with filtering capabilities
- **Testimonials**: Client reviews with interactive carousel
- **Contact**: Contact form and office locations

### Technical Features
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **React Icons**: Scalable SVG icons
- **Environment Variables**: Configurable Google Form URL
- **SEO Optimized**: Meta tags and structured data
- **PWA Ready**: Service worker and manifest

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/techdaddy-portfolio.git
   cd techdaddy-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file and add your Google Form URL:
   ```
   REACT_APP_GOOGLE_FORM_URL=https://forms.google.com/your-form-id-here
   REACT_APP_SITE_URL=https://techdaddy.global
   REACT_APP_COMPANY_NAME=TechDaddy
   REACT_APP_COMPANY_EMAIL=contact@techdaddy.global
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors & Theme
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Content
- Update company information in `src/pages/`
- Modify services in `src/pages/Services.js`
- Add/remove team members in `src/pages/About.js`
- Update testimonials in `src/pages/Testimonials.js`

### Logo & Assets
- Replace logo images in `public/` directory
- Update favicon and manifest icons
- Add company images to `src/assets/`

### Google Form Integration
1. Create a Google Form for service registration
2. Update the URL in `.env` file
3. The "Register for Service" buttons will redirect to your form

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a React app
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Add environment variables in Netlify dashboard

### Other Platforms
The app can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- DigitalOcean App Platform

## 🔧 Configuration

### Environment Variables
- `REACT_APP_GOOGLE_FORM_URL`: Your Google Form URL for service registration
- `REACT_APP_SITE_URL`: Your website URL
- `REACT_APP_COMPANY_NAME`: Company name
- `REACT_APP_COMPANY_EMAIL`: Contact email

### SEO Configuration
Update meta tags in `public/index.html`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Favicon and manifest

## 📄 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── Button.js       # Reusable button component
│   ├── Card.js         # Glass effect card component
│   ├── StatsCounter.js # Animated counter component
│   └── BackgroundAnimation.js # Animated background
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   ├── Portfolio.js    # Portfolio page
│   ├── Testimonials.js # Testimonials page
│   └── Contact.js      # Contact page
├── context/            # React context
│   └── ThemeContext.js # Theme management
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## 🎯 Performance

- **Lazy Loading**: Components load on demand
- **Optimized Images**: Using Unsplash for optimized images
- **Minified CSS**: Tailwind CSS is purged in production
- **Fast Animations**: Hardware-accelerated animations with Framer Motion

## 🔒 Security

- **Environment Variables**: Sensitive data stored in .env
- **HTTPS Ready**: Configured for secure deployment
- **XSS Protection**: React's built-in XSS protection
- **Content Security Policy**: Ready for CSP headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email contact@techdaddy.global or create an issue in the repository.

---

**TechDaddy** - Transforming businesses through innovative technology solutions. 