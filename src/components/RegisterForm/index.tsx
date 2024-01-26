import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../Input";
import Button from "../Button";

export default function Register() {
  const registerFormSchema = z
    .object({
      email: z
        .string({ required_error: "Preencha o e-mail" })
        .email("Email inválido"),
      password: z
        .string({ required_error: "Senha obrigatória" })
        .min(8, "Senha tem que ser maior que 8 dígitos")
        .max(32, "Senha tem que ser menor que 32 dígitos"),
      confirmPassword: z
        .string({ required_error: "Senha obrigatória" })
        .min(8, "Senha tem que ser maior que 8 dígitos")
        .max(32, "Senha tem que ser menor que 32 dígitos"),
      name: z.string().min(1, { message: "Preencha o nome" }),
      surname: z.string().min(1, { message: "Preencha o sobrenome" }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "As senhas são diferentes",
      path: ["confirmPassword"],
    });

  type LoginFormData = z.infer<typeof registerFormSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  function onSubmit(formData: LoginFormData) {
    console.log(formData);
  }

  return (
    <form
      className="flex flex-col gap-2 w-96 p-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Input
        label={"Nome"}
        type="text"
        {...register("name")}
        error={errors.name}
      />
      <Input
        label={"Sobrenome"}
        type="text"
        {...register("surname")}
        error={errors.surname}
      />
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
      <Button variant="primaryContained" text="Cadastrar" type="submit" />
    </form>
  );
}
