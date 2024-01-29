import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { Box } from "@mui/material";
import { RegisterFormData, registerFormSchema } from "../../schemas/userSchemas";

export default function RegisterForm() {
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
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
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
      <Button
        variant="primaryContained"
        text="Cadastrar"
        type="submit"
        disabled={isSubmitting || !isValid}
      />
    </form>
  );
}
