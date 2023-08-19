import ProfListItem from "../atoms/profListItem";
import SearchBar from "../atoms/searchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterIcon from "../../assets/icons/filterIcon.svg"
import { GET_ALL_PROFS, GET_PROFS_BY_SCHOOL } from "../../Constants/api";
import { Professor } from "../../Constants/types";
import { useParams } from "react-router-dom";

// interface SchoolProfListProps {
//     schoolName: string;
// }

const SchoolProfList = () => {
    const params = useParams();
    const [allProfs, setAllProfs] = useState<Professor[]>()
    const [tempProfsList, setTempProfsList] = useState<Professor[]>();
    const [indexHead, setIndexHead] = useState<number>(0)
    const [searchVal, setSearchVal] = useState<string>("")

    useEffect(() => {
        const schoolName = params.schoolName;
        if (schoolName) {
            (async () => {
                await axios.get(`${GET_PROFS_BY_SCHOOL}/${schoolName}`)
                    .then((resp) => {
                        setAllProfs(resp.data)
                        setTempProfsList(resp.data);
                    })
            })()
        }
        else {
            (async () => {
                await axios.get(`${GET_ALL_PROFS}`)
                    .then((resp) => {
                        setAllProfs(resp.data)
                        setTempProfsList(resp.data);
                    })
            })()
        }
    }, [params.schoolName])

    useEffect(() => {
        if (searchVal === "") {
            setTempProfsList(allProfs);
        }
        else {
            setTempProfsList(allProfs?.filter((value) => { return value.name.toLowerCase().includes(searchVal.toLowerCase()) }))
        }
    }, [searchVal])

    const handleSearchChange = (e: any) => {
        setSearchVal(e.target.value)
    }


    return (
        <div className="flex flex-col gap-y-6 items-center w-full">
            <div className="w-4/5 flex flex-row justify-between py-4 px-4 m-auto items-end">
                <SearchBar placeholder="Search professor"
                    onChange={handleSearchChange}></SearchBar>
                <button className="text-lg border-2 border-black px-8 py-2 rounded flex flex-row gap-x-1">
                    Filter <img src={FilterIcon} alt="filter" />
                </button>
            </div>
            <div className="flex flex-col items-center w-full">
                <div className="w-4/5 flex text-left flex-row items-center border-[1px] bg-[#f8f7f6] border-[#00000058] text-base font-medium py-5">
                    <span className=" w-1/4 px-8">Name</span>
                    <span className=" w-[45%] px-8 ">Department</span>
                    <span className=" w-[15%] px-8">Rating</span>
                    <span className="w-[15%] px-8 ">Total Ratings</span>
                </div>
                {
                    tempProfsList && tempProfsList.length > 0 ? (
                        tempProfsList.map((prof, index) => (
                            index >= indexHead * 9 && index < indexHead * 9 + 9 &&
                            <ProfListItem name={prof.name} rating={prof.rating} totRatingCount={prof.totRatings} profId="1234rrr"
                                department={prof.dept}></ProfListItem>
                        )
                        )
                    ) : (
                        <div className="w-4/5 flex text-center flex-row items-center border-[1px] border-[#00000058] text-base font-medium py-5">
                            <span className=" w-full px-8">No match found</span>
                        </div>
                    )
                }
            </div>
            <div className="flex flex-row gap-x-4 mt-2 w-72 overflow-x-scroll">
                {tempProfsList &&
                    Array.from({ length: Math.ceil(tempProfsList.length / 9) }).map((_, index) => (
                        <div className="flex items-center justify-center h-12 w-12 hover:bg-[#dfdedd] border-[2px] border-black flex-shrink-0 cursor-pointer"
                            onClick={() => (
                                setIndexHead(index)
                            )}>{index + 1}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default SchoolProfList;
