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

export const GrayFontStyle = css`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.GRAPH_GRAY};
  white-space: nowrap;
`;

export const GrayFontParagraph = styled.p`
  ${GrayFontStyle}
`;

export const CardLayoutStyle = css`
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 20px;
`;

export const CardLayoutSection = styled.section`
  ${CardLayoutStyle}
`;

export const PageTitleH2 = styled.h2`
  font-size: 2.6rem;
  font-weight: 900;
`;
