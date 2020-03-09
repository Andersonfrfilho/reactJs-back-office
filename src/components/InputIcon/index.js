import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AreaInputIcon,
  AreaInput,
  Input,
  InputFormMask,
  AreaIcon,
  IconUser,
} from './styles';
import { useEventListener, cpf } from '../../utils';

export default function InputIcon({
  button,
  functionOnClick,
  error,
  disabled,
  inputRef,
  type,
  functionUpdatedValueRef,
  functionOnEndingChange,
  placeholder,
  inputMask,
}) {
  useEventListener('focusout', functionOnEndingChange);
  return (
    <AreaInputIcon>
      <AreaInput error={error}>
        {type !== 'mask' ? (
          <Input
            ref={inputRef}
            placeholder={placeholder}
            onChange={text => functionUpdatedValueRef(text.target.value)}
          />
        ) : (
          <InputFormMask
            ref={inputRef}
            mask={inputMask}
            placeholder={placeholder}
            onChange={text => functionUpdatedValueRef(text.target.value)}
          />
        )}
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
  type: PropTypes.string,
  disabled: PropTypes.bool,
  inputRef: PropTypes.func,
  functionOnEndingChange: PropTypes.func,
  inputMask: PropTypes.string,
  placeholder: PropTypes.string,
};
InputIcon.defaultProps = {
  button: false,
  functionOnClick: () => {},
  functionUpdatedValueRef: () => {},
  error: false,
  type: 'common',
  disabled: true,
  inputRef: () => {},
  functionOnEndingChange: () => {},
  inputMask: '99/99/99',
  placeholder: 'palceholder input:',
};
