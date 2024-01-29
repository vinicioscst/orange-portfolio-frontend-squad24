import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  onClick?: () => void;
  type: HTMLButtonElement['type']
  text: React.ReactNode;
  disabled?: boolean;
  variant: "primaryContained" | "secondaryContained";
  form?: string;
};

function Button({ onClick, text, variant, disabled, type = 'button', form }: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      type={type}
      sx={{
        margin: '0'
      }}
      form={form}
    >
      {text}
    </MuiButton>
  );
}

export default Button;
