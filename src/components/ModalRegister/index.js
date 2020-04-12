import React from 'react';
import PropTypes, { object } from 'prop-types';
import {
  AreaModal,
  AreaHeader,
  AreaTitle,
  AreaIcon,
  TitleHeader,
  AreaIconClosed,
  AreaInputTitle,
  AreaTitleInput,
  AreaInputs,
  TitleInput,
  AreaInputsMultiples,
  AreaTitleInputsMultiples,
  TitleInputsMultiple,
  AreaUnderline,
  Underline,
  AreaIconPlusMultiple,
  AreaIconPlus,
  AreaIconRemove,
  AreaInputRemove,
} from './styles';
import InputIcon from '../InputIcon';
import ButtonIcon from '../ButtonIcon';
import { icons, colors } from '../../styles';

export default function ModalRegister({
  titleHeader,
  functionOnClick,
  titleInputName,
  typeInputName,
  typeInputNameFormat,
  placeholderInputName,
  disabledInputName,
  functionOnChangeInputName,
  functionOnEndingChangeName,
  valueInputName,
  errorInputName,
  iconInputName,
  titleInputLastname,
  typeInputLastname,
  typeInputLastnameFormat,
  placeholderInputLastname,
  disabledInputLastname,
  functionOnChangeInputLastname,
  functionOnEndingChangeLastname,
  valueInputLastname,
  errorInputLastname,
  iconInputLastname,
  titleInputEmail,
  typeInputEmail,
  typeInputEmailFormat,
  placeholderInputEmail,
  disabledInputEmail,
  functionOnChangeInputEmail,
  functionOnEndingChangeEmail,
  valueInputEmail,
  errorInputEmail,
  iconInputEmail,
  functionOnClickAddPhone,
  functionOnClickRemovePhone,
  areaInputPhoneTitle,
  arrayPhonesNumber,
  titleInputPhoneNumber,
  typeInputPhoneNumber,
  typeInputPhoneNumberFormat,
  placeholderInputPhoneNumber,
  disabledInputPhoneNumber,
  functionOnChangeInputPhoneNumber,
  functionOnEndingChangePhoneNumber,
  iconInputPhoneNumber,
  titleInputPhoneDescription,
  typeInputPhoneDescription,
  typeInputPhoneDescriptionFormat,
  placeholderInputPhoneDescription,
  disabledInputPhoneDescription,
  functionOnChangeInputPhoneDescription,
  functionOnEndingChangePhoneDescription,
  valueInputPhoneDescription,
  errorInputPhoneDescription,
  iconInputPhoneDescription,
}) {
  return (
    <AreaModal>
      <AreaHeader>
        <AreaIcon flex={1}>
          <icons.UserPlusIcon color={colors.dark} />
        </AreaIcon>
        <AreaTitle flex={3}>
          <TitleHeader>{titleHeader}</TitleHeader>
        </AreaTitle>
        <AreaIconClosed flex={1} onClick={functionOnClick}>
          <icons.ClosedTimesIcon color={colors.dark} />
        </AreaIconClosed>
      </AreaHeader>
      <AreaInputs>
        <AreaInputTitle>
          <AreaTitleInput>
            <TitleInput>{titleInputName}</TitleInput>
          </AreaTitleInput>
          <InputIcon
            type={typeInputName}
            typeInput={typeInputNameFormat}
            functionOnChange={functionOnChangeInputName}
            functionOnEndingChange={functionOnEndingChangeName}
            value={valueInputName}
            placeholder={placeholderInputName}
            disabled={disabledInputName}
            icon={iconInputName}
            error={errorInputName}
          />
        </AreaInputTitle>
        <AreaInputTitle>
          <AreaTitleInput>
            <TitleInput>{titleInputLastname}</TitleInput>
          </AreaTitleInput>
          <InputIcon
            type={typeInputLastname}
            typeInput={typeInputLastnameFormat}
            placeholder={placeholderInputLastname}
            disabled={disabledInputLastname}
            icon={iconInputLastname}
            functionOnChange={functionOnChangeInputLastname}
            functionOnEndingChange={functionOnEndingChangeLastname}
            value={valueInputLastname}
            error={errorInputLastname}
          />
        </AreaInputTitle>
      </AreaInputs>
      <AreaInputs>
        <AreaInputTitle>
          <AreaTitleInput>
            <TitleInput>{titleInputEmail}</TitleInput>
          </AreaTitleInput>
          <InputIcon
            type={typeInputEmail}
            typeInput={typeInputEmailFormat}
            placeholder={placeholderInputEmail}
            disabled={disabledInputEmail}
            icon={iconInputEmail}
            functionOnChange={functionOnChangeInputEmail}
            functionOnEndingChange={functionOnEndingChangeEmail}
            value={valueInputEmail}
            error={errorInputEmail}
          />
        </AreaInputTitle>
      </AreaInputs>
      <AreaInputsMultiples>
        <AreaTitleInputsMultiples>
          <TitleInputsMultiple>
            {arrayPhonesNumber.length > 1
              ? `${areaInputPhoneTitle}s`
              : `${areaInputPhoneTitle}`}
          </TitleInputsMultiple>
        </AreaTitleInputsMultiples>
        <AreaIconPlusMultiple>
          <AreaIconPlus flex={1} onClick={functionOnClickAddPhone}>
            <icons.PlusIconAdd
              color={colors.dark}
              aditional={window.screen.width >= 400 ? 2 : -2}
            />
          </AreaIconPlus>
        </AreaIconPlusMultiple>
        {arrayPhonesNumber.map((phone, index) => {
          return (
            <>
              <AreaInputs>
                <AreaInputTitle>
                  <AreaTitleInput>
                    <TitleInput>{titleInputPhoneNumber}</TitleInput>
                  </AreaTitleInput>
                  <InputIcon
                    type={typeInputPhoneNumber}
                    typeInput={typeInputPhoneNumberFormat}
                    placeholder={placeholderInputPhoneNumber}
                    disabled={disabledInputPhoneNumber}
                    icon={iconInputPhoneNumber}
                    functionOnChange={text =>
                      functionOnChangeInputPhoneNumber(text, index)
                    }
                    functionOnEndingChange={functionOnEndingChangePhoneNumber}
                    value={phone.value}
                    error={phone.error}
                  />
                </AreaInputTitle>
                <AreaInputTitle>
                  <AreaTitleInput>
                    <TitleInput>{titleInputPhoneDescription}</TitleInput>
                  </AreaTitleInput>
                  <InputIcon
                    type={typeInputPhoneDescription}
                    typeInput={typeInputPhoneDescriptionFormat}
                    placeholder={placeholderInputPhoneDescription}
                    disabled={disabledInputPhoneDescription}
                    icon={iconInputPhoneDescription}
                    functionOnChange={functionOnChangeInputPhoneDescription}
                    functionOnEndingChange={
                      functionOnEndingChangePhoneDescription
                    }
                    value={valueInputPhoneDescription}
                    error={errorInputPhoneDescription}
                  />
                </AreaInputTitle>
                <AreaInputRemove>
                  <AreaTitleInput />
                  <AreaIconRemove>
                    <icons.ClosedTimesIcon
                      color={colors.dark}
                      aditional={window.screen.width >= 400 ? 2 : -2}
                    />
                  </AreaIconRemove>
                </AreaInputRemove>
              </AreaInputs>

              <AreaUnderline>
                <Underline />
              </AreaUnderline>
            </>
          );
        })}
      </AreaInputsMultiples>
      <AreaInputsMultiples>
        <AreaTitleInputsMultiples>
          <TitleInputsMultiple>
            {arrayPhonesNumber.length > 1 ? 'Endereços' : 'Endereço'}
          </TitleInputsMultiple>
        </AreaTitleInputsMultiples>
        <AreaIconPlusMultiple>
          <AreaIconPlus flex={1} onClick={functionOnClick}>
            <icons.PlusIconAdd
              color={colors.dark}
              aditional={window.screen.width >= 400 ? 2 : -2}
            />
          </AreaIconPlus>
        </AreaIconPlusMultiple>
        {arrayPhonesNumber.map((phone, index) => {
          return (
            <>
              <AreaInputs>
                <AreaInputTitle>
                  <AreaTitleInput>
                    <TitleInput>Phone-Number</TitleInput>
                  </AreaTitleInput>
                  <InputIcon />
                </AreaInputTitle>
                <AreaInputTitle>
                  <AreaTitleInput>
                    <TitleInput>Phone-Description</TitleInput>
                  </AreaTitleInput>
                  <InputIcon />
                </AreaInputTitle>
              </AreaInputs>
              <AreaUnderline>
                <Underline />
              </AreaUnderline>
            </>
          );
        })}
      </AreaInputsMultiples>
    </AreaModal>
  );
}
ModalRegister.propTypes = {
  functionOnClick: PropTypes.func,
  titleHeader: PropTypes.string,
  titleInputName: PropTypes.string,
  typeInputName: PropTypes.string,
  typeInputNameFormat: PropTypes.string,
  placeholderInputName: PropTypes.string,
  disabledInputName: PropTypes.bool,
  functionOnChangeInputName: PropTypes.func,
  functionOnEndingChangeName: PropTypes.func,
  valueInputName: PropTypes.string,
  errorInputName: PropTypes.bool,
  iconInputName: PropTypes.func,
  titleInputLastname: PropTypes.string,
  typeInputLastname: PropTypes.string,
  typeInputLastnameFormat: PropTypes.string,
  placeholderInputLastname: PropTypes.string,
  disabledInputLastname: PropTypes.bool,
  functionOnChangeInputLastname: PropTypes.func,
  functionOnEndingChangeLastname: PropTypes.func,
  valueInputLastname: PropTypes.string,
  errorInputLastname: PropTypes.bool,
  iconInputLastname: PropTypes.func,
  titleInputEmail: PropTypes.string,
  typeInputEmail: PropTypes.string,
  typeInputEmailFormat: PropTypes.string,
  placeholderInputEmail: PropTypes.string,
  disabledInputEmail: PropTypes.bool,
  functionOnChangeInputEmail: PropTypes.func,
  functionOnEndingChangeEmail: PropTypes.func,
  valueInputEmail: PropTypes.string,
  errorInputEmail: PropTypes.bool,
  iconInputEmail: PropTypes.func,
  areaInputPhoneTitle: PropTypes.string,
  titleInputPhoneNumber: PropTypes.string,
  typeInputPhoneNumber: PropTypes.string,
  typeInputPhoneNumberFormat: PropTypes.string,
  placeholderInputPhoneNumber: PropTypes.string,
  disabledInputPhoneNumber: PropTypes.bool,
  functionOnChangeInputPhoneNumber: PropTypes.func,
  functionOnEndingChangePhoneNumber: PropTypes.func,
  iconInputPhoneNumber: PropTypes.func,
  titleInputPhoneDescription: PropTypes.string,
  typeInputPhoneDescription: PropTypes.string,
  typeInputPhoneDescriptionFormat: PropTypes.string,
  placeholderInputPhoneDescription: PropTypes.string,
  disabledInputPhoneDescription: PropTypes.bool,
  functionOnChangeInputPhoneDescription: PropTypes.func,
  functionOnEndingChangePhoneDescription: PropTypes.func,
  valueInputPhoneDescription: PropTypes.string,
  errorInputPhoneDescription: PropTypes.bool,
  iconInputPhoneDescription: PropTypes.func,
  arrayPhonesNumber: PropTypes.arrayOf(PropTypes.object),
  functionOnClickAddPhone: PropTypes.func,
  functionOnClickRemovePhone: PropTypes.func,
};
ModalRegister.defaultProps = {
  functionOnClick: () => {},
  titleHeader: 'title modal',
  arrayPhonesNumber: [{ values: '', error: false }],
  titleInputName: 'title input name',
  typeInputNameFormat: 'text',
  typeInputName: 'text',
  placeholderInputName: 'placeholder name:',
  disabledInputName: true,
  functionOnChangeInputName: () => {},
  functionOnEndingChangeName: () => {},
  valueInputName: '',
  errorInputName: false,
  iconInputName: () => <icons.IconDefault />,
  titleInputLastname: 'title input lastname',
  typeInputLastnameFormat: 'text',
  typeInputLastname: 'text',
  placeholderInputLastname: 'placeholder lastname:',
  disabledInputLastname: true,
  functionOnChangeInputLastname: () => {},
  functionOnEndingChangeLastname: () => {},
  errorInputLastname: false,
  valueInputLastname: '',
  iconInputLastname: () => <icons.IconDefault />,
  titleInputEmail: 'title input e-mail',
  typeInputEmailFormat: 'text',
  typeInputEmail: 'text',
  placeholderInputEmail: 'placeholder lastname:',
  disabledInputEmail: true,
  functionOnChangeInputEmail: () => {},
  functionOnEndingChangeEmail: () => {},
  valueInputEmail: '',
  errorInputEmail: false,
  iconInputEmail: () => <icons.IconDefault />,
  titleInputPhoneNumber: 'title input phone number',
  typeInputPhoneNumberFormat: 'text',
  typeInputPhoneNumber: 'text',
  placeholderInputPhoneNumber: 'placeholder phone number:',
  disabledInputPhoneNumber: true,
  functionOnChangeInputPhoneNumber: () => {},
  functionOnEndingChangePhoneNumber: () => {},

  iconInputPhoneNumber: () => <icons.IconDefault />,
  titleInputPhoneDescription: 'title input phone description',
  typeInputPhoneDescriptionFormat: 'text',
  typeInputPhoneDescription: 'text',
  placeholderInputPhoneDescription: 'placeholder phone description:',
  disabledInputPhoneDescription: true,
  functionOnChangeInputPhoneDescription: () => {},
  functionOnEndingChangePhoneDescription: () => {},
  valueInputPhoneDescription: '',
  errorInputPhoneDescription: false,
  iconInputPhoneDescription: () => <icons.IconDefault />,
  areaInputPhoneTitle: 'Title area Phones',
  functionOnClickAddPhone: () => {},
  functionOnClickRemovePhone: () => {},
};
