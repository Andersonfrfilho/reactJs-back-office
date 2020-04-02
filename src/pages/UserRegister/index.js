import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import * as HomeActions from '../../store/modules/home/actions';
import Button from '../../components/ButtonIcon';

export default function UserRegistration() {
  const dispatch = useDispatch();
  function onChangePageChildren() {
    dispatch(HomeActions.changePageChildren());
  }
  return (
    <Container>
      <a>Tela1</a>
      <Button
        title="chamar sagas para ir para tela de listagem"
        functionOnClick={() => onChangePageChildren()}
      />
    </Container>
  );
}
