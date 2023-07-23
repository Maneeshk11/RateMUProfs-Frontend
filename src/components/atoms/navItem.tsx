import { InputHTMLAttributes, useState } from "react";
import AddItemIcon from "../../assets/icons/addIcon.svg"
import MinusItemIcon from "../../assets/icons/minusIcon.svg"
import { useNavigate } from "react-router";
import { updateDirection, clearDirection } from "../molecules/directionBar/directionbarSlice";
import { useSelector, useDispatch } from "react-redux"


interface NavItemProps {
    linkTo?: string,
    itemName: string,
    imgSrc?: string,
    subItems?: string[],
    subItemsImg?: string[]
}


const NavItem: React.FC<NavItemProps> = ({
    linkTo,
    itemName,
    imgSrc,
    subItems,
    subItemsImg
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [dropdownItems, setDropdownItems] = useState(false)

    const clickPlus = () => {
        setDropdownItems(!dropdownItems);
    }

    const onClickNavItem = () => {
        if (!dropdownItems) {
            dispatch(clearDirection())
            if (linkTo!="") {
                dispatch(updateDirection(
                    {
                        name: itemName,
                        imgSrc: imgSrc,
                        navigateDirection: linkTo,
                    }
                ))
            }

            navigate(`/${linkTo}`);
        }
    }

    return (
        <>
            <div className="w-[90%] rounded-lg h-[3rem] flex flex-row items-center justify-between cursor-pointer m-auto hover:bg-[#f0eeed]" onClick={onClickNavItem}>
                <div className="flex flex-row items-center justify-start">
                    <img src={imgSrc} alt="icon" className="w-6 mx-4" />
                    <text className="text-base">{itemName}</text>
                </div>
                {
                    subItems && (
                        <div className="z-50 flex flex-row items-center justify-center h-[2rem] w-[2rem] hover:bg-[#bbbbbb] rounded mr-4" onClick={clickPlus} >
                            {
                                !dropdownItems ? (
                                    <img src={AddItemIcon} alt="icon" className="w-6 mx-4" />
                                ) : (
                                    <img src={MinusItemIcon} alt="icon" className="w-6 mx-4" />
                                )
                            }
                        </div>
                    )
                }
            </div>

            {
                dropdownItems && subItems && subItemsImg && (
                    <div className={`w-[90%] rounded-lg flex flex-col items-center m-auto`}>
                        {
                            subItems.map((item, index) => (
                                <div className="w-full hover:bg-[#f0eeed]  flex flex-row h-[3rem] items-center justify-start pl-12 cursor-pointer rounded">
                                    <img src={subItemsImg[index]} alt="icon" className="w-6 mx-4" />
                                    <text className="text-base">{item}</text>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>
    );
}

export default NavItem;