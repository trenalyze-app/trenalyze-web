'use client';
import Image from "next/image";
import Thumbnail from "@/../public/Logo.png";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import IconGoogle from "@/../public/Social Icons.png"
import IconAppel from "@/../public/Social Icons (1).png"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner"
import { useFormik } from 'formik';


interface FormErrors {
    email: string[];
    password: string[];
}


interface FormData {
    email: string;
    password: string;
}

interface ErrorResponse {
    message: string;
    errors?: {
        [field: string]: string[];
    };
}

const RegisterPage = () => {
    const [formErrors, setFormErrors] = useState<FormErrors>({
        email: [],
        password: [],
    });

    const handleValidation = (errors: { email: string[]; password: string[] }) => {
        setFormErrors({
            email: errors.email || [],
            password: errors.password || [],
        });
    };

    const { mutate } = useMutation({
        mutationFn: async (data: FormData) => {
            const response = await axiosInstance.post('/trenalyze/login', data);
            return response;
        },
        onError: (error) => {
            const err = error as AxiosError<ErrorResponse>;
            const data = err?.response?.data
            console.log(data)
            if (err.response?.status === 400 && err.response.data.errors) {
                handleValidation({
                    email: err.response?.data?.errors?.email ?? [],
                    password: err.response?.data?.errors?.password ?? [],
                });
                toast(err?.response?.data?.message)
                return
            }
            if (err.response?.status === 403) {
                toast("user is inactive")
            }
            toast(err?.response?.data?.message)
            return
        },
        onSuccess: async (data) => {
            const dataApi = data.data
            toast(dataApi.message)
        },
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, { setSubmitting }) => {
            try {
                const { email, password } = values
                mutate({
                    email,
                    password
                })
            } catch (error) {
                console.error('Terjadi kesalahan:', error);
            } finally {
                setSubmitting(false);
            }
        },
    })

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
                                Sign in now to discover the full experience
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center rounded-md">
                        <div className="bg-white w-[65%] h-[80%] rounded-[15px] flex justify-center items-center flex-col">
                            <div className="flex flex-col mx-auto w-full max-w-md px-16">
                                <h1 className="text-black text-[25px] text-left mt-4">Welcome Back! </h1>
                                <h1 className="text-black text-[25px] text-left mb-5">Sign in to continue</h1>
                                <form onSubmit={formik.isSubmitting ? () => {} : formik.handleSubmit}>
                                    <div className="flex flex-col mb-2">
                                        <p>Email</p>
                                        <Input type="text" placeholder="Enter your email" className="bg-[#DEDEDD]" name="email" onChange={formik.handleChange} value={formik.values.email} />
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <p>Password</p>
                                        <Input type="text" placeholder="Enter your password" className="bg-[#DEDEDD]" name="password" onChange={formik.handleChange} value={formik.values.password} />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <Checkbox />
                                            <Label className="text-black ms-2 font-normal text-sm">Remember me</Label>
                                        </div>
                                        <p className="me-2 text-[#8474B7] text-sm font-normal">Forgot password</p>
                                    </div>
                                    <div className="flex flex-col items-center mt-6">
                                        <Button className="w-[70%] mt-4 bg-[#8474B7] text-black" type="submit">Sign In</Button>
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
                            <div className="flex justify-center text-[12px] mt-3">
                                <p>dont have an account?</p>
                                <p className="text-[#72CBD7] ms-1">Sign Up</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RegisterPage;