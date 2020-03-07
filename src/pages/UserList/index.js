import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  AreaUserList,
  Row,
  Column,
  AreaHeaderTable,
  AreaBodyTable,
  AreaIconAdd,
} from './styles';
import TableHeader from '../../components/TableHeader';
import TableBody from '../../components/TableBody';
import * as LoginActions from '../../store/modules/login/actions';
import Logo from '../../components/Logo';
import InputIcon from '../../components/InputIcon';
import Button from '../../components/ButtonIcon';

export default function UserList() {
  const [table, setTable] = useState([
    {
      id: 'Código',
      name: 'Nome',
      email: 'E-mail',
      fone: 'Telefone',
      date: 'Data',
    },
    {
      id: '1',
      name: 'Anderson',
      email: 'Anderson@gmail.com',
      fone: '(16)99305-6772',
      date: '05/07/1999',
    },
    {
      id: '1',
      name: 'Andréia',
      email: 'Andreia@gmail.com',
      fone: '(16)99191-1396',
      date: '05/07/1945',
    },
  ]);
  return (
    <AreaUserList>
      <AreaHeaderTable>
        <TableHeader />
      </AreaHeaderTable>
      <AreaBodyTable>
        <TableBody infoTable={table} />
      </AreaBodyTable>
    </AreaUserList>
  );
}
