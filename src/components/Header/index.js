import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaHeader,
  AreaItems,
  DrawerButton,
  DrawerIcon,
  AreaTitle,
  Title,
  AreaUserButtonExpand,
  AreaUserButon,
  DrawerOff,
  AreaSvg,
  Image,
  AreaPhoto,
  Photo,
  AreaIcon,
  IconDown,
  IconUp,
  IconBack,
} from './styles';
import avatar from '../../assets/images/avatar.png';

export default function Header({
  functionOnClickDrawer,
  openDrawer,
  functionOnClickUser,
  openUser,
  name,
  titleDrawer,
  logoff,
}) {
  return (
    <AreaHeader>
      <AreaItems positionLine="flex-start">
        <DrawerButton onClick={functionOnClickDrawer}>
          {openDrawer ? <IconBack /> : <DrawerIcon />}
        </DrawerButton>
        <AreaTitle exits>
          <Title>{titleDrawer}</Title>
        </AreaTitle>
      </AreaItems>
      <AreaItems positionLine="flex-end" padding>
        <AreaUserButtonExpand open={openUser}>
          <AreaUserButon exist onClick={functionOnClickUser}>
            <AreaPhoto exist>
              <Photo src={avatar} />
            </AreaPhoto>
            <AreaTitle>
              <Title>{name}</Title>
            </AreaTitle>
            <AreaIcon>{openUser ? <IconUp /> : <IconDown />}</AreaIcon>
          </AreaUserButon>
          <AreaUserButon exist={openUser}>
            <AreaPhoto />
            <AreaTitle align="flex-end">
              <Title>{logoff}</Title>
            </AreaTitle>
            <AreaIcon exist>
              <DrawerOff />
            </AreaIcon>
          </AreaUserButon>
        </AreaUserButtonExpand>
      </AreaItems>
    </AreaHeader>
  );
}
Header.propTypes = {
  titleDrawer: PropTypes.string,
  name: PropTypes.string,
  functionOnClickDrawer: PropTypes.func,
  openDrawer: PropTypes.bool,
  functionOnClickUser: PropTypes.func,
  openUser: PropTypes.bool,
  logoff: PropTypes.string,
};
Header.defaultProps = {
  titleDrawer: 'Menu',
  name: 'Name',
  logoff: 'logoff',
  functionOnClickDrawer: () => {},
  openDrawer: true,
  functionOnClickUser: PropTypes.func,
  openUser: true,
};
