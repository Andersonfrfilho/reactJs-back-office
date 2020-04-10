import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  AreaForm,
  AreaLogo,
  AreaInputs,
  AreaButton,
  AreaRegisterForgotedPassword,
  AreaLink,
} from './styles';
import { verifyEmail, verifyName, verifyPhone } from '../../utils';
import * as UsersActions from '../../store/modules/users/actions';
import Logo from '../../components/Logo';
import InputIcon from '../../components/InputIcon';
import Button from '../../components/ButtonIcon';
import Loader from '../../components/Loader';
import { icons } from '../../styles';

export default function Login() {
  const { loading, error, message } = useSelector(state => state.common);
  const dispatch = useDispatch();
  const [nameState, setNameState] = useState('');
  const [phoneState, setPhoneState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [confirmPasswordState, setConfirmPasswordState] = useState('');
  const [showFieldState, setShowFieldState] = useState(false);
  const [showFieldStateTwo, setShowFieldStateTwo] = useState(false);
  const [transitionVisible, setTransitionVisible] = useState(false);
  const [errorName, setErrorName] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);
  const [errorMail, setErrorMail] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

  useEffect(() => {
    dispatch(UsersActions.requestUserExist());
  }, []); //eslint-disable-line
  useEffect(() => {
    if (!(passwordState === confirmPasswordState)) {
      setErrorConfirmPassword(true);
    }
    setErrorConfirmPassword(false);
  }, [confirmPasswordState]); //eslint-disable-line
  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  function functionForgetSenha() {
    setTransitionVisible(!transitionVisible);
  }
  function requestRegisterUser(
    nameParam,
    phoneParam,
    emailParam,
    passwordParam,
    confirmPasswordParam
  ) {
    dispatch(
      UsersActions.requestRegisterUser(
        nameParam,
        phoneParam,
        emailParam,
        passwordParam,
        confirmPasswordParam
      )
    );
    setNameState('');
    setPhoneState('');
    setEmailState('');
    setPasswordState('');
    setConfirmPasswordState('');
  }
  function verifyNameFunction(value) {
    setErrorName(verifyName(value));
  }
  function verifyMailFunction(value) {
    setErrorMail(verifyEmail(value));
  }
  function verifyPhoneFunction(value) {
    setErrorPhone(verifyPhone(value));
  }
  return (
    <Container test={transitionVisible}>
      <AreaForm>
        <AreaLogo>
          <Logo
            title="Cadastro"
            message={message}
            error={error}
            image={false}
          />
        </AreaLogo>

        <AreaInputs>
          <InputIcon
            placeholder="Digite seu nome:"
            error={errorName}
            value={nameState}
            functionOnChange={name => setNameState(name)}
            functionOnEndingChange={() => verifyName(nameState)}
            icon={() => <icons.UserIcon size={18} />}
            typeInput="text"
          />
          <InputIcon
            placeholder="Digite seu e-mail:"
            error={errorMail}
            value={emailState}
            functionOnChange={email => setEmailState(email)}
            functionOnEndingChange={() => verifyMailFunction(emailState)}
            icon={() => <icons.EmailIcon size={18} />}
            typeInput="email"
          />
          <InputIcon
            type="mask"
            inputMask="+55_(99)_99999-9999"
            placeholder="Digite seu telefone:"
            error={errorPhone}
            value={phoneState}
            functionOnChange={phone => setPhoneState(phone)}
            functionOnEndingChange={() => verifyPhoneFunction(phoneState)}
            icon={() => <icons.PhoneIcon size={18} />}
            typeInput="phone"
          />
          <InputIcon
            placeholder="Digite sua senha:"
            functionOnChange={password => setPasswordState(password)}
            value={passwordState}
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
          <InputIcon
            placeholder="Confirme sua senha:"
            functionOnChange={password => setConfirmPasswordState(password)}
            value={confirmPasswordState}
            functionOnClick={() => setShowFieldStateTwo(!showFieldStateTwo)}
            disabled={false}
            typeInput={showFieldStateTwo ? 'text' : 'password'}
            button
            icon={() =>
              showFieldStateTwo ? (
                <icons.EyeOpenIcon size={18} />
              ) : (
                <icons.EyeClosedIcon size={18} />
              )
            }
          />
        </AreaInputs>
        <AreaButton>
          <Button
            loading={loading}
            title="Entrar"
            disabled={
              errorName === null ||
              errorName ||
              errorPhone === null ||
              errorPhone ||
              errorMail === null ||
              errorMail ||
              errorConfirmPassword === null ||
              errorConfirmPassword ||
              loading
            }
            functionOnClick={() =>
              requestRegisterUser(
                nameState.toLowerCase(),
                phoneState,
                emailState.toLowerCase(),
                passwordState,
                confirmPasswordState
              )
            }
          />
        </AreaButton>
        <AreaRegisterForgotedPassword>
          <AreaLink position>
            <Button
              disabled={loading}
              onClick={() => functionForgetSenha()}
              icon={() => <icons.BackIcon size={18} />}
              title=""
            />
          </AreaLink>
          <AreaLink />
          <AreaLink />
        </AreaRegisterForgotedPassword>
      </AreaForm>
    </Container>
  );
}
