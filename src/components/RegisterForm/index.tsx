import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../Input";
import Button from "../Button";
import { Box } from "@mui/material";

export default function RegisterForm() {
  const registerFormSchema = z
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

  type RegisterFormData = z.infer<typeof registerFormSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  function onSubmit(formData: RegisterFormData) {
    console.log(formData);
  }

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[32.3125rem] p-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    ><Box sx={{display: "flex", flexWrap: "wrap", gap: "1rem"}}>
      <Input
        label={"Nome"}
        type="text"
        flexBasis="11rem"
        {...register("name")}
        error={errors.name}
      />
      <Input
        label={"Sobrenome"}
        type="text"
        flexBasis="11rem"
        {...register("surname")}
        error={errors.surname}
      />
      </Box>
      <Input
        label={"Email"}
        type="email"
        {...register("email")}
        error={errors.email}
      />
      <Input
        label={"Password"}
        type="password"
        {...register("password")}
        error={errors.password}
      />
      <Input
        label={"Confirm Password"}
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <Button variant="primaryContained" text="Cadastrar" type="submit" disabled={isSubmitting || !isValid}/>
    </form>
  );
}
