import { Rating } from "@/Constants/types";

const ProfessorRatingItem = ({ rating }: { rating: Rating }) => {
    const colorScheme = ["text-[#ff4545]", "text-[#cb7f21]", "text-[#bca523]", "text-[#89a620]", "text-[#43b71f]"];


    return (
        <div className="flex flex-col gap-y-4 p-4 rounded-lg border-[1px] border-[#0000002b]">
            <span>Course: {rating.course}</span>
            <div className="flex flex-row gap-x-4">
                <div className="w-40 flex flex-col items-center gap-y-2">
                    <span className={`font-bold text-xl ${colorScheme[Math.floor(rating.overallRating) - 1 > 0 ? Math.floor(rating.overallRating) - 1 : 0]}`}>
                        {rating.overallRating} overall rating</span>
                    <div className="flex flex-col gap-y-2">
                        <span className={`font-semibold ${colorScheme[Math.floor(rating.teachingQuality) - 1 > 0 ? Math.floor(rating.teachingQuality) - 1 : 0]}`}>
                            {rating.teachingQuality} teaching quality</span>
                        <span className={`font-semibold ${colorScheme[Math.floor(rating.courseQuality) - 1 > 0 ? Math.floor(rating.courseQuality) - 1 : 0]}`}>
                            {rating.courseQuality} course quality</span>
                        <span className={`font-semibold ${colorScheme[Math.floor(rating.helpfulness) - 1 > 0 ? Math.floor(rating.helpfulness) - 1 : 0]}`}>
                            {rating.helpfulness} helpfulness</span>
                        <span className={`font-semibold ${colorScheme[Math.floor(rating.responsiveness) - 1 > 0 ? Math.floor(rating.responsiveness) - 1 : 0]}`}>
                            {rating.responsiveness} responsiveness</span>
                    </div>
                </div>
                <div className=" w-[300px] rounded-lg overflow-y-scroll p-4 bg-[#f0eeed61]">
                    <div className=" w-full h-[185px] rounded-lg overflow-y-scroll" style={{ wordWrap: 'break-word' }} >
                        <span className="mx-auto">{rating.feedback}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessorRatingItem;