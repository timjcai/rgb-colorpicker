import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
    title: "RGB Color Picker",
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
            <body className={GeistSans.className}>{children}</body>
        </html>
    );
}
