import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../Input";
import Button from "../Button";
import { useToast } from "../../context/ToastContext";

export default function Login() {
  const { displayToast } = useToast();

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

  function delay(ms: number) {
    return new Promise(resolve => {
      setTimeout( () => {
        displayToast({ message: '', severity: "success", title: "Login", variant: "filled" });
        return resolve
      }, ms)
    })
  }

  async function onSubmit(formData: LoginFormData) {
    displayToast({ message: '', severity: "info", title: "Carregando", variant: "filled", isLoading: true});
    await delay(2000)
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
      <Button variant="primaryContained" text="Entrar" type="submit" />
    </form>
  );
}
