import {
  Box,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DragAndDropImage from "../DragAndDropImage";
import Input from "../Input";
import Button from "../Button";
import { useEffect, useState } from "react";
import ChipInput from "../ChipInput";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProjectFormData,
  projectFormSchema,
} from "../../schemas/projectsSchemas";
import ModalProjectAdded from "../ModalProjectAdded";

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddProjectModal({
  isOpen,
  onClose,
}: AddProjectModalProps) {
  const [open, setOpen] = useState(isOpen);

  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      description: "",
      images: "",
      link: "",
      tags: [],
      title: "",
    },
  });

  function handleClose() {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  }

  function submitData(data: ProjectFormData) {
    console.log(data);
  }

  function handlePreview() {
    setPreviewOpen(true);
  }

  function closePreview() {
    setPreviewOpen(false);
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={smallScreen ? "sm" : "md"}
        fullWidth
        sx={{ maxWidth: smallScreen ? "100%" : "890" }}
      >
        <DialogTitle sx={{ padding: "1.5rem 2rem" }}>
          Adicionar Projeto
        </DialogTitle>
        <form
          className={
            smallScreen
              ? "flex flex-col-reverse gap-8 px-8 pb-8"
              : "flex gap-8 px-8 pb-8"
          }
          noValidate
          id="form-modal"
          onSubmit={handleSubmit(submitData)}
        >
          <Controller
            name="images"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <div className="w-full">
                <DragAndDropImage
                  value={value}
                  onChange={(e) => {
                    const file = e?.target?.files[0];
                    if (file) {
                      convertToBase64(file, onChange);
                    }
                  }}
                />
              </div>
            )}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "stretch",
              width: "100%",
            }}
          >
            <Input
              label="Título"
              type="text"
              {...register("title")}
              error={errors.title}
            />
            <ChipInput {...register("tags")} />
            <Input
              label="Link"
              type="text"
              {...register("link")}
              error={errors.link}
            />
            <TextField
              sx={{ width: "100%" }}
              label="Descrição"
              multiline={true}
              minRows={5}
              maxRows={10}
              {...register("description")}
              error={!!errors.title}
            />
          </Box>
        </form>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "1.8rem",
            cursor: "pointer",
          }}
        >
          <span onClick={handlePreview}>Visualizar publicação</span>
        </DialogActions>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            paddingX: "2rem",
            paddingBottom: "1.5rem",
            gap: "0.5rem",
          }}
        >
          <Button
            type="submit"
            variant="primaryContained"
            text="salvar"
            form="form-modal"
          />
          <Button
            type="button"
            variant="secondaryContained"
            text="cancelar"
            onClick={handleClose}
          />
        </DialogActions>
      </Dialog>
      <ModalProjectAdded
        avatar="Avatar do usuário"
        altAvatar="Avatar do usuário"
        altImage="Imagem do usuário"
        data={watch()}
        onClick={closePreview}
        open={previewOpen}
        onClose={closePreview}
        subtitle
      />
    </>
  );
}

export function convertToBase64(image: File, applyFunction: (e: unknown) => void) {
  let base64String = "";
  if (image) {
    const reader = new FileReader();
    reader.onloadend = () => {
      base64String = reader?.result as string;
      applyFunction(base64String);
    };
    reader.readAsDataURL(image);
  } else {
    applyFunction(base64String);
  }
}