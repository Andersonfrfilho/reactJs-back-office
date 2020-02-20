import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaPowerOff } from 'react-icons/fa';
import { colors, metrics } from '../../styles';

export const AreaDrawer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #125ccf;
`;
export const AreaHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: row;
  max-height: 68px;
  background-color: #ccaa12;
`;
export const AreaPhoto = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #aaffcc;
  min-width: ${({ open }) => (open ? 200 : 70)}px;
`;
export const Photo = styled.img`
  background-color: #12ccaa;
  width: 80%;
  height: 80%;
  border: solid;
  border-width: 3px;
  border-radius: 32px;
  box-shadow: 0 0 20px ${() => colors.boxShadownTransparend};
`;
export const AreaInfo = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  background-color: #456ffc;
`;
export const Title = styled.div`
  padding-left: 5px;
  flex: 1;
`;
export const Text = styled.div`
  flex: 1;
  padding-left: 5px;
`;
export const AreaBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #412;
`;
export const AreaOptions = styled.div`
  display: flex;
  height: ${({ expand }) => (expand ? 100 : 48)}px;
  flex-direction: column;
  background-color: #12ccff;
`;
export const AreaSubOption = styled.div`
  flex: 1;
  height: 24px;
  background-color: #126792;
`;
