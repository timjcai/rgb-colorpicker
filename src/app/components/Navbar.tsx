"use client";

import Link from "next/link";
import React from "react";
import { Icon } from "./Icon";
import { ThemeContextValue, useThemeContext } from "../context";

const Navbar = () => {
    const { theme, toggleTheme } = useThemeContext() as ThemeContextValue;

    return (
        <div className="flex flex-row justify-between items-center px-10 py-4 w-full border-[0.5px] rounded-[6px] mt-10">
            <div>Logo</div>
            <div className="flex flex-row items-center">
                <ul className="flex flex-row gap-4 font-semibold me-4">
                    <li>
                        <Link href="/brand-kit-builder">Brand Kit Builder</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/">Support</Link>
                    </li>
                </ul>
                <button
                    className="rounded-md p-1 text-lg w-fit h-fit border-[0.5px] px-0 py-2"
                    onClick={(e) => toggleTheme(e)}
                >
                    {theme === "light" ? (
                        <Icon
                            label="dark"
                            style={{
                                height: "16px",
                                width: "16px",
                                padding: "unset",
                            }}
                        />
                    ) : (
                        <Icon
                            label="light"
                            style={{
                                height: "16px",
                                width: "16px",
                                padding: "unset",
                            }}
                        />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
