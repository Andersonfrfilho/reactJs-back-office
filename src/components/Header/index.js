import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaHeader,
  AreaItems,
  DrawerButton,
  DrawerIcon,
  DrawerOff,
  AreaSvg,
  Image,
} from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header({ functionOnClick }) {
  return (
    <AreaHeader>
      <AreaItems color="#45caff" positionLine="flex-start">
        <DrawerButton onClick={functionOnClick}>
          <DrawerIcon />
        </DrawerButton>
      </AreaItems>
      <AreaItems color="#ccaaff" positionLine="center">
        <AreaSvg>
          <Image href={logo} />
        </AreaSvg>
      </AreaItems>
      <AreaItems color="#eeddcc" positionLine="flex-end">
        <DrawerButton>
          <DrawerOff />
        </DrawerButton>
      </AreaItems>
    </AreaHeader>
  );
}
Header.propTypes = {
  functionOnClick: PropTypes.func,
};
Header.defaultProps = {
  functionOnClick: () => {},
};
