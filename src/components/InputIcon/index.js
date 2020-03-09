import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AreaInputIcon, AreaInput, Input, AreaIcon, IconUser } from './styles';
import { useEventListener } from '../../utils';

export default function InputIcon({
  button,
  functionOnClick,
  error,
  disabled,
  inputRef,
  functionUpdatedValueRef,
  functionOnEndingChange,
}) {
  useEventListener('focusout', functionOnEndingChange);
  return (
    <AreaInputIcon>
      <AreaInput error={error}>
        <Input
          ref={inputRef}
          onChange={() => functionUpdatedValueRef(inputRef.current.value)}
        />
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
  functionUpdatedValueRef: PropTypes.func,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  inputRef: PropTypes.func,
  functionOnEndingChange: PropTypes.func,
};
InputIcon.defaultProps = {
  button: false,
  functionOnClick: () => {},
  functionUpdatedValueRef: () => {},
  error: false,
  disabled: true,
  inputRef: () => {},
  functionOnEndingChange: () => {},
};
