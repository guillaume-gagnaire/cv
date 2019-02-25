export const state = () => ({
    hard_skills: [
        {
            name: "Backend",
            slug: "backend",
            skills: [
                {
                    name: "PHP",
                    level: "expert",
                    slug: "php"
                },
                {
                    name: "Laravel",
                    level: "confirmed",
                    slug: "laravel"
                },
                {
                    name: "NodeJS",
                    level: "confirmed",
                    slug: "nodejs"
                }
            ]
        },
        {
            name: "Frontend",
            slug: "frontend",
            skills: [
                {
                    name: "HTML",
                    level: "expert",
                    slug: "html"
                },
                {
                    name: "CSS",
                    level: "expert",
                    slug: "css"
                },
                {
                    name: "JS",
                    level: "expert",
                    slug: "js"
                },
                {
                    name: "Typescript",
                    level: "confirmed",
                    slug: "typescript"
                },
                {
                    name: "Angular",
                    level: "confirmed",
                    slug: "angular"
                },
                {
                    name: "VueJS",
                    level: "expert",
                    slug: "vuejs"
                },
                {
                    name: "NuxtJS",
                    level: "confirmed",
                    slug: "nuxtjs"
                }
            ]
        },
        {
            name: "Databases",
            slug: "databases",
            skills: [
                {
                    name: "MySQL",
                    level: "expert",
                    slug: "mysql"
                },
                {
                    name: "MongoDB",
                    level: "expert",
                    slug: "mongodb"
                }
            ]
        },
        {
            name: "Devops",
            slug: "devops",
            skills: [
                {
                    name: "Debian",
                    level: "confirmed",
                    slug: "debian"
                },
                {
                    name: "Apache2",
                    level: "confirmed",
                    slug: "apache"
                },
                {
                    name: "NGINX",
                    level: "confirmed",
                    slug: "nginx"
                },
                {
                    name: "AWS",
                    level: "confirmed",
                    slug: "aws"
                },
                {
                    name: "Docker",
                    level: "confirmed",
                    slug: "docker"
                }
            ]
        }
    ],
    soft_skills: [
        "Curious",
        "Teacher at heart",
        "Entrepreneur mind"
    ],
    experiences: [
        {
            title: "Lead Developer",
            company: "Digital'ize",
            localization: "Bordeaux, France",
            link: "https://www.fitmyrun.fr/",
            from: "2019-02",
            to: false,
            description: `I'm in charge of creating the new platform of Digital'ize, 
            a company proposing virtual counselors for many physical and digital stores.`,
            skills_used: ["PHP", "Laravel", "NodeJS", "MySQL", "MongoDB", "VueJS", "NuxtJS", "AWS", "Docker"]
        },
        {
            title: "PHP Expert Developer",
            company: "Groupe Créative",
            localization: "Bordeaux, France",
            link: false,
            from: "2018-09",
            to: "2019-01",
            description: `I worked on several projects for various customers like Puy du Fou, 
            a medieval themed park, and Bordeaux Métropole.`,
            skills_used: ["PHP", "Laravel", "Angular"]
        },
        {
            title: "Lead developer",
            company: "Naxxt",
            localization: "Bordeaux, France",
            link: false,
            from: "2016-07",
            to: "2018-06",
            description: `I was in charge of creating an innovative DMP (Data Management Platform). 
            We were handling the web comminucation of our customers, providing a full spectrum 
            analysis of final customers behaviour and then, sending the right message, to the 
            right customer, at the right time, with a view to increasing customer loyalty.`,
            skills_used: ["PHP", "NodeJS", "HTML", "CSS", "AngularJS", "VueJS", "MongoDB", "AWS"]
        },
        {
            title: "PHP Teacher",
            company: "Sup de Pub",
            localization: "Bordeaux, France",
            link: "https://www.supdepub.com/campus/bordeaux/",
            from: "2015-09",
            to: "2017-07",
            description: `I was, during these two years, in charge of the PHP initiation of the 
            SP3 Digital classes, to teach them the basics of the logic, the programming, to 
            assure them a better communication with the developers that they will be led to manage.`,
            skills_used: ["PHP"]
        },
        {
            title: "Lead Developer",
            company: "Nala Multimédia",
            localization: "Bordeaux, France",
            link: "https://www.caramaps.com/",
            from: "2013-11",
            to: "2016-07",
            description: `I was responsible for the development of the Caramaps project, and I worked 
            on many other projects internally or externally.`,
            skills_used: ["Debian", "PHP", "Apache2", "MySQL", "MongoDB", "HTML", "CSS", "JS", "Google Maps", "Foundation", "OpenStreetMap", "Photon", "ElasticSearch"]
        },
        {
            title: "CTO / Co-founder",
            company: "Urdoor SAS",
            localization: "Paris, France",
            link: false,
            from: "2013-01",
            to: "2013-11",
            description: `We were creating the first bike home delivery service in France, 
            not only for meals, but for any item available in the store. I managed all the 
            technical aspects of the company, from the design of the logistics system to the 
            setting up of the website and mobile applications.`,
            skills_used: ["Debian", "OpenVZ", "Apache2", "Nginx", "PHP", "MySQL", "HTML", "CSS", "jQuery", "Phonegap", "Twilio", "LemonWay", "Google Maps"]
        }
    ],
    interests: [
        "Motorcycle (road and off-road)",
        "Music (drummer, but also guitarist and bassist)",
        "Photography",
        "Powerlifting"
    ]
});