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
      .min(1, { message: "Preencha o e-mail" })
      .email({ message: "Email inválido" }),
    password: z
      .string()
      .min(1, { message: "Senha obrigatória" })
      .min(8, { message: "Senha obrigatória" })
      .max(16, { message: "Senha obrigatória" })
      .refine(value => {
        const hasNumber = /[0-9]/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        return hasNumber && hasSpecialChar && hasUppercase && hasLowercase;
      }, {
        message: "A senha deve conter pelo menos um número, um caractere especial, uma letra maiúscula e uma letra minúscula",
        path: ["password"]
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "As senhas devem ser iguais" })
      .min(8, { message: "As senhas devem ser iguais" })
      .max(16, { message: "As senhas devem ser iguais" }),
    name: z.string().min(1, { message: "Preencha o nome" }),
    surname: z.string().min(1, { message: "Preencha o sobrenome" }),
    image: z.any().optional(),
    isGoogleAccount: z.boolean().optional(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerFormSchema>;