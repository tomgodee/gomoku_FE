import React, { useState } from 'react';
// import { Typography } from '@material-ui/core';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import {
  LoginContainer as Container,
  LoginContainerGrid as ContainerGrid,
  LoginItemGrid as ItemGrid,
  LoginButton as Button,
  LoginCard as Card,
  LoginCardMedia as CardMedia,
  LoginTextField as TextField,
  LoginForm as Form,
} from './styles';
import { logo } from '../../assets';

interface FormInputs {
  username: string;
  password: string;
}

const BASIC_INPUT_VALIDATION = { required: true, maxLength: 2 };
const USERNAME = 'username';
const PASSWORD = 'password';

const Login = (props: any) => {
  const { handleSubmit, control, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      username: '',
      password: '',
    },
    criteriaMode: 'all',
    shouldFocusError: true,
  });

  const submitHandler = (data: FormInputs) => {
    console.log('aa', data);
  };

  return (
    <Container>
      <ContainerGrid container>
        <ItemGrid item xs={12} md={7}>
          <Card>
            <CardMedia
              image={logo}
            />
          </Card>
        </ItemGrid>
        <ItemGrid item xs={12} md={5}>
          <Form onSubmit={handleSubmit(submitHandler)} $flex $directionColumn>
            <Controller
              rules={BASIC_INPUT_VALIDATION}
              name={USERNAME}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <TextField
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value.trim())}
                    onBlur={field.onBlur}
                    inputRef={field.ref}
                    error={fieldState.invalid}
                    autoFocus
                    color="primary"
                    label="Username"
                    id={USERNAME}
                    name={USERNAME}
                    required
                    type="text"
                    variant="outlined"
                    helperText={fieldState.invalid ? 'Incorrect' : ''}
                  />
                );
              }}
            />
            <Controller
              rules={BASIC_INPUT_VALIDATION}
              name={PASSWORD}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <TextField
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value.trim())}
                    onBlur={field.onBlur}
                    inputRef={field.ref}
                    error={fieldState.invalid}
                    autoFocus
                    color="primary"
                    label="Password"
                    id={PASSWORD}
                    name={PASSWORD}
                    required
                    type="password"
                    variant="outlined"
                    helperText={fieldState.invalid ? 'Incorrect' : ''}
                  />
                );
              }}
            />
            <Button type="submit" variant="contained" color="primary">Log in</Button>
          </Form>
        </ItemGrid>
      </ContainerGrid>
    </Container>
  );
};

export default React.memo(Login);
