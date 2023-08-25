import { FC } from "react";
import MailIcon from "../../../assets/icons/email.svg"
import MuLogo from "../../../assets/icons/mulogoBlack.svg"
import LinkedInIcon from "../../../assets/icons/linkedin.svg"
import GoogleScholarIcon from "../../../assets/icons/googleScholar.svg"
import { Link } from "react-router-dom";

interface ProfessorNameItemProps {
    rating: number;
    totRatings: number;
    name: string;
    school: string;
    dept: string;
    linkedin_link: string;
    googleScholar_link: string;
    muProfile_link: string;
}

const ProfessorNameItem: FC<ProfessorNameItemProps> = ({
    rating, totRatings, name, school, dept, linkedin_link, googleScholar_link, muProfile_link
}) => {
    return (
        <div className="flex flex-row gap-x-6">
            <div>
                <div className="flex items-center justify-center h-28 w-44 border-2 border-black rounded-xl p-2">
                    <span className="text-2xl font-normal">
                        <span className="text-7xl font-medium">{rating}</span>/5
                    </span>
                </div>
                <span className="text-sm font-medium">Based on {totRatings} ratings</span>
            </div>
            <div className="flex flex-col items-start justify-end gap-y-2 h-28">
                <span className="text-4xl font-bold text-[#e21b38]">{name}</span>
                <span className="tetx-2xl font-normal">{school} - {dept}</span>
            </div>
            <div className="flex flex-row items-center gap-x-4 ml-4">
                <Link to="" target="_blank" className="cursor-pointer">
                    <img src={MailIcon} alt="email" className="text-end" />
                </Link>
                <Link to={muProfile_link} target="_blank" className="cursor-pointer">
                    <img src={MuLogo} alt="muprofile" />
                </Link>
                <Link to={googleScholar_link} target="_blank" className="cursor-pointer">
                    <img src={GoogleScholarIcon} alt="googlescholar" />
                </Link>
                <Link to={linkedin_link} target="_blank" className="cursor-pointer">
                    <img src={LinkedInIcon} alt="linkedin" />
                </Link>
            </div>
        </div>
    );
}

export default ProfessorNameItem