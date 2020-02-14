import React from 'react';
import {
  AreaHeader,
  AreaItems,
  DrawerButton,
  DrawerIcon,
  DrawerOff,
} from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <AreaHeader>
      <AreaItems color="#45caff" positionLine="flex-start">
        <DrawerButton>
          <DrawerIcon />
        </DrawerButton>
      </AreaItems>
      <AreaItems color="#ccaaff" positionLine="center">
        <p>Logo</p>
      </AreaItems>
      <AreaItems color="#eeddcc" positionLine="flex-end">
        <DrawerButton>
          <DrawerOff />
        </DrawerButton>
      </AreaItems>
    </AreaHeader>
  );
}
