import { IconType } from "@/app/types";
import {
    IconDefinition,
    faApple,
    faFacebook,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCircleUser,
    faClipboard,
    faClipboardUser,
    faCog,
    faCopy,
    faCreditCard,
    faCube,
    faListUl,
    faMoon,
    faNoteSticky,
    faPlus,
    faShop,
    faSun,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

type IconProps = {
    label: IconType;
};

const iconMapping: { [key in IconType]: IconDefinition } = {
    copy: faCopy,
    light: faSun,
    dark: faMoon,
};

export const Icon: FC<IconProps> = ({ label }) => {
    const icon = iconMapping[label];
    return <FontAwesomeIcon className="flex self-center mx-2" icon={icon} />;
};
