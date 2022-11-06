import React from 'react';
import styled from 'styled-components';
import MainHeaderLayout from '../components/layout/MainHeaderLayout';
import {
  CardLayoutStyle,
  FlexBox,
  FlexStyle,
  GrayFontParagraph,
  PageTitleH2,
} from '../style/common.style';

const AdvertisingManagement = () => {
  return (
    <MainHeaderLayout>
      <PageTitleH2>광고관리</PageTitleH2>
      <AdManagementCardSection flexDirection="column" gap="4rem">
        <FlexBox justifyContent="space-between">
          {/* TODO: react-select */}
          <AdCreateButton>광고 만들기</AdCreateButton>
        </FlexBox>
        <AdCardSection gap="2rem">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <AdCardArticle flexDirection="column" gap="2rem">
              <CardTitleH2>웹광고_202106031203030</CardTitleH2>
              <CardContentList>
                <ContentItem>
                  <GrayFontParagraph>상태</GrayFontParagraph>
                  <ContentParagraph>진행중</ContentParagraph>
                </ContentItem>
                <ContentItem>
                  <GrayFontParagraph>광고 생성일</GrayFontParagraph>
                  <ContentParagraph>2021-06-04</ContentParagraph>
                </ContentItem>
              </CardContentList>
              <AdModifyButton>수정하기</AdModifyButton>
            </AdCardArticle>
          ))}
        </AdCardSection>
      </AdManagementCardSection>
    </MainHeaderLayout>
  );
};

export default AdvertisingManagement;

const AdManagementCardSection = styled.section`
  ${CardLayoutStyle}
  ${FlexStyle}
  margin-top: 3rem;
`;
const CreateAdSection = styled.section``;
const AdCardSection = styled.section`
  ${FlexStyle}
  flex-wrap: wrap;
`;
const AdCardArticle = styled.article`
  ${FlexStyle}
  min-width: 30.5rem;
  padding: 4rem 2rem;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
`;
const CardContentList = styled.ul``;
const ContentItem = styled.li`
  ${FlexStyle}
  padding: 1.3rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.BORDER_GRAY};
  }

  > p {
    flex-grow: 1;
  }
`;

const CardTitleH2 = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: 700;
`;

const ContentParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const AdCreateButton = styled.button`
  padding: 1.2rem 2rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.PURPLE};
  border-radius: 10px;
`;
const AdModifyButton = styled.button`
  width: 10rem;
  padding: 1.2rem 2rem;
  font-weight: 700;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: 1px solid #d1d8dc;
  border-radius: 10px;
`;
