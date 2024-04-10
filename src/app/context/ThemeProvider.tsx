import React, { createContext, FC, useContext } from "react";

export type ProviderProps = {
    children: React.JSX.Element;
};

export interface ThemeContextValue {}

export const ThemeContext = createContext<ThemeContextValue>({});

export function useTheme() {
    return useContext(ThemeContext);
}

export const ThemeProvider: FC<ProviderProps> = ({ children }) => {
    const value: ThemeContextValue = {};

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
