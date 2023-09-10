import { FC } from 'react';
import Modal from 'react-modal';
import WrongIcon from "../../assets/icons/cross.svg"
import { useNavigate } from 'react-router';

interface ModalProps {
    isOpen: boolean;
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

const SignInModal: FC<ModalProps> = ({
    isOpen,
}) => {
    const navigate = useNavigate()
    return (
        <Modal
            style={customStyles}
            isOpen={isOpen}>
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col justify-around items-center">
                    <img src={WrongIcon} alt="correct" className="w-12" />
                    <span>Please Sign-in to review a professor</span>
                    <button className="min-h-14 border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium px-6 py-4 rounded-lg text-base"
                        onClick={() => {
                            navigate("/login")
                        }}>Sign-In</button>
                </div>

            </div>
        </Modal>
    )
}

export default SignInModal;