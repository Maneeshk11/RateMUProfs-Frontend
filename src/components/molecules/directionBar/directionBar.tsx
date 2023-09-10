import { useSelector } from "react-redux"
// import { useNavigate } from "react-router";
import ArrowRight from "../../../assets/icons/arrowRight.svg"
// import { updateDirection, clearDirection } from "./directionbarSlice";

const DirectionBar = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const directionStateSlice = useSelector((state: any) => state.directionbar)
    const directionStates = directionStateSlice.directionArray;
    return (
        <div className="h-20 flex flex-row items-center px-4 fixed bg-white w-full flex-wrap">
            {
                directionStates && (
                    directionStates.map((item: any, index:number) => (
                        <div className="flex flex-row items-center" key={index}>
                            <div className="flex flex-row items-center cursor-pointer" onClick={
                                () => (
                                    // navigate(item.navigateDirection)
                                    console.log("we will look into it later")           
                                )
                            }>
                                <img src={item.imgSrc} alt="img" className="h-6 mr-2" />
                                <span>{item.name}</span>
                            </div>
                            {
                                index !== directionStates.length - 1 && (
                                    <img src={ArrowRight} alt="arrow" className="mx-2"/>
                                )
                            }
                        </div>
                    ))
                )
            }
        </div>
    );
}

export default DirectionBar;