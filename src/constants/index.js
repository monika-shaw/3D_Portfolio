import { cctech} from "../assets/images";
import {
    car,
    compiler,
    contact,
    css,
    estate,
    express,
    git,
    github,
    hexImg,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    paint,
    pricewise,
    qr,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    weather
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Development Intern",
        company_name: "CCTech",
        icon: cctech,
        iconBg: "#accbe1",
        date: "March 2022 - June 2022",
        points: [
            "Gained hands-on experience in software development",
            "Contributed to multiple projects and collaborated with a development team",
            "Implemented new features and optimized existing applications",
            "Participated in code reviews and learned software engineering best practices"
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "CCTech",
        icon: cctech,
        iconBg: "#fbc3bc",
        date: "July 2022 - Current",
        points: [
            "Developing and maintaining web applications using React.js, Redux and other related technologies.",
            "Collaborating with cross-functional teams including UI/UX designers, back-end developers, and other developers to create high-quality products.",
            "Designed and implemented responsive web applications, ensuring compatibility across various browsers and devices.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Continuously updated skills and kept abreast of latest industry trends and best practices in front-end development.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/monika-shaw',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/monika-shaw22/',
    }
];

export const projects = [
    {
        iconUrl: hexImg,
        theme: 'btn-back-red',
        name: 'Hex Color Generator',
        description: 'This tool generates hexadecimal color codes, offering a variety of shades and hues to inspire your designs. Easily experiment with different colors for your projects.',
        link: 'https://color-shade.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'Online Compiler',
        description: 'A versatile compiler that supports multiple programming languages, enabling users to write and run code snippets in real-time. Enhance your coding experience with this intuitive platform.',
        link: 'https://codecrafterr.netlify.app/',
    },
    {
        iconUrl: paint,
        theme: 'btn-back-pink',
        name: 'Random Color Palatte',
        description: 'Explore a wide range of vibrant color palettes generated randomly. Perfect for artists, designers, and anyone seeking creative inspiration for their projects.',
        link: 'https://crazy-colorss.netlify.app/',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-black',
        name: 'Real-Time Weather Application',
        description: 'Stay informed about the weather conditions in your area with this intuitive weather application. Get accurate forecasts and updates to plan your activities accordingly.',
        link: 'https://weatherinfow.netlify.app/',
    },
    {
        iconUrl: qr,
        theme: 'btn-back-yellow',
        name: 'QR Code Generator',
        description: 'Generate QR codes quickly and easily for various purposes, including sharing links, contact information, and more. Simplify your QR code creation process with this user-friendly tool.',
        link: 'https://qrcode-ja8t.onrender.com/',
    }
];