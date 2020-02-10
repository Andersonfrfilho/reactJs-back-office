import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const Container = styled.div`
  /* largura maxima */
  max-width: 700px;
  background: ${() => colors.white};
  border-radius: 4px;
  box-shadow: 0 0 20px ${() => colors.boxShadownTransparend};
  padding: ${() => metrics.basePadding + 10}px;
  margin: 80px auto;
  display: flex;
`;
