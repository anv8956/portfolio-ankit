/**
 * Engineer Portfolio - JavaScript
 * Handles all interactive functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavbar();
  initThemeToggle();
  initMobileMenu();
  initSkillsTabs();
  initScrollAnimations();
  initSmoothScroll();
  initContactForm();
});

/**
 * Navbar functionality
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  
  // Change navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Set active nav link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * Dark/Light Theme Toggle
 */
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  function updateThemeIcon(theme) {
    const icon = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.innerHTML = icon;
  }
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Skills Tabs
 */
function initSkillsTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const category = btn.dataset.category;
      
      skillCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.classList.add('visible');
          }, 100);
        } else {
          card.classList.remove('visible');
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/**
 * Scroll Animations using Intersection Observer
 */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for multiple elements
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        
        // Trigger skill progress animation
        if (entry.target.classList.contains('skill-card')) {
          const progressBar = entry.target.querySelector('.skill-progress');
          if (progressBar) {
            const level = progressBar.style.getPropertyValue('--skill-level');
            progressBar.style.width = level;
          }
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  
  // Observe skill cards
  document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.dataset.delay = index * 100;
    observer.observe(card);
  });
  
  // Animate stats numbers
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    observer.observe(stat);
  });
}

/**
 * Smooth Scroll for Navigation
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Contact Form Handling
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const formMessage = document.querySelector('.form-message');
  
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    // Validate form
    if (!validateForm(data)) {
      return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual endpoint)
    try {
      await simulateSubmission(data);
      
      // Show success message
      formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
      formMessage.className = 'form-message success';
      form.reset();
    } catch (error) {
      // Show error message
      formMessage.textContent = 'Failed to send message. Please try again.';
      formMessage.className = 'form-message error';
    } finally {
      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.className = 'form-message';
      }, 5000);
    }
  });
  
  function validateForm(data) {
    let isValid = true;
    
    // Validate name
    if (!data.name || data.name.trim().length < 2) {
      showFieldError('name');
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      showFieldError('email');
      isValid = false;
    }
    
    // Validate message
    if (!data.message || data.message.trim().length < 10) {
      showFieldError('message');
      isValid = false;
    }
    
    return isValid;
  }
  
  function showFieldError(fieldName) {
    const field = form.querySelector(`[name="${fieldName}"]`);
    if (field) {
      field.style.borderColor = '#ef4444';
      setTimeout(() => {
        field.style.borderColor = '';
      }, 3000);
    }
  }
  
  function simulateSubmission(data) {
    return new Promise((resolve) => {
      // Simulate network delay
      setTimeout(() => {
        console.log('Form submitted:', data);
        resolve({ success: true });
      }, 1500);
    });
  }
}

/**
 * Animate statistics numbers
 */
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        stat.textContent = Math.floor(current) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        stat.textContent = target + '+';
      }
    };
    
    updateCounter();
  });
}

// Add stats animation when visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}

/**
 * Add parallax effect to floating shapes
 */
window.addEventListener('scroll', () => {
  const shapes = document.querySelectorAll('.shape');
  const scrolled = window.pageYOffset;
  
  shapes.forEach((shape, index) => {
    const speed = 0.1 + (index * 0.05);
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

/**
 * Preloader (optional - removes on page load)
 */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
