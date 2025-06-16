import { useLocation } from "react-router-dom";

const DefaultPage = () => {
    const path = useLocation().pathname;
    const isHome = path === "/";
    const isAssets = path === "/assets";
    const isTransactions = path === "/transactions";
    const isExplore = path === "/explore";
    const isDerivatives = path === "/explore-future";
    const isMore = path === "/more";

    if (isHome) {
        return <img src="/main.png" alt="default image" />
    } else if (isAssets) {
        return <img src="/my-assets.png" alt="assets image" />
    } else if (isTransactions) {
        return <img src="/transactions.png" alt="transactions image" />
    } else if (isExplore) {
        return <img src="/explore.png" alt="explore image" />
    } else if (isDerivatives) { 
        return <img src="/derivatives.png" alt="derivatives image" />
    } else if (isMore) {
        return <div className="p-8 h-full"><div className="bg-[var(--ui-gray)] w-full h-full"></div></div>
    }
    return <img src="/main.png" alt="default image" />
}

export default DefaultPage;