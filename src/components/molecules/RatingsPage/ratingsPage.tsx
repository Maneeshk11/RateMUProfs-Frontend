import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating'
import { sendRatingDetails } from "../../../utils/sendRating";
import { useParams } from "react-router";
import RatingModal from "../../atoms/RatingModal";
import { getCourses } from "../../../utils/getCourses";
import { SendRatingResponse } from "@/Constants/types";

export const RatingItem: FC<{
    ratingName: string;
    setRatingValue: Dispatch<SetStateAction<number>>;
    required?: boolean;
}> = ({ ratingName, setRatingValue, required }) => {

    const findValue = (rate: number) => {
        setRatingValue(rate)
    }

    return (
        <div className="w-4/5 p-4 flex flex-row items-center rounded-xl bg-[#f8f7f6] drop-shadow-md">
            <span className="w-2/5">{ratingName} {required && <span className="text-red-700 ml-2">*</span>}</span>
            <Rating SVGstyle={{ 'display': 'inline' }} onClick={findValue} />
        </div>
    )
}

const RatingsPage = () => {
    const params = useParams();
    const [teachingQuality, setTeachingQuality] = useState(0)
    const [helpfulness, setHelpfulness] = useState(0)
    const [responsiveness, setResponsiveness] = useState(0)
    const [courseQuality, setCourseQuality] = useState(0)
    const [feedBack, setFeedback] = useState("")
    const [courses, setCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState("")
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [submitResponse, setSubmitResponse] = useState<SendRatingResponse>()

    const handleFeedbackChange = (e: any) => {
        setFeedback(e.target.value);
    };

    useEffect(() => {
        const profId = params.professorId
        if (!profId) return
        getCourses(profId)
            .then((resp) => {
                setCourses(resp)
            })
    }, [])

    const submitRating = async () => {
        const profId = params.professorId
        if (!profId) return
        const userIdString = localStorage.getItem("userInfo")
        if (!userIdString) return
        const userId = JSON.parse(userIdString).userData._id
        sendRatingDetails(
            profId,
            userId,
            courseQuality,
            responsiveness,
            teachingQuality,
            selectedCourse,
            Date(),
            helpfulness,
            feedBack
        ).then((res) => {
            setSubmitResponse(res)
            setIsOpenModal(true)
        })
    }

    return (
        <div className="flex flex-col py-8 w-full items-center gap-y-4">
            {submitResponse &&
                <RatingModal isOpen={isOpenModal} response={submitResponse} isOpenFunc={() => { setIsOpenModal(false) }}></RatingModal>
            }
            <div className="w-4/5 p-4 flex flex-row items-center rounded-xl bg-[#f8f7f6] drop-shadow-md">
                <span className="w-2/5">Course<span className="text-red-700 ml-2">*</span></span>
                <input type="text" className="rounded-sm border border-[#1818183a] p-3" onChange={(e: any) => {
                    setSelectedCourse(e.target.value);
                }} placeholder="Ex: CS3001" />
            </div>
            <RatingItem required={true} ratingName="Teaching Quality" setRatingValue={setTeachingQuality} />
            <RatingItem required={true} ratingName="Helpfulness" setRatingValue={setHelpfulness} />
            <RatingItem required={true} ratingName="Responsiveness" setRatingValue={setResponsiveness} />
            <RatingItem required={true} ratingName="Course Quality" setRatingValue={setCourseQuality} />
            <div className="w-4/5 p-4 flex flex-row items-center rounded-xl bg-[#f8f7f6] drop-shadow-md">
                <span className="w-2/5">Feedback</span>
                <textarea name="" id="" onChange={handleFeedbackChange} rows={5} placeholder="Feedback ..." className="rounded-sm border border-[#1818183a] w-1/2 p-4"></textarea>
            </div>
            <button className="mt-4 min-h-14 border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-6 py-4 rounded-lg text-base hover:bg-[#434343c2]"
                onClick={submitRating}>Rate Professor</button>
        </div>
    );
}

export default RatingsPage;