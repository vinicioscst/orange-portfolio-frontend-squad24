import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../Input";
import Button from "../Button";

export default function Login() {
  const loginFormSchema = z.object({
    email: z
      .string({ required_error: "Preencha o e-mail" })
      .email("Email inválido"),
    password: z
      .string({ required_error: "Senha obrigatória" })
      .min(8, "Senha tem que ser maior que 8 dígitos")
      .max(32, "Senha tem que ser menor que 32 dígitos"),
  });

  type LoginFormData = z.infer<typeof loginFormSchema>;

  const { handleSubmit, control } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
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
      <Button variant="primaryContained" text="Entrar" onClick={() => {}} />
    </form>
  );
}
