"use client";

import React, { createContext, FC, useContext, useState } from "react";

export type ProviderProps = {
    children: React.ReactNode;
};

export type ThemeProps = "dark" | "light";

export interface ThemeContextValue {
    theme: ThemeProps;
    toggleTheme: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({});

export function useThemeContext() {
    return useContext(ThemeContext);
}

export const ThemeProvider: FC<ProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeProps>("dark");

    function toggleTheme(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    }

    const value: ThemeContextValue = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            <div id={theme}>{children}</div>
        </ThemeContext.Provider>
    );
};
