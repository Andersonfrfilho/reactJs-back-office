import React from 'react';
import PropTypes from 'prop-types';
import { AreaModal } from './styles';
import InputIcon from '../InputIcon';

export default function ModalRegister() {
  return (
    <AreaModal>
      <InputIcon />
      <InputIcon />
      <InputIcon />
    </AreaModal>
  );
}
ModalRegister.propTypes = {};
ModalRegister.defaultProps = {};
