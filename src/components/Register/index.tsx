import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../Input";

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
      name: z.string({ required_error: "Preencha o nome" }),
      lastName: z.string({ required_error: "Preencha o sobrenome" }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "As senhas são diferentes",
      path: ["confirmPassword"],
    });

  type LoginFormData = z.infer<typeof registerFormSchema>;

  const { handleSubmit, control } = useForm<LoginFormData>({
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
    >
      <Input<LoginFormData>
        name={"name"}
        control={control}
        label={"Nome"}
        type="text"
      />
      <Input<LoginFormData>
        name={"lastName"}
        control={control}
        label={"Sobrenome"}
        type="text"
      />
      <Input<LoginFormData>
        name={"email"}
        control={control}
        label={"Email"}
        type="email"
      />
      <Input<LoginFormData>
        name={"password"}
        control={control}
        label={"Password"}
        type="password"
      />
      <Input<LoginFormData>
        name={"confirmPassword"}
        control={control}
        label={"Confirm Password"}
        type="password"
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
