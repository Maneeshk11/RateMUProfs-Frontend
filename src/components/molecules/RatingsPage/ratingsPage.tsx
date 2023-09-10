import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Rating } from 'react-simple-star-rating'
import { sendRatingDetails } from "../../../utils/sendRating";
import { useParams } from "react-router";
import RatingModal from "../../atoms/RatingModal";
import { getCourses } from "../../../utils/getCourses";

export const RatingItem: FC<{
    ratingName: string;
    setRatingValue: Dispatch<SetStateAction<number>>;
}> = ({ ratingName, setRatingValue }) => {

    const findValue = (rate: number) => {
        setRatingValue(rate)
    }

    return (
        <div className="w-4/5 p-4 flex flex-row items-center rounded-xl bg-[#f8f7f6] drop-shadow-md">
            <span className="w-2/5">{ratingName}</span>
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
    const [statusCode, setStatusCode] = useState<number>(0)

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
            setStatusCode(res)
            setIsOpenModal(true)
        })
    }

    return (
        <div className="flex flex-col py-8 w-full items-center gap-y-4">
            <RatingModal isOpen={isOpenModal} statusCode={statusCode} isOpenFunc={()=>{setIsOpenModal(false)}}></RatingModal>
            <div className="w-4/5 p-4 flex flex-row items-center rounded-xl bg-[#f8f7f6] drop-shadow-md">
                <span className="w-2/5">Course</span>
                <select name="courseSelect" id="" className="p-2 rounded-lg w-2/5" onChange={(e:any)=>{
                    setSelectedCourse(e.target.value);
                }}>
                    {
                        courses.map((course: string, index) => (
                            <option key={index} value={course}>{course}</option>
                        ))
                    }
                </select>
            </div>
            <RatingItem ratingName="Teaching Quality" setRatingValue={setTeachingQuality} />
            <RatingItem ratingName="Helpfulness" setRatingValue={setHelpfulness} />
            <RatingItem ratingName="Responsiveness" setRatingValue={setResponsiveness} />
            <RatingItem ratingName="Course Quality" setRatingValue={setCourseQuality} />
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