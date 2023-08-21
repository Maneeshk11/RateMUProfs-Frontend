import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Account = () => {
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const userInfoString = localStorage.getItem('userInfo');
        if (userInfoString) {
            setUserInfo(JSON.parse(userInfoString));
        } else {
            console.log('No userInfo found in localStorage.');
        }
    }, [])

    return (
        <div className="flex flex-col items-center gap-y-2">
            <span>Hi {userInfo.name}</span>
            <button className="p-4 border-2 border-black" onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem('userInfo');
                navigate(`/login`);
                window.location.reload();
            }}>Logout</button>
        </div>
    );
}

export default Account;