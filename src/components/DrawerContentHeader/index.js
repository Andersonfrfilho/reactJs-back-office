import React from 'react';
import PropTypes from 'prop-types';
import { AreaHeader, AreaTitle, Title } from './styles';
import avatar from '../../assets/images/avatar.png';

export default function DrawerContentHeader({ name }) {
  return (
    <AreaHeader>
      <AreaTitle>
        <Title>{name}</Title>
      </AreaTitle>
    </AreaHeader>
  );
}
DrawerContentHeader.propTypes = {
  name: PropTypes.string,
};
DrawerContentHeader.defaultProps = {
  name: 'Name',
};
