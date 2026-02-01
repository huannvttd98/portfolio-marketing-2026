// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

closeMenu?.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

// Close mobile menu when clicking outside
mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-xl');
    } else {
        navbar.classList.remove('shadow-xl');
    }
});

// GSAP Animations

// Hero Section Animation
gsap.from('#hero-content h1', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('#hero-content p', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power4.out'
});

gsap.from('#hero-content .flex.gap-4', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: 'power4.out'
});

gsap.from('#hero-content .flex.gap-8', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.7,
    ease: 'power4.out'
});

gsap.from('#hero-image', {
    duration: 1.2,
    x: 100,
    opacity: 0,
    delay: 0.4,
    ease: 'power4.out'
});

// Service Cards Animation - Interactive & Responsive
gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        delay: (index % 3) * 0.1, // Stagger effect per row
        ease: 'power3.out'
    });
});

// Portfolio Cards Animation
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '#portfolio',
        start: 'top 80%',
    },
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    stagger: 0.15,
    ease: 'back.out(1.7)'
});

// Testimonials Animation
gsap.from('.testimonial-card', {
    scrollTrigger: {
        trigger: '#testimonials',
        start: 'top 80%',
    },
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Contact Form Animation
gsap.from('#contact form', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 70%',
    },
    duration: 1,
    y: 80,
    opacity: 0,
    ease: 'power3.out'
});

// Section Title Animations
gsap.utils.toArray('section h2').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 85%',
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Floating Animation for Hero Icons
gsap.to('#hero-image .relative > div', {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Numbers Counter Animation
const stats = document.querySelectorAll('#hero-content h3');
stats.forEach(stat => {
    const target = parseInt(stat.textContent);
    let current = 0;
    const increment = target / 50;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            stat.textContent = Math.ceil(current) + (stat.textContent.includes('%') ? '%' : '+');
            requestAnimationFrame(updateCounter);
        } else {
            stat.textContent = target + (stat.textContent.includes('%') ? '%' : '+');
        }
    };

    setTimeout(updateCounter, 1000);
});

// Parallax Effect for Hero Section
gsap.to('#hero-content', {
    scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
    },
    y: 150,
    opacity: 0.5
});

// Service Cards Hover Animation Enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Project Cards Advanced Hover
document.querySelectorAll('.project-card').forEach(card => {
    const overlay = card.querySelector('.project-overlay');

    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Form Input Focus Animation
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', function() {
        gsap.to(this, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    input.addEventListener('blur', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    width: 0%;
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = progress + '%';
});

// Reveal animations for elements entering viewport
const revealElements = document.querySelectorAll('.service-card, .project-card, .testimonial-card');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Cursor Follower Effect (Optional Enhancement)
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(59, 130, 246, 0.3);
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: transform 0.2s ease;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.3,
        ease: 'power2.out'
    });
});

// Add interactive hover effects for buttons
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            duration: 0.3
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.3
        });
    });
});

console.log('🚀 Portfolio Marketing Landing Page loaded successfully!');
