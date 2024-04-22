import React from "react";
import Navbar from "../components/Navbar";
import { ColorCardLong, ColorCardSquare } from "../components/Cards";

const page = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-[80vw] max-w-[1200px] min-h-screen">
                <Navbar />
                <section
                    id="colorPalette"
                    className="grid grid-cols-5 gap-3 border-[0.5px] mt-2"
                >
                    <div className="row-span-2"></div>
                    <ColorCardLong
                        name={"Yellow"}
                        label={"Primary Color"}
                        hexadecimal="#ffaf45"
                    />
                    <ColorCardLong
                        name={"Yellow"}
                        label={"Primary Color"}
                        hexadecimal={"#ffaf45"}
                    />
                    <ColorCardSquare
                        name={"Yellow"}
                        label={"Primary Color"}
                        hexadecimal={"#ffaf45"}
                    />
                    <ColorCardSquare
                        name={"Yellow"}
                        label={"Primary Color"}
                        hexadecimal={"#ffaf45"}
                    />
                    <ColorCardSquare
                        name={"Yellow"}
                        label={"Primary Color"}
                        hexadecimal={"#ffaf45"}
                    />
                    <ColorCardSquare
                        name={"Yellow"}
                        label={"Primary Color"}
                        hexadecimal={"#ffaf45"}
                    />
                </section>
                <section className="grid grid-cols-3 gap-3 border-[0.5px] mt-2">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </section>
            </div>
        </div>
    );
};

export default page;
