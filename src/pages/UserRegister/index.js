import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container } from './styles';
import * as HomeActions from '../../store/modules/home/actions';
import Button from '../../components/ButtonIcon';

function UserRegistration({ history }) {
  const dispatch = useDispatch();
  function onChangePageChildren() {
    dispatch(HomeActions.changePageChildren(history));
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
export default withRouter(UserRegistration);
