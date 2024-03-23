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
        description: "Application projected to store your favourite music.Users are able to manage songs,create playlists etc." +
            "Songs are added through YoutubeAPI.",
        appLogoLink: LibraryMusicIcon,
        technologies: [
            "Angular","Typescript","Javacript","Next.js","MongoDB","Node.js"
        ],
        repository: "https://github.com/PrzemyslawKedziora/discord-music-app",
        demo: "https://discord-music-app-frontend.vercel.app/"
    },
    {
        name: "Investment Portfolio",
        description: "An application enabling user to track his cryptocurrency investment history. " +
            "User can manage their investment portfolios by adding or removing investment data." +
            "Through the portfolio, users can also check the current prices of individual assets." +
            "User can also check the status of their investment portfolio thanks to charts data visualizations.",
        appLogoLink: CurrencyBitcoinIcon,
        technologies: [
            "Angular","Typescript","Node.js","Firebase"
        ],
        repository: "https://github.com/PrzemyslawKedziora/investment-portfolio-app",
        demo: "https://przemyslawkedziora.github.io/investment-portfolio-app"
    },
    {
        name: "YourSavings",
        description: "The application allows users to monitor their expenses by entering categorized expenditures" +
            "and displaying the current balance of the user's account. " +
            "Users can input various types of expenses, categorize them, and track their spending over time," +
            "providing insights into their financial habits and helping them manage their budget effectively.",
        appLogoLink: AccountBalanceWalletIcon,
        technologies: [
            "Angular","Typescript","Laravel","MySQL","Tailwind"
        ],
        repository: "https://github.com/PrzemyslawKedziora/savings-app",
        demo: "https://github.com/PrzemyslawKedziora/savings-app"
    },
    {
        name: "PWPlanes",
        description: "An Angular-based application for managing flights, " +
            "enabling users to dynamically add and modify flights, as well as manage flight and crew data. " +
            "By leveraging the Firebase database, the application ensures fast and reliable access to stored information, " +
            "facilitating easy management of aircraft flights.",
        appLogoLink: ConnectingAirportsIcon,
        technologies: [
            "Angular","Typescript","Firebase","Bootstrap"
        ],
        repository: "https://github.com/PrzemyslawKedziora/PWPlanes",
        demo: "https://przemyslawkedziora.github.io/PWPlanes"
    }
]