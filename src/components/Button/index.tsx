import { Button as MuiButton } from "@mui/material";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  text: React.ReactNode;
  disabled?: boolean;
  variant: "primaryContained" | "secondaryContained";
  type?: "button" | "submit" | "reset";
};

function Button({
  onClick,
  text,
  variant,
  disabled,
  type = "button",
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      sx={{
        width: "100%",
      }}
      type={type}
    >
      {text}
    </MuiButton>
  );
}

export default Button;
