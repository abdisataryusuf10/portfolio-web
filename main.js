// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme or prefer-color-scheme
const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    body.classList.remove('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        const isClickInsideNav = navLinks.contains(e.target) || hamburger.contains(e.target);
        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Authentication Modal
const authBtn = document.getElementById('auth-btn');
const authModal = document.getElementById('auth-modal');
const closeAuthModal = document.getElementById('close-auth-modal');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');

authBtn.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.style.display = 'flex';
    // Close mobile menu if open
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = 'hidden';
});

closeAuthModal.addEventListener('click', () => {
    authModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === cvModal) {
        cvModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Auth tab switching
authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        
        // Update active tab
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show corresponding form
        authForms.forEach(form => {
            form.classList.remove('active');
            if (form.id === `${tabId}-form`) {
                form.classList.add('active');
            }
        });
    });
});

// Form submissions
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simulate login (in real app, connect to backend)
    if (email && password) {
        alert(`Login successful! Welcome back.`);
        authModal.style.display = 'none';
        document.getElementById('login-form').reset();
        document.body.style.overflow = 'auto';
    } else {
        alert('Please fill in all fields');
    }
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (name && email && password) {
        alert(`Registration successful! Welcome ${name}.`);
        authModal.style.display = 'none';
        document.getElementById('register-form').reset();
        document.body.style.overflow = 'auto';
    } else {
        alert('Please fill in all fields');
    }
});

// Social auth buttons
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        let provider = 'Unknown';
        if (btn.classList.contains('google')) provider = 'Google';
        if (btn.classList.contains('facebook')) provider = 'Facebook';
        if (btn.classList.contains('github')) provider = 'GitHub';
        
        alert(`${provider} authentication would be implemented here.\nIn a real app, this would redirect to OAuth service.`);
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// CV Download Modal
const downloadCvBtn = document.getElementById('download-cv-btn');
const cvModal = document.getElementById('cv-modal');
const closeCvModal = document.getElementById('close-cv-modal');
const cvFormatBtns = document.querySelectorAll('.cv-format-btn');

downloadCvBtn.addEventListener('click', () => {
    cvModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeCvModal.addEventListener('click', () => {
    cvModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

cvFormatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const format = btn.getAttribute('data-format');
        downloadCV(format);
    });
});

function downloadCV(format) {
    // Create CV content based on format
    let content, filename, mimeType;
    
    const cvData = `
ABDISATAR YUSUF
Front-End Developer & UI/UX Designer

CONTACT INFORMATION
Email: satexza12@gmail.com
Phone: +25-912-110-338
Location: Jigjiga, Ethiopia
Portfolio: www.abdisatar.dev
LinkedIn: linkedin.com/in/https://www.linkedin.com/in/abdisatar-yusuf-685460327?
GitHub: github.com/abdisataryusuf10

PROFESSIONAL SUMMARY
Passionate Front-End Developer with 5+ years of experience creating responsive, 
user-friendly web applications. Skilled in HTML, CSS, JavaScript, React, and Vue.js. 
Strong background in UI/UX design principles and cross-browser compatibility.

EXPERIENCE

Information Technology (2023 - 2024)
Samaritan's Purse International Relief, IT Assistant, Onsite, Somali Region-Jigjiga, Ethiopia
- Lead front-end development for 10+ client projects
- Implement responsive designs and optimize performance
- Mentor 3 junior IT staff members
- Technologies: React, TypeScript, Redux, GraphQL

Information Technology (2024 - 2025)
RDV - Relief Development for Vulnerable, Jigjiga, Ethiopia
- Built and maintained company websites
- Implemented new features and optimized performance
- Technologies: HTML/CSS, JavaScript, jQuery, PHP

EDUCATION

Diplama's in Information Technology (2020 - 2023)
Degahbur Polytechnic and Sc College, Degahbur, Ethiopia
Specialization: Human-Computer Interaction and Web Technologies
GPA: 3.9/4.0
SKILLS
- Frontend: HTML5, CSS3, JavaScript, React, Vue.js, TypeScript, SASS
- Tools: Git, Webpack, Figma, Adobe Creative Suite
- Soft Skills: Team Leadership, Problem Solving, Communication

CERTIFICATIONS
- Meta Front-End Developer Professional Certificate (2022)
- Google UX Design Professional Certificate (2021)
- AWS Certified Cloud Practitioner (2020)

PROJECTS
- E-commerce Platform: Built responsive React application with Redux state management
- Portfolio Website: Created interactive portfolio with animations and dark mode
- Task Management App: Developed Vue.js application with drag-and-drop functionality
`;

    switch(format) {
        case 'pdf':
            // In a real app, generate PDF using a library like jsPDF
            alert('PDF generation would require a backend service or PDF library.\nFor now, downloading as text file.');
            format = 'txt';
            // Fall through to txt case
        case 'txt':
            content = cvData;
            filename = 'Abdisatar_Yusuf_CV.txt';
            mimeType = 'text/plain';
            break;
        case 'docx':
            alert('Word document generation requires backend service.\nFor now, downloading as text file.');
            format = 'txt';
            content = cvData;
            filename = 'Abdisatar_Yusuf_CV.txt';
            mimeType = 'text/plain';
            break;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    cvModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    alert(`CV downloaded as ${format.toUpperCase()} file!`);
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    
    // Simulate form submission
    setTimeout(() => {
        alert(`Thank you for your message, ${name}! I will get back to you soon.`);
        e.target.reset();
    }, 500);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
});

// Add active class to navbar on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
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

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.fade-in, .fade-up, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Initialize animations on page load
window.addEventListener('DOMContentLoaded', () => {
    // Trigger initial animations
    document.querySelectorAll('.fade-in, .fade-up, .slide-in-left, .slide-in-right').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('animated');
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // Reset mobile menu state on larger screens
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});