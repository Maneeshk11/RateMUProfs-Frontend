import LogoMU from "../../assets/icons/logoMain.svg"
import FacebookLogo from "../../assets/icons/facebook.svg"
import GoogleLogo from "../../assets/icons/google.svg"

const Login = () => {
    return (
        <div className="flex flex-col items-center gap-y-8 mt-12">
            <div className="flex flex-col gap-y-2">
                <img src={LogoMU} alt="" className="h-8" />
                <span className="font-extrabold text-3xl mt-2">Welcome back</span>
                <h3 className="font-medium">Please enter your details.</h3>
            </div>
            <div className="flex flex-col gap-y-4 items-center w-[340px]">
                <input type="text" placeholder="Email" className="rounded-lg w-full px-4 py-3 border-[1px] border-[#1919193f]" />
                <input type="text" placeholder="Password" className="rounded-lg w-full px-4 py-3 border-[1px] border-[#1919193f]" />
                <button type="submit" className="rounded-lg w-full px-4 py-3 bg-black text-white font-normal">
                    Continue
                </button>
                <div className="flex flex-row w-full items-center justify-center">
                    <div className="bg-[#1919193f] h-[1px] flex-grow">&nbsp;</div>
                    <span className="px-3">OR</span>
                    <div className="bg-[#1919193f] h-[1px] flex-grow">&nbsp;</div>
                </div>
                <button type="submit" className="flex flex-row items-center justify-center gap-x-2 rounded-lg w-full px-4 py-3 border-[1px] border-[#1919193f]">
                    <img src={GoogleLogo} alt="google" />
                    Continue with Google
                </button>
                <button type="submit" className="flex flex-row items-center justify-center gap-x-2 rounded-lg w-full px-4 py-3 border-[1px] border-[#1919193f]">
                    <img src={FacebookLogo} alt="meta" />
                    Continue with Facebook
                </button>
                <div className="flex flex-row gap-x-2">
                    <h2>Don't have an account?</h2>
                    <a href="" className="font-bold">Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default Login;