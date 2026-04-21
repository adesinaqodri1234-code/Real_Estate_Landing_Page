const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.style.boxShadow  = '0 4px 20px rgba(0, 0, 0, 0.08)';
        navbar.style.background = '#fff';
        navbar.style.position   = 'sticky';
        navbar.style.top        = '0';
        navbar.style.zIndex     = '1000';
    } else {
        navbar.style.boxShadow = 'none';
    }
});


// ============================================================
//  2. HIGHLIGHT ACTIVE NAVBAR LINK
// ============================================================

const navLinks = document.querySelectorAll('.navbar .links a');

navLinks.forEach(function (link) {
    if (link.href === window.location.href) {
        link.style.color      = '#69B99D';
        link.style.fontWeight = '700';
    }
});


// ============================================================
//  3. SERVICE CARDS — FADE IN ON SCROLL
//  Each service card fades in as you scroll down to it
// ============================================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(function (card) {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

const serviceObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
            setTimeout(function () {
                entry.target.style.opacity   = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);

            serviceObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(function (card) {
    serviceObserver.observe(card);
});


// ============================================================
//  4. PROCESS STEPS — COUNT UP ANIMATION
//  The step numbers (01, 02, 03...) animate in one by one
//  when the process section scrolls into view
// ============================================================

const processSteps = document.querySelectorAll('.process-step');

// Hide them initially
processSteps.forEach(function (step) {
    step.style.opacity   = '0';
    step.style.transform = 'translateY(30px)';
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

const processObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Reveal each step one after another
            processSteps.forEach(function (step, index) {
                setTimeout(function () {
                    step.style.opacity   = '1';
                    step.style.transform = 'translateY(0)';
                }, index * 200); // 200ms apart
            });

            processObserver.disconnect(); // only do this once
        }
    });
}, { threshold: 0.2 });

const processSection = document.querySelector('.service-process');
if (processSection) {
    processObserver.observe(processSection);
}


// ============================================================
//  5. CTA BUTTON — GO TO CONTACT PAGE
//  The button in the green CTA section sends users to
//  the contact page when clicked
// ============================================================

const ctaLink = document.querySelector('.service-cta a');

if (ctaLink) {
    ctaLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'contact_index.html';
    });
}
