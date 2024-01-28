import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../Input";
import Button from "../Button";

export default function LoginForm() {
  // const { displayToast } = useToast();

  const loginFormSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Preencha o e-mail" })
      .email({ message: "Email inválido" }),
    password: z.string().min(1, { message: "Senha obrigatória" }),
  });

  type LoginFormData = z.infer<typeof loginFormSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(formData: LoginFormData) {
    // displayToast({ message: '', severity: "info", title: "Carregando", variant: "filled", isLoading: true});
    console.log(formData);
  }

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[32.3125rem] py-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
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
      <Button variant="primaryContained" text="Entrar" type="submit" disabled={isSubmitting || !isValid}/>
    </form>
  );
}
