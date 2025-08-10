const isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

if (isIOS) {
    // Fix for iOS vh unit issue
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Update on resize/orientation change
    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}

// Prevent elastic scrolling on iOS
document.body.addEventListener('touchmove', function(e) {
    if (!e.target.closest('.nav-menu, .contact-form')) {
        e.preventDefault();
    }
}, { passive: false });

// Enhanced Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('nav-open'); // Prevent body scroll when menu is open
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('nav-open');
}));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('nav-open');
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('nav-open');
    }
});

// Enhanced smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Navbar background on scroll with throttling
let ticking = false;
function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

// Enhanced Scroll Animation Observer with better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(el => observer.observe(el));
});

// Responsive Parallax effect for floating elements
function updateParallax() {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll('.floating-icon');
    const isMobile = window.innerWidth <= 768;
    
    floatingElements.forEach((element, index) => {
        if (isMobile) {
            // Disable parallax on mobile for better performance
            element.style.transform = 'translateY(0)';
        } else {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        }
    });
}

// Throttled scroll event for parallax
let parallaxTicking = false;
window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
        requestAnimationFrame(updateParallax);
        parallaxTicking = true;
    }
});

// Fast title loading - no typing animation
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Title loads immediately without typing animation
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }
});

// Enhanced Skill cards hover effect with touch support
document.querySelectorAll('.skill-card').forEach(card => {
    let isHovered = false;
    
    const handleEnter = () => {
        isHovered = true;
        if (window.innerWidth > 768) { // Only on desktop
            card.style.transform = 'translateY(-8px) scale(1.02)';
        }
    };
    
    const handleLeave = () => {
        isHovered = false;
        if (window.innerWidth > 768) { // Only on desktop
            card.style.transform = 'translateY(0) scale(1)';
        }
    };
    
    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mouseleave', handleLeave);
    
    // Touch support for mobile
    card.addEventListener('touchstart', () => {
        if (window.innerWidth <= 768) {
            card.style.transform = 'scale(0.98)';
        }
    });
    
    card.addEventListener('touchend', () => {
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

// Enhanced Project cards hover effect with touch support
document.querySelectorAll('.project-card').forEach(card => {
    let isHovered = false;
    
    const handleEnter = () => {
        isHovered = true;
        if (window.innerWidth > 768) { // Only on desktop
            card.style.transform = 'translateY(-8px) scale(1.02)';
        }
    };
    
    const handleLeave = () => {
        isHovered = false;
        if (window.innerWidth > 768) { // Only on desktop
            card.style.transform = 'translateY(0) scale(1)';
        }
    };
    
    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mouseleave', handleLeave);
    
    // Touch support for mobile
    card.addEventListener('touchstart', () => {
        if (window.innerWidth <= 768) {
            card.style.transform = 'scale(0.98)';
        }
    });
    
    card.addEventListener('touchend', () => {
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

// Enhanced Contact form handling with better validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();
        
        // Enhanced validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (name.length < 2) {
            showNotification('Name must be at least 2 characters long', 'error');
            return;
        }
        
        // Enhanced email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        if (message.length < 10) {
            showNotification('Message must be at least 10 characters long', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Notification system for better UX
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #00b7ff, #0099cc)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Enhanced smooth reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY + windowHeight > sectionTop + sectionHeight * 0.3) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize section animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', throttle(revealOnScroll, 16));
    revealOnScroll(); // Check on initial load
});

// Enhanced Floating elements animation
function animateFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-icon');
    
    floatingElements.forEach((element, index) => {
        const delay = index * 0.5;
        element.style.animationDelay = `${delay}s`;
    });
}

// Initialize floating elements and testing animation
document.addEventListener('DOMContentLoaded', () => {
    animateFloatingElements();
    
    // Add testing animation effects
    const testElements = document.querySelectorAll('.test-element');
    testElements.forEach((element, index) => {
        // Add click interaction
        element.addEventListener('click', () => {
            element.style.transform = 'scale(1.1)';
            element.style.boxShadow = '0 0 30px rgba(0, 183, 255, 0.8)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
                element.style.boxShadow = '0 0 0 rgba(0, 183, 255, 0.3)';
            }, 300);
        });
        
        // Add hover effects (desktop only)
        if (window.innerWidth > 768) {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'scale(1.08)';
                element.style.boxShadow = '0 0 25px rgba(0, 183, 255, 0.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)';
                element.style.boxShadow = '0 0 0 rgba(0, 183, 255, 0.3)';
            });
        }
        
        // Touch support for mobile
        element.addEventListener('touchstart', () => {
            if (window.innerWidth <= 768) {
                element.style.transform = 'scale(1.05)';
            }
        });
        
        element.addEventListener('touchend', () => {
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
    
    // Enhanced button click effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Preloader animation
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Enhanced loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    });
    
    img.style.opacity = '0';
    img.style.transform = 'scale(0.8)';
    img.style.transition = 'all 0.3s ease';
});

// Enhanced scroll to top button with responsive positioning
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    
    // Responsive positioning
    const getButtonPosition = () => {
        const isMobile = window.innerWidth <= 768;
        return {
            bottom: isMobile ? '20px' : '30px',
            right: isMobile ? '20px' : '30px',
            width: isMobile ? '45px' : '50px',
            height: isMobile ? '45px' : '50px'
        };
    };
    
    const position = getButtonPosition();
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: ${position.bottom};
        right: ${position.right};
        width: ${position.width};
        height: ${position.height};
        background: linear-gradient(135deg, #00b7ff, #0099cc);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 183, 255, 0.3);
        font-size: ${window.innerWidth <= 768 ? '1rem' : '1.2rem'};
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Enhanced hover effect
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'scale(1.1)';
        scrollBtn.style.boxShadow = '0 6px 20px rgba(0, 183, 255, 0.4)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'scale(1)';
        scrollBtn.style.boxShadow = '0 4px 15px rgba(0, 183, 255, 0.3)';
    });
    
    // Touch support for mobile
    scrollBtn.addEventListener('touchstart', () => {
        if (window.innerWidth <= 768) {
            scrollBtn.style.transform = 'scale(0.95)';
        }
    });
    
    scrollBtn.addEventListener('touchend', () => {
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                scrollBtn.style.transform = 'scale(1)';
            }, 150);
        }
    });
    
    // Update position on resize
    window.addEventListener('resize', () => {
        const newPosition = getButtonPosition();
        scrollBtn.style.bottom = newPosition.bottom;
        scrollBtn.style.right = newPosition.right;
        scrollBtn.style.width = newPosition.width;
        scrollBtn.style.height = newPosition.height;
        scrollBtn.style.fontSize = window.innerWidth <= 768 ? '1rem' : '1.2rem';
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// Enhanced Performance optimization: Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations
}, 16)); // ~60fps

// Add CSS for body when nav is open
const style = document.createElement('style');
style.textContent = `
    body.nav-open {
        overflow: hidden;
    }
    
    @media (max-width: 768px) {
        body.nav-open {
            position: fixed;
            width: 100%;
        }
    }
`;
document.head.appendChild(style);

// Responsive font size adjustment
function adjustFontSizes() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    // Adjust hero title based on viewport
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const baseSize = Math.min(vw * 0.08, vh * 0.08);
        const clampedSize = Math.max(1.5, Math.min(4, baseSize));
        heroTitle.style.fontSize = `${clampedSize}rem`;
    }
}

// Call on load and resize
window.addEventListener('load', adjustFontSizes);
window.addEventListener('resize', throttle(adjustFontSizes, 100));

// Add loading state for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Remove loading class after everything is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 500);
    });
});

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body.loading {
        overflow: hidden;
    }
    
    body.loading::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #f8fafc 0%, #e2f2ff 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body.loading::after {
        content: '';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border: 3px solid rgba(0, 183, 255, 0.3);
        border-top: 3px solid #00b7ff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        z-index: 10000;
    }
    
    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;
document.head.appendChild(loadingStyle); 

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: false
});

