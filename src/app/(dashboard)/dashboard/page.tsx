"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import SortUp from "@/../public/Sort Up.png";
import SortDown from "@/../public/Sort Down.png";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"
import IconPositive from "@/../public/Vector.png"
import IconNeutral from "@/../public/emojione-monotone_neutral-face.png"
import IconNegative from "@/../public/emojione-monotone_pensive-face.png"

const dataSentiment = [
  { name: "Positive", value: 75, fill: "#22c55e" },
  { name: "Neutral", value: 15, fill: "#facc15" },
  { name: "Negative", value: 10, fill: "#ef4444" },
]


const dataRegion = [
  { name: "Jan", uv: 400 },
  { name: "Feb", uv: 300 },
  { name: "Mar", uv: 500 },
  { name: "Apr", uv: 200 },
  { name: "May", uv: 600 },
  { name: "Jun", uv: 700 },
];

export default function DashboardPage() {
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
        <h1 className="text-white text-2xl ms-10">Dashboard</h1>
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
            <p className="text-2xl">Trend Chart</p>
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
              <Card className="w-full bg-black border-none">
                <CardHeader>
                  <CardTitle>Monthly Visitors</CardTitle>
                </CardHeader>
                <CardContent className="relative w-full h-[300px] p-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={dataRegion}
                      margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        horizontal={false}
                      />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
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
        <Card className="bg-[#2A2C38] text-white p-4 w-full max-w-sm border-none rounded-sm ms-10">
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
                  data={dataSentiment}
                >
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                  />
                  {dataSentiment.map((entry, index) => (
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
        <br />
      </div>
    </>
  );
}
