import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import {
  AreaPanel,
  AreaDrawerPanel,
  AreaDrawer,
  AreaContent,
  IconUserList,
  IconRegisterUser,
} from './styles';
import Header from '../../components/Header';
import Drawer from '../../components/Drawer';
import UserList from '../../pages/UserList';
import UserRegistration from '../../pages/UserRegister';
import DrawerContentHeader from '../../components/DrawerContentHeader';

export default function Panel(props) {
  const {
    match: { path },
  } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [drawer, setDrawer] = useState({
    name: 'Empresa',
    subname: '',
    options: [
      {
        id: '1',
        name: 'Lista de usuários',
        open: false,
        link: false,
        icon: () => <IconUserList />,
        route: {
          path: `${path}/`,
          exact: true,
          main: () => <UserList props={props} />,
        },
        // suboptions: [],
        suboptions: [
          {
            id: '1',
            name: 'Lista de usuários',
            open: false,
            link: `/userList`,
            icon: () => <IconUserList />,
            route: {
              path: `${path}/userList`,
              exact: false,
              main: () => <UserList />,
            },
          },
        ],
      },
      {
        id: '2',
        name: 'Cadastro de usuários',
        open: false,
        link: `/registerUser`,
        icon: () => <IconRegisterUser />,
        route: {
          path: `${path}/registerUser`,
          exact: false,
          main: () => <UserRegistration />,
        },
        suboptions: [],
      },
    ],
  });
  const [drawerFind, setDrawerFind] = useState(drawer);
  const [searchText, setSearchText] = useState('');
  const [namePage, setNamePage] = useState(drawer.options[0].name);
  function functionOpenSuboption(indexParam, drawerParam) {
    const newOptions = drawerParam.options.map(
      (optionParam, indexOptionsParam) => {
        if (indexParam === indexOptionsParam) {
          return {
            ...optionParam,
            open: !optionParam.open,
          };
        }
        return { ...optionParam, open: false };
      }
    );
    setDrawerFind({ ...drawerParam, options: newOptions });
  }
  function functionClickLink(nameParam) {
    setNamePage(nameParam);
  }

  useEffect(() => {
    const newOptions = drawer.options.filter(element =>
      element.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const newDrawer = {
      ...drawer,
      options: newOptions,
    };
    setDrawerFind(newDrawer);
  }, [searchText]); //eslint-disable-line
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
              name={drawer.name}
              subname={drawer.subname}
              options={drawerFind.options}
              functionOnClickOpenSuboption={indexParam =>
                functionOpenSuboption(indexParam, drawerFind)
              }
              path={path}
              palceholderSearch="Digite a opção:"
              valueSearch={searchText}
              functionOnChangeTextSearch={text => setSearchText(text)}
              functionOnClickLink={name => functionClickLink(name)}
            />
          </AreaDrawer>

          <AreaContent>
            <DrawerContentHeader name={namePage} />
            <Switch>
              {drawer.options.map((option, index) => {
                const { link, route, suboptions } = option;
                if (link) {
                  return (
                    <Route
                      key={index.toString()}
                      path={route.path}
                      exact={route.exact}
                      children={() => <route.main />}
                    />
                  );
                }
                return suboptions.map((suboptions, indexParam) => {
                  return (
                    <Route
                      key={indexParam.toString()}
                      path={suboptions.route.path}
                      exact={suboptions.route.exact}
                      children={() => <suboptions.route.main />}
                    />
                  );
                });
              })}
            </Switch>
          </AreaContent>
        </AreaDrawerPanel>
      </AreaPanel>
    </Router>
  );
}
