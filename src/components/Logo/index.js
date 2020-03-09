import React from 'react';
import PropTypes from 'prop-types';
import { AreaSvg, AreaTitle, Title, Svg, Image } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Logo({ error, message }) {
  return (
    <AreaSvg>
      <Svg>
        <Image href={logo} />
      </Svg>
      <AreaTitle>
        <Title error={error}>{message}</Title>
      </AreaTitle>
    </AreaSvg>
  );
}
Logo.propTypes = {
  error: PropTypes.bool,
  message: PropTypes.string,
};
Logo.defaultProps = {
  error: false,
  message: '',
};
