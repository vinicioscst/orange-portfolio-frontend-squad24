import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, TextFieldVariants } from "@mui/material";
import { useState, ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  label: string;
  variant?: TextFieldVariants;
  type?: React.HTMLInputTypeAttribute;
  error?: FieldError;
}

function Input(
  { label, variant = "outlined", type = "text", error, ...rest }: InputProps,
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
        InputProps={{
          endAdornment:
            type !== "password" ? null : showPassword ? (
              <VisibilityOff
                onClick={toggleShowPassword}
                className="text-neutral-600"
              />
            ) : (
              <Visibility
                onClick={toggleShowPassword}
                className="text-neutral-600"
              />
            ),
        }}
      />
    </>
  );
}

const ForwardedInput = forwardRef(Input);
export default ForwardedInput;
