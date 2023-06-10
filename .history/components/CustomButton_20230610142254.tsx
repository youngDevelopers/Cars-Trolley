"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = (props: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${props.containerStyles}`}
            onClick={() => {}}
        >
            <span>
                {props.title}
            </span>
        </button>
    )
}

export default CustomButton;
