import Image from "next/image";
import Thumbnail from "@/../public/Logo.png";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import IconGoogle from "@/../public/Social Icons.png"
import IconAppel from "@/../public/Social Icons (1).png"

const RegisterPage = () => {
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
                                Sign up now to discover the full experience
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center rounded-md">
                        <div className="bg-white w-[65%] h-[80%] rounded-[15px] flex justify-center items-center flex-col">
                            <div className="flex flex-col mx-auto w-full max-w-md px-16">
                                <h1 className="text-black text-[25px] text-left mt-4 mb-5">Create Your Account</h1>
                                <form>
                                    <div className="flex flex-col mb-2">
                                        <p>Name</p>
                                        <Input type="text" placeholder="Enter your name" className="bg-[#DEDEDD]" />
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <p>Email</p>
                                        <Input type="text" placeholder="Enter your email" className="bg-[#DEDEDD]" />
                                    </div>
                                    <div className="flex flex-col mb-6">
                                        <p>Password</p>
                                        <Input type="text" placeholder="Enter your password" className="bg-[#DEDEDD]" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Button className="w-[50%] mt-4 bg-[#8474B7] text-black">Sign Up</Button>
                                    </div>
                                </form>

                                <div className="flex items-center my-6">
                                    <div className="flex-grow h-px bg-gray-300"></div>
                                    <span className="mx-4 text-gray-500 text-sm whitespace-nowrap">Or continue with</span>
                                    <div className="flex-grow h-px bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex gap-4">
                                    <Button className="flex items-center justify-center gap-2 bg-white text-black border border-black px-10 py-2">
                                        <Image src={IconGoogle} alt="Google" className="w-5 h-5" />
                                        Google
                                    </Button>
                                    <Button className="flex items-center justify-center gap-2 bg-white text-black border border-black px-10 py-2">
                                        <Image src={IconAppel} alt="Apple" className="w-5 h-5" />
                                        Apple
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RegisterPage;