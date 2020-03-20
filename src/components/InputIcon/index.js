import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AreaInputIcon,
  AreaInput,
  Input,
  InputFormMask,
  AreaIcon,
  IconUser,
  IconOpenEyes,
  IconClosedEyes,
} from './styles';

export default function InputIcon({
  iconName,
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
  function choseIcons(nameParam) {
    switch (nameParam) {
      case 'user':
        return <IconUser />;
      case 'passwordOpen':
        return <IconOpenEyes />;
      case 'passwordClosed':
        return <IconClosedEyes />;
      default:
        return <IconUser />;
    }
  }
  return (
    <AreaInputIcon>
      <AreaInput error={error}>
        {type !== 'mask' ? (
          <Input
            ref={inputRef}
            placeholder={placeholder}
            onChange={text => functionUpdatedValueRef(text.target.value)}
            onBlur={functionOnEndingChange}
          />
        ) : (
          <InputFormMask
            ref={inputRef}
            mask={inputMask}
            placeholder={placeholder}
            onChange={text => functionUpdatedValueRef(text.target.value)}
            onBlur={functionOnEndingChange}
          />
        )}
      </AreaInput>
      <AreaIcon
        button={button}
        onClick={functionOnClick}
        error={error}
        disabled={disabled}
      >
        {choseIcons(iconName)}
      </AreaIcon>
    </AreaInputIcon>
  );
}
InputIcon.propTypes = {
  iconName: PropTypes.string,
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
  iconName: 'user',
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
