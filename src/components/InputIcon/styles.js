import styled, { injectGlobal } from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { colors, metrics, fonts } from '../../styles';
import Montserrat from '../../assets/fonts/Roboto-Regular.ttf';

export const AreaInputIcon = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 40px;
  padding-top: 10px;
`;
export const AreaInput = styled.div`
  display: flex;
  flex: 4;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-radius: 4px 0px 0px 4px;
  border-color: ${() => colors.lightsmaller};
  padding-left: 5px;
  padding-right: 5px;
`;
export const Input = styled.input`
  width: 100%;
  font-size: ${metrics.fontSize + 4}px;
  border-width: 0px;
  background-color: none;
  outline: none;
  :focus {
    border-color: none;
  }
`;
export const AreaIcon = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 2px 2px 2px 0px;
  border-radius: 0px 4px 4px 0px;
  border-color: ${() => colors.lightsmaller};
`;

export const IconUser = styled(FaUserAlt)`
  color: ${() => colors.dark};
`;
