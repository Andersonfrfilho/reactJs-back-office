import styled from 'styled-components';
import { FaRegListAlt } from 'react-icons/fa';
import { IoIosPersonAdd, IoIosPeople } from 'react-icons/io';
import { colors } from '../../styles';

export const AreaPanel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
export const AreaDrawerPanel = styled.div`
  display: flex;
  flex: 1;
  background-color: ${props => props.color};
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  background-color: #124567;
`;
export const AreaDrawer = styled.div`
  display: flex;
  flex: ${({ open }) => (open ? 1.5 : 0.4)};
  min-width: ${({ open }) => (open ? 200 : 70)}px;
  flex-direction: column;
  transition-duration: 0.7s;
`;

export const AreaContent = styled.div`
  display: flex;
  flex: 9;
  flex-direction: column;
`;
export const IconUserList = styled(IoIosPeople)`
  color: ${colors.pickerEigth};
`;
export const IconRegisterUser = styled(IoIosPersonAdd)`
  color: ${colors.pickerEigth};
`;
