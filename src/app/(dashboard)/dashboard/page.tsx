"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

  const handleRemove = (index: number) => {
    const updated = [...inputs];
    updated.splice(index, 1);
    setInputs(updated);
  };

  return (
    <>
      <div className="bg-[#7862A6] h-full">
        <h1 className="text-white text-2xl ms-10">Dashboard</h1>
        <br />
        <div className="flex flex-row justify-center gap-5 flex-wrap">
          {inputs.map((value, index) => (
            <div key={index} className="relative w-[20%]">
              <Input
                placeholder={`Input ${index + 1}`}
                className="h-[100px] rounded-md bg-white w-full"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
              {inputs.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute top-1/2 right-1 transform -translate-y-1/2 p-1 text-red-500"
                  onClick={() => handleRemove(index)}
                >
                  🗑
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
