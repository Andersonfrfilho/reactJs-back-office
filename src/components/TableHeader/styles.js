import styled, { keyframes, css } from 'styled-components';
import { FaSistrix, FaTimes, FaRegPlusSquare } from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';
import { colors, metrics } from '../../styles';

export const AreaTitleSearchTable = styled.div`
  display: flex;
  flex: 1;
`;
export const AreaItensTable = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${({ align }) => align};
  align-items: center;
  background-color: ${({ color }) => color};
  padding-right: 5px;
`;
export const TitleList = styled.p`
  padding-left: 5px;
  font-weight: bold;
`;
export const AreaSearchAdd = styled.div`
  display: flex;
  height: 30px;
  width: 350px;
  background-color: ${colors.pickerOne};
  color: ${colors.pickerTree};
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: ${colors.pickerSeven};
  &:hover {
    border-width: 0px 0px 2px 0px;
    transition-duration: 0.3s;
    border-color: ${colors.black};
  }
  /* quando for utilizar focagem em um filho */
  &:focus-within {
    border-color: ${colors.dodgerBlue};
    border-width: 0px 0px 2px 0px;
    transition-duration: 0.3s;
  }

  @media (min-width: 300px) {
    width: 100px;
    transition-duration: 0.7s;
  }
  @media (min-width: 400px) {
    width: 175px;
  }
  @media (min-width: 800px) {
    width: 350px;
  }
  @media (min-width: 1200px) {
    width: 350px;
  }
`;
export const AreaIcon = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AreaIconClear = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  transition-duration: 0.7s;
  &:hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: ${colors.pickerFour};
  }
  &:active {
    border-radius: 50%;
    background-color: ${colors.pickerOne};
  }
`;
export const AreaIconAdd = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pickerOne};
  color: ${colors.pickerFour};
  border-radius: 12px;
  margin-left: 10px;
  transition-duration: 0.7s;
  &:hover {
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: ${colors.pickerTree};
  }
  &:active {
    background-color: ${colors.pickerOne};
  }
  @media (min-width: 300px) {
    width: 15px;
    transition-duration: 0.7s;
  }
  @media (min-width: 400px) {
    width: 30px;
  }
  @media (min-width: 800px) {
    width: 30px;
  }
  @media (min-width: 1200px) {
    width: 30px;
  }
`;
export const AreaInputSearch = styled.div`
  flex: 8;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 5px;
  border: none;
  background-color: transparent;
`;

export const IconSearch = styled(FaSistrix)``;
export const IconClean = styled(FaTimes)``;
export const IconPlus = styled(MdAddBox)``;
