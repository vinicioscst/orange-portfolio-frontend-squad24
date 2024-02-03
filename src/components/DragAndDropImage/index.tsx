import { Box, CardMedia, Typography, useMediaQuery, useTheme } from "@mui/material";
import { forwardRef, useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone';
import { Collections, Upload } from "@mui/icons-material";
import { useToast } from "../../context/ToastContext";


interface IDragAndDropImage {
  setProjectImage: React.Dispatch<React.SetStateAction<File | null | undefined>>
}

function DragAndDropImage({ setProjectImage }: IDragAndDropImage) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { displayToast } = useToast()

  const [file, setFile] = useState<string | null>(null);
  const onDrop = useCallback((files: File[]) => {
    const droppedFile = files[0];

    try {
      setFile(URL.createObjectURL(droppedFile))
      setProjectImage(droppedFile)
    } catch (error) {
      displayToast({
        message: "",
        severity: "error",
        title: "Tipo de arquivo não suportado",
        variant: "filled",
        isLoading: false,
      });
    }

  }, []);

  const dropzone = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography variant="subtitle1" color={theme.palette.neutral[110]}>
        Selecione o conteúdo que você deseja fazer upload
      </Typography>

      <Box
        {...dropzone.getRootProps()}
        sx={{
          position: "relative",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          width: "100%",
          height: "19rem",
          backgroundColor: theme.palette.neutral[70],
          borderRadius: "0.25rem",
          border: dropzone.isDragActive ? `1px solid ${theme.palette.primary.main}` : "0",
          cursor: "pointer",
        }}
      >
        {file ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              maxHeight: "19rem",
              width: "100%",
              overflow: "hidden",
              objectFit: "cover",
              borderRadius: "0.25rem",
            }}
          >
            <CardMedia
              component="img"
              image={file}
              alt="Preview"
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
        ) : (
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col gap-4 justify-center items-center mx-auto text-center cursor-pointer ${smallScreen ? "p-[0.53125rem]" : "p-[3.75rem]"
              }`}
          >
            {dropzone.isDragActive ? (
              <Upload
                sx={{
                  fontSize: "3.75rem",
                  color: "#323232",
                }}
              />
            ) : (
              <Collections
                sx={{
                  fontSize: "3.75rem",
                  color: "#323232",
                }}
              />
            )}

            <Typography variant="body2" color={theme.palette.neutral[120]}>
              {dropzone.isDragActive
                ? "Arraste o seu arquivo até aqui"
                : "Compartilhe seu talento com milhares de pessoas"}
            </Typography>
          </label>
        )}
        <input {...dropzone.getInputProps()} className="hidden" />
      </Box>
    </Box>
  );
}

const ForwardedDragAndDropImage = forwardRef(DragAndDropImage);
export default ForwardedDragAndDropImage;
