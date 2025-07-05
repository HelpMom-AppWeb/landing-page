document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = localStorage.getItem('language') || 'en'; // Idioma por defecto o guardado

    // Textos traducibles
    const translations = {
        'en': {
            // Navbar
            'nav-about': 'About',
            'nav-products': 'Products',
            'nav-subscriptions': 'Subscriptions',
            'nav-faq': 'FAQs',
            'nav-contact': 'Contact',
            'nav-app': 'HelpMom',

            // Banner
            'banner-title': 'Welcome to HelpMom!',
            'banner-text': 'HelpMom is the app designed to support mothers at every stage of their motherhood. From pregnancy to postpartum, it offers personalized reminders, health tracking, expert advice, and a safe space to answer all your questions.',
            'banner-button': 'Try it now!',

            // Products
            'products-title': 'Products',
            'product1-title': 'Follow-up of Prenatal Appointments',
            'product1-li1': 'Automatic reminders for check-ups',
            'product1-li2': 'Custom calendar by quarter',
            'product1-li3': 'Storage of medical results',
            'product2-title': 'Postpartum Monitoring',
            'product2-li1': 'Recording of physical/emotional symptoms',
            'product2-li2': 'Alerts for signs of complications',
            'product2-li3': 'Personalized recovery guides',
            'product3-title': 'Smart Reminders',
            'product3-li1': 'Alarms for medications and vitamins',
            'product3-li2': 'Breastfeeding tracking',
            'product3-li3': 'Integration with wearable devices',
            'product4-title': 'Support Community',
            'product4-li1': 'Specialist-moderated forums',
            'product4-li2': 'Certified educational resources',
            'product4-li3': 'Webinars with professionals',

            // About Product
            'about-title': 'About the Product',
            'about-text': 'Discover how HelpMom supports mothers through every stage of motherhood with innovative features and caring solutions.',

            // FAQs
            'faq-title': 'Frequently Asked Questions (FAQs)',
            'faq1-q': 'What is HelpMom?',
            'faq1-a': 'HelpMom is a platform designed to provide medical, emotional, and educational support to women during pregnancy and postpartum.',
            'faq2-q': 'Is it safe to store my medical information?',
            'faq2-a': 'Yes, we use advanced security protocols and encryption to protect your information.',
            'faq3-q': 'Can I change my plan later?',
            'faq3-a': 'Of course! You can change your plan at any time from your user dashboard.',
            'faq4-q': 'How many family members can I register?',
            'faq4-a': 'It depends on the plan you choose. Check our <a href="#subscriptions">subscription plans</a> for details.',

            // Pricing
            'pricing-title': 'Subscriptions',
            'plan1-title': 'First Plan',
            'plan1-subtitle': 'Perfect for first-time moms who want a simple way to track health.',
            'plan1-price': '10 per month',
            'plan1-li1': 'Register 1 baby',
            'plan1-li2': 'Track vital signs (prenatal and postnatal)',
            'plan1-li3': 'Upload medical documents',
            'plan1-li4': 'Basic growth charts',
            'plan1-li5': 'Reminders for checkups and vaccines',
            'plan1-li6': 'Access to educational content',
            'plan1-button': 'Choose',
            'plan2-title': 'Second Plan',
            'plan2-subtitle': 'Ideal for moms looking for a more complete support experience.',
            'plan2-price': '30 per month',
            'plan2-li1': 'Register up to 2 babies',
            'plan2-li2': 'Chat with assigned doctor',
            'plan2-li3': 'Receive digital prescriptions',
            'plan2-li4': 'Detailed history tracking',
            'plan2-li5': 'Interactive reminders',
            'plan2-li6': 'Export reports as PDFs',
            'plan2-button': 'Choose',
            'plan3-title': 'Premium Plan',
            'plan3-subtitle': 'For families wanting continuous and personalized monitoring.',
            'plan3-price': '100 per month',
            'plan3-li1': 'Register multiple babies',
            'plan3-li2': 'Access to multiple specialists',
            'plan3-li3': 'Video consultations',
            'plan3-li4': 'Smart alerts for vital signs',
            'plan3-li5': 'Priority support',
            'plan3-button': 'Choose',

            // Team
            'team-title': 'Learn More About Us',
            'team-subtitle': 'About the Team',
            'career': 'software developer',

            // Contact
            'contact-title': 'Contact',
            'contact-name': 'Name',
            'contact-phone': 'Phone',
            'contact-email': 'Email',
            'contact-message': 'Message',
            'contact-button': 'Send',

            // Footer
            'footer-copyright': '© 2024 WebExperts',
            'footer-email': 'Email: OfficeMark@HelpMom.com',
            'footer-home': 'Home',
            'footer-about': 'About',
            'footer-contact': 'Contact',
            'footer-privacy': 'Privacy Policy',
            'footer-terms': 'Terms of Service'
        },
        'es': {
            // Navbar
            'nav-about': 'Acerca de',
            'nav-products': 'Productos',
            'nav-subscriptions': 'Suscripciones',
            'nav-faq': 'Preguntas Frecuentes',
            'nav-contact': 'Contacto',
            'nav-app': 'HelpMom',

            // Banner
            'banner-title': '¡Bienvenida a HelpMom!',
            'banner-text': 'HelpMom es la aplicación diseñada para apoyar a las madres en cada etapa de su maternidad. Desde el embarazo hasta el posparto, ofrece recordatorios personalizados, seguimiento de salud, consejos de expertos y un espacio seguro para responder todas tus preguntas.',
            'banner-button': '¡Pruébalo ahora!',

            // Products
            'products-title': 'Productos',
            'product1-title': 'Seguimiento de Citas Prenatales',
            'product1-li1': 'Recordatorios automáticos para chequeos',
            'product1-li2': 'Calendario personalizado por trimestre',
            'product1-li3': 'Almacenamiento de resultados médicos',
            'product2-title': 'Monitoreo Postparto',
            'product2-li1': 'Registro de síntomas físicos/emocionales',
            'product2-li2': 'Alertas por signos de complicaciones',
            'product2-li3': 'Guías de recuperación personalizadas',
            'product3-title': 'Recordatorios Inteligentes',
            'product3-li1': 'Alarmas para medicamentos y vitaminas',
            'product3-li2': 'Seguimiento de lactancia',
            'product3-li3': 'Integración con dispositivos wearables',
            'product4-title': 'Comunidad de Apoyo',
            'product4-li1': 'Foros moderados por especialistas',
            'product4-li2': 'Recursos educativos certificados',
            'product4-li3': 'Webinars con profesionales',

            // About Product
            'about-title': 'Acerca del Producto',
            'about-text': 'Descubre cómo HelpMom apoya a las madres en cada etapa de la maternidad con funciones innovadoras y soluciones cuidadosas.',

            // FAQs
            'faq-title': 'Preguntas Frecuentes (FAQs)',
            'faq1-q': '¿Qué es HelpMom?',
            'faq1-a': 'HelpMom es una plataforma diseñada para brindar apoyo médico, emocional y educativo a mujeres durante el embarazo y el posparto.',
            'faq2-q': '¿Es seguro almacenar mi información médica?',
            'faq2-a': 'Sí, utilizamos protocolos de seguridad avanzados y encriptación para proteger tu información.',
            'faq3-q': '¿Puedo cambiar mi plan después?',
            'faq3-a': '¡Por supuesto! Puedes cambiar tu plan en cualquier momento desde tu panel de usuario.',
            'faq4-q': '¿Cuántos familiares puedo registrar?',
            'faq4-a': 'Depende del plan que elijas. Consulta nuestros <a href="#subscriptions">planes de suscripción</a> para más detalles.',

            // Pricing
            'pricing-title': 'Suscripciones',
            'plan1-title': 'Primer Plan',
            'plan1-subtitle': 'Perfecto para madres primerizas que desean una forma sencilla de monitorear su salud.',
            'plan1-price': '10 por mes',
            'plan1-li1': 'Registrar 1 bebé',
            'plan1-li2': 'Seguimiento de signos vitales (prenatal y postnatal)',
            'plan1-li3': 'Subir documentos médicos',
            'plan1-li4': 'Tablas de crecimiento básicas',
            'plan1-li5': 'Recordatorios para chequeos y vacunas',
            'plan1-li6': 'Acceso a contenido educativo',
            'plan1-button': 'Elegir',
            'plan2-title': 'Segundo Plan',
            'plan2-subtitle': 'Ideal para madres que buscan una experiencia de apoyo más completa.',
            'plan2-price': '30 por mes',
            'plan2-li1': 'Registrar hasta 2 bebés',
            'plan2-li2': 'Chat con médico asignado',
            'plan2-li3': 'Recibir recetas digitales',
            'plan2-li4': 'Seguimiento detallado de historial',
            'plan2-li5': 'Recordatorios interactivos',
            'plan2-li6': 'Exportar reportes en PDF',
            'plan2-button': 'Elegir',
            'plan3-title': 'Plan Premium',
            'plan3-subtitle': 'Para familias que desean monitoreo continuo y personalizado.',
            'plan3-price': '100 por mes',
            'plan3-li1': 'Registrar múltiples bebés',
            'plan3-li2': 'Acceso a múltiples especialistas',
            'plan3-li3': 'Consultas por video',
            'plan3-li4': 'Alertas inteligentes para signos vitales',
            'plan3-li5': 'Soporte prioritario',
            'plan3-button': 'Elegir',

            // Team
            'team-title': 'Conoce Más Sobre Nosotros',
            'team-subtitle': 'Acerca del Equipo',
            'career': 'Ingeniería de Software',


            // Contact
            'contact-title': 'Contacto',
            'contact-name': 'Nombre',
            'contact-phone': 'Teléfono',
            'contact-email': 'Correo Electrónico',
            'contact-message': 'Mensaje',
            'contact-button': 'Enviar',

            // Footer
            'footer-copyright': '© 2024 WebExperts',
            'footer-email': 'Email: OfficeMark@HelpMom.com',
            'footer-home': 'Inicio',
            'footer-about': 'Acerca de',
            'footer-contact': 'Contacto',
            'footer-privacy': 'Política de Privacidad',
            'footer-terms': 'Términos de Servicio'
        }
    };

    // Función para cambiar el idioma
    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        localStorage.setItem('language', currentLanguage);
        updateTexts();
        languageToggle.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    }

    // Función para actualizar los textos
    function updateTexts() {
        Object.keys(translations[currentLanguage]).forEach(key => {
            const elements = document.querySelectorAll(`[data-i18n="${key}"]:not(iframe):not([class*="video"])`);
            if (elements.length > 0) {
                elements.forEach(el => {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = translations[currentLanguage][key];
                    } else {
                        el.innerHTML = translations[currentLanguage][key];
                    }
                });
            }
        });

        // Actualizar elementos específicos que no usan data-i18n
        document.querySelector('a[href="#home-section"]').textContent = translations[currentLanguage]['nav-about'];
        document.querySelector('a[href="#Productos"]').textContent = translations[currentLanguage]['nav-products'];
        document.querySelector('a[href="#subscriptions"]').textContent = translations[currentLanguage]['nav-subscriptions'];
        document.querySelector('a[href="#faq-section"]').textContent = translations[currentLanguage]['nav-faq'];
        document.querySelector('a[href="#contact-section"]').textContent = translations[currentLanguage]['nav-contact'];
        document.querySelector('.product-btn').textContent = translations[currentLanguage]['nav-app'];
    }

    // Preparar el HTML con atributos data-i18n
    function prepareHTML() {
        // Añadir atributos data-i18n a los elementos que necesitan traducción
        document.querySelector('.banner-text h1').setAttribute('data-i18n', 'banner-title');
        document.querySelector('.banner-text p').setAttribute('data-i18n', 'banner-text');
        document.querySelector('.banner-text .btn').setAttribute('data-i18n', 'banner-button');

        // Productos
        document.querySelector('.contenido_productos h2').setAttribute('data-i18n', 'products-title');

        const videoContainers = document.querySelectorAll('.video-container-right, .team-video');
        videoContainers.forEach(container => {
            container.removeAttribute('data-i18n');
        });

        const productTitles = document.querySelectorAll('.box h3');
        productTitles[0].setAttribute('data-i18n', 'product1-title');
        productTitles[1].setAttribute('data-i18n', 'product2-title');
        productTitles[2].setAttribute('data-i18n', 'product3-title');
        productTitles[3].setAttribute('data-i18n', 'product4-title');

        const productItems = document.querySelectorAll('.box ul li');
        productItems[0].setAttribute('data-i18n', 'product1-li1');
        productItems[1].setAttribute('data-i18n', 'product1-li2');
        productItems[2].setAttribute('data-i18n', 'product1-li3');
        productItems[3].setAttribute('data-i18n', 'product2-li1');
        productItems[4].setAttribute('data-i18n', 'product2-li2');
        productItems[5].setAttribute('data-i18n', 'product2-li3');
        productItems[6].setAttribute('data-i18n', 'product3-li1');
        productItems[7].setAttribute('data-i18n', 'product3-li2');
        productItems[8].setAttribute('data-i18n', 'product3-li3');
        productItems[9].setAttribute('data-i18n', 'product4-li1');
        productItems[10].setAttribute('data-i18n', 'product4-li2');
        productItems[11].setAttribute('data-i18n', 'product4-li3');

        // About Product
        document.querySelector('.about-product-horizontal h3').setAttribute('data-i18n', 'about-title');
        document.querySelector('.video-section-description').setAttribute('data-i18n', 'about-text');

        // FAQs
        document.querySelector('#faq-section h2').setAttribute('data-i18n', 'faq-title');
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions[0].setAttribute('data-i18n', 'faq1-q');
        faqQuestions[1].setAttribute('data-i18n', 'faq2-q');
        faqQuestions[2].setAttribute('data-i18n', 'faq3-q');
        faqQuestions[3].setAttribute('data-i18n', 'faq4-q');

        const faqAnswers = document.querySelectorAll('.faq-answer');
        faqAnswers[0].setAttribute('data-i18n', 'faq1-a');
        faqAnswers[1].setAttribute('data-i18n', 'faq2-a');
        faqAnswers[2].setAttribute('data-i18n', 'faq3-a');
        faqAnswers[3].setAttribute('data-i18n', 'faq4-a');

        // Pricing
        document.querySelector('#subscriptions h2').setAttribute('data-i18n', 'pricing-title');

        const planTitles = document.querySelectorAll('.plan h3');
        planTitles[0].setAttribute('data-i18n', 'plan1-title');
        planTitles[1].setAttribute('data-i18n', 'plan2-title');
        planTitles[2].setAttribute('data-i18n', 'plan3-title');

        const planSubtitles = document.querySelectorAll('.plan h4');
        planSubtitles[0].setAttribute('data-i18n', 'plan1-subtitle');
        planSubtitles[1].setAttribute('data-i18n', 'plan2-subtitle');
        planSubtitles[2].setAttribute('data-i18n', 'plan3-subtitle');

        const planPrices = document.querySelectorAll('.plan h5');
        planPrices[0].setAttribute('data-i18n', 'plan1-price');
        planPrices[1].setAttribute('data-i18n', 'plan2-price');
        planPrices[2].setAttribute('data-i18n', 'plan3-price');

        const planItems = document.querySelectorAll('.plan ul li');
        planItems[0].setAttribute('data-i18n', 'plan1-li1');
        planItems[1].setAttribute('data-i18n', 'plan1-li2');
        planItems[2].setAttribute('data-i18n', 'plan1-li3');
        planItems[3].setAttribute('data-i18n', 'plan1-li4');
        planItems[4].setAttribute('data-i18n', 'plan1-li5');
        planItems[5].setAttribute('data-i18n', 'plan1-li6');
        planItems[6].setAttribute('data-i18n', 'plan2-li1');
        planItems[7].setAttribute('data-i18n', 'plan2-li2');
        planItems[8].setAttribute('data-i18n', 'plan2-li3');
        planItems[9].setAttribute('data-i18n', 'plan2-li4');
        planItems[10].setAttribute('data-i18n', 'plan2-li5');
        planItems[11].setAttribute('data-i18n', 'plan2-li6');
        planItems[12].setAttribute('data-i18n', 'plan3-li1');
        planItems[13].setAttribute('data-i18n', 'plan3-li2');
        planItems[14].setAttribute('data-i18n', 'plan3-li3');
        planItems[15].setAttribute('data-i18n', 'plan3-li4');
        planItems[16].setAttribute('data-i18n', 'plan3-li5');

        const planButtons = document.querySelectorAll('.plan .btn');
        planButtons[0].setAttribute('data-i18n', 'plan1-button');
        planButtons[1].setAttribute('data-i18n', 'plan2-button');
        planButtons[2].setAttribute('data-i18n', 'plan3-button');

        // Team
        document.querySelector('.about-team h2').setAttribute('data-i18n', 'team-title');
        document.querySelector('.about-team h3').setAttribute('data-i18n', 'team-subtitle');

        // Contact
        document.querySelector('#contact-section h2').setAttribute('data-i18n', 'contact-title');
        document.querySelector('label[for="Name"]').setAttribute('data-i18n', 'contact-name');
        document.querySelector('label[for="Phone"]').setAttribute('data-i18n', 'contact-phone');
        document.querySelector('label[for="email"]').setAttribute('data-i18n', 'contact-email');
        document.querySelector('label[for="Message"]').setAttribute('data-i18n', 'contact-message');
        document.querySelector('button.send').setAttribute('data-i18n', 'contact-button');

        // Footer
        const footerSpans = document.querySelectorAll('.footer-content span');
        footerSpans[0].setAttribute('data-i18n', 'footer-copyright');
        footerSpans[1].setAttribute('data-i18n', 'footer-email');

        const footerLinks = document.querySelectorAll('.footer-links a');
        footerLinks[0].setAttribute('data-i18n', 'footer-home');
        footerLinks[1].setAttribute('data-i18n', 'footer-about');
        footerLinks[2].setAttribute('data-i18n', 'footer-contact');
        footerLinks[3].setAttribute('data-i18n', 'footer-privacy');
        footerLinks[4].setAttribute('data-i18n', 'footer-terms');
    }

    // Inicializar
    prepareHTML();
    updateTexts();
    languageToggle.textContent = currentLanguage === 'en' ? 'ES' : 'EN';

    // Event listener para el botón
    languageToggle.addEventListener('click', toggleLanguage);
});