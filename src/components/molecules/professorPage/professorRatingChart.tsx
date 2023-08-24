import { FC } from "react";

interface ProfessorRatingChartProps {
    lod: number;
    helpfulness: number;
    responsiveness: number;
    coursequality: number;
}
const ProfessorRatingChart: FC<ProfessorRatingChartProps> = ({
    lod, helpfulness, responsiveness, coursequality
}) => {

    const colorScheme = ["bg-rating-bad", "bg-rating-belowavg", "bg-rating-avg", "bg-rating-good", "bg-rating-best", "bg-rating-best"];


    return (
        <div className="w-[45%] flex flex-col gap-y-4 pl-2">
            <div className="flex flex-row items-center">
                <span className="w-44 text-left font-semibold text-[#606060]">Level of difficulty</span>
                <div className="h-12 border-2 border-[#00000095] rounded flex-grow">
                    <div className={`h-full w-full ${colorScheme[Math.floor(lod)]}`}></div>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <span className="w-44 text-left font-semibold text-[#606060]">Helpfulness</span>
                <div className=" h-12 border-2 border-[#00000095] rounded flex-grow">
                    <div className={`h-full w-full ${colorScheme[Math.floor(lod)]}`}></div>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <span className="w-44 text-left font-semibold text-[#606060]">Responsiveness</span>
                <div className="h-12 border-2 border-[#00000095] rounded flex-grow"></div>
            </div>
            <div className="flex flex-row items-center">
                <span className="w-44 text-left font-semibold text-[#606060]">Course quality</span>
                <div className="h-12 border-2 border-[#00000095] rounded flex-grow"></div>
            </div>
        </div>
    )
}

export default ProfessorRatingChart