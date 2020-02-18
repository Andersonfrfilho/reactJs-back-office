import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaPowerOff } from 'react-icons/fa';
import { colors, metrics } from '../../styles';

export const AreaHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 100%;
  background-color: #4567cc;
`;
export const AreaItems = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  justify-content: ${({ positionLine }) => positionLine};
  align-items: center;
  background-color: ${({ color }) => color};
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const DrawerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  text-transform: uppercase;
  background-color: white;
  color: ${() => colors.dark};
  border: 2px solid ${() => colors.lightsmaller};
  border-radius: 40px;
  /* transition: transform 300ms ease-in-out; */
  transition-duration: 0.6s;
  box-shadow: 1px 3px 1px ${() => colors.boxShadownTransparend};
  &:hover {
    /* transform: translate(200px, 150px) rotate(20deg); */
    background-color: ${() => colors.lightsmaller};
  }
  &:active {
    background-color: ${() => colors.boxShadownTransparend};
  }
`;
export const DrawerIcon = styled(FaBars)`
  font-size: ${() => metrics.fontSize + 8}px;
`;
export const DrawerOff = styled(FaPowerOff)`
  font-size: ${() => metrics.fontSize + 8}px;
`;
