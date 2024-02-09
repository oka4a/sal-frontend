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
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type LoginData = yup.InferType<typeof schema>;

const RegisterForm = () => {
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
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="6">
      <HStack>
        <FormControl isInvalid={!!errors?.first_name}>
          <Input placeholder="First Name" {...register("first_name")} />
        </FormControl>
        <FormControl isInvalid={!!errors?.last_name}>
          <Input placeholder="Last Name" {...register("last_name")} />
        </FormControl>
      </HStack>
      <FormControl isInvalid={!!errors?.username}>
        <Input placeholder="Username" {...register("username")} />
      </FormControl>
      <FormControl isInvalid={!!errors?.email}>
        <Input placeholder="Email" type="email" {...register("email")} />
      </FormControl>
      <FormControl isInvalid={!!errors?.password}>
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
      </FormControl>
      <Button type="submit" isLoading={isPending}>
        Sign up
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
        Sign up With GitHub
      </Button>
    </VStack>
  );
};
export default RegisterForm;
