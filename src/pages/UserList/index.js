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
      options: [
        {
          name: 'Código',
          type: 'number',
          select: false,
          length: 1,
          align: 'center',
        },
        {
          name: 'Nome',
          type: 'alpha',
          select: false,
          length: 2,
          align: 'flex-start',
        },
        {
          name: 'E-mail',
          type: 'alpha',
          select: false,
          length: 3,
          align: 'flex-start',
        },
        {
          name: 'Telefone',
          type: 'alpha',
          select: false,
          length: 2,
          align: 'flex-start',
        },
        {
          name: 'Data',
          type: 'alpha',
          select: false,
          length: 2,
          align: 'flex-start',
        },
      ],
    },
    {
      id: '1',
      name: 'Anderson',
      email: 'Anderson@gmail.com',
      fone: '(16)99305-6772',
      date: '05/07/1999',
    },
    {
      id: '2',
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
