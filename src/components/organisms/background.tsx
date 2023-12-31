import DirectionBar from "../molecules/directionBar/directionBar";
import { Routes, Route } from "react-router"

import SchoolsPage from "../molecules/SchoolsPage";
import SchoolProfList from "../molecules/SchoolProfList";
import Login from "../molecules/login";
import Account from "../molecules/Account/Account";
import ProfessorPage from "../molecules/professorPage/ProfessorPage";
import RatingsPage from "../molecules/RatingsPage/ratingsPage";
import AboutUs from "../molecules/about";
import ContactUs from "../molecules/ContactUs";

const BackgroundPage = () => {
    return (
        <div className="flex-grow overflow-y-scroll h-screen relative">
            <DirectionBar></DirectionBar>
            <div className="mt-16">
                <Routes>
                    <Route path={"/schools"} Component={SchoolsPage}></Route>
                    <Route path={"/schools/:schoolName"} element={<SchoolProfList />}></Route>
                    <Route path={"/professors"} element={<SchoolProfList />}></Route>
                    <Route path="/professors/:professorId" element={<ProfessorPage />} />
                    <Route
                        path="/schools/:schoolName/:professorId"
                        element={<ProfessorPage />}
                    />
                    <Route path="/rating/:professorId" Component={RatingsPage}></Route>
                    <Route path={"/account"} Component={Account}></Route>
                    <Route path={"/login"} Component={Login}></Route>
                    <Route path={"/about"} Component={AboutUs}></Route>
                    <Route path={"/contact"} Component={ContactUs}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default BackgroundPage