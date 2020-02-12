import styled, { injectGlobal } from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { colors, metrics, fonts } from '../../styles';

export const AreaButtonIcon = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 40px;
  padding-top: 10px;
  background-color: #44ccff;
`;
export const AreaButton = styled.button`
  flex: 1;
`;
export const IconUser = styled(FaUserAlt)`
  color: ${() => colors.darker};
`;
