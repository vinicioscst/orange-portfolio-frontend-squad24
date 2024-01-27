import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  onClick?: () => void;
  type: HTMLButtonElement['type']
  text: React.ReactNode;
  disabled?: boolean;
  variant: "primaryContained" | "secondaryContained";
};

function Button({ onClick, text, variant, disabled, type = 'button' }: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      type={type}
      sx={{
        width: "100%",
      }}
    >
      {text}
    </MuiButton>
  );
}

export default Button;
