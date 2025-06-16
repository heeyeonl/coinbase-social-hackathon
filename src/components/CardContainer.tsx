import type { ReactNode } from "react";

const CardContainer = ({children} : {children: ReactNode}) => {
    return <div className="max-w-[448px] min-h-[386px] border-[1px] rounded-lg p-8">
        {children}
    </div>
}
export default CardContainer;