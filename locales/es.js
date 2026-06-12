const es = {
    meta: {
        title: 'Diego Muñoz Herranz - Data Engineer | Portfolio',
        ogTitle: 'Diego Muñoz Herranz - Data Engineer',
        description:
            'Portfolio de Diego Muñoz Herranz, Data Engineer en Madrid. Pipelines de datos, ' +
            'Azure Databricks, Python, PySpark e Inteligencia Artificial. Proyectos, experiencia y contacto.',
        ogLocale: 'es_ES'
    },
    nav: {
        items: [
            { href: '/#sobre-mi', label: 'Sobre mí' },
            { href: '/#experiencia', label: 'Experiencia' },
            { href: '/#proyectos', label: 'Proyectos' },
            { href: '/#contacto', label: 'Contacto' }
        ],
        menuAria: 'Abrir menú de navegación',
        themeToggleAria: 'Cambiar entre modo claro y oscuro',
        langSwitchTitle: 'Switch to English',
        logoAria: 'Diego Muñoz Herranz — Ir al inicio',
        backToTop: 'Volver arriba'
    },
    hero: {
        role: 'Data Engineer · Madrid, España',
        tagline:
            'Desarrollo productos digitales de principio a fin: aplicaciones web ' +
            'y móviles, soluciones de datos e IA y pipelines que convierten ' +
            'información en decisiones. Actualmente en Dentsu, antes en KPMG y Deloitte.',
        ctaTalk: 'Hablemos',
        ctaCV: 'Descargar CV',
        photoAlt: 'Fotografía de Diego Muñoz Herranz',
        emailTitle: 'Enviar un correo electrónico a Diego Muñoz Herranz',
        phoneTitle: 'Llamar a Diego Muñoz Herranz',
        linkedinTitle: 'Visitar el perfil de Diego Muñoz en Linkedin'
    },
    about: {
        title: 'Sobre Mí',
        paragraphs: [
            '¡Hola! Soy Diego, un apasionado desarrollador de software y entusiasta de la tecnología. ' +
            'Desde que comencé en 2014, he acumulado una sólida formación, incluyendo un Grado Superior ' +
            'en Desarrollo de Aplicaciones Multiplataforma y un Máster en Inteligencia Artificial y Data Science.',
            'He trabajado en empresas como Deloitte y KPMG, desempeñando análisis de datos y auditoría IT, ' +
            'y siempre buscando nuevos retos y oportunidades para contribuir al avance tecnológico.',
            'Me caracterizo por ser responsable, dinámico y adaptable, disfrutando de la colaboración en ' +
            'equipo y la resolución creativa de problemas. Mi objetivo es desarrollar soluciones innovadoras ' +
            'que tengan un impacto positivo en la sociedad.'
        ],
        bio: [
            { year: '2000', text: 'Nacido en Madrid, España' },
            {
                year: '2014',
                text: 'Empiezo mis andaduras en la informática y la programación y realizo mi primer juego en Scratch',
                linkLabel: 'Ver'
            },
            {
                year: '2020',
                text: 'Finalizo el Grado Medio de Sistemas Microinformáticos y Redes y empiezo a desarrollar mis primeros proyectos.'
            },
            {
                year: '2022',
                text:
                    'Finalizo el Grado Superior en Desarrollo de Aplicaciones Multiplataforma junto al ' +
                    'Higher National Diploma in Computing y comienzo a trabajar como analista de datos en Deloitte.'
            },
            {
                year: '2022 - Sep',
                text:
                    'Con la idea de avanzar en mi carrera profesional dejo la anterior empresa y comienzo a ' +
                    'trabajar como Junior IT Audit en KPMG, también empiezo a introducirme en el Data Science y ' +
                    'estudio un Máster en Inteligencia Artificial y Data Science en la Universidad Europea de Madrid.'
            },
            {
                year: '2025',
                text: 'Continúo mis andaduras en DENTSU continuando con mi ambición y formándome en nuevas tecnologías.'
            }
        ]
    },
    experience: {
        title: 'Experiencia Laboral',
        entries: [
            {
                company: 'DENTSU',
                position: 'Data Engineer',
                starttime: 'Sep 2025',
                endtime: 'Actualidad',
                summary:
                    'En mi rol actual como Data Engineer en Dentsu, diseño y desarrollo pipelines de datos robustos y ' +
                    'escalables que permiten la ingesta, transformación y explotación eficiente de grandes volúmenes de ' +
                    'información, participo en la definición de arquitecturas de datos orientadas a analítica avanzada y ' +
                    'reporting, optimizo procesos ETL/ELT garantizando calidad, consistencia y rendimiento, colaboro ' +
                    'estrechamente con equipos de negocio y analítica para asegurar la disponibilidad y fiabilidad de los ' +
                    'datos, y aplico buenas prácticas en gobierno del dato, automatización y monitorización para mejorar ' +
                    'la eficiencia operativa y la toma de decisiones basada en datos.'
            },
            {
                company: 'KPMG',
                position: 'Data Analyst Senior II',
                starttime: 'Sep 2024',
                endtime: 'Sep 2025',
                summary:
                    'Como Senior II en el área de Data & Analytics, lideré el desarrollo del departamento impulsando la ' +
                    'innovación y la implementación de soluciones escalables, gestioné la planificación, seguimiento y ' +
                    'ejecución de proyectos de auditoría, coordinando equipos de trabajo y manteniendo comunicación directa ' +
                    'con los clientes, garanticé la integridad de los datos contables mediante procesos de validación ' +
                    'exhaustivos, y optimicé los procesos de auditoría y análisis de datos aplicando técnicas asistidas ' +
                    'por computadora con herramientas avanzadas.'
            },
            {
                company: 'KPMG',
                position: 'Data Analyst Staff II',
                starttime: 'Sep 2023',
                endtime: 'Sep 2024',
                summary:
                    'En este rol lideré la migración a Azure Databricks y el desarrollo de aplicaciones estratégicas para ' +
                    'el departamento de auditoría, optimizando procesos con Python y PySpark, y gestionando datos clave ' +
                    'para Data Analytics y Auditoría Financiera en SQL Server y Alteryx. Además, me encargué de la ' +
                    'comunicación y gestión de datos con los clientes.'
            },
            {
                company: 'KPMG',
                position: 'Data Analyst Staff I',
                starttime: 'Sep 2022',
                endtime: 'Sep 2023',
                summary:
                    'Migración de sistemas desde SQL Server hacia Azure Databricks utilizando Python y PySpark, ' +
                    'optimización de datos con Alteryx y desarrollo de aplicaciones web con Python y Django. Además, ' +
                    'procesé datos para análisis y auditoría financiera, contribuyendo al éxito empresarial mediante la ' +
                    'toma de decisiones informadas y la mejora de la eficiencia y escalabilidad.'
            },
            {
                company: 'Deloitte',
                position: 'Junior Delivery Analyst',
                starttime: 'Abr 2022',
                endtime: 'Aug 2023',
                summary:
                    'Analista de Datos y Experto en Python en una entidad financiera de España, me encargaba del análisis ' +
                    'estratégico de datos para la toma de decisiones. Utilizaba herramientas como PySpark y HUE en entornos ' +
                    'Big Data y espacios cloud para extraer y analizar grandes volúmenes de información. Mi trabajo incluía ' +
                    'crear informes detallados para respaldar decisiones clave, optimizando procesos y generando valor para ' +
                    'la entidad financiera y sus clientes.'
            }
        ]
    },
    education: {
        title: 'Educación',
        entries: [
            {
                company: 'Universidad Europea',
                position: 'Máster en Inteligencia Artificial',
                starttime: '2022',
                endtime: '2023',
                summary:
                    'Machine Learning · Data Science · Python/R · PyTorch · RapidMiner Studio · Redes Neuronales y ' +
                    'Redes Convolucionales · Deep Learning · Cognitive Computing · Reconocimiento de voz y asistentes ' +
                    'virtuales · Despliegue de modelos en producción · IBM Cloud · Microsoft Azure · TensorFlow/Keras · ' +
                    'Computación Cuántica Qiskit Framework'
            },
            {
                company: 'CEV. Escuela Superior de Comunicación, Imagen y Sonido',
                position: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
                starttime: '2020',
                endtime: '2022',
                summary:
                    'Bases de Datos · Entornos de Desarrollo · Programación · Sistemas Informáticos · Diseño, Modelado y ' +
                    'Animación 3D · Gamificación y Diseño de Juegos · Acceso a Datos · Desarrollo de Interfaces · ' +
                    'Programación de Servicios y Procesos · Programación Multimedia y Dispositivos Móviles · Sistemas de ' +
                    'Gestión Empresarial · Lenguaje de Marcas · Inglés · Trabajo Fin de Grado · Formación en Centros de Trabajo'
            },
            {
                company: 'Pearson College London',
                position: 'Pearson BTEC Level 5 Higher National Diploma in Computing',
                starttime: '2020',
                endtime: '2022',
                summary:
                    'Programming · Networking · Professional Practice · Database Design & Development · Security · ' +
                    'Managing a successful computing project · Computing Research Project · Business Intelligence · ' +
                    'Prototyping · Application Program Interfaces (APIs) · Application Development · Software Development ' +
                    'Lifecycles · Website Design & Development · Virtual & Augmented Reality Development · Games Development'
            },
            {
                company: 'Centro de Estudios Superiores Fuencarral',
                position: 'Grado Medio de Técnico en Sistemas Microinformáticos y Redes',
                starttime: '2018',
                endtime: '2020',
                summary:
                    'Linux · Django · Administración de sistemas · MySQL · VirtualBox · XAMPP · Microsoft Office · CSS · ' +
                    'Linux Server · Reparación de equipos informáticos · Microsoft Exchange · JavaScript · Packet Tracer · ' +
                    'Directorio activo · HTML'
            }
        ]
    },
    projects: {
        title: 'Proyectos',
        scrollLeftAria: 'Desplazar proyectos hacia la izquierda',
        scrollRightAria: 'Desplazar proyectos hacia la derecha',
        descriptions: {
            breastcancertfm: 'Clasificación de Cáncer de Mama de tipo Carcinoma Ductal Invasivo',
            sports4all: 'Automatización y Gestión de Centros Deportivos',
            cesfuencarral: 'Reinterpretación de la página web del Centro de Estudios Superiores Ces Fuencarral',
            securitysystem: 'Sistema de Seguridad Android, conectado a una API.',
            passwordmanager: 'Simple Gestor de Usuarios realizado con Java'
        }
    },
    skills: {
        title: 'Habilidades',
        paragraph:
            'Como profesional, he desarrollado aplicaciones multiplataforma, creando soluciones que funcionan en ' +
            'diversas plataformas para adaptarse a las demandas del mercado. Además, tengo experiencia en diseñar y ' +
            'construir sistemas BackEnd robustos para aplicaciones y servicios web. También soy competente en la ' +
            'planificación y configuración de infraestructuras de servidor, asegurando un rendimiento óptimo en ' +
            'todas las etapas de desarrollo.',
        subtitle: 'Software y Lenguajes'
    },
    contact: {
        title: 'Contacto',
        text:
            '¿Tienes un proyecto de datos entre manos o una oportunidad en la que encajo? ' +
            'Escríbeme y hablamos: respondo rápido.',
        ctaMail: 'Escríbeme',
        ctaLinkedIn: 'LinkedIn'
    },
    footer: {
        rights: 'Todos los derechos reservados.'
    },
    notFound: {
        title: 'Página no encontrada',
        text: 'La página que busca no se ha encontrado.',
        button: 'Volver a Inicio'
    },
    projectPage: {
        breadcrumb: 'Proyectos',
        code: 'Código',
        platform: 'Plataforma',
        stack: 'Stack',
        multimedia: 'Multimedia',
        githubCode: 'Código GitHub'
    },
    projectPages: {
        breastcancertfm: {
            layoutTitle: 'Breast Cancer TFM',
            title: 'Breast Cancer TFM',
            year: '2023',
            intro:
                'Este proyecto tiene como objetivo desarrollar un modelo de inteligencia artificial capaz de ' +
                'identificar la malignidad de las masas tumorales en imágenes médicas de cáncer de mama.',
            milestonesIntro: 'Los principales hitos incluyen:',
            milestones: [
                { term: 'Recopilación y Preparación de Datos', text: 'Se recolectó y preparó un dataset de imágenes médicas etiquetadas con casos positivos y negativos de cáncer de mama.' },
                { term: 'Reducción de Datos', text: 'Se utilizó el aprendizaje transferido para reducir el tamaño del dataset inicial, aprovechando modelos preentrenados.' },
                { term: 'Análisis Exploratorio de Datos', text: 'Se realizó un análisis exploratorio para comprender las características del dataset.' },
                { term: 'Modelos de Redes Convolucionales (CNN)', text: 'Se construyeron modelos basados en CNN para la detección de cáncer de mama en imágenes médicas, extrayendo características relevantes.' },
                { term: 'Entrenamiento y Ajuste de Parámetros', text: 'Se entrenó el modelo con los datos preparados y se ajustaron los parámetros de la red convolucional. La precisión se midió en el conjunto de entrenamiento.' },
                { term: 'Optimización de Hiperparámetros', text: 'Se buscó la configuración óptima de hiperparámetros, como el número de neuronas, capas y iteraciones, para las imágenes.' },
                { term: 'Validación de Resultados', text: 'Se validaron los resultados utilizando un conjunto de datos separado para pruebas.' }
            ],
            reportLabel: 'Memoria Trabajo Fin de Máster',
            reportLink: 'Descargar PDF Aquí',
            platform: 'Web, Jupyter Notebook',
            stack: 'Python, ML Libraries (PyTorch, Keras, TensorFlow, Scikit-Learn), Flask'
        },
        sports4all: {
            layoutTitle: 'Sports4All',
            title: 'Sports4All',
            year: '2022',
            intro:
                'Sports4All es un proyecto realizado como Trabajo de Fin de Grado, consiste en un sistema de Gestión ' +
                'y Automatización para los centros deportivos de España por la cual podremos realizar reservas de ' +
                'espacios, inscripciones a eventos y ser social con gente con tus mismas aficiones. Además, con este ' +
                'sistema el usuario podrá acceder al espacio sin tener que pasar por ningún intermediario gracias al ' +
                'sistema de validaciones por código QR.',
            platform: 'iOS, Web',
            stack: 'Swift (Alamofire, FSCalendar), Laravel, Python, Flask, MySQL'
        },
        cesfuencarral: {
            layoutTitle: 'Ces Fuencarral',
            title: 'Web Ces Fuencarral',
            year: '2020',
            intro:
                'Aplicación Web que corresponde al proyecto de final de curso del CFGM de Sistemas Microinformáticos ' +
                'y Redes. Es una aplicación realizada en Python y su framework web Django que consiste en la ' +
                'reinterpretación del sitio web del centro de estudios y una plataforma en la que los alumnos pueden ' +
                'subir consultas y conversar con profesores y otros alumnos.',
            platform: 'Windows/MacOS/Linux',
            stack: 'Django, SASS, JS'
        },
        securitysystem: {
            layoutTitle: 'Sistema de Seguridad',
            title: 'Sistema de Seguridad',
            year: '2021',
            intro:
                'Aplicación Android realizada en Java, consiste en una aplicación que se conecta a una API que está ' +
                'conectada a un sistema de seguridad. Desde nuestra aplicación podremos comprobar el estado del ' +
                'sistema de seguridad y cambiarlo, también podremos ver el historial de los estados.',
            platform: 'Android',
            stack: 'Java'
        },
        passwordmanager: {
            layoutTitle: 'Administrador de Usuarios',
            title: 'Administrador de Usuarios',
            year: '2020',
            intro:
                'Aplicación de consola de comandos realizada con Java. Es un simple gestor de usuarios en el que ' +
                'podremos Registrar, Modificar y Eliminar usuarios, además de listar todos los usuarios, un usuario ' +
                'concreto o todos los usuarios asociados a un tipo de cuenta.',
            platform: 'Windows/MacOS/Linux',
            stack: 'Java'
        }
    }
}

export default es
