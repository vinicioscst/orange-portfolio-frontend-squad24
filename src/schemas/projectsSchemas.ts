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
      .string(),
    description: z
      .string(),
    images: z
      .string()
  });

export type ProjectFormData = z.infer<typeof projectFormSchema>;
