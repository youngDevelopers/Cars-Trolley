"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = ({title, containerStyles}: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyles}`}
            onClick={() => {}}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton;
