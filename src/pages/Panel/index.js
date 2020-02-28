import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AreaPanel, AreaDrawerPanel, AreaDrawer, AreaContent } from './styles';
import * as HomeActions from '../../store/modules/home/actions';
import Header from '../../components/Header';
import Drawer from '../../components/Drawer';

export default function Panel(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [options, setOptions] = useState([
    {
      id: '1',
      name: 'option 1',
      open: false,
      suboptions: [{ id: '1' }, { id: '2' }],
    },
    { id: '2', name: 'option 1', open: false, suboptions: [] },
    { id: '3', name: 'option 1', open: false, suboptions: [] },
  ]);
  function functionOpenSuboption(idParam, optionsParam) {
    const newOptions = optionsParam.map(optionParam => {
      if (optionParam.id === idParam) {
        return {
          ...optionParam,
          open: !optionParam.open,
        };
      }
      return { ...optionParam, open: false };
    });
    console.tron.log(newOptions);
    setOptions(newOptions);
  }
  return (
    <AreaPanel>
      <Header
        functionOnClickDrawer={() => setOpenDrawer(!openDrawer)}
        openDrawer={openDrawer}
        functionOnClickUser={() => setOpenUser(!openUser)}
        openUser={openUser}
      />
      <AreaDrawerPanel>
        <AreaDrawer open={openDrawer}>
          <Drawer
            openDrawer={openDrawer}
            options={options}
            functionOnClickOpenSuboption={id =>
              functionOpenSuboption(id, options)
            }
          />
        </AreaDrawer>
        <AreaContent />
      </AreaDrawerPanel>
    </AreaPanel>
  );
}
