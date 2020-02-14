import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AreaPanel, AreaDrawerPanel, AreaDrawer, AreaContent } from './styles';
import * as HomeActions from '../../store/modules/home/actions';
import Header from '../../components/Header';

export default function Panel(props) {
  return (
    <AreaPanel>
      <Header />
      <AreaDrawerPanel>
        <AreaDrawer>
          <p>akj</p>
          <p>akj</p>
          <p>akj</p>
          <p>akj</p>
          <p>akj</p>
          <p>akj</p>
        </AreaDrawer>
        <AreaContent>
          <p>akjsdfhlkajsdf</p>
        </AreaContent>
      </AreaDrawerPanel>
    </AreaPanel>
  );
}
