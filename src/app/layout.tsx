import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "RGB Colorpicker",
    description:
        "A lightweight and user-friendly color picker tool for web development. This repository provides a simple and customizable color selection interface, allowing users to choose and preview colors effortlessly. The tool is built with [mention any libraries/frameworks used] and supports various color formats. Enhance your web projects with easy color integration using this versatile color picker.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
