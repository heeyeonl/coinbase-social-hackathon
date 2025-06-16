import type { NavItem } from './types/nav-items';
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