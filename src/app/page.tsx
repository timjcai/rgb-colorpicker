import Image from "next/image";
import RGBColorpicker from "./components/Colorpicker/RGBColorpicker";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">RGB Colorpicker</h1>
                <p>@timjcai</p>
            </div>
            <div className="max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex mt-8">
                <RGBColorpicker />
            </div>
        </main>
    );
}
