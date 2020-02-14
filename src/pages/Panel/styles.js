import styled from 'styled-components';
import { colors } from '../../styles';

export const AreaPanel = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
export const AreaDrawerPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  height: 93.5vh;
  min-height: 100%;
`;
export const AreaDrawer = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: column;
  background-color: #45ccaa;
  min-width: 65px;
`;
export const AreaContent = styled.div`
  display: flex;
  flex: 9;
  background-color: #aaff11;
`;
