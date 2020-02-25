import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AreaDrawer,
  AreaHeader,
  AreaPhoto,
  Photo,
  AreaInfo,
  Title,
  Text,
  AreaSearch,
  IconSeach,
  AreaInputSearch,
  InputSearch,
  AreaInputIconSearch,
  AreaBody,
  AreaOptionsList,
  AreaOptions,
  AreaOption,
  AreaIconOptions,
  IconFont,
  AreaTitle,
  AreaIconDown,
  AreaIconDownUp,
  IconUp,
  AreaSubOption,
  IconDown,
} from './styles';
import logo from '../../assets/images/logo.svg';

export default function Drawer({ openDrawer, arrayOptions }) {
  return (
    <AreaDrawer>
      <AreaHeader>
        <AreaPhoto>
          <Photo
            src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg=="
          />
        </AreaPhoto>
        <AreaInfo open={openDrawer}>
          <Title>asd</Title>
          <Text open={openDrawer}>asdfasdf</Text>
        </AreaInfo>
      </AreaHeader>
      <AreaSearch>
        <AreaInputIconSearch>
          <IconSeach />
        </AreaInputIconSearch>
        <AreaInputSearch>
          <InputSearch open={openDrawer} />
        </AreaInputSearch>
      </AreaSearch>
      <AreaBody>
        <AreaOptionsList>
          <AreaOptions>
            <AreaOption>
              <AreaIconOptions>
                <IconFont />
              </AreaIconOptions>
              <AreaTitle>
                <Title>asd</Title>
              </AreaTitle>
            </AreaOption>
            <AreaIconDownUp>
              <IconDown />
            </AreaIconDownUp>
          </AreaOptions>
          <AreaOptions>
            <AreaOption>
              <AreaIconOptions>
                <IconFont />
              </AreaIconOptions>
              <AreaTitle>
                <Title>asd</Title>
              </AreaTitle>
            </AreaOption>
            <AreaIconDownUp>
              <IconDown />
            </AreaIconDownUp>
          </AreaOptions>
        </AreaOptionsList>
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
  arrayOptions: [
    { option: '1', subOption: [{ options: '1' }, { options: '2' }] },
    { option: '2', subOption: [] },
    { option: '3', subOption: [] },
  ],
};
