import {
    useNavigate
} from "react-router";
import { useDispatch } from "react-redux"
import { updateDirection, clearDirection } from "../molecules/directionBar/directionbarSlice";


interface NavMinimizedItemProps {
    itemName?: string,
    imgSrc?: string,
    imgName?: string,
    linkTo?: string,
}


const NavMinimizedItem: React.FC<NavMinimizedItemProps> = ({
    imgSrc,
    imgName,
    linkTo,
    itemName,
}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="w-[3.5rem] h-[3.5rem] rounded-lg flex items-center justify-center mx-auto my-[14px] cursor-pointer hover:bg-[#d9d7df]"
            onClick={() => {
                dispatch(clearDirection())
                if (linkTo != "") {
                    dispatch(updateDirection(
                        {
                            name: itemName,
                            imgSrc: imgSrc,
                            navigateDirection: linkTo,
                        }
                    ))
                }
                navigate(`/${linkTo}`)
            }}>
            <img src={imgSrc} alt={imgName} className="w-[2rem]" />
        </div>
    )
}

export default NavMinimizedItem;