import { Professor } from "@/Constants/types";
import { GET_SINGLE_PROF_DETAILS } from "../../../Constants/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProfessorNameItem from "./professorNameItem";
import ProfessorRatingChart from "./professorRatingChart";

const ProfessorPage = () => {
    const params = useParams();
    const [profDetails, setProfDetails] = useState<Professor>()
    useEffect(() => {
        (async () => {
            await axios.post(GET_SINGLE_PROF_DETAILS, {
                _id: params.professorId,
            }).then((responese) => {
                console.log("our resp: ", responese);
                setProfDetails(responese.data)
            })
        })()
    }, [])

    return (
        profDetails &&
        <div className="flex flex-col px-12 py-8 w-full gap-y-16">
            <div className="flex flex-row justify-between w-full items-center">
                <ProfessorNameItem dept={profDetails.dept} name={profDetails.name}
                    rating={profDetails.rating} school={profDetails.school} totRatings={profDetails.totRatings} googleScholar_link={profDetails.googleScholar_link} linkedin_link={profDetails.linkedin_link} muProfile_link={profDetails.muProfile_link}/>
                <button className="min-h-14 border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-6 py-4 rounded-lg text-base">Rate Professor</button>
            </div>
            <div className="w-full flex justify-start">
                <ProfessorRatingChart lod={profDetails.lod} coursequality={profDetails.courseQuality}
                    helpfulness={profDetails.helpfulness} responsiveness={profDetails.responsiveness}></ProfessorRatingChart>
            </div>
        </div>
    );
};

export default ProfessorPage;