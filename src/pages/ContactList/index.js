import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  AreaUserList,
  AreaHeaderTable,
  AreaBodyTable,
  AreaIconAdd,
} from './styles';
import TableHeader from '../../components/TableHeader';
import TableBody from '../../components/TableBody';
import * as ContactsActions from '../../store/modules/contacts/actions';

function ContactList() {
  const { loading, error, message } = useSelector(state => state.common);
  const dispatch = useDispatch();
  const [visibleModal, setVisibleModal] = useState(false);
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
  function goToPageAddContact() {
    dispatch(ContactsActions.requestToPageAddContact());
  }
  const [valueSearch, setValueSearch] = useState('');
  return (
    <AreaUserList>
      <AreaHeaderTable>
        <TableHeader
          title="Lista de usuarios"
          placeholderInputSearch="Pesquisar:"
          functionOnChange={value => setValueSearch(value)}
          valueSearch={valueSearch}
          functionOnClickClear={() => setValueSearch('')}
          functionOnClickAdd={() => goToPageAddContact()}
          functionModalClosed={() => setVisibleModal(false)}
          functionModalOpen={() => setVisibleModal(true)}
          visibleModal={visibleModal}
        />
      </AreaHeaderTable>
      <AreaBodyTable>
        <TableBody infoTable={table} />
      </AreaBodyTable>
    </AreaUserList>
  );
}
export default withRouter(ContactList);
