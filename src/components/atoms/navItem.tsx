import { useState } from "react";
import AddItemIcon from "../../assets/icons/addIcon.svg"
import MinusItemIcon from "../../assets/icons/minusIcon.svg"
import { useNavigate, useLocation } from "react-router";
import { updateDirection, clearDirection, deleteLast } from "../molecules/directionBar/directionbarSlice";
import { useDispatch } from "react-redux"


interface NavItemProps {
    linkTo?: string,
    itemName: string,
    imgSrc?: string,
    subItems?: string[],
    subItemsImg?: string[],
    subItemsAbbrev?: string[],
    subItemsLinkTo?: string[],
}


const NavItem: React.FC<NavItemProps> = ({
    linkTo,
    itemName,
    imgSrc,
    subItems,
    subItemsImg,
    subItemsAbbrev,
    subItemsLinkTo,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

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

    const onClickSubItem = (index:number) => {
        if (!location.pathname.endsWith('schools')) {
            dispatch(deleteLast());
        }
        dispatch(updateDirection(
            {
                name: subItemsAbbrev ? subItemsAbbrev[index] : "",
                imgSrc: subItemsImg ? subItemsImg[index] : "",
                navigateDirection: subItemsAbbrev ? subItemsAbbrev[index] : "",
            }
        ))
        // const presentURI = location.pathname;
        navigate("/schools" + `/${subItemsLinkTo ? subItemsLinkTo[index] : ""}`)
    }

    return (
        <>
            <div className="w-[90%] rounded-lg h-[3rem] flex flex-row items-center justify-between cursor-pointer m-auto hover:bg-[#f0eeed]" onClick={onClickNavItem}>
                <div className="flex flex-row items-center justify-start">
                    <img src={imgSrc} alt="icon" className="w-6 mx-4" />
                    <span className="text-base">{itemName}</span>
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
                    <div className={`w-[90%] rounded-lg flex flex-col items-center m-auto`} >
                        {
                            subItems.map((item, index) => (
                                <div className="w-full hover:bg-[#f0eeed]  flex flex-row h-[3rem] items-center justify-start pl-12 cursor-pointer rounded" onClick={()=>onClickSubItem(index)}>
                                    <img src={subItemsImg[index]} alt="icon" className="w-6 mx-4" />
                                    <span className="text-base">{item}</span>
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