import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AreaPanel, AreaDrawerPanel, AreaDrawer, AreaContent } from './styles';
import * as HomeActions from '../../store/modules/home/actions';
import Header from '../../components/Header';
import Drawer from '../../components/Drawer';
import Content1 from '../Content1';
import Content2 from '../Content2';

export default function Panel({ match: { path } }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [options, setOptions] = useState([
    {
      id: '1',
      name: 'option 1',
      open: false,
      suboptions: [
        { id: '1', name: 'suboption_1' },
        { id: '2', name: 'suboption_2' },
      ],
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

        <AreaContent>
          <Switch>
            <Route path={`${path}`} exact component={Content1} />
            <Route path={`${path}/comments`} component={Content2} />
          </Switch>
        </AreaContent>
      </AreaDrawerPanel>
    </AreaPanel>
  );
}
