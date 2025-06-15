import { useLocation } from "react-router-dom";

const DefaultPage = () => {
    const path = useLocation().pathname;
    const isHome = path === "/";
    const isAssets = path === "/assets";
    const isTransactions = path === "/transactions";
    const isExplore = path === "/explore";
    const isDerivatives = path === "/explore-future";
    const isTaxes = path === "/taxes";
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
    } else if (isTaxes) {
        return <div className="flex flex-col items-center justify-center h-full font-[Coinbase Sans] text-xl">Taxes</div>
    } else if (isMore) {
        return <div className="flex flex-col items-center justify-center h-full font-[Coinbase Sans] text-xl">More</div>
    }
    return <img src="/main.png" alt="main image" />
}

export default DefaultPage;