import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AreaPanel, AreaDrawerPanel, AreaDrawer, AreaContent } from './styles';
import * as HomeActions from '../../store/modules/home/actions';
import Header from '../../components/Header';
import Drawer from '../../components/Drawer';
import Content1 from '../../pages/Content1';
import Content2 from '../../pages/Content2';

export default function Panel({ match: { path } }) {
  const routes = [
    {
      path: `${path}/`,
      exact: true,
      sidebar: () => <Content1 />,
      main: () => <Content1 />,
    },
    {
      path: `${path}/bubblegum`,
      sidebar: () => <Content2 />,
      main: () => <Content2 />,
    },
    {
      path: `${path}/shoelaces`,
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Shoelaces</h2>,
    },
  ];
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
    console.tron.log(newOptions);
    setOptions(newOptions);
  }
  return (
    <Router>
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
              path={path}
            />
          </AreaDrawer>

          <AreaContent>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link to={`${path}/`}>Home</Link>
              </li>
              <li>
                <Link to={`${path}/bubblegum`}>Bubblegum</Link>
              </li>
              <li>
                <Link to={`${path}/shoelaces`}>Shoelaces</Link>
              </li>
            </ul>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index.toString()}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </AreaContent>
        </AreaDrawerPanel>
      </AreaPanel>
    </Router>
  );
}
