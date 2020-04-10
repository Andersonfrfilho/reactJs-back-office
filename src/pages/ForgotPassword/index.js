import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  AreaForm,
  AreaLogo,
  AreaInputs,
  AreaButton,
  AreaRegisterForgotedPassword,
  AreaLink,
  Link,
} from './styles';
import * as LoginActions from '../../store/modules/login/actions';
import Logo from '../../components/Logo';
import InputIcon from '../../components/InputIcon';
import Button from '../../components/ButtonIcon';
import Loader from '../../components/Loader';
import { icons } from '../../styles';

export default function Login() {
  const { loading, error, message } = useSelector(state => state.common);
  const { users } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const [userState, setUserState] = useState('');
  const [showFieldState, setShowFieldState] = useState(false);
  const [transitionVisible, setTransitionVisible] = useState(false);
  const inputUserRef = useRef('');
  const inputPasswordRef = useRef('');
  useEffect(() => {
    dispatch(LoginActions.requestUsersExist());
  }, []); //eslint-disable-line
  useEffect(() => {
    localStorage.setItem('Modelo@users', JSON.stringify(users));
  }, [users]); //eslint-disable-line

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  function functionForgetSenha() {
    setTransitionVisible(!transitionVisible);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(LoginActions.addToUserRequest(userState, users));
    setUserState('');
  }
  function verifyFunction(userParam) {}
  console.tron.log(showFieldState);
  return (
    <Container test={transitionVisible}>
      <AreaForm onSubmit={e => handleSubmit(e)}>
        <AreaLogo>
          <Logo title="Login" message="uhul" />
        </AreaLogo>

        <AreaInputs>
          <InputIcon
            inputRef={inputUserRef}
            placeholder="Digite seu usuário:"
            error={error}
            functionUpdatedValueRef={text => setUserState(text)}
            functionOnEndingChange={() => verifyFunction(userState)}
            icon={() => <icons.UserIcon size={18} />}
            typeInput="text"
          />
          <InputIcon
            inputRef={inputPasswordRef}
            placeholder="Digite sua senha:"
            error={error}
            functionUpdatedValueRef={text => setUserState(text)}
            functionOnEndingChange={() => verifyFunction(userState)}
            functionOnClick={() => setShowFieldState(!showFieldState)}
            disabled={false}
            typeInput={showFieldState ? 'text' : 'password'}
            button
            icon={() =>
              showFieldState ? (
                <icons.EyeOpenIcon size={18} />
              ) : (
                <icons.EyeClosedIcon size={18} />
              )
            }
          />
        </AreaInputs>
        <AreaButton>
          <Button loading={loading} />
        </AreaButton>
        <AreaRegisterForgotedPassword>
          <AreaLink position>
            <Button
              onClick={() => functionForgetSenha()}
              icon={() => <icons.UserForgotPassword size={18} />}
              title=""
            />
          </AreaLink>
          <AreaLink />
          <AreaLink position={false}>
            <Button
              onClick={() => functionForgetSenha()}
              icon={() => <icons.UserPlusIcon size={18} />}
              title=""
            />
          </AreaLink>
        </AreaRegisterForgotedPassword>
      </AreaForm>
    </Container>
  );
}
