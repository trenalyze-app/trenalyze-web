import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AccountSettings = () => {
    return (
        <div className="min-h-screen bg-[#1e1f2b] text-white p-8">
            <h1 className="text-3xl font-semibold mb-8">Account Settings</h1>
            <div className="flex gap-8">
                <div className="flex flex-col gap-4">
                    <Button className="bg-[#2A2C38] w-32">
                        My Profile
                    </Button>
                    <Button variant="destructive" className="w-32">
                        Delete Account
                    </Button>
                </div>

                <div className="flex flex-col gap-6 w-full">
                    <Card className="bg-[#1a1a1a] border-none">
                        <CardContent className="p-6 flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={"/avatars/james.jpg"} />
                                <AvatarFallback className="text-black">{"aca"}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="text-lg font-medium text-white">Conrad Fisher</div>
                                <div className="text-sm text-white">Business Man</div>
                                <div className="text-sm text-white">conradfisher@gmail.com</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#1a1a1a] border-none text-white">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Personal Information</h2>
                                <Button className="bg-[#2A2C38]" size="sm">
                                    Edit
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="mb-2">First Name</Label>
                                    <Input className="bg-transparent border-gray-600" />
                                </div>
                                <div>
                                    <Label className="mb-2">Last Name</Label>
                                    <Input className="bg-transparent border-gray-600" />
                                </div>
                                <div>
                                    <Label className="mb-2">Email</Label>
                                    <Input className="bg-transparent border-gray-600" />
                                </div>
                                <div>
                                    <Label className="mb-2">Bio</Label>
                                    <Input className="bg-transparent border-gray-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#1a1a1a] border-none text-white">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Address</h2>
                                <Button className="bg-[#2A2C38]" size="sm">
                                    Edit
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="mb-2">Country</Label>
                                    <Input className="bg-transparent border-gray-600" />
                                </div>
                                <div>
                                    <Label className="mb-2">City/Region</Label>
                                    <Input className="bg-transparent border-gray-600" />
                                </div>
                                <div>
                                    <Label className="mb-2">Postal Code</Label>
                                    <Input className="bg-transparent border-gray-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;