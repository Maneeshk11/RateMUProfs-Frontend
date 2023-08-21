import DirectionBar from "../molecules/directionBar/directionBar";
import { Routes, Route } from "react-router"

import SchoolsPage from "../molecules/SchoolsPage";
import SchoolProfList from "../molecules/SchoolProfList";
import Login from "../molecules/login";
import Account from "../molecules/Account/Account";

const BackgroundPage = () => {
    return (
        <div className="flex-grow">
            <DirectionBar></DirectionBar>
            <Routes>
                <Route path={"/schools"} Component={SchoolsPage}></Route>
                <Route path={"/schools/professors/:schoolName"} element={<SchoolProfList/>}></Route>
                <Route path={"/professors"} element={<SchoolProfList/>}></Route>
                <Route path={"/login"} Component={Login}></Route>
                <Route path={"/account"} Component={Account}></Route>
            </Routes>
        </div>
    );
}

export default BackgroundPage