"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {
          rightIcon && (
              <div className="relative">
                  <Image src={rightIcon} alt="arrow-left" fill className="object-contain"/>
              </div>
          )
      }
    </button>
  );
};

export default CustomButton;
