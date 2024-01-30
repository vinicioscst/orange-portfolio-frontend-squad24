import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { Box } from "@mui/material";
import {
  RegisterFormData,
  registerFormSchema,
} from "../../schemas/userSchemas";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";

export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  const { createUser } = useContext(UserContext);

  function onSubmit(formData: RegisterFormData) {
    createUser(formData);
  }

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[32.3125rem] p-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
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
