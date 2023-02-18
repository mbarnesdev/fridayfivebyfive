import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  ButtonGroup,
  Container,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
});
type FormValues = z.infer<typeof formSchema>;

const defaultValues: FormValues = {
  username: "",
};

const Form: React.FC = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = ({ username }: FormValues) =>
    navigate(`/chart/${username}`);

  return (
    <Container
      height="100vh"
      className="flex flex-col justify-center"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={6}>
        <FormControl id="username" isInvalid={!!errors.username}>
          <FormLabel>Username</FormLabel>
          <Input placeholder="Username" type="text" {...register("username")} />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>

        <ButtonGroup>
          <Button
            type="submit"
            isLoading={isSubmitting}
            colorScheme="blue"
            w="full"
          >
            Submit
          </Button>
        </ButtonGroup>
      </Stack>
    </Container>
  );
};

export default Form;
