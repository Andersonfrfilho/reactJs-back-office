import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  AreaForm,
  AreaLogo,
  AreaInputs,
  AreaButton,
} from './styles';
import * as LoginActions from '../../store/modules/login/actions';
import Logo from '../../components/Logo';
import InputIcon from '../../components/InputIcon';
import Button from '../../components/ButtonIcon';

export default function Login() {
  const { loading } = useSelector(state => state.common);
  const { users } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState('');
  useEffect(() => {
    dispatch(LoginActions.requestUsersExist());
  }, []); //eslint-disable-line
  useEffect(() => {
    localStorage.setItem('Modelo@users', JSON.stringify(users));
   }, [users]); //eslint-disable-line
  function handleInputChange(text) {
    setNewUser(text.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(LoginActions.addToUserRequest(newUser, users));
    setNewUser('');
  }
  return (
    <Container>
      <AreaForm>
        <AreaLogo>
          <Logo />
        </AreaLogo>
        <AreaInputs>
          <InputIcon />
          <InputIcon />
        </AreaInputs>
        <AreaButton>
          <Button />
        </AreaButton>
      </AreaForm>
    </Container>
  );
}
