import React from 'react';
import styled from 'styled-components';
import MainHeaderLayout from '../components/layout/MainHeaderLayout';
import { PageTitleH2 } from '../style/common.style';

const AdvertisingManagement = () => {
  return (
    <MainHeaderLayout>
      <PageTitleH2></PageTitleH2>
      <AdManagementCardSection>
        <CreateAdSection>
          {/* TODO: react-select */}
          <AdCreateButton>광고 만들기</AdCreateButton>
        </CreateAdSection>
        <AdCardSection>
          <AdCardArticle>
            <CardTitleH2></CardTitleH2>
            <CardContentList>
              <ContentItem>
                <ContentTitleH2>상태</ContentTitleH2>
                <ContentParagraph>진행중</ContentParagraph>
              </ContentItem>
            </CardContentList>
            <AdModifyButton>수정하기</AdModifyButton>
          </AdCardArticle>
        </AdCardSection>
      </AdManagementCardSection>
    </MainHeaderLayout>
  );
};

export default AdvertisingManagement;

const AdManagementCardSection = styled.section``;
const CreateAdSection = styled.section``;
const AdCardSection = styled.section``;
const AdCardArticle = styled.article``;
const CardContentList = styled.ul``;
const ContentItem = styled.li``;

const CardTitleH2 = styled.h2``;
const ContentTitleH2 = styled.h2``;
const ContentParagraph = styled.p``;

const AdCreateButton = styled.button``;
const AdModifyButton = styled.button``;
