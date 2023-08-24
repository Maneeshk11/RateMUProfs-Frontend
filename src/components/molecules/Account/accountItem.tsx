import ArrowRight from "../../../assets/icons/arrowRight.svg"
import { FC } from "react";

interface AccountItemProps {
    AccountHeading: string;
    AccountSubPage: string;
}

const AccountItem:FC <AccountItemProps> = ({
    AccountHeading, AccountSubPage,
}) => {
    return (
        <div className="flex flex-row items-center w-96 justify-between p-4 rounded hover:bg-[#f0eeed] cursor-pointer">
            <span className="font-bold text-[33px] text-[#606060]">{AccountHeading}</span>
            <img src={ArrowRight} alt="" />
        </div>
    );
}

export default AccountItem;