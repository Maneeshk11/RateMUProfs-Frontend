import SearchIcon from "../../assets/icons/searchIcon.svg"
import { FC, InputHTMLAttributes, useState, Dispatch, SetStateAction } from "react";
import React from "react";

interface SearchBarProps {
    className?: string;
    placeholder?: string;
    onChange?: (e: any) => void;
}

const SearchBar:React.FC<SearchBarProps> = ({
    className, placeholder, onChange
}) => {
    return (
        <div className={`${className} flex flex-row`}>
            <div className="cursor-pointer h-10 w-[2rem] rounded-l-lg border-l-2 border-y-2 border-[rgba(31,31,31,0.41)] flex items-center justify-center">
                <img src={SearchIcon} alt="" className="w-[1.2rem]"/>
            </div>
            <input type="text" className="focus:outline-none w-[16rem] h-10 rounded-r-lg border-r-2 border-y-2 px-2 font-base border-[rgba(31,31,31,0.41)]" placeholder={placeholder} 
            onChange={onChange}/>
        </div>
    );
}

export default SearchBar;