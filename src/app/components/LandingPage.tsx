import React from "react";
import Navbar from "./Navbar";

const LandingPage = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[80vw] min-h-screen">
                <Navbar />
                <div className="flex justify-center items-center h-[90vh] flex-col gap-8">
                    <div className="relative">
                        <div>Image</div>
                    </div>
                    <h1 className="text-6xl text-center font-bold tracking-tighter">
                        Build your Brand Guide
                        <br />
                        in 5 minutes
                    </h1>
                    <div className="relative">
                        <button className="flex flex-row z-10 relative border-2 px-8 py-2 rounded-[6px] bg-white text-black font-semibold gap-4">
                            <span>Get started for free</span>
                            <span>&rarr;</span>
                        </button>
                        <div className="absolute inset-[-2px] bg-gradient-to-r from-[#A3FFD6] via-[#8576FF] to-[#1C1678] blur"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
