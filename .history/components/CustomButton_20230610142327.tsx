"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyles}`}
            onClick={() => {}}
        >
            <span>
                {title}
            </span>
        </button>
    )
}

export default CustomButton;