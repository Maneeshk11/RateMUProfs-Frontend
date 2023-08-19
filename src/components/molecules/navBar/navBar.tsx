import LogoMain from "../../../assets/icons/logoMain.svg"
import NavItem from "../../atoms/navItem"
import SearchBar from "../../atoms/searchBar"

import HomeIcon from "../../../assets/icons/homeIcon.svg"
import SchoolIcon from "../../../assets/icons/schoolIcon.svg"
import ProfIcon from "../../../assets/icons/personIcon.svg"
import AboutIcon from "../../../assets/icons/aboutIcon.svg"
import SettingsIcon from "../../../assets/icons/settingsIcon.svg"
import ContactIcon from "../../../assets/icons/contactIcon.svg"
import GavelIcon from "../../../assets/icons/gavel.svg"
import EcsoeImg from "../../../assets/icons/ecsoeImg.svg"
import SomImg from "../../../assets/icons/somImg.svg"
import ImsoeImg from "../../../assets/icons/imsoe.svg"

import { useSelector } from "react-redux" 

const NavBar = () => {

    const NavToggleItem = useSelector((state:any) => state.navbar)
    const NavToggleState = NavToggleItem.navToggleState

    return (
        <div className={` w-[23rem] duration-500 ease-out transition-all h-[100%] border-r-[2px] border-[#d2d0d07c] border-solid flex flex-col items-center justify-between flex-shrink-0 ${NavToggleState ? "translate-x-0" : "-translate-x-[200%]" }`}>
            <div className="w-full flex flex-col items-center">
                <img src={LogoMain} alt="logo" className="w-[20rem] my-8" />
                <div className="w-[90%] px-4 flex flex-col items-start mx-auto mb-4">
                    <text className="text-xl font-bold ">Dashboard</text>
                    <div className="w-full border-[1px] mt-[1px]  border-[rgba(31,31,31,0.15)]"></div>
                </div>
                <div className="w-full ">
                    <div className="px-8 my-2">
                        <SearchBar></SearchBar>
                    </div>
                    
                    <NavItem linkTo="" itemName="Home" imgSrc={HomeIcon}></NavItem>
                    <NavItem linkTo="schools" itemName="Schools" imgSrc={SchoolIcon}
                     subItems={["School of Engineering", "School of Law", "School of Management", "School of Education"]}
                     subItemsLinkTo={["professors/ECSOE", "professors/SOL", "professors/SOM", "professors/IMSOE"]}
                     subItemsAbbrev={["ECSOE", "SOL", "SOM", "IMSOE"]}
                     subItemsImg={[EcsoeImg, GavelIcon, SomImg, ImsoeImg]}
                     ></NavItem>
                    <NavItem linkTo="professors" itemName="Professors" imgSrc={ProfIcon}></NavItem>
                    <NavItem linkTo="about" itemName="About Us" imgSrc={AboutIcon}></NavItem>
                </div>
            </div>
            <div className="w-full mb-6">
                <NavItem linkTo="contact" itemName="Contact Us" imgSrc={ContactIcon}></NavItem>
                <NavItem linkTo="settings" itemName="Settings" imgSrc={SettingsIcon}></NavItem>
            </div>
        </div>
    );

}

export default NavBar