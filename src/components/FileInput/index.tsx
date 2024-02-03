import { FormControl, InputLabel, TextField, useTheme } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";


function FileInput({ ...rest }, ref: ForwardedRef<HTMLInputElement>
) {
  const theme = useTheme()
  return (
    <FormControl>
      <InputLabel
        htmlFor="image-input"
        sx={{
          fontSize: "0.75rem",
          position: "absolute",
          top: "-27px",
          left: "-4px",
          zIndex: "1",
          padding: "0 0.0625rem",
          backgroundColor: theme.palette.common.white,
          border: "0.25rem solid white",
        }}
      >
        Imagem de perfil
      </InputLabel>
      <TextField
        id="image-input"
        type="file"
        variant="outlined"
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
}

const ForwardedFileInput = forwardRef(FileInput);
export default ForwardedFileInput;
