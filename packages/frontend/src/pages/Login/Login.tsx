import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { ROOMLIST_PATH } from '../../config/paths';
import { ACCESS_TOKEN } from '../../config/localStorage';
import { LOADING } from '../../config/status';
import { selectUserState, login } from '../../reducers/user';
import {
  LoginContainer as Container,
  LoginContainerGrid as ContainerGrid,
  LoginItemGrid as ItemGrid,
  LoginButton as Button,
  LoginTextField as TextField,
  LoginForm as Form,
  LoadingOverlay,
  LoadingIcon,
} from './styles';
import { LoginForm } from '../../types/user';

const BASIC_INPUT_VALIDATION = { required: true, maxLength: 256 };
const USERNAME = 'username';
const PASSWORD = 'password';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUserState);

  const { handleSubmit, control, formState: { errors } } = useForm<LoginForm>({
    defaultValues: {
      username: '',
      password: '',
    },
    criteriaMode: 'all',
    shouldFocusError: true,
  });

  const submitHandler = (data: LoginForm) => {
    dispatch(login(data));
  };

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      history.push(ROOMLIST_PATH);
    }
  }, [user]);

  return (
    <Container>
      {/* <LoadingOverlay open={user.status === LOADING}>
        <LoadingIcon />
      </LoadingOverlay> */}

      <ContainerGrid container>
        <ItemGrid item xs={12}>
          <Form onSubmit={handleSubmit(submitHandler)} $flex $directionColumn>
            <Controller
              rules={BASIC_INPUT_VALIDATION}
              name={USERNAME}
              control={control}
              render={({ field, fieldState }) => {
                const error = fieldState.invalid;
                return (
                  <TextField
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value.trim())}
                    onBlur={field.onBlur}
                    inputRef={field.ref}
                    error={error}
                    autoFocus
                    color="primary"
                    label="Username"
                    id={USERNAME}
                    name={USERNAME}
                    required
                    type="text"
                    variant="outlined"
                    helperText={error ? 'Incorrect input' : ''}
                  />
                );
              }}
            />
            <Controller
              rules={BASIC_INPUT_VALIDATION}
              name={PASSWORD}
              control={control}
              render={({ field, fieldState }) => {
                const error = fieldState.invalid;
                return (
                  <TextField
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value.trim())}
                    onBlur={field.onBlur}
                    inputRef={field.ref}
                    error={error}
                    color="primary"
                    label="Password"
                    id={PASSWORD}
                    name={PASSWORD}
                    required
                    type="password"
                    variant="outlined"
                    helperText={error ? 'Incorrect input' : ''}
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
