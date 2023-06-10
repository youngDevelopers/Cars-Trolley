import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}