import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, TextFieldVariants } from "@mui/material";
import { useState, ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import theme from "../../style/globalStyle";

interface InputProps {
  label: string;
  variant?: TextFieldVariants;
  type?: React.HTMLInputTypeAttribute;
  error?: FieldError;
  flexBasis?: string;
}

function Input(
  { label, variant = "outlined", type = "text", error, flexBasis, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <>
      <TextField
        type={showPassword ? "text" : type}
        label={label}
        variant={variant}
        error={!!error}
        helperText={error ? error.message : null}
        ref={ref}
        {...rest}
        sx={{width: "100%", maxWidth: "32rem", flexGrow: "1", flexBasis: flexBasis}}
        InputProps={{
          endAdornment:
            type !== "password" ? null : showPassword ? (
              <VisibilityOff
                onClick={toggleShowPassword}
                sx={{color: theme.palette.action.active}}
              />
            ) : (
              <Visibility
                onClick={toggleShowPassword}
                sx={{color: theme.palette.action.active}}
              />
            ),
        }}
      />
    </>
  );
}

const ForwardedInput = forwardRef(Input);
export default ForwardedInput;
