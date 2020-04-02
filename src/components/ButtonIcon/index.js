import React from 'react';
import PropTypes from 'prop-types';
import { AreaButtonIcon, Button, IconUser, Title } from './styles';
import Loader from '../Loader';
import { colors } from '../../styles';

export default function ButtonIcon({
  iconPosition,
  functionOnClick,
  loading,
  loadingSize,
  loadingColor,
  title,
  disabled,
}) {
  function functionIconPosition(positionParam, titleParam) {
    if (positionParam === 'left') {
      return (
        <>
          <IconUser /> <Title>{titleParam}</Title>
        </>
      );
    }
    return (
      <>
        <Title>{titleParam}</Title>
        <IconUser />
      </>
    );
  }
  return (
    <AreaButtonIcon onClick={functionOnClick}>
      <Button disabled={disabled}>
        {loading ? <Loader /> : functionIconPosition(iconPosition, title)}
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
  title: 'Título do Botão',
  functionOnPress: () => {},
  loading: false,
  loadingSize: 'small',
  loadingColor: colors.light,
  disabled: true,
};
