
// import { InputHTMLAttributes, useState } from "react";
import Heart from "./Heart";
import { useSelector, useDispatch } from "react-redux";
import { addFavProf, removeFavProf } from "../../features/favouriteSlice";
import { useLocation, useNavigate } from "react-router";
import { updateDirection } from "../molecules/directionBar/directionbarSlice";
import ProfessorImg from "../../assets/icons/personIcon.svg"


interface ProfListItemProps {
    name: string;
    rating: number;
    totRatingCount: number;
    profId: string;
    department: string;
    isFavorite: boolean;
}

const ProfListItem: React.FC<ProfListItemProps> = ({
    name,
    rating,
    totRatingCount,
    profId, 
    department,
    isFavorite,
}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const favouriteProfSlice = useSelector((state: any) => state.favourite)
    const favouriteProfs = favouriteProfSlice.favoriteProfs;

    const openProfessor = () => {
        navigate(location.pathname + `/${profId}`)
        dispatch(updateDirection(
            {
                name: name,
                imgSrc: ProfessorImg,
                navigateDirection: `/${profId}`
            }
        ))
    }

    return (
        <div className="relative w-full flex flex-row items-center text-left border-b-[1px] border-x-[1px] border-[#00000058] py-4 text-base cursor-pointer
        hover:bg-[#f8f7f6]" onClick={openProfessor}>
            <span className="px-8 w-[20%] text-base">{name}</span>
            <span className="px-8 w-[45%] text-sm">{department}</span>
            <span className="px-8 w-[15%]">{rating}</span>
            <span className="px-8 w-[15%]">{totRatingCount}</span>
            <Heart fill={isFavorite ? "#ff0000" : "#c9c9c9"} onClick={(event) => {
                event.stopPropagation();
                if (!favouriteProfs.includes(name)) {                    
                    dispatch(addFavProf(name))
                }
                else {
                    dispatch(removeFavProf(name))
                }
            }} />
        </div>
    );
}

export default ProfListItem;


