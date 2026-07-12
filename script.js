 // Mobile Menu
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };

        // Close menu when clicking a link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('fa-times');
                navbar.classList.remove('active');
            });
        });

        // Sticky Header and Back to Top Button
        window.onscroll = () => {
            menuIcon.classList.remove('fa-times');
            navbar.classList.remove('active');

            if (window.scrollY > 100) {
                document.querySelector('header').classList.add('sticky');
                document.querySelector('.back-to-top').classList.add('active');
            } else {
                document.querySelector('header').classList.remove('sticky');
                document.querySelector('.back-to-top').classList.remove('active');
            }
        };

        // Typed.js Animation
        const typed = new Typed('.multiple-text', {
            strings: ['HTML Developer', 'CSS Specialist', 'Frontend Developer', 'Web Designer'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });

        // Form submission
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Animate elements when they come into view
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.skills-box, .portfolio-box, .about-img img');

            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial styles for animation
        document.querySelectorAll('.skills-box, .portfolio-box, .about-img img').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.5s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on page load
        animateOnScroll();