import { useLocation } from "react-router-dom";
import type { NavItem } from "../types/nav-items";
import SearchBar from "./SearchBar";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';

const TopNavigation = ({ navItems } : {
    navItems: NavItem[]   
}) => {
    const location = useLocation();
    const currItem = navItems.find(item => item.href === location.pathname);
    const iconClass = "flex justify-center items-center bg-[var(--ui-gray)] rounded-full cursor-pointer w-[42px] h-[42px] hover:bg-[var(--ui-gray-hover)]";

    return <div className="flex justify-between items-center h-[75px] border-b-[1px] px-8 py-4">
        <h1 className="font-[Coinbase Display] text-[28px] font-medium">
            {currItem?.title}
        </h1>
        <div className="flex gap-2">
            <SearchBar />
            <div className={iconClass}>
                <NotificationsOutlinedIcon />
            </div>
            <div className={iconClass}>
                <QuestionMarkOutlinedIcon/>
            </div>
            <div className={iconClass}>
                <DragIndicatorOutlinedIcon/>
            </div>
            <div className="w-[42px] h-[42px] flex justify-center items-center bg-[#007bb3] hover:bg-[#0485bf] rounded-full cursor-pointer text-white font-[Coinbase Sans]">H</div>
        </div>
    </div>
}

export default TopNavigation;