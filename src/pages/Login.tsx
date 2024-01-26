import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import authApi from "../api/auth";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

type LoginData = yup.InferType<typeof schema>;

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    authApi.login(data);
  };

  return (
    <Box
      as="form"
      py="20"
      maxW="md"
      mx="auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors?.username}>
        <Input placeholder="username" {...register("username")} />
      </FormControl>
      <FormControl isInvalid={!!errors?.password}>
        <Input
          placeholder="password"
          type="password"
          {...register("password")}
        />
      </FormControl>
      <Button type="submit">Login</Button>
    </Box>
  );
};
export default Login;
