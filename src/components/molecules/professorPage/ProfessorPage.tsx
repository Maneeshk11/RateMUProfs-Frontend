import { Professor } from "@/Constants/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProfessorNameItem from "./professorNameItem";
import ProfessorRatingChart from "./professorRatingChart";
import ProfessorRatingItem from "./professorRatingItem";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"
import { addProfDetails } from "../../../features/professorDetailSlice";
import { getSingleProfDetails } from "../../../utils/getSingleProfDetails";
import SignInModal from "../../atoms/SignInModal";

const ProfessorPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [profDetails, setProfDetails] = useState<Professor>()
    useEffect(() => {
        (async () => {
            if (!params.professorId) return
            try {
                const profDets = await getSingleProfDetails(params.professorId)
                setProfDetails(profDets)
            } catch (error) {
                console.error('Error fetching professor data:', error);
            }
        })();
    }, [])

    const rateProfessor = () => {
        const userData = localStorage.getItem("userInfo")
        if (!userData) {
            setIsModalOpen(true)
        }
        else {
            dispatch(addProfDetails(profDetails))
            navigate("/rating/" + `${params.professorId}`)
        }
    }

    return (
        profDetails &&
        <div className="flex flex-col px-12 py-8 w-full gap-y-16">
            <SignInModal isOpen={isModalOpen} />
            <div className="flex flex-row justify-between w-full items-center">
                <ProfessorNameItem dept={profDetails.dept} name={profDetails.name}
                    rating={profDetails.rating} school={profDetails.school} totRatings={profDetails.totRatings} googleScholar_link={profDetails.googleScholar_link} linkedin_link={profDetails.linkedin_link} muProfile_link={profDetails.muProfile_link} />
                <button className="min-h-14 border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-6 py-4 rounded-lg text-base" onClick={rateProfessor}>Rate Professor</button>
            </div>
            <div className="w-full flex justify-start">
                <ProfessorRatingChart lod={profDetails.teachingQuality} coursequality={profDetails.courseQuality}
                    helpfulness={profDetails.helpfulness} responsiveness={profDetails.responsiveness}></ProfessorRatingChart>
            </div>
            <div className="w-full text-left pl-2">
                <span className="font-bold text-xl">Reviews</span>
                <div className="w-full flex flex-row flex-wrap justify-around gap-y-8 mt-8">
                    {
                        profDetails.userRatings.map((rating) => {
                            return (
                                <ProfessorRatingItem rating={rating} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ProfessorPage;