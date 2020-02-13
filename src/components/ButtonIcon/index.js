import React from 'react';
import PropTypes from 'prop-types';
import { AreaButtonIcon, Button, IconUser } from './styles';
import { colors } from '../../styles';

export default function ButtonIcon({
  iconPosition,
  functionOnClick,
  loading,
  loadingSize,
  loadingColor,
  disabled,
}) {
  return (
    <AreaButtonIcon>
      <Button>
        {iconPosition === 'left' ? <IconUser /> : null}
        Click Me!
        {iconPosition === 'rigth' ? <IconUser /> : null}
      </Button>
    </AreaButtonIcon>
  );
}
ButtonIcon.propTypes = {
  iconPosition: PropTypes.string,
  title: PropTypes.string,
  functionOnClick: PropTypes.func,
  loading: PropTypes.bool,
  loadingSize: PropTypes.string,
  loadingColor: PropTypes.string,
  disabled: PropTypes.bool,
};
ButtonIcon.defaultProps = {
  iconPosition: 'rigth',
  title: 'Título da Página',
  functionOnPress: () => {},
  loading: false,
  loadingSize: 'small',
  loadingColor: colors.light,
  disabled: true,
};
