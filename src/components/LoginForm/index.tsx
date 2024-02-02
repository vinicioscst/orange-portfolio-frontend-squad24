import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { LoginFormData, loginFormSchema } from "../../schemas/userSchemas";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const { loginUser } = useContext(UserContext);

  function onSubmit(formData: LoginFormData) {
    loginUser(formData);
  }

  return (
      <form
        className="flex flex-col gap-4 w-full"
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
        <Button
          variant="primaryContained"
          text="Entrar"
          type="submit"
          disabled={isSubmitting || !isValid}
        />
      </form>
  );
}
