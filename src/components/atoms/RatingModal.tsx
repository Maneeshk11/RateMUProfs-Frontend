import { FC } from 'react';
import Modal from 'react-modal';
import WrongIcon from "../../assets/icons/cross.svg"
import CorrectIcon from "../../assets/icons/TickCircle.svg"
import { useNavigate } from 'react-router';
import { SendRatingResponse } from '@/Constants/types';

interface ModalProps {
    isOpen: boolean;
    isOpenFunc: () => void;
    response: SendRatingResponse
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        width: '24rem',
        height: '14rem'
    },
};

const RatingModal: FC<ModalProps> = ({
    isOpen,
    isOpenFunc,
    response
}) => {
    const navigate = useNavigate()
    const successfulRating = response.statuscode === 201;
    const inappropiateLanguage = response.statuscode === 422;
    const unfilledValues = response.statuscode === 400;
    const alreadyExistRating = response.statuscode === 409;
    const bannedUser = response.statuscode === 403;
    return (
        <Modal
            style={customStyles}
            isOpen={isOpen}>
            <div className="w-full h-full">
                {
                    successfulRating &&
                    <div className="w-full h-full flex flex-col justify-around items-center">
                        <img src={CorrectIcon} alt="correct" className="w-12" />
                        <span>Thank you for your feedback!</span>
                        <button className="min-h-14 border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-6 py-4 rounded-lg text-base"
                            onClick={() => {
                                navigate(-1)
                            }}>Go back</button>
                    </div>
                }
                {
                    inappropiateLanguage &&
                    <div className="w-full h-full flex flex-col justify-around items-center">
                        <img src={WrongIcon} alt="wrong" className='w-12' />
                        <span>Please use appropriate language</span>
                        <button className="min-h-14 border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-6 py-4 rounded-lg text-base"
                            onClick={isOpenFunc}>Ok</button>
                    </div>
                }

                {
                    unfilledValues &&
                    <div className="w-full h-full flex flex-col justify-around items-center">
                        <img src={WrongIcon} alt="wrong" className='w-12' />
                        <span>Please fill all the required fields</span>
                        <button className="min-h-14 border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-6 py-4 rounded-lg text-base"
                            onClick={isOpenFunc}>Ok</button>
                    </div>
                }
                {
                    alreadyExistRating &&
                    <div className="w-full h-full flex flex-col justify-around items-center">
                        <img src={WrongIcon} alt="wrong" className='w-12' />
                        <span className='text-center'>You have already rated this professor for this course</span>
                        <button className="min-h-14 border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-6 py-4 rounded-lg text-base"
                            onClick={() => {
                                navigate(-1)
                            }}>Go Back</button>
                    </div>
                }
                {
                    bannedUser &&
                    <div className="w-full h-full flex flex-col justify-around items-center">
                        <img src={WrongIcon} alt="wrong" className='w-12' />
                        <span className='text-center'>You have been Banned </span>
                        <span className='text-center'>Please try after {response.bannedTime?.toFixed(1)} mins</span>
                        <button className="min-h-14 border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-6 py-4 rounded-lg text-base"
                            onClick={() => {
                                navigate(-1)
                            }}>Go Back</button>
                    </div>
                }
            </div>
        </Modal>
    )
}

export default RatingModal;