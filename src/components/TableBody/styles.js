import styled, { keyframes, css } from 'styled-components';
import { FaFilter } from 'react-icons/fa';
import {
  MdDelete,
  MdEdit,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdIndeterminateCheckBox,
} from 'react-icons/md';
import { colors, metrics } from '../../styles';

export const AreaTable = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 48px;
  background-color: #12aaff;
`;
export const Column = styled.td`
  display: flex;
  align-items: center;
  flex: ${({ flex }) => flex};
  padding-left: 3px;
  border: solid 3px;
  overflow: hidden;
`;
export const AreaActionsIcons = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
export const AreaIcons = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AreaInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ align }) => align};
  overflow: hidden;
`;
export const Info = styled.p`
  overflow: hidden;
  padding-left: 3px;
`;
export const IconEdit = styled(MdEdit)`
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    background-color: ${colors.whiteTransparent};
  }
  &:active {
    padding: 5px;
    border-radius: 50%;
    background-color: ${colors.darkTransparent};
  }
`;
export const IconDelete = styled(MdDelete)`
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    background-color: ${colors.whiteTransparent};
  }
  &:active {
    padding: 5px;
    border-radius: 50%;
    background-color: ${colors.darkTransparent};
  }
`;
export const IconSquareUnselect = styled(MdCheckBoxOutlineBlank)`
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    background-color: ${colors.whiteTransparent};
  }
  &:active {
    padding: 5px;
    border-radius: 50%;
    background-color: ${colors.darkTransparent};
  }
`;
export const IconSquareSelect = styled(MdCheckBox)`
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    background-color: ${colors.whiteTransparent};
  }
  &:active {
    padding: 5px;
    border-radius: 50%;
    background-color: ${colors.darkTransparent};
  }
`;
export const IconSquareAllSelect = styled(MdIndeterminateCheckBox)`
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    background-color: ${colors.whiteTransparent};
  }
  &:active {
    padding: 5px;
    border-radius: 50%;
    background-color: ${colors.darkTransparent};
  }
`;
export const IconFilter = styled(FaFilter)`
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
    border-radius: 10%;
    background-color: ${colors.whiteTransparent};
  }
  &:active {
    border-radius: 10%;
    background-color: ${colors.darkTransparent};
  }
`;
