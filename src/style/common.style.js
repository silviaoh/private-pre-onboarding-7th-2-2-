import styled, { css } from 'styled-components';

/**
 * 공통으로 사용되는 스타일들
 */
export const FlexStyle = css`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;

export const FlexBox = styled.div`
  ${FlexStyle}
`;

export const PageTitleH2 = styled.h2``;
