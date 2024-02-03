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
import ForwardedFileInput from "../FileInput";
import { useToast } from "../../context/ToastContext";
import CheckboxPassword from "../CheckboxPassword";

export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    getValues,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });
  watch();
  const { displayToast } = useToast();
  const { handleUser } = useContext(UserContext);

  function onSubmit(formData: RegisterFormData) {
    if (formData.image.length !== 0) {
      if (!formData.image[0].type.startsWith("image/")) {
        displayToast({
          message: "",
          severity: "error",
          title: "Tipo de arquivo não suportado",
          variant: "filled",
          isLoading: false,
        });
        return
      }
      handleUser(formData);
    } else {
      handleUser(formData);
    }
  }

  return (
    <form
      className="flex flex-col gap-4 w-full"
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
      <ForwardedFileInput {...register("image")} />
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
      {getValues('password') ? (
        <CheckboxPassword
          password={getValues('password')}
          confirmPassword={getValues('confirmPassword')}
        />
      ) : null}
      <Button
        variant="primaryContained"
        text="Cadastrar"
        type="submit"
        disabled={isSubmitting || !isValid}
      />
    </form>
  );
}
