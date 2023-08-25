import { FC } from "react";
import ProfRatingBar from "./profRatingBar";

interface ProfessorRatingChartProps {
    lod: number;
    helpfulness: number;
    responsiveness: number;
    coursequality: number;
}
const ProfessorRatingChart: FC<ProfessorRatingChartProps> = ({
    lod, helpfulness, responsiveness, coursequality
}) => {

    return (
        <div className="w-[45%] flex flex-col gap-y-4 pl-2">
            <div className="flex flex-row items-center">
                <span className="w-44 text-left font-semibold text-[#606060]">Level of difficulty</span>
                <ProfRatingBar param="lod" value={lod}></ProfRatingBar>
            </div>
            <div className="flex flex-row items-center">
                <span className="w-44 text-left font-semibold text-[#606060]">Helpfulness</span>
                <ProfRatingBar param="helpfulness" value={helpfulness}></ProfRatingBar>
            </div>
            <div className="flex flex-row items-center">
                <span className="w-44 text-left font-semibold text-[#606060]">Responsiveness</span>
                <ProfRatingBar param="responsiveness" value={responsiveness}></ProfRatingBar>
            </div>
            <div className="flex flex-row items-center">
                <span className="w-44 text-left font-semibold text-[#606060]">Course quality</span>
                <ProfRatingBar param="courseQuality" value={coursequality}></ProfRatingBar>
            </div>
        </div>
    )
}

export default ProfessorRatingChart