import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaPowerOff } from 'react-icons/fa';
import { colors, metrics } from '../../styles';

export const AreaDrawer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 48px;
  width: 100%;
  background-color: #ffaacc;
`;
export const AreaHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  background-color: #12ccaa;
  margin-bottom: 5px;
`;
export const AreaPhoto = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;
export const Svg = styled.svg`
  width: 100%;
  height: 48px;
  background-color: #124cca;
  border-style: solid;
  border-width: 2px;
  border-radius: 24px;
  border-color: ${() => colors.lightsmaller};
`;
export const Image = styled.image`
  background-color: #412;
  width: 100%;
  height: 100%;
`;

export const AreaInfo = styled.div`
  display: flex;
  flex: 3.5;
  flex-direction: column;
  background-color: #aaffcc;
`;
export const InfoTitle = styled.text`
  flex: 1;
`;
export const InfoText = styled.text`
  flex: 1;
`;
export const AreaBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const AreaOption = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  background-color: #3412cc;
`;
export const AreaIcon = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
export const Icon = styled(FaPowerOff)`
  flex: 1;
  width: 100%;
  height: 100%;
`;
export const AreaTitle = styled.div`
  display: flex;
  flex: 3.5;
  justify-content: center;
  align-items: flex-start;
`;
export const Title = styled.text`
  flex: 1;
`;
