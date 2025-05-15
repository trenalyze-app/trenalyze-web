"use client"

import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import IconPositive from "@/../public/Vector.png"
import IconNeutral from "@/../public/emojione-monotone_neutral-face.png"
import IconNegative from "@/../public/emojione-monotone_pensive-face.png"

const data = [
    { name: "Positive", value: 75, fill: "#22c55e" },
    { name: "Neutral", value: 15, fill: "#facc15" },
    { name: "Negative", value: 10, fill: "#ef4444" },
]

export default function InterestOverview() {
    return (
        <Card className="bg-[#2A2C38] text-white p-4 w-full max-w-sm rounded-xl">
            <CardHeader>
                <CardTitle className="text-white text-sm">
                    Interest Overview Coffee
                </CardTitle>
            </CardHeader>

            <CardContent className="flex gap-4 items-center">
                <div className="w-1/2 h-[150px] -mt-15">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                            cx="50%"
                            cy="100%"
                            innerRadius="90%"
                            outerRadius="210%"
                            barSize={10}
                            startAngle={180}
                            endAngle={0}
                            data={data}
                        >
                            <PolarAngleAxis
                                type="number"
                                domain={[0, 100]}
                                angleAxisId={0}
                                tick={false}
                            />
                            {data.map((entry, index) => (
                                <RadialBar
                                    key={`bar-${index}`}
                                    dataKey="value"
                                    data={[entry]}
                                    fill={entry.fill}
                                    cornerRadius={5}
                                    background
                                />
                            ))}
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex flex-col gap-3 text-sm mt-4 ms-3">
                    <div className="flex items-center gap-2">
                        <Image src={IconPositive} alt="positive" width={16} height={16} />
                        <p>Positive</p>
                        <span className="ml-auto">75%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={IconNeutral} alt="neutral" width={16} height={16} />
                        <p>Neutral</p>
                        <span className="ml-auto">15%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={IconNegative} alt="negative" width={16} height={16} />
                        <p>Negative</p>
                        <span className="ml-auto">10%</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
