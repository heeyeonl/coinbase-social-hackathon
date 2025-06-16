import type { NavItem } from './types/nav-items';
import type { User } from './types/user';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import PieChartIcon from '@mui/icons-material/PieChart';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import FastForwardIcon from '@mui/icons-material/FastForward';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const navItems: NavItem[] = [
    {
        id: "home",
        title: "Home",
        icon: <HomeOutlinedIcon />,
        iconFilled: <HomeIcon />,
        href: "/"
    },
    {
        id: "my-asset",
        title: "My assets",
        icon: <PieChartOutlineIcon />,
        iconFilled: <PieChartIcon />,
        href: "/assets"
    },
    {
        id: "transactions",
        title: "Transactions",
        icon: <ReceiptOutlinedIcon />,
        iconFilled: <ReceiptIcon />,
        href: "/transactions"
    },
    {
        id: "explore",
        title: "Explore",
        icon: <ExploreOutlinedIcon />,
        iconFilled: <ExploreIcon />,
        href: "/explore"
    },
    {
        id: "derivatives",
        title: "Derivatives",
        icon: <FastForwardOutlinedIcon />,
        iconFilled: <FastForwardIcon />,
        href: "/explore-future"
    },
    {
        id: "taxes",
        title: "Taxes",
        icon: <ReceiptLongOutlinedIcon />,
        iconFilled: <ReceiptLongIcon />,
        href: "/taxes"
    },
    {
        id: "social",
        title: "Social",
        icon: <GroupsOutlinedIcon />,
        iconFilled: <GroupsIcon />,
        href: "/social",
        isNew: true,
    },
    {
        id: "more",
        title: "More",
        icon: <MoreVertIcon />,
        iconFilled: <MoreVertIcon />,
        href: "/more"
    },
];

export const assets = [
    {
        id: "BTC",
        name: "Bitcoin",
        logo: "/asset-logos/BTC.png",
        href: "https://www.coinbase.com/price/bitcoin"
    },
    {
        id: "ETH",
        name: "Ethereum",
        logo: "/asset-logos/ETH.png",
        href: "https://www.coinbase.com/price/ethereum"
    },
    {
        id: "BNB",
        name: "Binance Coin",
        logo: "/asset-logos/BNB.png",
        href: "https://www.coinbase.com/price/binance-coin"
    },
    {
        id: "XRP",
        name: "XRP",
        logo: "/asset-logos/XRP.png",
        href: "https://www.coinbase.com/price/xrp"
    },
    {
        id: "USDT",
        name: "Tether",
        logo: "/asset-logos/USDT.png",
        href: "https://www.coinbase.com/price/tether"
    },
    {
        id: "SOL",
        name: "Solana",
        logo: "/asset-logos/SOL.png",
        href: "https://www.coinbase.com/price/solana"
    },
    {
        id: "DOGE",
        name: "Dogecoin",
        logo: "/asset-logos/DOGE.png",
        href: "https://www.coinbase.com/price/dogecoin"
    },
    {
        id: "BCH",
        name: "Bitcoin Cash",
        logo: "/asset-logos/BCH.png",
        href: "https://www.coinbase.com/price/bitcoin-cash"
    },
    {
        id: "USDC",
        name: "USD Coin",
        logo: "/asset-logos/USDC.png",
        href: "https://www.coinbase.com/price/usd-coin"
    },
    {
        id: "SUI",
        name: "Sui",
        logo: "/asset-logos/SUI.png",
        href: "https://www.coinbase.com/price/sui"
    },
    {
        id: "LINK",
        name: "Chainlink",
        logo: "/asset-logos/LINK.png",
        href: "https://www.coinbase.com/price/chainlink"
    },
]

export const mockUsers: User[] = [
    {
        id: "0",
        fullName: "John Doe",
        watchlist: ["BTC", "SOL", "BNB"],
        mostAssets: ["BTC", "SOL", "BNB"],
        following: [],
        profilePicture: "/profile.svg",
        username: "johndoe",
    },
    {
        id: "1",
        fullName: "Jane Doe",
        watchlist: ["BTC", "SOL", "BNB"],
        mostAssets: ["BTC", "SOL", "BNB"],
        following: [],
        profilePicture: "/profile.svg",
        username: "janedoe",
    },
    {
        id: "2",
        fullName: "Alice Smith",
        watchlist: ["ETH", "USDC", "LINK"],
        mostAssets: ["ETH", "USDC", "LINK"],
        following: [],
        profilePicture: "/profile.svg",
        username: "alicesmith",
    },
    {
        id: "3",
        fullName: "Bob Johnson",
        watchlist: ["XRP", "DOGE", "BCH"],
        mostAssets: ["XRP", "DOGE", "BCH"],
        following: [],
        profilePicture: "/profile.svg",
        username: "bobjohnson",
    },
    {
        id: "4",
        fullName: "Carol White",
        watchlist: ["SUI", "BNB", "USDT"],
        mostAssets: ["SUI", "BNB", "USDT"],
        following: [],
        profilePicture: "/profile.svg",
        username: "carolwhite",
    },
    {
        id: "5",
        fullName: "David Brown",
        watchlist: ["BTC", "ETH", "SOL"],
        mostAssets: ["BTC", "ETH", "SOL"],
        following: [],
        profilePicture: "/profile.svg",
        username: "davidbrown",
    },
    {
        id: "6",
        fullName: "Emma Davis",
        watchlist: ["LINK", "USDC", "SUI"],
        mostAssets: ["LINK", "USDC", "SUI"],
        following: [],
        profilePicture: "/profile.svg",
        username: "emmadavis",
    },
    {
        id: "7",
        fullName: "Frank Miller",
        watchlist: ["DOGE", "BCH", "XRP"],
        mostAssets: ["DOGE", "BCH", "XRP"],
        following: [],
        profilePicture: "/profile.svg",
        username: "frankmiller",
    },
    {
        id: "8",
        fullName: "Grace Wilson",
        watchlist: ["USDT", "BNB", "ETH"],
        mostAssets: ["USDT", "BNB", "ETH"],
        following: [],
        profilePicture: "/profile.svg",
        username: "gracewilson",
    },
    {
        id: "9",
        fullName: "Henry Taylor",
        watchlist: ["SOL", "BTC", "LINK"],
        mostAssets: ["SOL", "BTC", "LINK"],
        following: [],
        profilePicture: "/profile.svg",
        username: "henrytaylor",
    }
];