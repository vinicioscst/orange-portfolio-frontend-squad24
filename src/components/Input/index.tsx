import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, TextFieldVariants } from "@mui/material";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";

interface InputProps<T> {
  name: keyof T;
  control: unknown;
  label: string;
  variant?: TextFieldVariants;
  type?: React.HTMLInputTypeAttribute;
}

export default function Input<T>({
  control,
  label,
  name,
  variant = "outlined",
  type = "text",
}: InputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <>
      <Controller
        name={name as string}
        control={control as Control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type={showPassword ? "text" : type}
            label={label}
            variant={variant}
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            InputProps={{
              endAdornment:
                type !== "password" ? null : showPassword ? (
                  <VisibilityOff onClick={toggleShowPassword} className="text-neutral-600"/>
                ) : (
                  <Visibility onClick={toggleShowPassword} className="text-neutral-600" />
                ),
            }}
          />
        )}
      />
    </>
  );
}
