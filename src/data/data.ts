interface Project {
    name: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    link?: string;
}
export const projects: Project[] = [
    {
        name: 'Guptachar',
        description: 'Guptachar is a full-stack app built with Next.js that lets you securely share secrets via an encrypted link. Your secrets remain safe, with no keys stored in the database. Plus, you can set an expiry date for your secret!',
        technologies: ['NextJS', 'TypeScript', 'MongoDB'],
        image: '/assets/guptacharmac.png',
        github: 'https://github.com/prasadkarmalkar/guptachar',
        link: 'https://guptachar.vercel.app'
    },
    {
        name: 'MoneyPay',
        description: 'MoneyPay is a full stack project developed to practice my development skills. Using MoneyPay we can send money (Fake🤫) to each other securely.',
        technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ContextAPI', 'JWT', 'JOD'],
        image: '/assets/moneypaymac.png',
        github: 'https://github.com/prasadkarmalkar/money-pay',
    },
    {
        name: 'AvengersNFT',
        description: 'avengersNFT is an Ethereum-based project for minting and trading unique Avengers-inspired NFTs. It combines secure smart contracts with collectible digital art, offering fans a decentralized way to own exclusive assets.',
        technologies: ['ReactJS', 'Solidity', 'HardHat', 'DaisyUI'],
        image: '/assets/avengersnftmac.png',
        github: 'https://github.com/prasadkarmalkar/avengersnft',
        link: 'https://avengersnft.vercel.app/'
    },
    {
        name: 'Amazon Clone',
        description: 'Amazon Clone is a frontend project that recreates the Amazon.com interface, allowing users to browse products and add them to a cart.',
        technologies: ['ReactJS', 'ContextAPI', 'Firebase'],
        image: '/assets/amazonclonemac.png',
        github: 'https://github.com/prasadkarmalkar/avengersnft',
        link: 'https://clone-87fb5.web.app/'
    },
];

export const JourneyData = [
    {
        position: 'Software Engineer',
        details: 'As a Software Engineer at rtCamp, I build high-performance web applications using JavaScript, TypeScript, and React.js. I have automated WordPress site migrations to VIP, successfully migrated multiple sites, and developed custom WordPress plugins and themes with PHP, JavaScript, ReactJS, and SCSS',
        company: 'rtCamp',
        from: 'Jan 2023',
        to: 'Present',
    },
    {
        position: 'Full Stack Developer Intern',
        details: 'At Supersapiens DevLab, I contributed to a Web3 social media project using React.js, Node.js, Express.js, and MongoDB. I also developed smart contracts in Solidity for an NFT project and created tests using Hardhat, enhancing blockchain skills.',
        company: 'Supersapiens Devlab',
        from: 'Nov 2021',
        to: 'Dec 2023',
    },
    {
        position: 'FrontEnd Developer Intern',
        details: 'At Casa Altair, I developed a responsive web frontend for an IoT application by converting Figma designs into HTML, CSS, and JavaScript. I also fetched and displayed API data, creating a dynamic, data-driven user experience.',
        company: 'Casa Altair',
        from: 'Sep 2021',
        to: 'Nov 2021',
    },
    {
        position: 'Batchelor Of Engineering',
        details: 'I hold a Bachelor of Engineering degree in Information Technology, where I gained a strong foundation in software development, web technologies, and data structures, equipping me with essential skills for innovative problem-solving.',
        company: 'D Y Patil College Of Engineering, Akurdi',
        from: '2020',
        to: '2023',
    },
    {
        position: 'Diploma in IT',
        details: 'I earned a Diploma in Information Technology, building core skills in programming, networking, and web development. This foundation deepened my technical knowledge and prepared me for advanced studies and hands-on projects in IT.',
        company: 'Pimpri Chinchwad Polytechnic, Akurdi',
        from: '2017',
        to: '2020',
    },
]