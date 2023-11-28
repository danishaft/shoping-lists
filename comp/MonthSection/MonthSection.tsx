import { MonthSectionProps } from "@/utils/interfaces";
import { memo } from "react";

export const MonthSection: React.FC<MonthSectionProps> = memo(function MonthSection({monthName, history}){
    return (
        <div className="">
            <h3>{ monthName }</h3>
            
        </div>
    )
})