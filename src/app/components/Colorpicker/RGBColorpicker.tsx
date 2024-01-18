"use client";

import { createRGBValues } from "@/app/utils";
import React, { useState } from "react";
import { Icon } from "../Icon";

const RGBColorpicker = () => {
    const [r, setR] = useState<number>(255);
    const [g, setG] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [draggable, setDraggable] = useState<boolean>(false);
    const [pointer, setPointer] = useState<number>(0);

    function limitPosition0to100(value: number): number {
        if (value < 0) {
            return 0;
        } else if (value > 100) {
            return 100;
        } else {
            return value;
        }
    }

    function setPointerPosition(e: React.MouseEvent<HTMLDivElement>) {
        if (draggable === true) {
            const target = e.target as HTMLDivElement;
            const length = target.getBoundingClientRect();
            const percentageNum = limitPosition0to100(
                ((e.clientY - length.top) / length.height) * 100
            );
            setR(createRGBValues(percentageNum)[0]);
            setG(createRGBValues(percentageNum)[1]);
            setB(createRGBValues(percentageNum)[2]);
            setPointer(percentageNum);
        } else {
            return;
        }
    }

    async function copyToClipboard(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        e.preventDefault();
        try {
            const textToCopy = `rgb(${r},${g},${b})`;
            await navigator.clipboard.writeText(textToCopy);
            alert("text copied to clipboard: " + textToCopy);
        } catch (error) {
            alert("unable copy to clipboard");
        }
    }

    return (
        <div className="colorpicker">
            <div className="colorpalette-container">
                <div
                    className={`colorpalette ${draggable && "draggable"}`}
                    onPointerMove={(e) => setPointerPosition(e)}
                    onPointerDown={(e) => setDraggable(true)}
                    onPointerUp={(e) => setDraggable(false)}
                >
                    <div
                        className="pointer"
                        style={
                            {
                                "--handle-position": `${pointer}%`,
                            } as React.CSSProperties
                        }
                    />
                </div>
            </div>
            <div className="color-display">
                <div className="flex items-center justify-center w-full relative">
                    <div
                        className="square"
                        style={
                            {
                                "--handle-color": `rgb(${r},${g},${b})`,
                            } as React.CSSProperties
                        }
                    ></div>
                    <button
                        className="rounded-md p-1 text-lg absolute top-2 right-6 text-black"
                        onClick={(e) => copyToClipboard(e)}
                    >
                        <Icon label="copy" />
                    </button>
                </div>
                <div className="mb-4">
                    <h1 className="text-xl font-bold">R:{r}</h1>
                    <h1 className="text-xl font-bold">G:{g}</h1>
                    <h1 className="text-xl font-bold">B:{b}</h1>
                </div>
                <h2 className="text-xl font-bold">
                    rgb &#40;{r},{g},{b}&#41;
                </h2>
            </div>
        </div>
    );
};

export default RGBColorpicker;
