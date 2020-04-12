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
import { icons } from '../../styles';

export default function TableHeader({
  title,
  titleHeaderModal,
  // inputs-name
  titleInputNameModal,
  typeInputNameModal,
  typeInputNameFormatModal,
  placeholderInputNameModal,
  disabledInputNameModal,
  iconInputNameModal,
  functionOnChangeInputNameModal,
  functionOnEndingChangeNameModal,
  valueInputNameModal,
  errorInputNameModal,
  // inputs-lastname
  titleInputLastnameModal,
  typeInputLastnameModal,
  typeInputLastnameFormatModal,
  placeholderInputLastnameModal,
  disabledInputLastnameModal,
  iconInputLastnameModal,
  functionOnChangeInputLastnameModal,
  functionOnEndingChangeLastnameModal,
  valueInputLastnameModal,
  errorInputLastnameModal,
  // inputs e-mail
  titleInputEmailModal,
  typeInputEmailModal,
  typeInputEmailFormatModal,
  placeholderInputEmailModal,
  disabledInputEmailModal,
  iconInputEmailModal,
  functionOnChangeInputEmailModal,
  functionOnEndingChangeEmailModal,
  errorInputEmailModal,
  valueInputEmailModal,
  // MOdal:Phone
  areaInputPhoneTitleModal,
  functionOnClickAddPhoneModal,
  functionOnClickRemovePhoneModal,
  // Modal : Phone : field
  titleInputPhoneNumberModal,
  typeInputPhoneNumberModal,
  typeInputPhoneNumberFormatModal,
  placeholderInputPhoneNumberModal,
  disabledInputPhoneNumberModal,
  iconInputPhoneNumberModal,
  functionOnChangeInputPhoneNumberModal,
  functionOnEndingChangePhoneNumberModal,
  arrayPhonesNumberModal,
  // Modal : Phone : field
  titleInputPhoneDescriptionModal,
  typeInputPhoneDescriptionModal,
  typeInputPhoneDescriptionFormatModal,
  placeholderInputPhoneDescriptionModal,
  disabledInputPhoneDescriptionModal,
  iconInputPhoneDescriptionModal,
  functionOnChangeInputPhoneDescriptionModal,
  functionOnEndingChangePhoneDescriptionModal,
  errorInputPhoneDescriptionModal,
  valueInputPhoneDescriptionModal,
  //= ============
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
        <ModalRegister
          titleHeader={titleHeaderModal}
          functionOnClick={functionModalClosed}
          // input:name
          titleInputName={titleInputNameModal}
          typeInputName={typeInputNameModal}
          typeInputNameFormat={typeInputNameFormatModal}
          placeholderInputName={placeholderInputNameModal}
          disabledInputName={disabledInputNameModal}
          iconInputName={iconInputNameModal}
          functionOnChangeInputName={functionOnChangeInputNameModal}
          functionOnEndingNameChange={functionOnEndingChangeNameModal}
          valueInputName={valueInputNameModal}
          errorInputName={errorInputNameModal}
          // input:LasName
          titleInputLastname={titleInputLastnameModal}
          typeInputLastname={typeInputLastnameModal}
          typeInputLastnameFormat={typeInputLastnameFormatModal}
          placeholderInputLastname={placeholderInputLastnameModal}
          disabledInputLastname={disabledInputLastnameModal}
          iconInputLastname={iconInputLastnameModal}
          functionOnChangeInputLastname={functionOnChangeInputLastnameModal}
          functionOnEndingLastnameChange={functionOnEndingChangeLastnameModal}
          valueInputLastname={valueInputLastnameModal}
          errorInputLastname={errorInputLastnameModal}
          // email
          titleInputEmail={titleInputEmailModal}
          typeInputEmail={typeInputEmailModal}
          typeInputEmailFormat={typeInputEmailFormatModal}
          placeholderInputEmail={placeholderInputEmailModal}
          disabledInputEmail={disabledInputEmailModal}
          iconInputEmail={iconInputEmailModal}
          functionOnChangeInputEmail={functionOnChangeInputEmailModal}
          functionOnEndingEmailChange={functionOnEndingChangeEmailModal}
          valueInputEmail={valueInputEmailModal}
          errorInputEmail={errorInputEmailModal}
          // Phone
          areaInputPhoneTitle={areaInputPhoneTitleModal}
          functionOnClickAddPhone={functionOnClickAddPhoneModal}
          functionOnClickRemovePhone={functionOnClickRemovePhoneModal}
          // fields :number
          titleInputPhoneNumber={titleInputPhoneNumberModal}
          typeInputPhoneNumber={typeInputPhoneNumberModal}
          typeInputPhoneNumberFormat={typeInputPhoneNumberFormatModal}
          placeholderInputPhoneNumber={placeholderInputPhoneNumberModal}
          disabledInputPhoneNumber={disabledInputPhoneNumberModal}
          iconInputPhoneNumber={iconInputPhoneNumberModal}
          functionOnChangeInputPhoneNumber={
            functionOnChangeInputPhoneNumberModal
          }
          functionOnEndingPhoneNumberChange={
            functionOnEndingChangePhoneNumberModal
          }
          arrayPhonesNumber={arrayPhonesNumberModal}
          // field :description
          // fields
          titleInputPhoneDescription={titleInputPhoneDescriptionModal}
          typeInputPhoneDescription={typeInputPhoneDescriptionModal}
          typeInputPhoneDescriptionFormat={typeInputPhoneDescriptionFormatModal}
          placeholderInputPhoneDescription={
            placeholderInputPhoneDescriptionModal
          }
          disabledInputPhoneDescription={disabledInputPhoneDescriptionModal}
          iconInputPhoneDescription={iconInputPhoneDescriptionModal}
          functionOnChangeInputPhoneDescription={
            functionOnChangeInputPhoneDescriptionModal
          }
          functionOnEndingPhoneDescriptionChange={
            functionOnEndingChangePhoneDescriptionModal
          }
          valueInputPhoneDescription={valueInputPhoneDescriptionModal}
          errorInputPhoneDescription={errorInputPhoneDescriptionModal}
        />
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
  // Modal
  titleHeaderModal: PropTypes.string,
  // inputs-name
  titleInputNameModal: PropTypes.string,
  typeInputNameModal: PropTypes.string,
  typeInputNameFormatModal: PropTypes.string,
  placeholderInputNameModal: PropTypes.string,
  disabledInputNameModal: PropTypes.bool,
  functionOnChangeInputNameModal: PropTypes.func,
  functionOnEndingChangeNameModal: PropTypes.func,
  valueInputNameModal: PropTypes.string,
  errorInputNameModal: PropTypes.bool,
  iconInputNameModal: PropTypes.func,
  // inpus-l.astname
  titleInputLastnameModal: PropTypes.string,
  typeInputLastnameModal: PropTypes.string,
  typeInputLastnameFormatModal: PropTypes.string,
  placeholderInputLastnameModal: PropTypes.string,
  disabledInputLastnameModal: PropTypes.bool,
  functionOnChangeInputLastnameModal: PropTypes.func,
  functionOnEndingChangeLastnameModal: PropTypes.func,
  valueInputLastnameModal: PropTypes.string,
  iconInputLastnameModal: PropTypes.func,
  errorInputLastnameModal: PropTypes.bool,
  // inputs-e-mail
  titleInputEmailModal: PropTypes.string,
  typeInputEmailModal: PropTypes.string,
  typeInputEmailFormatModal: PropTypes.string,
  placeholderInputEmailModal: PropTypes.string,
  disabledInputEmailModal: PropTypes.bool,
  functionOnChangeInputEmailModal: PropTypes.func,
  functionOnEndingChangeEmailModal: PropTypes.func,
  valueInputEmailModal: PropTypes.string,
  errorInputEmailModal: PropTypes.bool,
  iconInputEmailModal: PropTypes.func,
  // phone
  areaInputPhoneTitleModal: PropTypes.string,
  functionOnClickAddPhoneModal: PropTypes.func,
  functionOnClickRemovePhoneModal: PropTypes.func,
  // inputs-phone
  titleInputPhoneNumberModal: PropTypes.string,
  typeInputPhoneNumberModal: PropTypes.string,
  typeInputPhoneNumberFormatModal: PropTypes.string,
  placeholderInputPhoneNumberModal: PropTypes.string,
  disabledInputPhoneNumberModal: PropTypes.bool,
  functionOnChangeInputPhoneNumberModal: PropTypes.func,
  functionOnEndingChangePhoneNumberModal: PropTypes.func,
  arrayPhonesNumberModal: PropTypes.arrayOf(PropTypes.object),
  iconInputPhoneNumberModal: PropTypes.func,
  // inputs-phone
  titleInputPhoneDescriptionModal: PropTypes.string,
  typeInputPhoneDescriptionModal: PropTypes.string,
  typeInputPhoneDescriptionFormatModal: PropTypes.string,
  placeholderInputPhoneDescriptionModal: PropTypes.string,
  disabledInputPhoneDescriptionModal: PropTypes.bool,
  functionOnChangeInputPhoneDescriptionModal: PropTypes.func,
  functionOnEndingChangePhoneDescriptionModal: PropTypes.func,
  valueInputPhoneDescriptionModal: PropTypes.string,
  errorInputPhoneDescriptionModal: PropTypes.bool,
  iconInputPhoneDescriptionModal: PropTypes.func,
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
  titleHeaderModal: 'title header Modal',
  // inputs-name
  titleInputNameModal: 'title input name',
  typeInputNameModal: 'text',
  typeInputNameFormatModal: 'text',
  placeholderInputNameModal: 'placeholder name:',
  disabledInputNameModal: true,
  functionOnChangeInputNameModal: () => {},
  functionOnEndingChangeNameModal: () => {},
  valueInputNameModal: '',
  errorInputNameModal: false,
  iconInputNameModal: () => <icons.IconDefault />,
  // inputs-lastname
  titleInputLastnameModal: 'title input lastname',
  typeInputLastnameModal: 'text',
  typeInputLastnameFormatModal: 'text',
  placeholderInputLastnameModal: 'placeholder lastname:',
  disabledInputLastnameModal: true,
  functionOnChangeInputLastnameModal: () => {},
  functionOnEndingChangeLastnameModal: () => {},
  valueInputLastnameModal: '',
  errorInputLastnameModal: false,
  iconInputLastnameModal: () => <icons.IconDefault />,
  // inputs-email
  titleInputEmailModal: 'title input e-mail',
  typeInputEmailModal: 'text',
  typeInputEmailFormatModal: 'text',
  placeholderInputEmailModal: 'placeholder e-mail:',
  disabledInputEmailModal: true,
  functionOnChangeInputEmailModal: () => {},
  functionOnEndingChangeEmailModal: () => {},
  valueInputEmailModal: '',
  errorInputEmailModal: false,
  iconInputEmailModal: () => <icons.IconDefault />,
  // inputs-phone
  areaInputPhoneTitleModal: 'Title Area Inputs Phone',
  functionOnClickAddPhoneModal: () => {},
  functionOnClickRemovePhoneModal: () => {},
  // inputs-number
  titleInputPhoneNumberModal: 'title input e-mail',
  typeInputPhoneNumberModal: 'text',
  typeInputPhoneNumberFormatModal: 'text',
  placeholderInputPhoneNumberModal: 'placeholder e-mail:',
  disabledInputPhoneNumberModal: true,
  functionOnChangeInputPhoneNumberModal: () => {},
  functionOnEndingChangePhoneNumberModal: () => {},
  arrayPhonesNumberModal: [
    {
      value: '',
      error: false,
    },
  ],
  iconInputPhoneNumberModal: () => <icons.IconDefault />,
  // inputs-description
  titleInputPhoneDescriptionModal: 'title input e-mail',
  typeInputPhoneDescriptionModal: 'text',
  typeInputPhoneDescriptionFormatModal: 'text',
  placeholderInputPhoneDescriptionModal: 'placeholder e-mail:',
  disabledInputPhoneDescriptionModal: true,
  functionOnChangeInputPhoneDescriptionModal: () => {},
  functionOnEndingChangePhoneDescriptionModal: () => {},
  valueInputPhoneDescriptionModal: '',
  errorInputPhoneDescriptionModal: false,
  iconInputPhoneDescriptionModal: () => <icons.IconDefault />,
};
