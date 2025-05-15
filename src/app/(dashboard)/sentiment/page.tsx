"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils"
import SortUp from "@/../public/Sort Up.png";
import SortDown from "@/../public/Sort Down.png";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Map from "@/../public/img2 1.png"


interface Persona {
    name: string
    description: string
    avatar: string
    score: number
}

interface Persona {
    name: string
    description: string
    avatar: string
    score: number
}

const personas: Persona[] = [
    {
        name: "Aris",
        description: "There are no good tea places in Bali",
        avatar: "/avatars/aris.jpg",
        score: 80,
    },
    {
        name: "Sinta",
        description: "Teahouse in bandung is dirty",
        avatar: "/avatars/sinta.jpg",
        score: 70,
    },
    {
        name: "James",
        description: "The wifi in Jakarta Teahouse is slow",
        avatar: "/avatars/james.jpg",
        score: 55,
    },
]

function getColor(score: number): string {
    if (score <= 60) return "bg-red-500"
    if (score <= 75) return "bg-yellow-500"
    return "bg-green-500"
}

export default function SentimentPage() {
    const [inputs, setInputs] = useState([""]);

    const handleChange = (index: number, value: string) => {
        const updated = [...inputs];
        updated[index] = value;
        setInputs(updated);
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (
            e.key === "Enter" &&
            index === inputs.length - 1 &&
            inputs[index].trim() !== "" &&
            inputs.length < 4
        ) {
            setInputs([...inputs, ""]);
        }
    };

    return (
        <>
            <div className="bg-[#78778f] h-full">
                <h1 className="text-white text-2xl ms-10">Sentiment Analysis</h1>
                <br />
                <div className="flex flex-row justify-center gap-5">
                    {inputs.map((value, index) => (
                        <Input
                            key={index}
                            placeholder={`Input ${index + 1}`}
                            className="h-[85px] rounded-md bg-[#2A2C38] border-[#2A2C38] text-white w-[15%]"
                            value={value}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))}
                </div>
                <br />
                <div className="flex justify-between">
                    <div className="bg-[#2A2C38] w-[60%] ms-10 rounded-sm h-[530px] text-white p-6">
                        <p className="text-2xl">Sentiment Map</p>
                        <div className="flex flex-row-reverse gap-3">
                            <Button className="bg-[#2A2C38] border-[#2A2C38] text-white h-[35px] w-[80px] shadow-md">
                                1 Week
                            </Button>
                            <Button className="bg-[#2A2C38] border-[#2A2C38] text-white h-[35px] w-[80px] shadow-md">
                                30 Days
                            </Button>
                            <Button className="bg-[#2A2C38] border-[#2A2C38] text-white h-[35px] w-[80px] shadow-md">
                                1 Year
                            </Button>
                        </div>
                        <div className="w-full max-w-[775px] mx-auto px-4 mt-5">
                            <Image src={Map} alt="Map" className="rounded-sm" />
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#2A2C38] me-10 rounded-sm h-[530px] text-white p-6 w-[25%]">
                        <p className="font-semibold mb-12">Top Region By Sektor Bisnis</p>
                        <ScrollArea className="h-full overflow-y-auto pr-2">
                            <div className="flex flex-col gap-2">
                                {[
                                    { label: "1. Jakarta", up: true },
                                    { label: "2. Jakarta", up: true },
                                    { label: "3. Jakarta", up: false },
                                    { label: "4. Jakarta", up: false },
                                    { label: "5. Jakarta", up: false },
                                    { label: "6. Jakarta", up: false },
                                    { label: "7. Jakarta", up: false },
                                    { label: "8. Jakarta", up: false },
                                    { label: "9. Jakarta", up: false },
                                    { label: "10. Jakarta", up: false },
                                    { label: "11. Jakarta", up: false },
                                    { label: "12. Jakarta", up: false },
                                    { label: "13. Jakarta", up: false },
                                    { label: "14. Jakarta", up: false },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex justify-between">
                                        <p>{item.label}</p>
                                        <Image src={item.up ? SortUp : SortDown} alt={item.label} />
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>
                <br />
                <Card className="w-[65%] rounded-sm border-none bg-[#2A2C38] text-white ms-10">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <h2 className="text-lg font-semibold">Tea Sentiment Overview</h2>
                        <span className="text-xl">›</span>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {personas.map((person, index) => (
                            <div key={index} className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={person.avatar} />
                                        <AvatarFallback className="text-black">{person.name}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{person.name}</p>
                                        <p className="text-sm text-muted-foreground">{person.description}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end min-w-[150px] w-1/3">
                                    <div className="relative w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                                        <div
                                            className={cn("h-full", getColor(person.score))}
                                            style={{ width: `${person.score}%` }}
                                        />
                                    </div>
                                    <span className="text-sm font-medium mt-1">{person.score}%</span>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <br />
            </div>
        </>
    );
}
