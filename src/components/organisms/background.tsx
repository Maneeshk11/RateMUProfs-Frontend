import DirectionBar from "../molecules/directionBar/directionBar";
import { Routes, Route } from "react-router"

import SchoolsPage from "../molecules/SchoolsPage";

const BackgroundPage = () => {
    return (
        <div className="flex-grow">
            <DirectionBar></DirectionBar>
            <Routes>
                <Route path={"/schools"} Component={SchoolsPage}></Route>
            </Routes>
        </div>
    );
}

export default BackgroundPage