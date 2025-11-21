// ========================================
// SCROLL ANIMATION SYSTEM
// ========================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        } else {
            entry.target.classList.remove('section-visible');
        }
    });
};

const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

const sections = document.querySelectorAll('.section-animate');
sections.forEach(section => {
    sectionObserver.observe(section);
});

// ========================================
// MOBILE MENU
// ========================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// ========================================
// FAQ ACCORDION
// ========================================

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-question').forEach(q => {
            q.classList.remove('active');
            const otherAnswer = q.nextElementSibling;
            otherAnswer.classList.remove('show');
            otherAnswer.classList.add('hidden');
        });
        
        // Toggle current FAQ
        if (!isActive) {
            question.classList.add('active');
            answer.classList.remove('hidden');
            answer.classList.add('show');
        }
    });
});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            mobileMenu.classList.add('hidden');
        }
    });
});

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================

window.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        setTimeout(() => {
            homeSection.classList.add('section-visible');
        }, 100);
    }
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
    
    lastScroll = currentScroll;
});