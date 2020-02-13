import styled, { injectGlobal } from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { colors, metrics, fonts } from '../../styles';

export const AreaButtonIcon = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 40px;
  padding-top: 10px;
`;
export const Button = styled.button`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center; /*flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe*/
  align-items: center;
  /* border: solid 4px; */
  text-transform: uppercase;
  background-color: white;
  color: ${() => colors.dark};
  border: 2px solid ${() => colors.lightsmaller};
  border-radius: 4px;
  /* transition: transform 300ms ease-in-out; */
  transition-duration: 0.4s;

  &:hover {
    /* transform: translate(200px, 150px) rotate(20deg); */
    background-color: ${() => colors.lightsmaller};
  }
`;
export const IconUser = styled(FaUserAlt)`
  color: ${() => colors.dark};
  margin-left: 20px;
`;
