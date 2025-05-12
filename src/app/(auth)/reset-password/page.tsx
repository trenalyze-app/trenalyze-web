import Image from "next/image";
import Thumbnail from "@/../public/Logo.png";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ResetPasswordPage = () => {
    return (
        <>
            <div
                className="h-screen flex items-center justify-center"
                style={{
                    background: 'linear-gradient(to bottom, #453F84 0%, #928FB1 40%, #B8B6C7 70%, #DEDEDD 100%)',
                }}
            >
                <div className="flex w-full h-screen">
                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <div className="bg-transparent flex flex-col items-center justify-center">
                            <Image src={Thumbnail} alt="Logo" className="mx-auto mb-4 lg:w-[75%]" />
                            <p className="text-black lg:text-[25px] text-center mt-4">
                                reset password now to discover the full experience
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center rounded-md">
                        <div className="bg-white w-[65%] h-[80%] rounded-[15px] flex justify-center items-center flex-col">
                            <div className="flex flex-col mx-auto w-full max-w-md px-16">
                                <h1 className="text-black text-[25px] text-left mt-4 mb-5">Reset Password</h1>
                                <form>
                                    <div className="flex flex-col mb-2">
                                        <p>Password</p>
                                        <Input type="text" placeholder="Enter your password" className="bg-[#DEDEDD]" />
                                    </div>
                                    <div className="flex flex-col mb-6">
                                        <p>Confirm Password</p>
                                        <Input type="text" placeholder="Enter your confirm password" className="bg-[#DEDEDD]" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Button className="w-[70%] mt-4 bg-[#8474B7] text-black">Reset Password</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ResetPasswordPage;