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

export default function Login() {
  const { loading } = useSelector(state => state.common);
  const { users } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const [userState, setUserState] = useState('');
  const [newUser, setNewUser] = useState(0);
  const inputUserRef = useRef('');
  useEffect(() => {
    dispatch(LoginActions.requestUsersExist());
  }, []); //eslint-disable-line
  useEffect(() => {
    localStorage.setItem('Modelo@users', JSON.stringify(users));
   }, [users]); //eslint-disable-line
  function functionUpdateValueInputUser(text) {
    setUserState(text);
  }

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.

  useEffect(() => {
    console.tron.log('verify value');
  },[userState])//eslint-disable-line
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(LoginActions.addToUserRequest(userState, users));
    setNewUser('');
  }
  function verifyFunction() {
    console.tron.log('uhul');
  }
  return (
    <Container>
      <AreaForm onSubmit={e => handleSubmit(e)}>
        <AreaLogo>
          <Logo />
        </AreaLogo>
        <AreaInputs>
          <InputIcon
            inputRef={inputUserRef}
            functionUpdatedValueRef={text => functionUpdateValueInputUser(text)}
            functionOnEndingChange={() => verifyFunction()}
          />
          <InputIcon />
        </AreaInputs>
        <AreaButton>
          <Button />
        </AreaButton>
        <AreaRegisterForgotedPassword>
          <AreaLink position>
            <Link href="google.com">esqueceu a senha</Link>
          </AreaLink>
          <AreaLink position={false}>
            <Link href="google.com">registre-se</Link>
          </AreaLink>
        </AreaRegisterForgotedPassword>
      </AreaForm>
    </Container>
  );
}
