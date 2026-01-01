# Abdisatar Yusuf - Portfolio Website

A modern, responsive portfolio website for **Abdisatar Yusuf**, a Front-End Developer & UI/UX Designer. This portfolio features dark/light mode toggle, authentication system, CV download functionality, and a fully responsive design.

![Portfolio Preview](https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🌟 Features

### ✅ **Core Features**
- **Modern UI/UX Design** - Clean, professional interface with smooth animations
- **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Toggle between themes with persistent preference storage
- **Smooth Animations** - Fade-in, slide-in effects on scroll
- **Hamburger Menu** - Mobile-friendly navigation with animations

### ✅ **Portfolio Sections**
1. **Hero Section** - Introduction with profile image and call-to-action buttons
2. **About Me** - Personal introduction and technical skills display
3. **Experience** - Professional experience cards with technologies used
4. **Education** - Education and certification cards
5. **Testimonials** - Client testimonials with profile images
6. **Contact** - Contact form with social media links

### ✅ **Advanced Features**
- **Authentication System** - Login/Register with email/password
- **Social Login** - Google, Facebook, GitHub authentication (demo/ready for production)
- **CV Download** - Download CV in PDF, DOCX, or TXT format
- **Interactive Elements** - Hover effects, smooth scrolling, modal popups
- **Form Validation** - Client-side validation for all forms

## 🚀 Quick Start

### Option 1: Use as-is (Demo Mode)
1. **Download the files**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Open `index.html` in your browser**
   - Double-click the `index.html` file
   - Or use a local server: `python -m http.server 8000`

### Option 2: Customize for Production

#### Step 1: Replace Placeholder Content
1. **Update profile information** in `index.html`:
   - Name: "Abdisatar Yusuf"
   - Contact details
   - Experience/Education sections
   - Testimonials

2. **Add your profile image**:
   ```html
   <!-- Replace in index.html -->
   <img src="assets/images/your-photo.jpg" alt="Your Name">
   ```

3. **Add your CV files** to `assets/cv/` folder:
   - `Abdisatar_Yusuf_CV.pdf`
   - `Abdisatar_Yusuf_CV.docx`
   - `Abdisatar_Yusuf_CV.txt`

#### Step 2: Customize Styling
1. **Modify color scheme** in `styles.css`:
   ```css
   :root {
       --primary-color: #2563eb; /* Change this */
       --secondary-color: #7c3aed;
       /* ... other variables */
   }
   ```

2. **Update fonts** (optional):
   - Change Google Fonts import in `index.html`
   - Update font-family in `styles.css`

#### Step 3: Deploy Authentication (Optional)
See [Authentication Setup](#authentication-setup) section below.

## 🛠️ Project Structure

```
portfolio-website/
│
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── main.js                 # All JavaScript functionality
│
├── assets/                 # Assets folder
│   ├── images/             # Profile and project images
│   │   └── profile.jpg     # Your profile image
│   │
│   ├── cv/                 # CV files
│   │   ├── Abdisatar_Yusuf_CV.pdf
│   │   ├── Abdisatar_Yusuf_CV.docx
│   │   └── Abdisatar_Yusuf_CV.txt
│   │
│   └── icons/              # Favicon and other icons
│
├── README.md              # This file
└── LICENSE                # License file
```

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **JavaScript (ES6+)** - DOM manipulation, Async/Await, Local Storage
- **Font Awesome** - Icons
- **Google Fonts** - Typography
- **No Frameworks** - Pure vanilla implementation

## 🔐 Authentication Setup

### Option A: Firebase (Recommended for Production)

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add Project" and follow the wizard

2. **Enable Authentication**
   - Go to Authentication → Sign-in method
   - Enable: Email/Password, Google, Facebook, GitHub
   - Add your domain to authorized domains

3. **Get Firebase Config**
   - Go to Project Settings → General
   - Scroll to "Your apps" section
   - Copy the firebaseConfig object

4. **Update the Code**
   - Uncomment Firebase code in `main.js`
   - Add your config values
   - Update social auth provider settings

### Option B: Backend API

For a custom backend, you'll need:

1. **Node.js/Express Server** - API endpoints
2. **MongoDB/PostgreSQL** - Database
3. **JWT Authentication** - Token-based auth
4. **OAuth Setup** - For social login

Example backend structure:
```javascript
// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Routes: /api/register, /api/login, /api/logout
```

## 📱 Responsive Breakpoints

| Device | Breakpoint | Features |
|--------|------------|----------|
| Mobile | ≤ 768px | Hamburger menu, stacked layout |
| Tablet | 769px - 992px | Adjusted spacing, responsive grid |
| Desktop | ≥ 993px | Full navigation, side-by-side layouts |

## 🎨 Customization Guide

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;     /* Main brand color */
    --secondary-color: #7c3aed;   /* Secondary accent */
    --accent-color: #06b6d4;      /* Highlights */
    --bg-color: #ffffff;          /* Background */
    --text-color: #1f2937;        /* Text color */
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style in `styles.css`
3. Add scroll animation in `main.js`

### Modifying Animations
Adjust animation classes in `styles.css`:
```css
.fade-in {
    animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All links work correctly
- [ ] Forms validate properly
- [ ] Mobile menu opens/closes
- [ ] Dark/light mode toggle works
- [ ] CV download modal functions
- [ ] Authentication flows work
- [ ] Responsive on all screen sizes
- [ ] Animations trigger on scroll

### Browser Compatibility
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## 🚀 Deployment

### Option 1: Netlify (Recommended)
1. Push to GitHub
2. Connect repo to Netlify
3. Configure build settings (not needed for static site)
4. Add custom domain (optional)

### Option 2: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select main branch as source
4. Save and wait for deployment

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Font Awesome** for icons
- **Google Fonts** for typography
- **Unsplash** for placeholder images
- **Firebase** for authentication infrastructure
- All open-source contributors

## 🔗 Useful Links

- [Firebase Documentation](https://firebase.google.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [JavaScript ES6 Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email satexza12@gmail.com or create an issue in the GitHub repository.

---

**⭐ Star this repo if you found it useful!**

---

*Last updated: Janaury 2026*  
*Maintained by: Abdisatar Yusuf*