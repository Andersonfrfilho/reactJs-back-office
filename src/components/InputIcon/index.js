import React from 'react';
import PropTypes from 'prop-types';
import { AreaInputIcon, AreaInput, Input, AreaIcon, IconUser } from './styles';

export default function InputIcon({
  button,
  functionOnClick,
  error,
  disabled,
}) {
  return (
    <AreaInputIcon>
      <AreaInput error={error}>
        <Input />
      </AreaInput>
      <AreaIcon
        button={button}
        onClick={functionOnClick}
        error={error}
        disabled={disabled}
      >
        <IconUser />
      </AreaIcon>
    </AreaInputIcon>
  );
}
InputIcon.propTypes = {
  button: PropTypes.bool,
  functionOnClick: PropTypes.func,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};
InputIcon.defaultProps = {
  button: false,
  functionOnClick: () => {},
  error: false,
  disabled: true,
};
