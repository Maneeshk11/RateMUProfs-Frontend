// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleNavBar } from "./navBarSlice"

import HomeIcon from "../../../assets/icons/homeIcon.svg"
import SchoolIcon from "../../../assets/icons/schoolIcon.svg"
import ProfIcon from "../../../assets/icons/personIcon.svg"
import AboutIcon from "../../../assets/icons/aboutIcon.svg"
import ContactIcon from "../../../assets/icons/contactIcon.svg"
import SettingsIcon from "../../../assets/icons/settingsIcon.svg"
import MUlogo from "../../../assets/icons/mulogo.svg"
import GuestUser from "../../../assets/icons/guestUser.svg"

import NavMinimizedItem from "../../atoms/navMinimizedItem"
import NavBar from "./navBar"

const NavBarMinimized = () => {
    const navbarToggleItem = useSelector((state:any) => state.navbar)
    const dispatch = useDispatch()
    // const [isClicked, setIsClicked] = useState(false)
    const navbarToggleState = navbarToggleItem.navToggleState
    const toggleMenu = () => {
        // console.log(navbarToggleState)
        dispatch(toggleNavBar())
    }

    return (
        <>
            <div className="w-[5rem] h-[99%] bg-[#f0eeed] my-auto rounded flex flex-col justify-between flex-shrink-0">
                <div className="w-full flex flex-col justify-center items-center">
                    <img src={MUlogo} alt="" className="w-[2.5rem] my-8 cursor-pointer" onClick={toggleMenu}/>
                                                                                                                                                                                                                                                                                                                                            <div className="w-full">
                        <NavMinimizedItem imgSrc={HomeIcon} linkTo="" itemName="Home"></NavMinimizedItem>
                        <NavMinimizedItem imgSrc={SchoolIcon} linkTo="schools" itemName="Schools"></NavMinimizedItem>
                        <NavMinimizedItem imgSrc={ProfIcon} linkTo="professors" itemName="Professors"></NavMinimizedItem>
                        <NavMinimizedItem imgSrc={AboutIcon} linkTo="about" itemName="About Us"></NavMinimizedItem>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <NavMinimizedItem imgSrc={GuestUser} linkTo={
                        localStorage.getItem('userInfo') ? "account" : "login"
                    } itemName={localStorage.getItem('userInfo') ? "Account" : "Login"}></NavMinimizedItem>
                    <NavMinimizedItem imgSrc={ContactIcon} linkTo="contact" itemName="Contact Us"></NavMinimizedItem>
                    <NavMinimizedItem imgSrc={SettingsIcon} linkTo="settings" itemName="Settings"></NavMinimizedItem>
                </div>
            </div>                                                                              
            {                                                                                                                       
                navbarToggleState ? (<NavBar/>) : (<></>)
            }
                                                                                                
            {/* <NavBar/> */}

        </>
    );
}

export default NavBarMinimized