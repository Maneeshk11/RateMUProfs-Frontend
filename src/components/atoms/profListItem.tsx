
import { InputHTMLAttributes, useState } from "react";

interface ProfListItemProps {
    name: string;
    rating: number;
    totRatingCount: number;
    profId: string;
    department: string;
}

const ProfListItem: React.FC<ProfListItemProps>  = ({
    name,
    rating,
    totRatingCount,
    profId,
    department
}) => {
    return (
        <div className="w-4/5 flex flex-row items-center text-left border-b-[1px] border-x-[1px] border-[#00000058] py-4 text-base cursor-pointer
        hover:bg-[#f8f7f6]">
            <span className="px-8 w-1/4 text-base">{name}</span>
            <span className="px-8 w-[45%] text-base">{department}</span>
            <span className="px-8 w-[15%]">{rating}</span>
            <span className="px-8 w-[15%]">{totRatingCount}</span>
        </div>
    );
}

export default ProfListItem;


