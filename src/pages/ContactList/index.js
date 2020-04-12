import React, { useState, useEffect } from 'react';

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
import Loader from '../../components/Loader';

function ContactList() {
  const { loading, error, message } = useSelector(state => state.commons);
  const { contacts, names } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(ContactsActions.requestContacts());
    }
  }, []); //eslint-disable-line
  const [visibleModal, setVisibleModal] = useState(false);

  function goToPageAddContact() {
    dispatch(ContactsActions.requestToPageAddContact());
  }
  const [valueSearch, setValueSearch] = useState('');

  if (loading || contacts.length === 0) {
    return <Loader />;
  }
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
          options={names}
        />
      </AreaHeaderTable>
      <AreaBodyTable>
        <TableBody infoTable={contacts} />
      </AreaBodyTable>
    </AreaUserList>
  );
}
export default withRouter(ContactList);
