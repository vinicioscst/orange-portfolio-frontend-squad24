import { z } from "zod";

export const projectFormSchema = z.object({
    title: z
      .string()
      .min(1, { message: "Preencha o título" })
      .max(100, { message: "Não pode ultrapassar 100 carácteres"}),
    tags: z
      .array(z.string())
      .min(1, { message: "No mínimo 1 tag necessária" })
      .max(3, { message: "No máximo 3 tags selecionadas"}),
    link: z
      .string().optional(),
    description: z
      .string(),
    images: z
      .string().optional()
  });

export type projectFormData = z.infer<typeof projectFormSchema>;

export type ModalProjectData = {
  title: string;
  tags: string[] | undefined;
  description: string;
  images: string | File;
  link?: string | undefined;
}

  export const registerProjectSchema = z.object({
    title: z
      .string()
      .min(1, { message: "Preencha o título" })
      .max(100, { message: "Não pode ultrapassar 100 carácteres"}),
    tags: z
      .string()
      .min(1, { message: "No mínimo 1 tag necessária" })
      .max(3, { message: "No máximo 3 tags selecionadas"}),
    link: z
      .string().optional(),
    description: z
      .string().optional(),
    image: z
      .any().optional(),
    createddate: z.string()
  });

  export type registerProject = z.infer<typeof registerProjectSchema>;