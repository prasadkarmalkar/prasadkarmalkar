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
        description: 'A production-grade encrypted secret-sharing platform built with Next.js. Features zero-knowledge encryption architecture with no keys stored server-side, auto-expiring links, and a polished UX designed for secure one-time message sharing.',
        technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Crypto API'],
        image: '/assets/guptacharmac.png',
        github: 'https://github.com/prasadkarmalkar/guptachar',
        link: 'https://guptachar.vercel.app'
    },
    {
        name: 'MoneyPay',
        description: 'A full-stack fintech simulation with secure JWT-based authentication, real-time peer-to-peer transactions, and comprehensive transaction history. Built with a focus on clean architecture, input validation, and security best practices.',
        technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Express.js'],
        image: '/assets/moneypaymac.png',
        github: 'https://github.com/prasadkarmalkar/money-pay',
    },
    {
        name: 'AvengersNFT',
        description: 'An Ethereum-based NFT marketplace with custom Solidity smart contracts for minting and trading collectible digital assets. Features wallet integration, on-chain metadata storage, and a responsive gallery interface.',
        technologies: ['React.js', 'Solidity', 'Hardhat', 'Ethers.js'],
        image: '/assets/avengersnftmac.png',
        github: 'https://github.com/prasadkarmalkar/avengersnft',
        link: 'https://avengersnft.vercel.app/'
    },
    {
        name: 'Amazon Clone',
        description: 'A feature-rich e-commerce clone with product browsing, cart management, user authentication, and a complete checkout flow. Built with React and Firebase for real-time data synchronization and serverless backend.',
        technologies: ['React.js', 'Context API', 'Firebase'],
        image: '/assets/amazonclonemac.png',
        github: 'https://github.com/prasadkarmalkar/avengersnft',
        link: 'https://clone-87fb5.web.app/'
    },
];

export const JourneyData = [
    {
        position: 'Senior Software Engineer',
        details: 'Leading frontend architecture and development of high-performance web applications at scale. Spearheading WordPress VIP migrations for enterprise clients, mentoring junior developers, and driving technical decisions across multiple projects. Built custom plugins and themes that improved site performance by 40%.',
        company: 'rtCamp',
        from: 'Jan 2023',
        to: 'Present',
    },
    {
        position: 'Full Stack Developer',
        details: 'Architected and shipped a Web3 social media platform from the ground up using React.js, Node.js, and MongoDB. Designed and deployed production Solidity smart contracts for an NFT marketplace with comprehensive test coverage using Hardhat.',
        company: 'Supersapiens Devlab',
        from: 'Nov 2021',
        to: 'Dec 2022',
    },
    {
        position: 'Frontend Developer',
        details: 'Developed responsive, production-ready web interfaces for IoT dashboard applications. Translated Figma designs into pixel-perfect, accessible implementations. Integrated REST APIs for real-time data visualization and monitoring dashboards.',
        company: 'Casa Altair',
        from: 'Sep 2021',
        to: 'Nov 2021',
    },
    {
        position: 'Bachelor of Engineering',
        details: 'B.E. in Information Technology with focus on software engineering, data structures & algorithms, and web technologies. Led multiple capstone projects involving full-stack development and cloud deployment.',
        company: 'D Y Patil College Of Engineering, Akurdi',
        from: '2020',
        to: '2023',
    },
    {
        position: 'Diploma in IT',
        details: 'Diploma in Information Technology building foundational expertise in programming, networking, databases, and web development. Consistently ranked in the top 10% of the class.',
        company: 'Pimpri Chinchwad Polytechnic, Akurdi',
        from: '2017',
        to: '2020',
    },
];

export const gradientBorder = "after:content-[''] after:h-full after:w-full after:absolute after:bg-gradient-to-r after:top-0 after:p-2 after:scale-[1.01] after:-z-10 after:rounded-2xl after:from-pink-500 after:to-violet-600";