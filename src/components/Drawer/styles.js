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
  background-color: #1235;
`;
export const Svg = styled.svg`
  display: flex;

  height: 48px;
  width: 48px;
  background-color: #124cca;
  border-style: solid;
  border-width: 2px;
  border-radius: 24px;
  border-color: ${() => colors.lightsmaller};
  transition-duration: 0.4s;
`;
export const Image = styled.image`
  background-color: #412;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition-duration: 0.4s;
`;

export const AreaInfo = styled.div`
  display: flex;
  flex: 3.5;
  flex-direction: column;
  background-color: #aaffcc;
  transition-duration: 0.4s;
`;
export const InfoTitle = styled.text`
  flex: 1;
  transition-duration: 0.4s;
`;
export const InfoText = styled.text`
  flex: 1;
  transition-duration: 0.4s;
`;
export const AreaBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  transition-duration: 0.4s;
`;
export const AreaOptions = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const AreaOption = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  background-color: #3412cc;
  transition-duration: 0.4s;
  &:hover {
    cursor: pointer;
    background-color: ${() => colors.lightsmaller};
    transition-duration: 0.7s;
  }
`;
export const AreaIcon = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;
  align-items: center;
  padding: 5px;
  transition-duration: 0.4s;
`;
export const Icon = styled(FaPowerOff)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  transition-duration: 0.4s;
`;
export const AreaTitle = styled.div`
  display: flex;
  flex: 3.5;
  justify-content: center;
  align-items: center;
  transition-duration: 0.4s;
`;
export const Title = styled.text`
  flex: 1;
  transition-duration: 0.4s;
`;
export const SubOption = styled.div`
  flex: 1;
  background-color: #451236;
`;
