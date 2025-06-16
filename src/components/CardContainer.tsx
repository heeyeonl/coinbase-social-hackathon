import type { ReactNode } from "react";
interface CardContainerProps {
    children: ReactNode;
    width?: string;
    height?: string;
}

const CardContainer = ({children, width, height} : CardContainerProps) => {
    return <div className={`max-w-[448px] min-h-[386px] border-[1px] rounded-lg ${width ? width : ''} ${height ? height : ''}`}>
        {children}
    </div>
}
export default CardContainer;