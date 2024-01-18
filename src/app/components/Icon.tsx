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
    faNoteSticky,
    faPlus,
    faShop,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

type IconProps = {
    label: IconType;
};

const iconMapping: { [key in IconType]: IconDefinition } = {
    copy: faCopy,
};

export const Icon: FC<IconProps> = ({ label }) => {
    const icon = iconMapping[label];
    return <FontAwesomeIcon className="flex self-center mx-2" icon={icon} />;
};
