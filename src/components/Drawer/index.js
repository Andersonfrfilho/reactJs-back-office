import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { element } from 'prop-types';
import {
  AreaDrawer,
  AreaHeader,
  AreaPhoto,
  AreaInfo,
  InfoTitle,
  InfoText,
  Svg,
  Image,
  AreaBody,
  AreaOption,
  AreaIcon,
  Icon,
  AreaTitle,
  Title,
} from './styles';
import logo from '../../assets/images/logo.svg';

export default function Drawer({ openDrawer, arrayOptions }) {
  return (
    <AreaDrawer>
      <AreaHeader>
        <AreaPhoto>
          <Svg>
            <Image href={logo} />
          </Svg>
        </AreaPhoto>
        {openDrawer ? (
          <AreaInfo>
            <InfoTitle>kaljsdfha</InfoTitle>
            <InfoText>kaljsdfasdf</InfoText>
          </AreaInfo>
        ) : null}
      </AreaHeader>
      <AreaBody>
        {arrayOptions.map(element => (
          <AreaOption>
            <AreaIcon>
              <Icon />
            </AreaIcon>
            {openDrawer ? (
              <AreaTitle>
                <Title>aksldjfhalksjdf</Title>
              </AreaTitle>
            ) : null}
          </AreaOption>
        ))}
      </AreaBody>
    </AreaDrawer>
  );
}
Drawer.propTypes = {
  openDrawer: PropTypes.bool,
  arrayOptions: PropTypes.arrayOf(PropTypes.string),
};
Drawer.defaultProps = {
  openDrawer: false,
  arrayOptions: ['Menu', 'login', 'sei la'],
};
