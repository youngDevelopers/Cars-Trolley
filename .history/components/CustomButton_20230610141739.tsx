"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = (props: CustomButtonProps) => {
    return (
        <button>
            <span>
                {props.title}
            </span>
        </button>
    )
}

export default CustomButton
