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
  options,
}) {
  return (
    <AreaTitleSearchTable>
      <Modal visible={visibleModal}>
        <ModalRegister functionOnClick={() => functionModalClosed()} />
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
              options={options}
              placeholder={placeholderInputSearch}
              onChange={text => functionOnChange(text)}
              value={valueSearch}
              onBlur={functionEndEditing}
              trigger=""
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
  options: PropTypes.arrayOf(PropTypes.string),
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
  options: [''],
};
