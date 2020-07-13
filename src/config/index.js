module.exports = {
    siteTitle: 'Florian Hansmann | Front-End Software Engineer',
    siteDescription:'Florian Hansmann is a Front-end software engineer based in Munich, Germany.',
    siteUrl: 'https://google.com',

    navLinks: [
    {
        name: 'About Me',
        url: '/#about',
    },
    {
        name: 'Writing',
        url: '/#writing',
    },
    {
        name: 'Projects',
        url: '/#projects',
    },
    {
        name: 'Contact',
        url: '/#contact',
    },
    ],
    
    navHeight: 100,
    
    colors: {
        green: '#64ffda',
        navy: '#0a192f',
        darkNavy: '#020c1b',
    },

    socialMedia: [
    {
        name: 'Github',
        url: 'https://github.com/fhansmann',
    },

    {
        name: 'Twitter',
        url: 'https://twitter.com/f_hansmann',
    },

    {
        name: 'Instagram',
        url: 'https://www.instagram.com/florianrian_/',
    },
    ],

    devTools: [
        {
            name: 'CSS',
        },
    
        {
            name: 'HTML',
        },
        ],

    srConfig: (delay = 200) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
        }),

}