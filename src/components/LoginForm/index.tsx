import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { LoginFormData, loginFormSchema } from "../../schemas/userSchemas";

export default function LoginForm() {
  // const { displayToast } = useToast();

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
      className="flex flex-col gap-2 w-full max-w-[32.3125rem] p-4"
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
