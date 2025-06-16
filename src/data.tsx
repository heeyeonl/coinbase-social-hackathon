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
        logo: "/asset-logos/btc.png",
        href: "https://www.coinbase.com/price/bitcoin"
    },
    {
        id: "ETH",
        name: "Ethereum",
        logo: "/asset-logos/eth.png",
        href: "https://www.coinbase.com/price/ethereum"
    },
    {
        id: "BNB",
        name: "Binance Coin",
        logo: "/asset-logos/bnb.png",
        href: "https://www.coinbase.com/price/bnb"
    },
    {
        id: "XRP",
        name: "XRP",
        logo: "/asset-logos/xrp.png",
        href: "https://www.coinbase.com/price/xrp"
    },
    {
        id: "USDT",
        name: "Tether",
        logo: "/asset-logos/usdt.png",
        href: "https://www.coinbase.com/price/tether"
    },
    {
        id: "SOL",
        name: "Solana",
        logo: "/asset-logos/sol.png",
        href: "https://www.coinbase.com/price/solana"
    },
    {
        id: "DOGE",
        name: "Dogecoin",
        logo: "/asset-logos/doge.png",
        href: "https://www.coinbase.com/price/dogecoin"
    },
    {
        id: "BCH",
        name: "Bitcoin Cash",
        logo: "/asset-logos/bch.png",
        href: "https://www.coinbase.com/price/bitcoin-cash"
    },
    {
        id: "USDC",
        name: "USD Coin",
        logo: "/asset-logos/usdc.png",
        href: "https://www.coinbase.com/price/usdc"
    },
    {
        id: "SUI",
        name: "Sui",
        logo: "/asset-logos/sui.png",
        href: "https://www.coinbase.com/price/sui"
    },
    {
        id: "LINK",
        name: "Chainlink",
        logo: "/asset-logos/link.png",
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
        profilePicture: "/avatars/johndoe.png",
        username: "johndoe",
        isUsernameSet: true,
    },
    {
        id: "1",
        fullName: "Jane Doe",
        watchlist: ["BTC", "SOL", "BNB"],
        mostAssets: ["BTC", "SOL", "BNB"],
        following: [],
        profilePicture: "/avatars/janedoe.png",
        username: "janedoe",
        isUsernameSet: true,
    },
    {
        id: "2",
        fullName: "Alice Smith",
        watchlist: ["ETH", "USDC", "LINK"],
        mostAssets: ["ETH", "USDC", "LINK"],
        following: [],
        profilePicture: "/profile.svg",
        username: "alicesmith",
        isUsernameSet: true,
    },
    {
        id: "3",
        fullName: "Bob Johnson",
        watchlist: ["XRP", "DOGE", "BCH"],
        mostAssets: ["XRP", "DOGE", "BCH"],
        following: [],
        profilePicture: "/avatars/bobjohnson.png",
        username: "bobjohnson",
        isUsernameSet: true,
    },
    {
        id: "4",
        fullName: "Carol White",
        watchlist: ["SUI", "BNB", "USDT"],
        mostAssets: ["SUI", "BNB", "USDT"],
        following: [],
        profilePicture: "/profile.svg",
        username: "carolwhite",
        isUsernameSet: true,
    },
    {
        id: "5",
        fullName: "David Brown",
        watchlist: ["BTC", "ETH", "SOL"],
        mostAssets: ["BTC", "ETH", "SOL"],
        following: [],
        profilePicture: "/avatars/davidbrown.png",
        username: "davidbrown",
        isUsernameSet: true,
    },
    {
        id: "6",
        fullName: "Emma Davis",
        watchlist: ["LINK", "USDC", "SUI"],
        mostAssets: ["LINK", "USDC", "SUI"],
        following: [],
        profilePicture: "/avatars/emmadavis.png",
        username: "emmadavis",
        isUsernameSet: true,
    },
    {
        id: "7",
        fullName: "Frank Miller",
        watchlist: ["DOGE", "BCH", "XRP"],
        mostAssets: ["DOGE", "BCH", "XRP"],
        following: [],
        profilePicture: "/avatars/frankmiller.png",
        username: "frankmiller",
        isUsernameSet: true,
    },
    {
        id: "8",
        fullName: "Grace Wilson",
        watchlist: ["USDT", "BNB", "ETH"],
        mostAssets: ["USDT", "BNB", "ETH"],
        following: [],
        profilePicture: "/profile.svg",
        username: "gracewilson",
        isUsernameSet: true,
    },
    {
        id: "9",
        fullName: "Henry Taylor",
        watchlist: ["SOL", "BTC", "LINK"],
        mostAssets: ["SOL", "BTC", "LINK"],
        following: [],
        profilePicture: "/avatars/henrytaylor.png",
        username: "henrytaylor",
        isUsernameSet: true,
    }
];