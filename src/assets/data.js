import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
export const aboutMe = {
    name: 'Przemysław',
    roles: [
        'Software Engineer',
        'Frontend Developer',
        'Student',
        'Programmer',
    ],
    description:
        "I have strong organizational skills and demonstrate responsibility, proactivity and resilience in my work. " +
        "I have a great ability to adapt to new challenges. I like to analyze problems and evaluate different solutions. " +
        "I believe that organization is very important in order to achieve personal goals in most efficient way.",
    githubLink: "https://github.com/PrzemyslawKedziora",
    linkedinLink: "https://www.linkedin.com/in/przemyslawkedziora/",
    mailingLink: "mailto:pkedziora347@gmail.com"
}
export const education = [
    {
        img: "sygnet_pl.jpg",
        university: "Lublin University of Technology",
        degree: "Bachelor Degree, Software Engineering",
        date: "Oct 2021 - at the moment",
    },
    ]

export const projects = [
    {
        name: "Discord Music App",
        description: "Lorem Ipsum",
        appLogoLink: LibraryMusicIcon,
        technologies: [
            "Angular","Typescript","Javacript","Next.js","MongoDB","Node.js"
        ],
        link: "https://github.com/PrzemyslawKedziora/discord-music-app"
    },
    {
        name: "Investment Portfolio",
        description: "Lorem Ipsum",
        appLogoLink: CurrencyBitcoinIcon,
        technologies: [
            "Angular","Typescript","Node.js","Firebase"
        ],
        link: "https://github.com/PrzemyslawKedziora/investment-portfolio-app"
    },
    {
        name: "YourSavings",
        description: "Lorem Ipsum",
        appLogoLink: AccountBalanceWalletIcon,
        technologies: [
            "Angular","Typescript","Laravel","MySQL","Tailwind"
        ],
        link: "https://github.com/PrzemyslawKedziora/savings-app"
    },
    {
        name: "PWPlanes",
        description: "Lorem Ipsum",
        appLogoLink: ConnectingAirportsIcon,
        technologies: [
            "Angular","Typescript","Firebase","Bootstrap"
        ],
        link: "https://github.com/PrzemyslawKedziora/PWPlanes"
    }
]