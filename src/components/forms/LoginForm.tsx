import {
  Button,
  Divider,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import useLogin from "../../hooks/useLogin";
import GitHubIcon from "../icons/GitHubIcon";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

type LoginData = yup.InferType<typeof schema>;

const LoginForm = () => {
  const { mutate: login, isPending } = useLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    login(data);
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="7" minH="408px">
      <FormControl isInvalid={!!errors?.username}>
        <Input placeholder="Username" {...register("username")} />
      </FormControl>
      <FormControl isInvalid={!!errors?.password}>
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
      </FormControl>
      <Button type="submit" isLoading={isPending}>
        Sign in
      </Button>
      <HStack w="60%">
        <Divider borderColor="#A1A2A3" />
        <Text lineHeight="1" color="#A1A2A3">
          Or
        </Text>
        <Divider borderColor="#A1A2A3" />
      </HStack>
      <Button
        leftIcon={<GitHubIcon fontSize="2xl" />}
        iconSpacing={3}
        bg="black"
        _hover={{ opacity: 0.85 }}
      >
        Sign in With GitHub
      </Button>
    </VStack>
  );
};
export default LoginForm;
