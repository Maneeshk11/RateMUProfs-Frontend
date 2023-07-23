import SearchIcon from "../../assets/icons/searchIcon.svg"

const SearchBar = () => {
    return (
        <div className=" w-[90%] flex flex-row my-2 m-auto px-4">
            <div className="h-10 w-[2rem] rounded-l-lg border-l-2 border-y-2 border-[rgba(31,31,31,0.41)] flex items-center justify-center">
                <img src={SearchIcon} alt="" className="w-[1.2rem]"/>
            </div>
            <input type="text" className="w-[16rem] h-10 rounded-r-lg border-r-2 border-y-2 px-2 font-base border-[rgba(31,31,31,0.41)]" placeholder="Search" />
        </div>

    );
}

export default SearchBar;