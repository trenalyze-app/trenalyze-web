"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

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
        <div className="div bg-[#2A2C38] w-[775px] ms-10 rounded-sm h-[440px] text-white p-5">
          <p>helllo world</p>
        </div>
      </div>
    </>
  );
}
