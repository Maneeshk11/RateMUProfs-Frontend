import AddItemIcon from "../../assets/icons/addIcon.svg"
import MinusItemIcon from "../../assets/icons/minusIcon.svg"
import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDirection } from "../molecules/directionBar/directionbarSlice";
// import CHECKCIRCLE from "../../assets/icons/check_circle_FILL0_wght400_GRAD0_opsz48.svg"

interface SchoolItemProps {
    schoolName: string;
    schoolDescription?: string;
    schoolLink?: string;
    schoolProfsPageLink?: string;
    schoolAbbrev: string;
    schoolImg?: string;
}


const SchoolItem: React.FC<SchoolItemProps> = ({
    schoolName,
    schoolDescription,
    schoolAbbrev,
    schoolLink,
    // schoolProfsPageLink,
    schoolImg
}) => {
    const [clickSchool, setClickSchool] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const onClickSchoolItem = () => {
        dispatch(updateDirection(
            {
                name: schoolAbbrev,
                imgSrc: schoolImg,
                navigateDirection: schoolLink,
            }
        ))
        const presentURI = location.pathname;
        navigate(presentURI + `/${schoolAbbrev}`)
    }

    const container = useRef<HTMLDivElement>(null);

    return (
        <div ref={container} className={`${clickSchool ? "max-h-[1000px]" : "max-h-20"} transform duration-700 ease-in w-full px-4 text-red-600 border-b-[1px] border-red-500 flex flex-col items-center cursor-pointer
        hover:bg-[#f0f0f084] ${clickSchool ? "bg-[#f0f0f084]" : ""}`} onClick={() => {
                setClickSchool(!clickSchool);
            }}
            >
            <div className="flex flex-row items-center justify-between h-[5rem] w-full">
                <span className="text-3xl">{schoolName}</span>
                {
                    !clickSchool ? (
                        <img src={AddItemIcon} alt="img" className="" />
                    ) : (
                        <img src={MinusItemIcon} alt="img" className="" />
                    )
                }
            </div>
            {
                clickSchool ? (
                    <div className="w-[80%] flex flex-col items-start text-black text-left mb-2">
                        <span>{schoolDescription}</span>
                        <div className="my-4 flex flex-col items-end group" onClick={onClickSchoolItem}>
                            <span className="font-medium text-xl italic ">{schoolName}</span>
                            <div className="h-[2px] w-full bg-green-700 mt-2 group-hover:w-[3rem] transition-all ease-in-out duration-300"></div>
                        </div>
                    </div>
                ) : (<></>)
            }
        </div>
    )
}

export default SchoolItem