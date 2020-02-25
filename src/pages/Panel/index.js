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
          <Drawer openDrawer={openDrawer} />
        </AreaDrawer>
        <AreaContent />
      </AreaDrawerPanel>
    </AreaPanel>
  );
}
