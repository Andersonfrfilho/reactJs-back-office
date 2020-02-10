import React from 'react';

import { AreaSvg, Svg, Image } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Logo() {
  return (
    <AreaSvg>
      <Svg>
        <Image href={logo} />
      </Svg>
    </AreaSvg>
  );
}
