import { Box, CardMedia, Typography, useMediaQuery } from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import theme from "../../style/globalStyle";
import { Collections } from "@mui/icons-material";
import { convertToBase64 } from "../AddProjectModal";

interface DragAndDropImageProps {
  onChange: (e: unknown) => void;
  value: string;
}

function DragAndDropImage({ value, onChange }: DragAndDropImageProps  ) {
  
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    convertToBase64(file, onChange)

    // setSelectedImage({
    //   preview: URL.createObjectURL(file),
    // });
  }, [onChange]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".webp"],
    },
    multiple: false,
    
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
            {...getRootProps()}
            sx={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              width: "100%",
              height: "19rem",
              backgroundColor: theme.palette.neutral[70],
              borderRadius: "0.25rem",
              cursor: "pointer",
            }}
          >
            <input {...getInputProps({onChange})} name="images"/>
            {value ? (
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
                  image={value}
                  alt="Preview"
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: smallScreen ? "0.53125rem" : "3.75rem",
                  margin: "0 auto",
                }}
              >
                <Collections sx={{ fontSize: "3.75rem", color: "#323232" }} />
                <Typography variant="body2" color={theme.palette.neutral[120]}>
                  Compartilhe seu talento com milhares de pessoas
                </Typography>
              </Box>
            )}
          </Box>
    </Box>
  );
}

export default DragAndDropImage;
