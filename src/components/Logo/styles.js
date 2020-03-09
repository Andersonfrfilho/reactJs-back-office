import styled from 'styled-components';
import { colors } from '../../styles';

export const AreaSvg = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AreaTitle = styled.div`
  display: flex;
  height: 20px;
  justify-content: center;
`;
export const Title = styled.p`
  flex: 1;
  align-items: center;
  color: ${({ error }) => (error ? colors.danger : colors.dark)};
  transition-duration: 0.7s;
  @media (min-width: 300px) {
    font-size: 10px;
  }
  @media (min-width: 400px) {
    font-size: 12px;
  }
  @media (min-width: 800px) {
    font-size: 14px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;
export const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;
export const Image = styled.image`
  width: 100%;
  height: 100%;
`;
