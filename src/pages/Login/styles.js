import styled, { keyframes, css } from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { colors } from '../../styles';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AreaLogo = styled.div`
  flex: 1;
`;
export const AreaForm = styled.div`
  max-width: 700px;
  background-color: ${() => colors.white};
  border-radius: 4px;
  box-shadow: 0 0 20px ${() => colors.boxShadownTransparend};
  padding: 30px;
  margin: 80px auto;
  font-size: 1.5em;
  border-radius: 4px;
`;

export const AreaInputIcon = styled.div`
  display: flex;
  flex: 1;
  background-color: #12ccff;
  flex-direction: row;
  border-radius: 4px;
  border-width: 32px;
  border-color: #45cc;
  padding: 5px;
`;
export const AreaInput = styled.div`
  display: flex;
  flex: 4;
`;
export const Input = styled.input`
  width: 100%;
  background-color: none;
  border-width: 0;
`;
export const AreaIcon = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconUser = styled(FaUserAlt)``;
const rotate = keyframes`
  from {
    transform:rotate(0deg)
  }to{
    transform:rotate(360deg)
  }
`;
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
