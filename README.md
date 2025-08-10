# Software Testing Portfolio

A beautiful, modern, and responsive portfolio website showcasing software testing skills and projects. Built with HTML, CSS, and JavaScript with smooth animations and a cyan color theme.

## 🎨 Features

- **Modern Design**: Clean, minimalistic design with smooth animations
- **Cyan Color Theme**: Beautiful gradient colors throughout the site
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Interactive Elements**: Hover effects, scroll animations, and more
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript**: Interactive functionality and smooth scrolling
- **Font Awesome**: Icons for better visual appeal
- **Google Fonts**: Inter font family for modern typography

## 📁 File Structure

```
testing-portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎯 Sections

1. **Navigation**: Fixed navbar with smooth scrolling
2. **Hero Section**: Animated title and call-to-action buttons
3. **Skills Section**: Showcase of testing expertise (Selenium, JMeter, Manual Testing, etc.)
4. **Projects Section**: Featured projects with hover effects
5. **Contact Section**: Contact information and form
6. **Footer**: Social links and copyright

## 🛠️ Customization Guide

### Personal Information
Update the following in `index.html`:

1. **Contact Information** (around line 280):
   ```html
   <p>your.email@example.com</p>
   <p>linkedin.com/in/yourprofile</p>
   <p>github.com/yourusername</p>
   ```

2. **Social Links** (around line 320):
   ```html
   <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
   <a href="#" class="social-link"><i class="fab fa-github"></i></a>
   <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
   ```

### Skills Section
Modify the skills cards in the skills section to match your expertise:

```html
<div class="skill-card" data-aos="fade-up">
    <div class="skill-icon">
        <i class="fas fa-code"></i>
    </div>
    <h3>Your Skill</h3>
    <p>Description of your skill and experience.</p>
    <div class="skill-tags">
        <span class="tag">Tag 1</span>
        <span class="tag">Tag 2</span>
        <span class="tag">Tag 3</span>
    </div>
</div>
```

### Projects Section
Update the project cards with your actual projects:

```html
<div class="project-card" data-aos="fade-up">
    <div class="project-image">
        <div class="project-overlay">
            <div class="project-links">
                <a href="your-project-url" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                <a href="your-github-url" class="project-link"><i class="fab fa-github"></i></a>
            </div>
        </div>
        <div class="project-placeholder">
            <i class="fas fa-shopping-cart"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Description of your project and what you accomplished.</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
            <span class="tech-tag">Technology 3</span>
        </div>
    </div>
</div>
```

### Color Customization
To change the color theme, update the CSS variables in `styles.css`:

```css
/* Primary cyan colors */
--primary-color: #00b7ff;
--secondary-color: #0099cc;
--gradient: linear-gradient(135deg, #00b7ff, #0099cc);
```

## 🎨 Animation Features

- **Typing Animation**: Hero title types out on page load
- **Floating Elements**: Animated icons in the hero section
- **Scroll Animations**: Elements animate as you scroll
- **Hover Effects**: Interactive hover animations on cards and buttons
- **Parallax Effects**: Subtle parallax scrolling effects
- **Smooth Scrolling**: Smooth navigation between sections

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Optimized typography for all screen sizes

## 🚀 Getting Started

1. **Open the files**: Open `index.html` in your web browser
2. **Customize content**: Update the personal information, skills, and projects
3. **Deploy**: Upload the files to your web hosting service

## 🌐 Deployment Options

### GitHub Pages
1. Create a new repository on GitHub
2. Upload your portfolio files
3. Go to Settings > Pages
4. Select source branch and save

### Netlify
1. Drag and drop your portfolio folder to Netlify
2. Your site will be live instantly
3. Get a custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider sharing them with the community!

## 📞 Support

If you need help customizing your portfolio or have questions, feel free to reach out!

---

**Happy Testing! 🧪✨** 