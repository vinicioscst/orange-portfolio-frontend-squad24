import { z } from "zod";

export const loginFormSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Preencha o e-mail" })
      .email({ message: "Email inválido" }),
    password: z.string().min(1, { message: "Senha obrigatória" }),
  });

export type LoginFormData = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z
    .object({
      email: z
        .string()
        .min(1, {message: "Preencha o e-mail"})
        .email({message: "Email inválido"}),
      password: z
        .string()
        .min(1, {message: "Senha obrigatória"})
        .min(8, {message: "Senha tem que ser maior que 8 dígitos"})
        .max(32, {message: "Senha tem que ser menor que 32 dígitos"}),
      confirmPassword: z
        .string()
        .min(1, {message: "Senha obrigatória"})
        .min(8, {message: "Senha tem que ser maior que 8 dígitos"})
        .max(32, {message: "Senha tem que ser menor que 32 dígitos"}),
      name: z.string().min(1, { message: "Preencha o nome" }),
      surname: z.string().min(1, { message: "Preencha o sobrenome" }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "As senhas são diferentes",
      path: ["confirmPassword"],
    });

export type RegisterFormData = z.infer<typeof registerFormSchema>;