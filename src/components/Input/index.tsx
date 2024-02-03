import { HelpOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, TextFieldVariants, Tooltip, useTheme } from "@mui/material";
import { TextField, TextFieldVariants, Tooltip, useTheme } from "@mui/material";
import { ForwardedRef, forwardRef, useState } from "react";
import { FieldError } from "react-hook-form";
interface InputProps {
  label: string;
  variant?: TextFieldVariants;
  type?: React.HTMLInputTypeAttribute;
  error?: FieldError;
  flexBasis?: string;
  tooltip?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

function Input(
  { label, variant = "outlined", type = "text", error, flexBasis, tooltip, onChange, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) {

  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme()
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
        onChange={onChange}
        {...rest}
        sx={{ width: "100%", maxWidth: "45.1875rem", flexGrow: "1", flexBasis: flexBasis }}
        InputProps={{
          endAdornment: (
            <>
              {type !== "password" ? null : showPassword ? (
                <VisibilityOff
                  onClick={toggleShowPassword}
                  sx={{ color: theme.palette.action.active }}
                />
              ) : (
                <Visibility
                  onClick={toggleShowPassword}
                  sx={{ color: theme.palette.action.active }}
                />
              )}
              {tooltip && (
                <Tooltip title={tooltip} arrow>
                  <HelpOutline />
                </Tooltip>
              )}
            </>
          ),
        }}
      />
    </>
  );
}

const ForwardedInput = forwardRef(Input);
export default ForwardedInput;
