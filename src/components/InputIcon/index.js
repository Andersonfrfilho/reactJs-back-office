import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaInputIcon,
  AreaInput,
  Input,
  InputFormMask,
  AreaIcon,
  IconDefault,
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
  icon,
  typeInput,
}) {
  return (
    <AreaInputIcon>
      <AreaInput error={error}>
        {type !== 'mask' ? (
          <Input
            ref={inputRef}
            placeholder={placeholder}
            onChange={text => functionUpdatedValueRef(text.target.value)}
            onBlur={functionOnEndingChange}
            type={typeInput}
          />
        ) : (
          <InputFormMask
            ref={inputRef}
            mask={inputMask}
            placeholder={placeholder}
            onChange={text => functionUpdatedValueRef(text.target.value)}
            onBlur={functionOnEndingChange}
            type={typeInput}
          />
        )}
      </AreaInput>
      <AreaIcon
        type="button"
        button={button}
        onClick={functionOnClick}
        error={error}
        disabled={disabled}
      >
        {icon()}
      </AreaIcon>
    </AreaInputIcon>
  );
}
InputIcon.propTypes = {
  iconName: PropTypes.string,
  typeInput: PropTypes.string,
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
  icon: PropTypes.func,
};
InputIcon.defaultProps = {
  iconName: 'user',
  typeInput: 'button',
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
  icon: () => <IconDefault />,
};
