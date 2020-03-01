import React, { useState } from 'react';
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

export default function Drawer({
  openDrawer,
  options,
  functionOnClickOpenSuboption,
}) {
  console.tron.log(options[0].suboptions.length);
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
          {options.map(option => {
            console.tron.log(option);
            return (
              <>
                <AreaOptions>
                  <AreaOption>
                    <AreaIconOptions>
                      <IconFont />
                    </AreaIconOptions>
                    <AreaTitle>
                      <Title>asd</Title>
                    </AreaTitle>
                  </AreaOption>
                  {option.suboptions.length > 0 ? (
                    <AreaIconDownUp
                      onClick={() => functionOnClickOpenSuboption(option.id)}
                    >
                      {option.open ? <IconUp /> : <IconDown />}
                    </AreaIconDownUp>
                  ) : null}
                </AreaOptions>
                {option.open
                  ? option.suboptions.map(suboption => (
                      <AreaOptions>
                        <AreaOption>
                          <AreaIconOptions />
                          <AreaIconDownUp>
                            <IconUp />
                          </AreaIconDownUp>
                          <AreaTitle>
                            <Title>{suboption.name}</Title>
                          </AreaTitle>
                        </AreaOption>
                      </AreaOptions>
                    ))
                  : null}
              </>
            );
          })}
        </AreaOptionsList>
      </AreaBody>
    </AreaDrawer>
  );
}
Drawer.propTypes = {
  openDrawer: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
};
Drawer.defaultProps = {
  openDrawer: false,
  options: [
    {
      option: '1',
      name: 'option 1',
      open: false,
      subOption: [{ options: '1' }, { options: '2' }],
    },
    { option: '2', name: 'option 1', open: false, subOption: [] },
    { option: '3', name: 'option 1', open: false, subOption: [] },
  ],
};
