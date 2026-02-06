/* ========== GLOBAL STYLES ========== */

:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --border-color: #e5e7eb;
    --bg-light: #f9fafb;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-dark);
    line-height: 1.6;
    background: #ffffff;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ========== NAVIGATION ========== */

.navbar {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 100;
    padding: 15px 0;
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    color: var(--text-dark);
}

.logo-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
}

.nav-menu {
    display: flex;
    gap: 30px;
    list-style: none;
    align-items: center;
}

.nav-menu a {
    color: var(--text-dark);
    text-decoration: none;
    font-size: 14px;
    transition: var(--transition);
}

.nav-menu a:hover {
    color: var(--primary-color);
}

.btn-connect {
    background: var(--text-dark) !important;
    color: white !important;
    padding: 8px 16px !important;
    border-radius: 5px;
    font-size: 14px;
}

.btn-connect:hover {
    background: var(--primary-color) !important;
}

/* ========== HERO SECTION ========== */

.hero {
    padding: 80px 0;
    text-align: center;
}

.tagline {
    display: inline-block;
    color: var(--primary-color);
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: 52px;
    line-height: 1.2;
    margin-bottom: 20px;
    color: var(--text-dark);
    font-weight: 700;
}

.hero-subtitle {
    font-size: 18px;
    color: var(--text-light);
    max-width: 700px;
    margin: 0 auto 40px;
    line-height: 1.7;
}

.cta-group {
    display: flex;
    gap: 15px;
    justify-content: center;
}

/* ========== BUTTONS ========== */

.btn {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    font-size: 15px;
}

.btn-primary {
    background: var(--text-dark);
    color: white;
}

.btn-primary:hover {
    background: var(--primary-color);
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: var(--text-dark);
    border: 1px solid var(--border-color);
}

.btn-secondary:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
}

/* ========== SECTIONS ========== */

section {
    padding: 80px 0;
    border-bottom: 1px solid var(--border-color);
}

section:last-of-type {
    border-bottom: none;
}

h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--text-dark);
    text-align: center;
}

.section-subtitle {
    font-size: 16px;
    color: var(--text-light);
    text-align: center;
    margin-bottom: 50px;
}

/* ========== JOURNEY SECTION ========== */

.journey {
    background: var(--bg-light);
}

.timeline {
    display: grid;
    gap: 40px;
    margin-top: 60px;
}

.timeline-item {
    background: white;
    padding: 30px;
    border-radius: 8px;
    border-left: 4px solid var(--primary-color);
    transition: var(--transition);
}

.timeline-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateX(5px);
}

.timeline-marker {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 15px;
}

.timeline-item h3 {
    font-size: 20px;
    margin-bottom: 12px;
    color: var(--text-dark);
}

.timeline-item p {
    color: var(--text-light);
    line-height: 1.7;
}

/* ========== SKILLS GRID ========== */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 60px;
}

.skill-card {
    background: white;
    padding: 30px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    transition: var(--transition);
}

.skill-card:hover {
    border-color: var(--primary-color);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
}

.skill-card h3 {
    font-size: 18px;
    margin-bottom: 12px;
    color: var(--text-dark);
}

.skill-card p {
    color: var(--text-light);
    font-size: 15px;
    line-height: 1.7;
}

/* ========== ENGAGEMENT SECTION ========== */

.engagement {
    background: white;
}

.engagement-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 60px;
}

.engagement-card {
    background: var(--bg-light);
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    transition: var(--transition);
}

.engagement-card:hover {
    background: white;
    border: 1px solid var(--primary-color);
}

.engagement-card h3 {
    font-size: 18px;
    margin-bottom: 12px;
    color: var(--text-dark);
}

.engagement-card p {
    color: var(--text-light);
    font-size: 15px;
    line-height: 1.6;
}

/* ========== AMPRA SECTION ========== */

.ampra {
    background: var(--bg-light);
}

.ampra-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.badge {
    display: inline-block;
    background: var(--primary-color);
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.ampra h2 {
    margin-top: 20px;
    margin-bottom: 20px;
}

.ampra p {
    color: var(--text-light);
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 20px;
}

.ampra .btn {
    margin-top: 20px;
}

/* ========== CTA SECTION ========== */

.cta {
    background: white;
}

.cta-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.cta h2 {
    font-size: 42px;
    margin-bottom: 20px;
}

.cta > .container > p {
    color: var(--text-light);
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 40px;
}

.cta-form {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    background: var(--bg-light);
    padding: 8px;
    border-radius: 8px;
}

.cta-form input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 12px 16px;
    font-size: 15px;
    outline: none;
    color: var(--text-dark);
}

.cta-form input::placeholder {
    color: var(--text-light);
}

.cta-form button {
    padding: 12px 28px;
}

.cta-note {
    font-size: 14px;
    color: var(--text-light);
}

.cta-note a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
}

.cta-note a:hover {
    text-decoration: underline;
}

/* ========== FOOTER ========== */

.footer {
    background: var(--text-dark);
    color: white;
    padding: 50px 0 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
}

.footer-brand .logo-circle {
    background: var(--primary-color);
}

.footer-links {
    display: flex;
    gap: 30px;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: var(--transition);
}

.footer-links a:hover {
    color: white;
}

.footer-bottom {
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
}

/* ========== RESPONSIVE ========== */

@media (max-width: 768px) {
    .nav-menu {
        gap: 15px;
        font-size: 13px;
    }

    .hero h1 {
        font-size: 32px;
    }

    .hero-subtitle {
        font-size: 16px;
    }

    .cta-group {
        flex-direction: column;
    }

    .cta-group .btn {
        width: 100%;
        text-align: center;
    }

    h2 {
        font-size: 28px;
    }

    .skills-grid,
    .engagement-grid {
        grid-template-columns: 1fr;
    }

    .timeline-item {
        padding: 20px;
    }

    .cta-form {
        flex-direction: column;
    }

    .cta-form button {
        width: 100%;
    }

    .footer-content {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }

    .footer-links {
        flex-direction: column;
        gap: 15px;
    }

    section {
        padding: 50px 0;
    }
}

@media (max-width: 480px) {
    .hero h1 {
        font-size: 24px;
    }

    .nav-menu {
        gap: 10px;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    h2 {
        font-size: 24px;
    }

    .btn {
        padding: 10px 20px;
        font-size: 14px;
    }
}
