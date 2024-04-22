"use client";

import React, { FC, useState } from "react";

type ColorCardType = {
    name: string;
    label: ColorHierarchyLabel;
    hexadecimal: string;
};

type ColorHierarchyLabel =
    | "Primary Color"
    | "Secondary Color"
    | "Accent Color"
    | "Text Color";

export const ColorCardLong: FC<ColorCardType> = ({
    name,
    label,
    hexadecimal,
}) => {
    const [rgb, setRGB] = useState<string>("");

    // need rgb conversion function

    return (
        <div
            className="flex flex-col row-span-2 justify-between border-[0.5px] my-4 rounded-lg py-4 px-6"
            style={{ backgroundColor: hexadecimal }}
        >
            <div className="flex flex-col">
                <h3>Color Name: {name}</h3>
                <p>Label: {label}</p>
            </div>
            <div className="grid grid-cols-2 max-w-[100px]">
                <p>HEX:</p>
                <p>{hexadecimal}</p>
                <p>RGB:</p>
                <p>{rgb}</p>
            </div>
        </div>
    );
};

export const ColorCardSquare: FC<ColorCardType> = ({
    name,
    label,
    hexadecimal,
}) => {
    const [rgb, setRGB] = useState<string>("");

    // need rgb conversion function

    return (
        <div
            className="flex flex-col row-span-1 justify-between border-[0.5px] my-4 rounded-lg py-4 px-6 justify-self-center"
            style={{ backgroundColor: hexadecimal }}
        >
            <div className="flex flex-col">
                <h3>Color Name: {name}</h3>
                <p>Label: {label}</p>
            </div>
            <div className="grid grid-cols-2 max-w-[100px]">
                <p>HEX:</p>
                <p>{hexadecimal}</p>
                <p>RGB:</p>
                <p>{rgb}</p>
            </div>
        </div>
    );
};
