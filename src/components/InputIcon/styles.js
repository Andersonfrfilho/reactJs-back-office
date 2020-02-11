import styled, { injectGlobal } from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { colors, metrics, fonts } from '../../styles';
import Montserrat from '../../assets/fonts/Roboto-Regular.ttf';

injectGlobal`
  @font-face {
    font-family: Montserrat, sans-serif;
    src: url(${Montserrat});
  }
`;
export const AreaInputIcon = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 40px;
  border-radius: 4px;
  border-style: solid;
  border-width: 4px;
  border-color: ${() => colors.light};
  border-radius: 8px;
`;
export const AreaInput = styled.div`
  display: flex;
  flex: 4;
  padding: 5px;
`;
export const Input = styled.input`
  width: 100%;
  font-family: 'Roboto-Regular';
  font-size: ${metrics.fontSize + 4}px;
  background-color: none;
  border-width: 0;
  border-radius: 4px 0px 0px 4px;
  outline: none;
  :focus {
    border-color: #125;
  }
`;
export const AreaIcon = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${() => colors.light};
`;

export const IconUser = styled(FaUserAlt)``;
