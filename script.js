/* =========================================================
   deleFOCO — PRODUCCIÓN
   JavaScript principal (Versión 4 Slides Automáticos)
   ========================================================= */


/* =========================================================
   1. TRADUCCIONES
========================================================= */

const translations = {

    es: {
        navHome: "Inicio",
        navServices: "Servicios",
        navProcess: "Proceso",
        navCases: "Casos",
        navOpportunities: "Oportunidades",
        navReferences: "Referencias",
        navContact: "Contacto",

        business: "EMPRESA",
        professional: "TALENTO",

        businessHeroTitle: "Su producción, resuelta de principio a fin.",
        businessHeroText: "Conectamos estrategia, producción, talento técnico y postproducción para convertir una idea en una pieza audiovisual lista para entregar.",
        businessHeroButton: "Solicitar cotización",
        businessHeroSecondary: "Ver servicios",

        professionalHeroTitle: "Aprendé a producir contenido audiovisual de la mano de la industria.",
        professionalHeroText: "Conectate con oportunidades, aprendé de profesionales y desarrollá experiencia dentro del ecosistema audiovisual.",
        professionalHeroButton: "Quiero participar",
        professionalHeroSecondary: "Conocer oportunidades",

        heroEyebrowSlide3: "DELEFOCO / SOLUCIONES",
        slide3Title: "Infraestructura y equipamiento técnico de primer nivel.",
        slide3Text: "Ponemos a disposición la tecnología y el soporte técnico necesario para garantizar el éxito de cada rodaje.",
        slide3Button: "Explorar equipos",

        heroEyebrowSlide4: "DELEFOCO / COMUNIDAD",
        slide4Title: "El punto de encuentro para creadores y profesionales.",
        slide4Text: "Formá parte de una red activa que impulsa el desarrollo de la industria audiovisual en la región.",
        slide4Button: "Unirme ahora",

        servicesTitle: "Producción de principio a fin",
        servicesSubtitle: "Un equipo conectado para resolver cada etapa de un proyecto audiovisual.",

        executiveProduction: "Producción ejecutiva",
        executiveProductionText: "Planificación, coordinación y supervisión general del proyecto.",
        lineProduction: "Línea de producción",
        lineProductionText: "Presupuesto, cronograma, proveedores, permisos y logística.",
        technicalCrew: "Crew técnico",
        technicalCrewText: "Profesionales especializados para cada necesidad de producción.",
        gear: "Equipo y gear",
        gearText: "Soluciones técnicas para cámara, iluminación, sonido y producción.",
        postProduction: "Postproducción",
        postProductionText: "Edición, color, sonido, motion graphics y entrega final.",
        permitsLogistics: "Permisos y logística",
        permitsLogisticsText: "Coordinación operativa para que el rodaje avance sin fricciones.",

        processTitle: "Un pipeline pensado para producir mejor",
        processSubtitle: "Desde la primera idea hasta la entrega final.",
        idea: "IDEA",
        preProduction: "PRE-PRODUCTION",
        production: "PRODUCTION",
        post: "POST",
        delivery: "DELIVERY",

        casesTitle: "Casos de producción",
        casesSubtitle: "Cada proyecto comienza con una necesidad y termina con una solución concreta.",
        need: "Necesidad",
        solution: "Solución",
        result: "Resultado",

        quoteTitle: "Contanos sobre tu producción",
        quoteSubtitle: "Completá el formulario y prepararemos una propuesta inicial.",
        company: "Empresa",
        projectType: "Tipo de proyecto",
        scope: "Alcance",
        dates: "Fechas",
        budget: "Presupuesto",
        brief: "Brief",
        next: "Continuar",
        back: "Atrás",
        submit: "Solicitar cotización",

        opportunitiesTitle: "Oportunidades para profesionales",
        opportunitiesSubtitle: "Conectamos talento técnico con proyectos, aprendizaje y nuevas experiencias.",
        internship: "Internship / Junior Crew",
        internshipText: "Construí experiencia participando en proyectos audiovisuales.",
        freelancer: "Comunidad de profesionales",
        freelancerText: "Formá parte de una red de perfiles técnicos y creativos.",
        training: "Formación",
        trainingText: "Aprendé con recursos y experiencias conectadas con la industria.",

        talentFormTitle: "Quiero formar parte",
        talentName: "Nombre completo",
        talentEmail: "Correo electrónico",
        talentRole: "Área de interés",
        talentExperience: "Experiencia",
        talentMessage: "Contanos un poco sobre vos",
        sendProfile: "Enviar perfil",

        aiTitle: "AI Brief Helper",
        aiSubtitle: "Convertí una idea inicial en una guía rápida de producción.",
        aiPlaceholder: "Escribí tu idea, por ejemplo: necesitamos grabar un comercial para redes sociales...",
        analyze: "Analizar brief",
        analyzing: "Analizando...",

        pulseTitle: "Production Pulse",
        pulseSubtitle: "Una lectura rápida de las necesidades detectadas en tu brief.",

        referencesTitle: "Referencias visuales",
        referencesSubtitle: "Ejemplos de estilos y ambientes para inspirar una producción.",
        referencesNote: "Las imágenes mostradas son referencias visuales y no representan trabajos de deleFOCO.",

        transitionBusiness: "EMPRESA",
        transitionProfessional: "TALENTO",
        lightMode: "Modo claro",
        darkMode: "Modo oscuro",

        successTitle: "¡Solicitud recibida!",
        successText: "Tu información está lista para ser enviada al equipo de producción.",
        requiredFields: "Por favor completá los campos requeridos.",
        invalidEmail: "Por favor ingresá un correo electrónico válido.",

        /* Metadatos / accesibilidad */
        pageTitle: "deleFOCO — Producción",
        metaDescription: "deleFOCO Producción — Producción audiovisual, talento técnico, servicios y soluciones para proyectos audiovisuales.",
        logoLabel: "deleFOCO Inicio",
        navLabel: "Navegación principal",
        menuOpen: "Abrir menú",
        menuClose: "Cerrar menú",
        changeLanguage: "Cambiar idioma",
        audienceLabel: "Tipo de visitante",
        prevSlide: "Anterior",
        nextSlide: "Siguiente",
        goToSlide: "Ir al slide",
        casePrevLabel: "Caso anterior",
        caseNextLabel: "Siguiente caso",
        close: "Cerrar",
        backToTop: "Volver arriba",
        modalImageAlt: "Referencia visual ampliada",
        online: "Online",
        offline: "Sin conexión",

        /* Hero e introducción */
        heroEyebrowBusiness: "deleFOCO / PRODUCCIÓN",
        heroEyebrowProfessional: "DELEFOCO / TALENTO",
        introTitleStart: "Convertimos ideas en",
        introTitleAccent: "producciones reales.",
        introText1: "Una producción audiovisual necesita más que una buena idea. Necesita planificación, personas, recursos, coordinación y una ejecución precisa.",
        introText2: "deleFOCO conecta cada una de esas piezas para que el proyecto avance desde el concepto hasta la entrega final.",

        /* Pipeline */
        ideaText: "Definimos el objetivo, concepto y necesidades principales del proyecto.",
        preProductionText: "Organizamos equipo, presupuesto, locaciones, calendario y recursos.",
        productionText: "Ejecutamos el rodaje coordinando talento, equipo y logística.",
        postText: "Edición, color, sonido, motion graphics y acabados finales.",
        deliveryText: "Entregamos las piezas finales listas para su distribución.",

        /* Casos */
        case1Title: "Campaña audiovisual",
        case1Need: "Crear contenido audiovisual para una campaña digital.",
        case1Solution: "Producción integral con planificación y postproducción.",
        case1Result: "Entregables adaptados para diferentes plataformas.",
        case2Title: "Historia documental",
        case2Need: "Registrar testimonios y construir una narrativa.",
        case2Solution: "Equipo de producción, cámara y sonido.",
        case2Result: "Pieza documental preparada para distribución digital.",
        case3Title: "Contenido para redes",
        case3Need: "Crear múltiples piezas verticales para redes sociales.",
        case3Solution: "Producción optimizada para formatos digitales.",
        case3Result: "Biblioteca de contenido reutilizable.",

        /* Formulario de cotización */
        companyLabel: "Empresa / cliente",
        companyPlaceholder: "Nombre de la empresa",
        selectOption: "Seleccioná una opción",
        optCommercial: "Comercial",
        optCorporate: "Corporativo",
        optDocumentary: "Documental",
        optMusicVideo: "Video musical",
        optSocialMedia: "Redes sociales",
        optEvent: "Evento",
        optPhotography: "Fotografía",
        optOther: "Otro",
        scopeLabel: "¿Qué necesitás producir?",
        scopePlaceholder: "Contanos brevemente qué necesitás.",
        datesLabel: "Fecha estimada de producción",
        selectRange: "Seleccioná un rango",
        budgetUnder: "Menos de $1,000",
        quoteBriefLabel: "Brief del proyecto",
        quoteBriefPlaceholder: "Agregá toda la información que considerés importante.",
        fileLabel: "Archivo de referencia",
        optional: "Opcional",
        resetQuote: "Reiniciar formulario",
        pastDate: "La fecha estimada no puede ser anterior a hoy.",

        /* Oportunidades, crew y formulario de talento */
        filterAll: "Todos",
        crewTitle: "Explorá perfiles técnicos",
        crewSubtitle: "Descubrí las diferentes áreas que forman parte de una producción audiovisual.",
        talentIntro: "Compartí tu información y contanos en qué área te gustaría participar.",
        selectArea: "Seleccioná un área",
        talentSuccessTitle: "¡Perfil listo para enviar!",
        talentSuccessText: "Se abrirá tu aplicación de correo para completar el envío.",

        /* Contacto y footer */
        contactTitle: "Hagamos que la producción suceda.",
        contactText: "Contanos qué necesitás y encontremos la mejor forma de llevarlo a producción.",
        talentContactTitle: "Sumate al equipo de talento deleFOCO.",
        talentContactText: "Contanos quién sos y encontremos la mejor oportunidad para vos.",
        footerTagline: "Producción audiovisual y conexión de talento.",
        footerTalentLink: "¿Sos talento? Sumate acá",
        footerBusinessLink: "¿Sos empresa? Conocé nuestros servicios",
        register: "Registrarme",
        login: "Iniciar sesión",
        school: "Escuela",
        plans: "Planes",

        /* Correo (mailto) y mensajes de formulario */
        mailFallback: "¿No se abrió tu correo? Escribinos a",
        mailAttachNote: "Recordá adjuntar manualmente el archivo de referencia en el correo.",
        mailLongCopied: "El mensaje es largo y el correo podría recortarlo: copiamos el texto completo al portapapeles para que puedas pegarlo.",
        mailLongNotCopied: "El mensaje es largo y el correo podría recortarlo. Si falta algo, enviá el texto completo a comunidad@delefoco.com.",
        quoteMailSubject: "Solicitud de cotización - deleFOCO",
        quoteMailTitle: "NUEVA SOLICITUD DE COTIZACIÓN",
        mailCompany: "Empresa",
        mailType: "Tipo",
        mailScope: "Alcance",
        mailDates: "Fecha estimada",
        mailBudget: "Presupuesto",
        mailFile: "Archivo de referencia (adjuntar manualmente)",
        mailBriefLabel: "Brief",
        talentMailSubject: "Perfil profesional - deleFOCO",
        talentMailTitle: "Nuevo perfil profesional",
        mailName: "Nombre",
        mailEmail: "Email",
        mailArea: "Área",
        mailExperience: "Experiencia",
        mailMessage: "Mensaje",

        /* AI Brief Helper y Production Pulse */
        pulseEmpty: "Analizá un brief para ver la lectura de necesidades.",
        aiSuggestedServices: "Servicios sugeridos",
        aiSuggestedCrew: "Crew sugerido",
        aiPipeline: "Pipeline",
        typeGeneric: "Producción audiovisual",
        typeCommercial: "Comercial / Contenido de marca",
        typeDocumentary: "Documental / Entrevista",
        typeCorporate: "Contenido corporativo",
        typeMusic: "Video musical",
        typeEvent: "Producción de eventos",
        typeCinematic: "Cine / Producción cinematográfica",
        typeSocial: "Contenido para redes sociales",
        typePhotography: "Fotografía",
        svcPlanning: "Planificación de producción",
        svcCoordination: "Coordinación de producción",
        svcPost: "Postproducción",
        svcCreative: "Producción creativa",
        svcEventLogistics: "Logística de eventos",
        svcFormats: "Adaptación a formatos digitales",
        roleProduction: "Producción",
        roleCamera: "Cámara",
        roleEditing: "Edición",
        roleDirection: "Dirección",
        roleLighting: "Iluminación",
        roleSound: "Sonido",
        stepPre: "Pre-producción",
        stepProduction: "Producción",
        stepPost: "Postproducción",
        stepDelivery: "Entrega",
        pulseBranded: "Contenido de marca",
        pulseSocial: "Redes sociales",
        pulseInterviews: "Entrevistas",
        pulseOutdoor: "Logística en exteriores",
        pulseStudio: "Estudio / set",
        pulseMusic: "Producción musical",
        pulseEvent: "Logística de eventos",
        pulseCinematic: "Producción cinematográfica",
        pulsePhoto: "Fotografía",
        pulseGeneral: "Producción general",
        valueHigh: "Alto",
        valueMedium: "Medio"
    },

    en: {
        navHome: "Home",
        navServices: "Services",
        navProcess: "Process",
        navCases: "Cases",
        navOpportunities: "Opportunities",
        navReferences: "References",
        navContact: "Contact",

        business: "BUSINESS",
        professional: "TALENT",

        businessHeroTitle: "Your production, solved from start to finish.",
        businessHeroText: "We connect strategy, production, technical talent and post-production to turn an idea into a finished audiovisual piece.",
        businessHeroButton: "Request a quote",
        businessHeroSecondary: "View services",

        professionalHeroTitle: "Learn to produce audiovisual content with the industry.",
        professionalHeroText: "Connect with opportunities, learn from professionals and gain experience within the audiovisual ecosystem.",
        professionalHeroButton: "I want to participate",
        professionalHeroSecondary: "Explore opportunities",

        heroEyebrowSlide3: "DELEFOCO / SOLUTIONS",
        slide3Title: "Top-tier infrastructure and technical equipment.",
        slide3Text: "We provide the necessary technology and technical support to ensure the success of every shoot.",
        slide3Button: "Explore gear",

        heroEyebrowSlide4: "DELEFOCO / COMMUNITY",
        slide4Title: "The meeting point for creators and professionals.",
        slide4Text: "Be part of an active network that drives the development of the audiovisual industry in the region.",
        slide4Button: "Join now",

        servicesTitle: "Production from start to finish",
        servicesSubtitle: "A connected team to solve every stage of an audiovisual project.",

        executiveProduction: "Executive production",
        executiveProductionText: "Planning, coordination and general project supervision.",
        lineProduction: "Line production",
        lineProductionText: "Budget, schedule, suppliers, permits and logistics.",
        technicalCrew: "Technical crew",
        technicalCrewText: "Specialized professionals for every production need.",
        gear: "Equipment & gear",
        gearText: "Technical solutions for camera, lighting, sound and production.",
        postProduction: "Post-production",
        postProductionText: "Editing, color, sound, motion graphics and final delivery.",
        permitsLogistics: "Permits & logistics",
        permitsLogisticsText: "Operational coordination to keep production moving smoothly.",

        processTitle: "A pipeline designed to produce better",
        processSubtitle: "From the first idea to final delivery.",
        idea: "IDEA",
        preProduction: "PRE-PRODUCTION",
        production: "PRODUCTION",
        post: "POST",
        delivery: "DELIVERY",

        casesTitle: "Production cases",
        casesSubtitle: "Every project starts with a need and ends with a concrete solution.",
        need: "Need",
        solution: "Solution",
        result: "Result",

        quoteTitle: "Tell us about your production",
        quoteSubtitle: "Complete the form and we'll prepare an initial proposal.",
        company: "Company",
        projectType: "Project type",
        scope: "Scope",
        dates: "Dates",
        budget: "Budget",
        brief: "Brief",
        next: "Continue",
        back: "Back",
        submit: "Request a quote",

        opportunitiesTitle: "Opportunities for professionals",
        opportunitiesSubtitle: "We connect technical talent with projects, learning and new experiences.",
        internship: "Internship / Junior Crew",
        internshipText: "Build experience by participating in audiovisual projects.",
        freelancer: "Professional community",
        freelancerText: "Become part of a network of technical and creative profiles.",
        training: "Training",
        trainingText: "Learn through resources and experiences connected to the industry.",

        talentFormTitle: "I want to join",
        talentName: "Full name",
        talentEmail: "Email",
        talentRole: "Area of interest",
        talentExperience: "Experience",
        talentMessage: "Tell us a little about yourself",
        sendProfile: "Send profile",

        aiTitle: "AI Brief Helper",
        aiSubtitle: "Turn an initial idea into a quick production guide.",
        aiPlaceholder: "Write your idea, for example: we need to shoot a commercial for social media...",
        analyze: "Analyze brief",
        analyzing: "Analyzing...",

        pulseTitle: "Production Pulse",
        pulseSubtitle: "A quick reading of the production needs detected in your brief.",

        referencesTitle: "Visual references",
        referencesSubtitle: "Examples of styles and environments to inspire a production.",
        referencesNote: "The images shown are visual references and do not represent deleFOCO work.",

        transitionBusiness: "BUSINESS",
        transitionProfessional: "TALENT",
        lightMode: "Light mode",
        darkMode: "Dark mode",

        successTitle: "Request received!",
        successText: "Your information is ready to be sent to the production team.",
        requiredFields: "Please complete the required fields.",
        invalidEmail: "Please enter a valid email address.",

        /* Metadatos / accesibilidad */
        pageTitle: "deleFOCO — Production",
        metaDescription: "deleFOCO Production — Audiovisual production, technical talent, services and solutions for audiovisual projects.",
        logoLabel: "deleFOCO Home",
        navLabel: "Main navigation",
        menuOpen: "Open menu",
        menuClose: "Close menu",
        changeLanguage: "Change language",
        audienceLabel: "Visitor type",
        prevSlide: "Previous",
        nextSlide: "Next",
        goToSlide: "Go to slide",
        casePrevLabel: "Previous case",
        caseNextLabel: "Next case",
        close: "Close",
        backToTop: "Back to top",
        modalImageAlt: "Enlarged visual reference",
        online: "Online",
        offline: "Offline",

        /* Hero e introducción */
        heroEyebrowBusiness: "deleFOCO / PRODUCTION",
        heroEyebrowProfessional: "DELEFOCO / TALENT",
        introTitleStart: "We turn ideas into",
        introTitleAccent: "real productions.",
        introText1: "An audiovisual production needs more than a good idea. It needs planning, people, resources, coordination and precise execution.",
        introText2: "deleFOCO connects each of those pieces so the project moves from concept to final delivery.",

        /* Pipeline */
        ideaText: "We define the project's goal, concept and main needs.",
        preProductionText: "We organize crew, budget, locations, schedule and resources.",
        productionText: "We run the shoot, coordinating talent, equipment and logistics.",
        postText: "Editing, color, sound, motion graphics and final finishing.",
        deliveryText: "We deliver the final pieces ready for distribution.",

        /* Casos */
        case1Title: "Audiovisual campaign",
        case1Need: "Create audiovisual content for a digital campaign.",
        case1Solution: "End-to-end production with planning and post-production.",
        case1Result: "Deliverables adapted for different platforms.",
        case2Title: "Documentary story",
        case2Need: "Record testimonials and build a narrative.",
        case2Solution: "Production crew, camera and sound.",
        case2Result: "Documentary piece prepared for digital distribution.",
        case3Title: "Social media content",
        case3Need: "Create multiple vertical pieces for social media.",
        case3Solution: "Production optimized for digital formats.",
        case3Result: "A reusable content library.",

        /* Formulario de cotización */
        companyLabel: "Company / client",
        companyPlaceholder: "Company name",
        selectOption: "Select an option",
        optCommercial: "Commercial",
        optCorporate: "Corporate",
        optDocumentary: "Documentary",
        optMusicVideo: "Music video",
        optSocialMedia: "Social media",
        optEvent: "Event",
        optPhotography: "Photography",
        optOther: "Other",
        scopeLabel: "What do you need to produce?",
        scopePlaceholder: "Briefly tell us what you need.",
        datesLabel: "Estimated production date",
        selectRange: "Select a range",
        budgetUnder: "Under $1,000",
        quoteBriefLabel: "Project brief",
        quoteBriefPlaceholder: "Add any information you consider important.",
        fileLabel: "Reference file",
        optional: "Optional",
        resetQuote: "Reset form",
        pastDate: "The estimated date can't be in the past.",

        /* Oportunidades, crew y formulario de talento */
        filterAll: "All",
        crewTitle: "Explore technical profiles",
        crewSubtitle: "Discover the different areas that make up an audiovisual production.",
        talentIntro: "Share your information and tell us which area you'd like to take part in.",
        selectArea: "Select an area",
        talentSuccessTitle: "Profile ready to send!",
        talentSuccessText: "Your email app will open to complete the submission.",

        /* Contacto y footer */
        contactTitle: "Let's make production happen.",
        contactText: "Tell us what you need and let's find the best way to bring it to production.",
        talentContactTitle: "Join the deleFOCO talent team.",
        talentContactText: "Tell us who you are and let's find the best opportunity for you.",
        footerTagline: "Audiovisual production and talent connection.",
        footerTalentLink: "Are you talent? Join here",
        footerBusinessLink: "Are you a business? See our services",
        register: "Sign up",
        login: "Log in",
        school: "School",
        plans: "Plans",

        /* Correo (mailto) y mensajes de formulario */
        mailFallback: "Didn't your email app open? Write to us at",
        mailAttachNote: "Remember to attach the reference file manually in the email.",
        mailLongCopied: "The message is long and your email app may cut it: we copied the full text to your clipboard so you can paste it.",
        mailLongNotCopied: "The message is long and your email app may cut it. If anything is missing, send the full text to comunidad@delefoco.com.",
        quoteMailSubject: "Quote request - deleFOCO",
        quoteMailTitle: "NEW QUOTE REQUEST",
        mailCompany: "Company",
        mailType: "Type",
        mailScope: "Scope",
        mailDates: "Estimated date",
        mailBudget: "Budget",
        mailFile: "Reference file (attach manually)",
        mailBriefLabel: "Brief",
        talentMailSubject: "Professional profile - deleFOCO",
        talentMailTitle: "New professional profile",
        mailName: "Name",
        mailEmail: "Email",
        mailArea: "Area",
        mailExperience: "Experience",
        mailMessage: "Message",

        /* AI Brief Helper y Production Pulse */
        pulseEmpty: "Analyze a brief to see the needs reading.",
        aiSuggestedServices: "Suggested services",
        aiSuggestedCrew: "Suggested crew",
        aiPipeline: "Pipeline",
        typeGeneric: "Audiovisual production",
        typeCommercial: "Commercial / Branded Content",
        typeDocumentary: "Documentary / Interview",
        typeCorporate: "Corporate Content",
        typeMusic: "Music Video",
        typeEvent: "Event Production",
        typeCinematic: "Cinematic / Film Production",
        typeSocial: "Social Media Content",
        typePhotography: "Photography",
        svcPlanning: "Production planning",
        svcCoordination: "Production coordination",
        svcPost: "Post-production",
        svcCreative: "Creative production",
        svcEventLogistics: "Event logistics",
        svcFormats: "Digital format adaptation",
        roleProduction: "Production",
        roleCamera: "Camera",
        roleEditing: "Editing",
        roleDirection: "Direction",
        roleLighting: "Lighting",
        roleSound: "Sound",
        stepPre: "Pre-production",
        stepProduction: "Production",
        stepPost: "Post-production",
        stepDelivery: "Delivery",
        pulseBranded: "Branded content",
        pulseSocial: "Social media",
        pulseInterviews: "Interviews",
        pulseOutdoor: "Outdoor logistics",
        pulseStudio: "Studio / set",
        pulseMusic: "Music production",
        pulseEvent: "Event logistics",
        pulseCinematic: "Cinematic production",
        pulsePhoto: "Photography",
        pulseGeneral: "General production",
        valueHigh: "High",
        valueMedium: "Medium"
    }
};


/* =========================================================
   2. ESTADO GLOBAL
========================================================= */

const safeStorage = {
    get(key) {
        try {
            return window.localStorage.getItem(key);
        } catch (error) {
            return null;
        }
    },
    set(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (error) {
            /* sin persistencia */
        }
    }
};

const CONTACT_EMAIL = "comunidad@delefoco.com";
const MAILTO_MAX_LENGTH = 1900;
const NAV_COLLAPSE_BREAKPOINT = 1100;
const HERO_AUTOPLAY_DELAY = 6000;
const TRANSPARENT_PIXEL = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

let currentLanguage = safeStorage.get("delefocoLanguage");
if (!translations[currentLanguage]) {
    currentLanguage = "es";
}

let currentAudience = safeStorage.get("delefocoLastAudience");
if (currentAudience !== "business" && currentAudience !== "professional") {
    currentAudience = "business";
}

let currentStep = 1;
let currentHeroSlide = 0;
let currentCase = 0;
let audienceTransitionRunning = false;
let lastBriefDetected = null;


/* =========================================================
   3. FUNCIONES GENERALES
========================================================= */

function hasTranslation(key) {
    const language = translations[currentLanguage] || translations.es;
    return language[key] !== undefined || translations.es[key] !== undefined;
}

function getTranslation(key) {
    const language = translations[currentLanguage] || translations.es;

    if (language[key] !== undefined) return language[key];
    if (translations.es[key] !== undefined) return translations.es[key];

    return key;
}

function normalizeText(text) {
    if (!text) return "";
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function prefersReducedMotion() {
    return Boolean(
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
}

function getScrollBehavior() {
    return prefersReducedMotion() ? "instant" : "smooth";
}

function getTodayISO() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${now.getFullYear()}-${month}-${day}`;
}

function isElementRendered(element) {
    return Boolean(element && element.getClientRects().length);
}


/* =========================================================
   4. ELEMENTOS DEL DOM
========================================================= */

const body = document.body;

/* La audiencia de esta página queda fija por el archivo cargado
   (index.html = talento, empresa.html = empresa). El botón EMPRESA/TALENTO
   ya no alterna contenido: navega hacia la otra página. */
const PAGE_AUDIENCE = body.getAttribute("data-page");
if (PAGE_AUDIENCE === "business" || PAGE_AUDIENCE === "professional") {
    currentAudience = PAGE_AUDIENCE;
}

const businessBtn = document.getElementById("businessBtn");
const professionalBtn = document.getElementById("professionalBtn");
const audienceButtons = document.querySelectorAll("[data-audience]");
const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const audienceTransition = document.getElementById("audienceTransition");
const transitionLabel = document.getElementById("transitionLabel");
const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");
const quoteForm = document.getElementById("quoteForm");
const talentForm = document.getElementById("talentForm");
const briefInput = document.getElementById("briefInput");
const analyzeBriefButton = document.getElementById("analyzeBrief");
const aiResult = document.getElementById("aiResult");
const connectionStatus = document.getElementById("connectionStatus");


/* =========================================================
   5. TRADUCCIONES
========================================================= */

function updateTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (hasTranslation(key)) {
            element.textContent = getTranslation(key);
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (hasTranslation(key)) {
            element.placeholder = getTranslation(key);
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
        const key = element.getAttribute("data-i18n-aria-label");
        if (hasTranslation(key)) {
            element.setAttribute("aria-label", getTranslation(key));
        }
    });

    document.title = getTranslation("pageTitle");

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", getTranslation("metaDescription"));
    }

    updateLanguageButton();
    updateThemeButton();
    updateAudienceLabels();
    updateMenuToggleLabel();
    updateHeroDotLabels();
    updateFileName();
    updateConnectionStatus();
    refreshBriefResults();
}


/* =========================================================
   6. IDIOMA
========================================================= */

function changeLanguage(language) {
    if (!translations[language]) {
        language = "es";
    }
    currentLanguage = language;
    safeStorage.set("delefocoLanguage", currentLanguage);
    document.documentElement.lang = currentLanguage;
    updateTranslations();
}

function updateLanguageButton() {
    if (!languageToggle) return;
    languageToggle.textContent = currentLanguage === "es" ? "EN" : "ES";
    languageToggle.setAttribute("title", getTranslation("changeLanguage"));
}

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        changeLanguage(currentLanguage === "es" ? "en" : "es");
    });
}


/* =========================================================
   7. TEMA
========================================================= */

function applyTheme(theme, persist = true) {
    const dark = theme === "dark";
    body.classList.toggle("dark-theme", dark);

    if (persist) {
        safeStorage.set("delefocoTheme", dark ? "dark" : "light");
    }

    updateThemeButton();
}

function updateThemeButton() {
    if (!themeToggle) return;
    const dark = body.classList.contains("dark-theme");

    if (themeIcon) {
        themeIcon.textContent = dark ? "☀" : "☾";
    }
    if (themeText) {
        themeText.textContent = dark ? getTranslation("lightMode") : getTranslation("darkMode");
    }
    themeToggle.setAttribute("aria-label", dark ? getTranslation("lightMode") : getTranslation("darkMode"));
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const dark = body.classList.contains("dark-theme");
        applyTheme(dark ? "light" : "dark");
    });
}


/* =========================================================
   8. AUDIENCIA EMPRESA / TALENTO
   (dos páginas separadas: index.html = talento, empresa.html = empresa.
   Los botones EMPRESA/TALENTO navegan entre ellas reusando la misma
   animación de transición.)
========================================================= */

const ACTION_AUDIENCE = {
    "business-quote": "business",
    "professional-opportunities": "professional"
};

const AUDIENCE_PAGES = {
    business: "https://empresaaa.vercel.app/",
    professional: "https://talento-rose-nine.vercel.app/"
};

const AUDIENCE_TRANSITION_PARAM = "audienceTransition";

function updateAudienceLabels() {
    audienceButtons.forEach(button => {
        const text = button.querySelector(".audience-btn-text");
        const audience = button.getAttribute("data-audience");

        if (text && (audience === "business" || audience === "professional")) {
            text.textContent = getTranslation(audience);
        }
    });
}

function refreshAudienceInterface() {
    /* Cada página ahora contiene una sola audiencia; esto queda
       como resguardo por si algún elemento conservara la clase. */
    document.querySelectorAll(".business-only").forEach(section => {
        section.setAttribute("aria-hidden", currentAudience === "business" ? "false" : "true");
    });

    document.querySelectorAll(".professional-only").forEach(section => {
        section.setAttribute("aria-hidden", currentAudience === "professional" ? "false" : "true");
    });
}

function setAudience(audience, persist = true) {
    if (audience !== "business" && audience !== "professional") {
        audience = "business";
    }
    currentAudience = audience;

    body.classList.toggle("business-mode", audience === "business");
    body.classList.toggle("professional-mode", audience === "professional");

    audienceButtons.forEach(button => {
        const active = button.getAttribute("data-audience") === audience;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (persist) {
        safeStorage.set("delefocoLastAudience", audience);
    }

    refreshAudienceInterface();

    showHeroSlide(0);
    startHeroAutoplay();
}

function goToAudiencePage(audience) {
    const target = AUDIENCE_PAGES[audience];
    if (!target) return;

    /* Le avisamos a la página de destino (puede ser otro dominio)
       que debe entrar ya con el overlay activo, vía parámetro en la URL,
       para que el corte se vea continuo. */
    try {
        const url = new URL(target, window.location.href);
        url.searchParams.set(AUDIENCE_TRANSITION_PARAM, audience);
        window.location.href = url.href;
    } catch (error) {
        window.location.href = target;
    }
}

function requestAudienceChange(audience, onDone) {
    if (audience !== "business" && audience !== "professional") return;

    if (audience === currentAudience) {
        /* Ya estamos en la página de esta audiencia. */
        window.scrollTo({ top: 0, behavior: getScrollBehavior() });
        if (typeof onDone === "function") onDone();
        return;
    }

    if (audienceTransitionRunning) return;

    if (prefersReducedMotion()) {
        goToAudiencePage(audience);
        return;
    }

    audienceTransitionRunning = true;

    if (transitionLabel) {
        transitionLabel.textContent = audience === "business"
            ? getTranslation("transitionBusiness")
            : getTranslation("transitionProfessional");
    }

    body.classList.add("audience-changing");
    if (audienceTransition) audienceTransition.classList.add("is-active");

    /* Esperamos a que el overlay cubra la pantalla y recién ahí
       navegamos a la otra página (misma duración que la transición
       original dentro de una sola página). */
    window.setTimeout(() => {
        goToAudiencePage(audience);
    }, 430);
}

function playIncomingAudienceTransition() {
    let incoming = null;
    try {
        incoming = new URLSearchParams(window.location.search).get(AUDIENCE_TRANSITION_PARAM);
    } catch (error) {
        incoming = null;
    }

    if (!incoming) return;

    /* Limpiamos el parámetro de la URL para que no quede pegado
       si la persona comparte o recarga el link. */
    try {
        const url = new URL(window.location.href);
        url.searchParams.delete(AUDIENCE_TRANSITION_PARAM);
        window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    } catch (error) {
        // entornos con history restringido
    }

    if (!audienceTransition || prefersReducedMotion()) return;

    /* Mostramos el overlay ya activo, sin transición, para continuar
       el corte que empezó en la página anterior. */
    audienceTransition.classList.add("no-transition", "is-active");
    body.classList.add("audience-changing");

    if (transitionLabel) {
        transitionLabel.textContent = currentAudience === "business"
            ? getTranslation("transitionBusiness")
            : getTranslation("transitionProfessional");
    }

    /* Forzamos reflow antes de quitar "no-transition" para que el
       fade-out de salida sí anime. */
    void audienceTransition.offsetHeight;
    audienceTransition.classList.remove("no-transition");

    window.setTimeout(() => {
        audienceTransition.classList.remove("is-active");
        body.classList.remove("audience-changing");
    }, 250);
}

audienceButtons.forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        requestAudienceChange(button.getAttribute("data-audience"));
        closeMenu();
    });
});


/* =========================================================
   9. MENÚ MOBILE
========================================================= */

function updateMenuToggleLabel() {
    if (!menuToggle || !navMenu) return;
    const open = navMenu.classList.contains("open");
    menuToggle.setAttribute("aria-label", getTranslation(open ? "menuClose" : "menuOpen"));
}

function closeMenu() {
    if (!menuToggle || !navMenu) return;
    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    updateMenuToggleLabel();
}

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const open = navMenu.classList.toggle("open");
        menuToggle.classList.toggle("active", open);
        menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
        updateMenuToggleLabel();
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", event => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > NAV_COLLAPSE_BREAKPOINT) {
            closeMenu();
        }
    });
}


/* =========================================================
   10. HEADER SCROLL
========================================================= */

const header = document.querySelector("header");

function updateHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateHeader, { passive: true });


/* =========================================================
   11. NAVEGACIÓN INTERNA Y SCROLL SUAVE
========================================================= */

function getHashTarget(hash) {
    if (!hash || hash === "#") return null;

    let id = hash.slice(1);
    try {
        id = decodeURIComponent(id);
    } catch (error) {
        // sin decodificación
    }

    return document.getElementById(id);
}

function getAudienceRequiredBy(target) {
    if (!target) return null;
    if (target.closest(".business-only")) return "business";
    if (target.closest(".professional-only")) return "professional";
    return null;
}

function scrollToElement(target, behavior) {
    if (!target) return;

    target.scrollIntoView({
        behavior: behavior || getScrollBehavior(),
        block: "start"
    });

    try {
        if (target.id && window.history && window.history.replaceState) {
            window.history.replaceState(null, "", `#${target.id}`);
        }
    } catch (error) {
        // entornos con history restringido
    }
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const hash = link.getAttribute("href");
        const target = getHashTarget(hash);
        if (!target) return;

        event.preventDefault();

        const required = ACTION_AUDIENCE[link.getAttribute("data-action")] || getAudienceRequiredBy(target);
        const goToTarget = () => scrollToElement(target);

        if (required && required !== currentAudience) {
            requestAudienceChange(required, goToTarget);
        } else {
            goToTarget();
        }
    });
});

function handleInitialHash() {
    const target = getHashTarget(window.location.hash);
    if (!target) return;

    const required = getAudienceRequiredBy(target);
    if (required && required !== currentAudience) {
        setAudience(required);
    }

    window.requestAnimationFrame(() => scrollToElement(target, "instant"));
}


/* =========================================================
   12. REVEAL ANIMATIONS
========================================================= */

const revealElements = document.querySelectorAll(".reveal, .reveal-item");

document.querySelectorAll(".reveal-item").forEach(item => {
    const siblings = item.parentElement
        ? Array.from(item.parentElement.querySelectorAll(":scope > .reveal-item"))
        : [];
    const index = siblings.indexOf(item);

    if (index > 0) {
        item.style.transitionDelay = `${index * 90}ms`;
    }
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => revealObserver.observe(element));
} else {
    revealElements.forEach(element => element.classList.add("visible"));
}


/* =========================================================
   12B. BOTONES MAGNÉTICOS
========================================================= */

const magneticButtons = document.querySelectorAll(".magnetic");
const supportsFineHover = Boolean(
    window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches
);

if (supportsFineHover && !prefersReducedMotion()) {
    const MAGNETIC_STRENGTH = 0.35;
    const MAGNETIC_MAX_OFFSET = 10;

    magneticButtons.forEach(button => {
        button.addEventListener("mousemove", event => {
            const rect = button.getBoundingClientRect();
            const offsetX = event.clientX - (rect.left + rect.width / 2);
            const offsetY = event.clientY - (rect.top + rect.height / 2);

            const mx = Math.max(-MAGNETIC_MAX_OFFSET, Math.min(MAGNETIC_MAX_OFFSET, offsetX * MAGNETIC_STRENGTH));
            const my = Math.max(-MAGNETIC_MAX_OFFSET, Math.min(MAGNETIC_MAX_OFFSET, offsetY * MAGNETIC_STRENGTH));

            button.style.setProperty("--mx", `${mx}px`);
            button.style.setProperty("--my", `${my}px`);
        });

        button.addEventListener("mouseleave", () => {
            button.style.setProperty("--mx", "0px");
            button.style.setProperty("--my", "0px");
        });
    });
}


/* =========================================================
   12C. LÍNEA DE PROGRESO DEL PIPELINE
========================================================= */

const pipelineSection = document.querySelector(".pipeline");
const pipelineLineEl = document.getElementById("pipelineLine");

function updatePipelineProgress() {
    if (!pipelineSection || !pipelineLineEl) return;

    const rect = pipelineSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    const startLine = viewportHeight * 0.85;
    const endLine = viewportHeight * 0.35;
    const total = rect.height + (startLine - endLine);

    let progress = total > 0 ? (startLine - rect.top) / total : 0;
    progress = Math.max(0, Math.min(1, progress));

    pipelineLineEl.style.setProperty("--pipeline-progress", progress.toFixed(3));
}

if (pipelineSection && pipelineLineEl) {
    window.addEventListener("scroll", updatePipelineProgress, { passive: true });
    window.addEventListener("resize", updatePipelineProgress);
    window.addEventListener("load", updatePipelineProgress);
}


/* =========================================================
   13. HERO CAROUSEL AUTOMÁTICO
========================================================= */

const heroSection = document.querySelector(".hero");
const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");

let heroInterval = null;

function showHeroSlide(index) {
    if (!heroSlides.length) return;
    currentHeroSlide = (index + heroSlides.length) % heroSlides.length;

    heroSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentHeroSlide);
    });

    heroDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentHeroSlide);

        if (i === currentHeroSlide) {
            dot.setAttribute("aria-current", "true");
        } else {
            dot.removeAttribute("aria-current");
        }
    });
}

function nextHeroSlide() { showHeroSlide(currentHeroSlide + 1); }
function previousHeroSlide() { showHeroSlide(currentHeroSlide - 1); }

function updateHeroDotLabels() {
    heroDots.forEach((dot, i) => {
        dot.setAttribute("aria-label", `${getTranslation("goToSlide")} ${i + 1}`);
    });
}

function stopHeroAutoplay() {
    if (heroInterval !== null) {
        window.clearInterval(heroInterval);
        heroInterval = null;
    }
}

function startHeroAutoplay() {
    stopHeroAutoplay();

    if (heroSlides.length <= 1) return;
    if (prefersReducedMotion() || document.hidden) return;

    heroInterval = window.setInterval(nextHeroSlide, HERO_AUTOPLAY_DELAY);
}

heroDots.forEach(dot => {
    dot.addEventListener("click", () => {
        showHeroSlide(Number(dot.getAttribute("data-slide")));
        startHeroAutoplay();
    });
});

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        stopHeroAutoplay();
    } else {
        startHeroAutoplay();
    }
});

function addSwipe(element, onNext, onPrevious) {
    if (!element) return;

    let startX = 0;
    let startY = 0;
    let tracking = false;

    element.addEventListener("touchstart", event => {
        if (event.touches.length !== 1) return;
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        tracking = true;
    }, { passive: true });

    element.addEventListener("touchend", event => {
        if (!tracking) return;
        tracking = false;

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY) * 1.5) return;

        if (deltaX < 0) {
            onNext();
        } else {
            onPrevious();
        }
    }, { passive: true });

    element.addEventListener("touchcancel", () => {
        tracking = false;
    }, { passive: true });
}

addSwipe(
    document.querySelector(".hero-carousel"),
    () => { nextHeroSlide(); startHeroAutoplay(); },
    () => { previousHeroSlide(); startHeroAutoplay(); }
);


/* =========================================================
   14. CASOS
========================================================= */

const caseCards = document.querySelectorAll(".case-card");
const casePrevBtn = document.getElementById("casePrev");
const caseNextBtn = document.getElementById("caseNext");
const caseCurrent = document.getElementById("caseCurrent");
const caseProgress = document.getElementById("caseProgress");

function showCase(index) {
    if (!caseCards.length) return;
    currentCase = (index + caseCards.length) % caseCards.length;

    caseCards.forEach((card, i) => {
        card.classList.toggle("active", i === currentCase);
    });

    if (caseCurrent) {
        caseCurrent.textContent = String(currentCase + 1).padStart(2, "0");
    }

    if (caseProgress) {
        const percentage = ((currentCase + 1) / caseCards.length) * 100;
        caseProgress.style.width = `${percentage}%`;
    }
}

if (casePrevBtn) {
    casePrevBtn.addEventListener("click", () => showCase(currentCase - 1));
}
if (caseNextBtn) {
    caseNextBtn.addEventListener("click", () => showCase(currentCase + 1));
}

addSwipe(
    document.getElementById("casesTrack"),
    () => showCase(currentCase + 1),
    () => showCase(currentCase - 1)
);


/* =========================================================
   15. WIZARD DE COTIZACIÓN
========================================================= */

const quoteSteps = document.querySelectorAll(".quote-step");
const quoteProgressSteps = document.querySelectorAll(".quote-progress-step");
const nextButtons = document.querySelectorAll("[data-next-step]");
const backButtons = document.querySelectorAll("[data-back-step]");
const quoteError = document.getElementById("quoteError");
const quoteSuccess = document.getElementById("quoteSuccess");
const quoteMailNote = document.getElementById("quoteMailNote");

function setFieldError(field, hasError) {
    field.classList.toggle("field-error", hasError);

    if (hasError) {
        field.setAttribute("aria-invalid", "true");
    } else {
        field.removeAttribute("aria-invalid");
    }
}

function showFormMessage(element, text) {
    if (!element) return;
    if (text) element.textContent = text;
    element.classList.add("visible");
}

function hideFormMessage(element) {
    if (!element) return;
    element.classList.remove("visible");
}

function setMailNote(element, texts) {
    if (!element) return;
    const content = texts.filter(Boolean).join(" ");
    element.textContent = content;
    element.hidden = content === "";
}

function showQuoteStep(step) {
    if (!quoteSteps.length) return;
    if (step < 1 || step > quoteSteps.length) return;

    currentStep = step;
    hideFormMessage(quoteError);

    quoteSteps.forEach(section => {
        const sectionStep = Number(section.getAttribute("data-step"));
        section.classList.toggle("active", sectionStep === step);
    });

    quoteProgressSteps.forEach(indicator => {
        const indicatorStep = Number(indicator.getAttribute("data-step"));
        indicator.classList.toggle("active", indicatorStep === step);
        indicator.classList.toggle("completed", indicatorStep < step);

        if (indicatorStep === step) {
            indicator.setAttribute("aria-current", "step");
        } else {
            indicator.removeAttribute("aria-current");
        }
    });
}

function checkQuoteStep(step) {
    const section = document.querySelector(`.quote-step[data-step="${step}"]`);
    const result = { valid: true, firstInvalid: null, messageKey: "requiredFields", invalidFields: [] };
    if (!section) return result;

    let hasEmpty = false;

    section.querySelectorAll("[required]").forEach(field => {
        const value = field.value.trim();
        let fieldValid = value !== "";

        if (!fieldValid) {
            hasEmpty = true;
        } else if (field.type === "date" && field.min && value < field.min) {
            fieldValid = false;
        }

        if (!fieldValid) {
            result.valid = false;
            result.invalidFields.push(field);
            if (!result.firstInvalid) result.firstInvalid = field;
        }
    });

    result.messageKey = hasEmpty ? "requiredFields" : "pastDate";
    result.section = section;
    return result;
}

function validateQuoteStep(step) {
    const result = checkQuoteStep(step);
    const section = result.section || document.querySelector(`.quote-step[data-step="${step}"]`);

    if (section) {
        section.querySelectorAll("[required]").forEach(field => {
            setFieldError(field, result.invalidFields.includes(field));
        });
    }

    if (!result.valid) {
        showFormMessage(quoteError, getTranslation(result.messageKey));

        if (result.firstInvalid && step === currentStep) {
            result.firstInvalid.focus();
        }
    } else {
        hideFormMessage(quoteError);
    }

    return result.valid;
}

function keepQuoteInView() {
    const wrapper = document.querySelector(".quote-wrapper");
    if (!wrapper) return;

    const headerHeight = header ? header.offsetHeight : 0;
    if (wrapper.getBoundingClientRect().top < headerHeight) {
        wrapper.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
    }
}

nextButtons.forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        const nextStep = Number(button.getAttribute("data-next-step"));
        if (!validateQuoteStep(currentStep)) return;
        showQuoteStep(nextStep);
        keepQuoteInView();
    });
});

backButtons.forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        const previousStep = Number(button.getAttribute("data-back-step"));
        showQuoteStep(previousStep);
        keepQuoteInView();
    });
});

function handleFieldInput(event) {
    const field = event.target;
    if (!field.matches || !field.matches("input, textarea, select")) return;

    const filled = field.value.trim() !== "";
    field.classList.toggle("has-value", filled);

    if (field.classList.contains("field-error") && filled) {
        setFieldError(field, false);
    }
}

if (quoteForm) {
    quoteForm.addEventListener("input", event => {
        handleFieldInput(event);

        const step = quoteForm.querySelector(".quote-step.active");
        if (step && !step.querySelector(".field-error")) {
            hideFormMessage(quoteError);
        }
    });

    quoteForm.addEventListener("change", handleFieldInput);

    quoteForm.addEventListener("keydown", event => {
        if (event.key !== "Enter" || event.isComposing) return;
        if (!(event.target instanceof HTMLInputElement)) return;
        if (currentStep >= quoteSteps.length) return;

        event.preventDefault();

        const nextButton = document.querySelector(
            `.quote-step[data-step="${currentStep}"] [data-next-step]`
        );
        if (nextButton) nextButton.click();
    });
}

function setDateMinimum() {
    const dateInput = document.getElementById("dates");
    if (dateInput) dateInput.min = getTodayISO();

    const fechaInput = document.getElementById("fecha");
    if (fechaInput) fechaInput.min = getTodayISO();
}


/* =========================================================
   16. ARCHIVO DEL BRIEF
========================================================= */

const briefFile = document.getElementById("briefFile");
const fileName = document.getElementById("fileName");

function updateFileName() {
    if (!fileName) return;
    const file = briefFile && briefFile.files ? briefFile.files[0] : null;
    fileName.textContent = file ? file.name : getTranslation("optional");
}

if (briefFile) {
    briefFile.addEventListener("change", updateFileName);
}


/* =========================================================
   17. AI BRIEF HELPER
========================================================= */

const briefKeywords = {
    commercial: ["comercial", "anuncio", "producto", "marca", "publicidad", "campaña", "commercial", "advertising", "brand", "campaign"],
    social: ["instagram", "tiktok", "facebook", "reels", "stories", "redes", "social", "social media"],
    documentary: ["documental", "documentary", "entrevista", "interview", "historia", "testimonio", "testimonial"],
    corporate: ["corporativo", "empresa", "corporate", "company", "institucional"],
    music: ["musical", "video musical", "music video", "cancion", "song", "artista", "artist"],
    event: ["evento", "event", "concierto", "concert", "festival", "conferencia", "conference"],
    photography: ["fotografia", "photo", "photography", "fotos", "fotografias"],
    cinematic: ["cinematografico", "cinematic", "pelicula", "film", "cine", "short film"],
    outdoor: ["exterior", "exteriores", "outdoor", "calle", "montana", "playa", "bosque", "naturaleza"],
    studio: ["estudio", "studio", "set", "interior", "interiores"]
};

const briefKeywordPatterns = {};

Object.keys(briefKeywords).forEach(category => {
    briefKeywordPatterns[category] = briefKeywords[category].map(keyword => {
        const cleaned = escapeRegExp(normalizeText(keyword)).replace(/\s+/g, "\\s+");
        return new RegExp(`(?:^|[^a-z0-9])${cleaned}(?:e?s)?(?![a-z0-9])`);
    });
});

function analyzeBrief(text) {
    const normalized = normalizeText(text);
    const detected = {};

    Object.keys(briefKeywordPatterns).forEach(category => {
        detected[category] = briefKeywordPatterns[category].some(pattern =>
            pattern.test(normalized)
        );
    });

    return detected;
}

function buildBriefAnalysis(detected) {
    const result = {
        type: "typeGeneric",
        services: ["svcPlanning", "svcCoordination", "svcPost"],
        crew: ["roleProduction", "roleCamera", "roleEditing"],
        workflow: ["stepPre", "stepProduction", "stepPost", "stepDelivery"],
        notes: []
    };

    if (detected.commercial) {
        result.type = "typeCommercial";
        result.services.push("svcCreative");
        result.crew.push("roleDirection", "roleLighting");
    } else if (detected.documentary) {
        result.type = "typeDocumentary";
        result.crew.push("roleSound");
    } else if (detected.corporate) {
        result.type = "typeCorporate";
        result.services.push("svcCreative");
    } else if (detected.music) {
        result.type = "typeMusic";
        result.crew.push("roleDirection", "roleSound", "roleLighting");
    } else if (detected.event) {
        result.type = "typeEvent";
        result.services.push("svcEventLogistics");
    } else if (detected.cinematic) {
        result.type = "typeCinematic";
        result.crew.push("roleDirection", "roleSound", "roleLighting");
    } else if (detected.social) {
        result.type = "typeSocial";
        result.services.push("svcFormats");
    } else if (detected.photography) {
        result.type = "typePhotography";
        result.services.push("svcCreative");
        result.crew.push("roleLighting");
    }

    result.services = [...new Set(result.services)];
    result.crew = [...new Set(result.crew)];
    return result;
}

function renderBriefAnalysis(result) {
    if (!aiResult) return;
    aiResult.innerHTML = "";

    const title = document.createElement("h3");
    title.textContent = getTranslation(result.type);
    aiResult.appendChild(title);

    createResultList(aiResult, getTranslation("aiSuggestedServices"), result.services.map(getTranslation));
    createResultList(aiResult, getTranslation("aiSuggestedCrew"), result.crew.map(getTranslation));
    createResultList(aiResult, getTranslation("aiPipeline"), result.workflow.map(getTranslation));

    aiResult.classList.add("visible");
}

function createResultList(container, titleText, items) {
    const title = document.createElement("h4");
    title.textContent = titleText;
    const list = document.createElement("ul");

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    container.appendChild(title);
    container.appendChild(list);
}

if (analyzeBriefButton && briefInput) {
    briefInput.addEventListener("input", () => {
        if (briefInput.value.trim()) briefInput.classList.remove("field-error");
    });

    analyzeBriefButton.addEventListener("click", event => {
        event.preventDefault();
        const text = briefInput.value.trim();

        if (!text) {
            briefInput.classList.add("field-error");
            briefInput.focus();
            return;
        }

        briefInput.classList.remove("field-error");
        analyzeBriefButton.disabled = true;
        analyzeBriefButton.setAttribute("aria-busy", "true");
        analyzeBriefButton.textContent = getTranslation("analyzing");

        if (aiResult) aiResult.classList.remove("visible");

        window.setTimeout(() => {
            lastBriefDetected = analyzeBrief(text);
            refreshBriefResults();

            analyzeBriefButton.disabled = false;
            analyzeBriefButton.removeAttribute("aria-busy");
            analyzeBriefButton.textContent = getTranslation("analyze");
        }, 650);
    });
}

function refreshBriefResults() {
    if (lastBriefDetected) {
        renderBriefAnalysis(buildBriefAnalysis(lastBriefDetected));
    }
    updateProductionPulse(lastBriefDetected);
}


/* =========================================================
   18. PRODUCTION PULSE
========================================================= */

const productionPulse = document.getElementById("productionPulse");

function updateProductionPulse(detected) {
    if (!productionPulse) return;

    productionPulse.innerHTML = "";

    if (!detected) {
        const empty = document.createElement("p");
        empty.className = "pulse-empty";
        empty.textContent = getTranslation("pulseEmpty");
        productionPulse.appendChild(empty);
        productionPulse.classList.remove("visible");
        return;
    }

    const items = [];

    if (detected.commercial) items.push({ label: "pulseBranded", value: "valueHigh" });
    if (detected.social) items.push({ label: "pulseSocial", value: "valueHigh" });
    if (detected.documentary) items.push({ label: "pulseInterviews", value: "valueHigh" });
    if (detected.cinematic) items.push({ label: "pulseCinematic", value: "valueHigh" });
    if (detected.photography) items.push({ label: "pulsePhoto", value: "valueMedium" });
    if (detected.outdoor) items.push({ label: "pulseOutdoor", value: "valueMedium" });
    if (detected.studio) items.push({ label: "pulseStudio", value: "valueMedium" });
    if (detected.music) items.push({ label: "pulseMusic", value: "valueHigh" });
    if (detected.event) items.push({ label: "pulseEvent", value: "valueHigh" });

    if (!items.length) {
        items.push({ label: "pulseGeneral", value: "valueMedium" });
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "pulse-item";

        const label = document.createElement("span");
        label.className = "pulse-item-label";
        label.textContent = getTranslation(item.label);

        const value = document.createElement("strong");
        value.className = "pulse-item-value";
        value.textContent = getTranslation(item.value);

        card.appendChild(label);
        card.appendChild(value);
        productionPulse.appendChild(card);
    });

    productionPulse.classList.add("visible");
}


/* =========================================================
   19. FORMULARIO DE COTIZACIÓN
========================================================= */

function getFieldText(field) {
    if (!field) return "";

    if (field.tagName === "SELECT") {
        const option = field.options[field.selectedIndex];
        return option ? option.textContent.trim() : "";
    }

    return field.value.trim();
}

function trimBrokenSurrogate(text) {
    const last = text.charCodeAt(text.length - 1);
    return last >= 0xD800 && last <= 0xDBFF ? text.slice(0, -1) : text;
}

function buildMailto(subject, bodyText) {
    const make = text =>
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

    if (make(bodyText).length <= MAILTO_MAX_LENGTH) {
        return { href: make(bodyText), truncated: false };
    }

    let end = bodyText.length;
    while (end > 0 && make(trimBrokenSurrogate(bodyText.slice(0, end)) + "…").length > MAILTO_MAX_LENGTH) {
        end -= 25;
    }

    return {
        href: make(trimBrokenSurrogate(bodyText.slice(0, Math.max(end, 0))) + "…"),
        truncated: true
    };
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
    }
    return Promise.resolve(false);
}

function buildQuoteEmail() {
    if (!quoteForm) return null;

    const field = name => quoteForm.elements[name];

    const company = getFieldText(field("company"));
    const projectType = getFieldText(field("projectType"));
    const scope = getFieldText(field("scope"));
    const dates = getFieldText(field("dates"));
    const budget = getFieldText(field("budget"));
    const brief = getFieldText(field("brief"));

    const fileInput = field("briefFile");
    const attachedFile = fileInput && fileInput.files ? fileInput.files[0] : null;

    const lines = [
        getTranslation("quoteMailTitle"),
        "",
        `${getTranslation("mailCompany")}: ${company}`,
        `${getTranslation("mailType")}: ${projectType}`,
        `${getTranslation("mailScope")}: ${scope}`,
        `${getTranslation("mailDates")}: ${dates}`,
        `${getTranslation("mailBudget")}: ${budget}`
    ];

    if (attachedFile) {
        lines.push(`${getTranslation("mailFile")}: ${attachedFile.name}`);
    }

    lines.push("", `${getTranslation("mailBriefLabel")}:`, brief);

    return {
        subject: getTranslation("quoteMailSubject"),
        body: lines.join("\n"),
        hasFile: Boolean(attachedFile)
    };
}

if (quoteForm) {
    quoteForm.addEventListener("submit", event => {
        event.preventDefault();

        for (let step = 1; step <= quoteSteps.length; step++) {
            if (!checkQuoteStep(step).valid) {
                showQuoteStep(step);
                validateQuoteStep(step);
                return;
            }
        }

        hideFormMessage(quoteError);

        const emailData = buildQuoteEmail();
        if (!emailData) return;

        const mail = buildMailto(emailData.subject, emailData.body);
        const notes = emailData.hasFile ? [getTranslation("mailAttachNote")] : [];

        setMailNote(quoteMailNote, notes);
        showFormMessage(quoteSuccess);

        if (mail.truncated) {
            copyToClipboard(emailData.body).then(copied => {
                setMailNote(quoteMailNote, [
                    ...notes,
                    getTranslation(copied ? "mailLongCopied" : "mailLongNotCopied")
                ]);
            });
        }

        window.setTimeout(() => {
            window.location.href = mail.href;
        }, 700);
    });
}


/* =========================================================
   19B. CUESTIONARIO POR WHATSAPP
   (función global: se llama desde onclick="enviarWhatsApp()")
========================================================= */

function enviarWhatsApp() {
    const numero = "50661675217";

    const valor = id => {
        const campo = document.getElementById(id);
        return campo ? campo.value.trim() : "";
    };

    const nombre = valor("nombre");
    const correo = valor("correo");
    const cliente = valor("cliente");
    const produccion = valor("produccion");
    const locacion = valor("locacion");
    const fecha = valor("fecha");
    const presupuesto = valor("presupuesto");

    const errorBox = document.getElementById("whatsappError");
    const correoField = document.getElementById("correo");
    const correoValido = !correo || !correoField || correoField.checkValidity();

    if (!nombre || !correo || !correoValido) {
        showFormMessage(
            errorBox,
            !nombre || !correo
                ? "Por favor completá al menos tu nombre y correo."
                : "Por favor ingresá un correo electrónico válido."
        );
        (!nombre ? document.getElementById("nombre") : correoField).focus();
        return;
    }

    hideFormMessage(errorBox);

    /* 2026-09-25 -> 25/09/2026 */
    const fechaBonita = fecha ? fecha.split("-").reverse().join("/") : "";

    const mensaje = [
        "Hola, quiero enviar la información del cuestionario:",
        "",
        `Nombre: ${nombre}`,
        `Correo: ${correo}`,
        `Tipo de cliente: ${cliente}`,
        `Tipo de producción: ${produccion}`,
        `Locación: ${locacion}`,
        `Fecha: ${fechaBonita}`,
        `Presupuesto: ${presupuesto}`
    ].join("\n");

    const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    window.location.href = url;
}

const whatsappForm = document.getElementById("whatsappForm");
if (whatsappForm) {
    whatsappForm.addEventListener("input", () => {
        hideFormMessage(document.getElementById("whatsappError"));
    });
}


/* =========================================================
   20. REINICIAR COTIZACIÓN
========================================================= */

const resetQuote = document.getElementById("resetQuote");

if (resetQuote) {
    resetQuote.addEventListener("click", event => {
        event.preventDefault();
        if (quoteForm) {
            quoteForm.reset();
            quoteForm.querySelectorAll(".field-error, .has-value").forEach(field => {
                field.classList.remove("field-error", "has-value");
                field.removeAttribute("aria-invalid");
            });
        }

        updateFileName();

        hideFormMessage(quoteError);
        hideFormMessage(quoteSuccess);
        setMailNote(quoteMailNote, []);

        showQuoteStep(1);
    });
}


/* =========================================================
   21. DIRECTORIO CREW Y FILTROS DE OPORTUNIDADES
========================================================= */

const crewData = {
    camera: { title: "Camera Department", roles: ["Director de Fotografía", "Cámara Principal", "Asistente de Cámara (1st AC)", "Data Wrangler"] },
    sound: { title: "Sound Department", roles: ["Sonidista / Operador de Boom", "Diseñador Sonoro", "Postproductor de Audio"] },
    direction: { title: "Direction Department", roles: ["Director", "Asistente de Dirección", "Script /Continuista"] },
    art: { title: "Art Department", roles: ["Director de Arte", "Utilero", "Vestuarista / Maquillista"] },
    lighting: { title: "Lighting & Grip", roles: ["Gaffer", "Eléctrico", "Key Grip"] },
    editing: { title: "Editing & Post", roles: ["Editor de Video", "Colorista", "Motion Graphics Designer"] },
    production: { title: "Production Department", roles: ["Productor Ejecutivo", "Jefe de Producción", "Asistente de Producción (PA)"] },
    other: { title: "Other Specialists", roles: ["Fotógrafo Still", "Piloto de Drone", "Traductor / Asistente Logístico"] }
};

const crewOutput = document.getElementById("crewOutput");
const crewButtons = document.querySelectorAll("[data-crew]");

function renderCrew(category) {
    if (!crewOutput) return;
    const data = crewData[category];
    if (!data) return;

    crewOutput.innerHTML = "";
    const heading = document.createElement("h4");
    heading.textContent = data.title;
    crewOutput.appendChild(heading);

    const list = document.createElement("ul");
    data.roles.forEach(role => {
        const li = document.createElement("li");
        li.textContent = role;
        list.appendChild(li);
    });
    crewOutput.appendChild(list);
}

crewButtons.forEach(button => {
    button.addEventListener("click", () => {
        crewButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderCrew(button.getAttribute("data-crew"));
    });
});

if (crewButtons.length > 0) {
    crewButtons[0].classList.add("active");
    renderCrew(crewButtons[0].getAttribute("data-crew"));
}

/* Filtros de oportunidades */
const opportunityButtons = document.querySelectorAll("[data-opportunity-filter]");
const opportunityCards = document.querySelectorAll(".opportunity-card");

opportunityButtons.forEach(button => {
    button.addEventListener("click", () => {
        opportunityButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-opportunity-filter");
        opportunityCards.forEach(card => {
            const match = filter === "all" || card.getAttribute("data-opportunity") === filter;
            card.style.display = match ? "" : "none";
        });
    });
});


/* =========================================================
   22. FORMULARIO DE TALENTO
========================================================= */

const talentError = document.getElementById("talentError");
const talentSuccess = document.getElementById("talentSuccess");
const talentMailNote = document.getElementById("talentMailNote");

function buildTalentEmail() {
    if (!talentForm) return null;

    const field = name => talentForm.elements[name];

    const name = getFieldText(field("name"));
    const email = getFieldText(field("email"));
    const role = getFieldText(field("role"));
    const experience = getFieldText(field("experience"));
    const message = getFieldText(field("message"));

    const lines = [
        getTranslation("talentMailTitle"),
        "",
        `${getTranslation("mailName")}: ${name}`,
        `${getTranslation("mailEmail")}: ${email}`,
        `${getTranslation("mailArea")}: ${role}`,
        "",
        `${getTranslation("mailExperience")}:`,
        experience,
        "",
        `${getTranslation("mailMessage")}:`,
        message
    ];

    return {
        subject: getTranslation("talentMailSubject"),
        body: lines.join("\n")
    };
}

if (talentForm) {
    talentForm.addEventListener("submit", event => {
        event.preventDefault();

        let valid = true;
        talentForm.querySelectorAll("[required]").forEach(field => {
            const filled = field.value.trim() !== "";
            setFieldError(field, !filled);
            if (!filled) valid = false;
        });

        if (!valid) {
            showFormMessage(talentError, getTranslation("requiredFields"));
            return;
        }

        hideFormMessage(talentError);

        const emailData = buildTalentEmail();
        if (!emailData) return;

        const mail = buildMailto(emailData.subject, emailData.body);
        showFormMessage(talentSuccess);

        if (mail.truncated) {
            copyToClipboard(emailData.body).then(copied => {
                setMailNote(talentMailNote, [
                    getTranslation(copied ? "mailLongCopied" : "mailLongNotCopied")
                ]);
            });
        }

        window.setTimeout(() => {
            window.location.href = mail.href;
        }, 700);
    });

    talentForm.addEventListener("input", event => {
        handleFieldInput(event);
        if (!talentForm.querySelector(".field-error")) {
            hideFormMessage(talentError);
        }
    });
}


/* =========================================================
   23. MODAL DE IMÁGENES Y BOTÓN VOLVER ARRIBA
========================================================= */

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

function openImageModal(src, alt) {
    if (!imageModal || !modalImage) return;
    modalImage.src = src;
    modalImage.alt = alt || "";
    imageModal.classList.add("active");
    imageModal.setAttribute("aria-hidden", "false");
}

function closeImageModal() {
    if (!imageModal || !modalImage) return;
    imageModal.classList.remove("active");
    imageModal.setAttribute("aria-hidden", "true");
    modalImage.src = TRANSPARENT_PIXEL;
}

document.querySelectorAll(".reference-card, .case-image").forEach(item => {
    const img = item.querySelector("img");
    if (!img) return;

    /* Las tarjetas con enlace (<a>) navegan; las demás abren el modal */
    if (item.querySelector("a[href]")) return;

    item.style.cursor = "zoom-in";

    item.addEventListener("click", () => {
        const src = img.currentSrc || img.src;
        if (src) openImageModal(src, img.alt || "");
    });
});

if (modalClose) modalClose.addEventListener("click", closeImageModal);
if (imageModal) {
    imageModal.addEventListener("click", event => {
        if (event.target === imageModal) closeImageModal();
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeImageModal();
        closeMenu();
    }
});

const backToTop = document.getElementById("backToTop");

function updateBackToTop() {
    if (!backToTop) return;
    backToTop.classList.toggle("visible", window.scrollY > 500);
}

window.addEventListener("scroll", updateBackToTop, { passive: true });

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: getScrollBehavior() });
    });
}


/* =========================================================
   24. ESTADO DE CONEXIÓN (ONLINE / OFFLINE)
========================================================= */

function updateConnectionStatus() {
    if (!connectionStatus) return;
    const online = navigator.onLine;
    connectionStatus.textContent = getTranslation(online ? "online" : "offline");
    connectionStatus.classList.toggle("offline", !online);
}

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);


/* =========================================================
   25. INICIALIZACIÓN GENERAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(safeStorage.get("delefocoTheme") || "dark", false);
    setAudience(currentAudience, false);
    changeLanguage(currentLanguage);

    setDateMinimum();
    updateFileName();
    updateConnectionStatus();

    showQuoteStep(1);
    showCase(0);
    showHeroSlide(0);
    updatePipelineProgress();

    handleInitialHash();
    startHeroAutoplay();

    /* Si llegamos acá desde el botón EMPRESA/TALENTO de la otra página,
       continuamos la animación de transición en vez de arrancar en frío. */
    playIncomingAudienceTransition();
});
