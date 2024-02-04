import { Box, Dialog, DialogActions, DialogTitle, TextField, useMediaQuery, useTheme } from "@mui/material";
import DragAndDropImage from "../DragAndDropImage";
import Input from "../Input"
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import ChipInput from "../ChipInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectFormData, projectFormSchema } from "../../schemas/projectsSchemas";
import { UserContext } from "../../context/UserContext/UserContext";

interface AddProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AddProjectModal({ isOpen, onClose}: AddProjectModalProps) {
    const [projectImage, setProjectImage] = useState<File | null>()
    const [open, setOpen] = useState(isOpen);

    useEffect( () => {
        setOpen(isOpen);
        reset()
    }, [isOpen])

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const { handleSubmit, register, reset, formState: { errors } } = useForm<projectFormData>({
        resolver: zodResolver(projectFormSchema)
    })

    const {handleProject} = useContext(UserContext)

    function handleClose() {
        setOpen(false);
        if (onClose) {
            onClose();
        }
    }

    function submitData(data: projectFormData) {
        const body = {
            title: data.title,
            tags: data.tags,
            link: data.link || undefined,
            description: data.description || undefined,
            image: projectImage || null
        }
        handleProject(body)
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth={smallScreen ? 'sm' : 'md'} fullWidth sx={{maxWidth: smallScreen ? '100%' : '890'}}>
            <DialogTitle sx={{padding: "1.5rem 2rem"}}>Adicionar Projeto</DialogTitle>
            <form className={smallScreen ? "flex flex-col-reverse gap-8 px-8 pb-8" : "flex gap-8 px-8 pb-8"} noValidate id="form-modal" onSubmit={handleSubmit(submitData)}>
                <div className="w-full">
                <DragAndDropImage setProjectImage={setProjectImage}/> 
                </div>
                <Box sx={{display: "flex", flexDirection: "column", gap:"1rem", justifyContent: "stretch", width: '100%',  }}>
                    <Input label="Título" type="text" {...register("title")} error={errors.title}/>
                    <ChipInput {...register("tags")} error={!!errors.tags}/>
                    <Input label="Link" type="text" {...register("link")} error={errors.link}/>
                    <TextField
                        sx={{width: "100%"}}
                        label="Descrição"
                        multiline={true}
                        minRows={5}
                        maxRows={10}
                        {...register("description")} 
                        error={!!errors.description}
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
