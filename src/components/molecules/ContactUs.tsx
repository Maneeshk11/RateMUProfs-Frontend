

const ContactUs = () => {
    return (
        <div className="flex flex-col gap-y-4 w-1/2 m-auto mt-24">
            <span className="flex flex-col  text-left mb-8">
                <span className="font-bold text-2xl ">GET IN TOUCH</span>
                <span className="font-normal text-lg text-gray-500">We will answer your questions and problems as soon as possible</span>
            </span>
            <div className="flex flex-row w-full justify-between">
                <div className="relative w-[49%] border border-[#2d2d2d40]">
                    <input type="text" id="floating_filled" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                    <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">First Name</label>
                </div>
                <div className="relative w-[49%] border border-[#2d2d2d40]">
                    <input type="text" id="floating_filled" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                    <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Last Name</label>
                </div>
            </div>
            <div className="relative w-full border border-[#2d2d2d40]">
                <input type="text" id="floating_filled" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
            </div>
            <div className="relative w-full border border-[#2d2d2d40]">
                <input type="text" id="floating_filled" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Phone</label>
            </div>
            <textarea name="" id="" rows={8} className="border border-[#2d2d2d40] p-2.5" placeholder="Describe your issue"></textarea>
            <button className="p-4 border-[1px] border-[#00000041] text-white bg-[#000000c2] font-medium text-base hover:bg-[#434343c2]"
            >Send</button>
        </div>
    )
}

export default ContactUs;