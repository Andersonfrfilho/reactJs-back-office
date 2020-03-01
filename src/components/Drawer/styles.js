import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaFonticons, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { colors, metrics } from '../../styles';

export const AreaDrawer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;
export const AreaHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: row;
  max-height: 68px;
  overflow: hidden;
`;
export const AreaPhoto = styled.div`
  display: flex;
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
  width: 100%;
`;
export const Text = styled.div`
  width: 100%;
  padding-left: 5px;
`;
export const AreaSearch = styled.div`
  display: flex;
  flex: 1;
  background: #a3c;
  max-height: 40px;
`;
export const AreaInputSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background: #12ccaa;
`;
export const InputSearch = styled.input`
  background-color: ${colors.white};
  border: none;
  width: 100%;
  height: 90%;
  padding-left: ${({ open }) => (open ? 5 : 0)}px;
  border-radius: 32px;
`;
export const AreaInputIconSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1fc123;
  min-width: 70px;
`;
export const AreaBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #412;
  overflow: hidden;
`;

export const AreaSubOption = styled.div`
  flex: 1;
  height: 24px;
  background-color: #126792;
`;
export const AreaOptionsList = styled.div`
  display: block;
`;
export const AreaOptions = styled.div`
  display: flex;
  background: #a3c;
  min-height: 40px;
`;
export const AreaOption = styled.div`
  display: flex;
  flex: 1;
  &:hover {
    cursor: pointer;
  }
`;
export const AreaIconOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1fc123;
  min-width: 70px;
`;
export const AreaTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #12ccff;
`;
export const AreaIconDownUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  background-color: #cc1;
  &:hover {
    cursor: pointer;
  }
`;
export const IconSeach = styled(FaSearch)``;
export const IconFont = styled(FaFonticons)``;
export const IconDown = styled(FaAngleDown)``;
export const IconUp = styled(FaAngleUp)``;
