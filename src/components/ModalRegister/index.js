import React from 'react';
import PropTypes from 'prop-types';
import { AreaModal } from './styles';
import InputIcon from '../InputIcon';
import ButtonIcon from '../ButtonIcon';

export default function ModalRegister({ functionOnClick }) {
  return (
    <AreaModal>
      <ButtonIcon functionOnClick={functionOnClick} disabled={false} />
      <InputIcon />
      <InputIcon />
      <InputIcon />
      <InputIcon />
      <InputIcon />
      <InputIcon />
      <InputIcon />
      <InputIcon />
      <InputIcon />
      <InputIcon />
    </AreaModal>
  );
}
ModalRegister.propTypes = {
  functionOnClick: PropTypes.func,
};
ModalRegister.defaultProps = {
  functionOnClick: () => {},
};
