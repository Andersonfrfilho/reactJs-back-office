import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaPowerOff,
  FaAngleDown,
  FaAngleUp,
  FaArrowLeft,
} from 'react-icons/fa';
import { colors, metrics } from '../../styles';

export const AreaHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  width: 100%;
  background-color: ${colors.pickerOne};
`;
export const AreaItems = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  justify-content: ${({ positionLine }) => positionLine};
  align-items: center;
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
  margin-right:15px;
  background-color: transparent;
  color: ${() => colors.white};
  border:none;
  /* border: 2px solid ${() => colors.lightsmaller}; */
  border-radius: 40px;
  /* transition: transform 300ms ease-in-out; */
  transition-duration: 0.7s;
  /* box-shadow: 1px 3px 1px ${() => colors.boxShadownTransparend}; */
  &:hover {
    /* transform: translate(200px, 150px) rotate(20deg); */
    background-color: ${() => colors.darknesTransparent};
  }
  &:active {
    background-color: ${() => colors.whiteTransparent};
    color:${() => colors.white};
  }
`;

export const AreaSvg = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 42px;
`;
export const Image = styled.image`
  height: 100%;
  width: 100%;
`;
export const AreaUserButtonExpand = styled.div`
  display: block;
  top: 0;
  position: absolute;
  height: ${({ open }) => (open ? 116 : 58)}px;
  z-index: 2;

  cursor: pointer;
  @media (min-width: 400px) {
    width: 70px;
    left: 100%-70px;
  }
  @media (min-width: 800px) {
    width: 140px;
    left: 100%-140px;
  }
  @media (min-width: 1200px) {
    width: 210px;
    left: 100%-210px;
  }
`;
export const AreaUserButon = styled.div`
  display: flex;
  visibility: ${({ exist }) => (exist ? 'visible' : 'hidden')};
  height: 55px;
  background-color: ${colors.pickerFive};
  opacity: ${({ exist }) => (exist ? 1 : 0)};
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 3px;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-property: visibility, opacity;
  transition-timing-function: ease-out;
  &:hover {
    cursor: pointer;
    background-color: ${colors.pickerSix};
    transition-property: visibility, opacity, background-color;
    transition-duration: 0.7s;
  }
`;
export const AreaPhoto = styled.div`
  display: flex;
  flex: 1;
  height: 95%;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 29px;
  overflow: hidden;
  transition-duration: 0.7s;
  @media (min-width: 400px) {
    display: ${({ exist }) => (exist ? 'flex' : 'none')};
    flex: 1;
  }
  @media (min-width: 800px) {
    flex: 1;
  }
  @media (min-width: 1200px) {
    flex: 2;
  }
`;
export const Photo = styled.img`
  height: 100%;
  width: 100%;
`;
export const AreaTitle = styled.div`
  display: flex;
  flex: 4;
  justify-content: ${({ align }) => align};
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  transition-duration: 0.7s;
  @media (min-width: 400px) {
    display: none;
  }
  @media (min-width: 800px) {
    display: none;
  }
  @media (min-width: 1200px) {
    display: flex;
  }
`;
export const Title = styled.p`
  color: ${() => colors.white};
`;
export const AreaIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.7s;
  width: 40px;
  @media (min-width: 400px) {
    display: ${({ exist }) => (exist ? 'flex' : 'none')};
    flex: 1;
  }
  @media (min-width: 800px) {
    display: flex;
    flex: 1;
  }
  @media (min-width: 1200px) {
    display: flex;
    flex: 1;
  }
`;
export const IconDown = styled(FaAngleDown)`
  color: ${colors.white};
  transition-duration: 0.7s;
`;
export const IconUp = styled(FaAngleUp)`
  color: ${colors.white};
  transition-duration: 0.7s;
`;
export const IconBack = styled(FaArrowLeft)`
  color: ${colors.white};
  transition-duration: 0.7s;
`;
export const DrawerIcon = styled(FaBars)`
  color: ${colors.white};
  transition-duration: 0.7s;
  font-size: ${() => metrics.fontSize + 8}px;
`;
export const DrawerOff = styled(FaPowerOff)`
  color: ${colors.white};
  transition-duration: 0.7s;
  font-size: ${() => metrics.fontSize + 8}px;
`;
