import Link from "next/link";
import React from "react";
import { Icon } from "./Icon";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between px-10 py-4 w-full border-[0.5px] border-white rounded-[6px] mt-10">
            <div>Logo</div>
            <div>
                <ul className="flex flex-row gap-4 font-semibold">
                    <li>
                        <Link href="/brand-kit-builder">Brand Kit Builder</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/">Support</Link>
                    </li>
                    <li>
                        <button>
                            <Icon label="dark" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
