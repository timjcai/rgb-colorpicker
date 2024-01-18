import Image from "next/image";
import RGBColorpicker from "./components/Colorpicker/RGBColorpicker";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-2xl font-bold">RGB Colorpicker</h1>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <RGBColorpicker />
            </div>
        </main>
    );
}
