import { Box, Dialog, DialogActions, DialogTitle, TextField, useMediaQuery, useTheme } from "@mui/material";
// import DragAndDropImage from "../DragAndDropImage";
import Input from "../Input"
import Button from "../Button";
import { useState } from "react";
import ChipInput from "../ChipInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectFormData, projectFormSchema } from "../../schemas/projectsSchemas";

export default function AddProjectModal() {

    const [open, setOpen] = useState(true);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { handleSubmit, register, formState: { errors } } = useForm<projectFormData>({
        resolver: zodResolver(projectFormSchema)
    }) 

    function handleClose() {
        setOpen(false);
    }

    function submitData(data: projectFormData) {
        console.log(data)
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth sx={{maxWidth: '890'}} fullScreen={fullScreen}>
            <DialogTitle sx={{padding: "1.5rem 2rem"}}>Adicionar Projeto</DialogTitle>
            <form className="flex gap-8 px-8 pb-8" noValidate id="form-modal" onSubmit={handleSubmit(submitData)}>
                <div className="w-full">
                {/*Descomentar drag and drop quando converter para link, o mesmo no project Schema */}
                {/* <DragAndDropImage/>  */}
                </div>
                <Box sx={{display: "flex", flexDirection: "column", gap:"1rem", justifyContent: "stretch", width: '100%',  }}>
                    <Input label="Título" type="text" {...register("title")} error={errors.title}/>
                    <ChipInput {...register("tags")}/>
                    <Input label="Link" type="text" {...register("link")} error={errors.link}/>
                    <TextField
                        sx={{width: "100%"}}
                        label="Descrição"
                        multiline={true}
                        minRows={5}
                        maxRows={10}
                        {...register("description")} 
                        error={!!errors.title}
                    />
                </Box>
            </form>
            <DialogActions sx={{display: "flex", justifyContent: "flex-start", paddingX: "2rem", paddingBottom: "1.5rem", gap: "0.5rem"}}>
                <Button type="submit" variant="primaryContained" text="salvar" form="form-modal"/>
                <Button type="button" variant="secondaryContained" text="cancelar" onClick={handleClose}/>
            </DialogActions>
        </Dialog>
    );
}
