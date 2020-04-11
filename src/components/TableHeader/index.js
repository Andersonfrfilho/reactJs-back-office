import React from 'react';
import PropTypes from 'prop-types';
import ModalRegister from '../ModalRegister';
import {
  AreaTitleSearchTable,
  Modal,
  AreaItensTable,
  AreaSearchAdd,
  TitleList,
  IconSearch,
  AreaIcon,
  AreaIconClear,
  AreaInputSearch,
  SearchInput,
  IconClean,
  IconPlus,
  AreaIconAdd,
} from './styles';

export default function TableHeader({
  title,
  placeholderInputSearch,
  functionOnChange,
  valueSearch,
  functionEndEditing,
  functionOnClickClear,
  functionModalClosed,
  functionModalOpen,
  visibleModal,
}) {
  return (
    <AreaTitleSearchTable>
      <Modal visible>
        <ModalRegister />
      </Modal>
      <AreaItensTable align="flex-start">
        <TitleList>{title}</TitleList>
      </AreaItensTable>
      <AreaItensTable align="flex-end">
        <AreaSearchAdd>
          <AreaIcon>
            <IconSearch />
          </AreaIcon>
          <AreaInputSearch>
            <SearchInput
              placeholder={placeholderInputSearch}
              onChange={text => functionOnChange(text.target.value)}
              value={valueSearch}
              onBlur={functionEndEditing}
            />
          </AreaInputSearch>
          <AreaIconClear onClick={functionOnClickClear}>
            <IconClean />
          </AreaIconClear>
        </AreaSearchAdd>
        <AreaIconAdd onClick={functionModalOpen}>
          <AreaIcon>
            <IconPlus />
          </AreaIcon>
        </AreaIconAdd>
      </AreaItensTable>
    </AreaTitleSearchTable>
  );
}
TableHeader.propTypes = {
  title: PropTypes.string,
  placeholderInputSearch: PropTypes.string,
  functionOnChange: PropTypes.func,
  valueSearch: PropTypes.string,
  functionEndEditing: PropTypes.func,
  functionOnClickClear: PropTypes.func,
  functionModalClosed: PropTypes.func,
  functionModalOpen: PropTypes.func,
  visibleModal: PropTypes.bool,
};
TableHeader.defaultProps = {
  title: 'título da tabela',
  placeholderInputSearch: 'Pesquisar:',
  functionOnChange: () => {},
  valueSearch: '',
  functionEndEditing: () => {},
  functionOnClickClear: () => {},
  functionModalClosed: () => {},
  functionModalOpen: () => {},
  visibleModal: false,
};
