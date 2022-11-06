import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import MainHeaderLayout from '../components/layout/MainHeaderLayout';
import CustomSelect from '../components/select/CustomSelect';
import useAdManagement from '../hooks/useAdManagement';
import useFilterAdManagement from '../hooks/useFilterAdManagement';
import { adManagementCardListSelector } from '../recoil/adManagement';
import {
  CardLayoutStyle,
  FlexBox,
  FlexStyle,
  GrayFontParagraph,
  PageTitleH2,
} from '../style/common.style';

const AdvertisingManagement = () => {
  useAdManagement();
  const adManagementCardList = useRecoilValue(adManagementCardListSelector);
  const { status, onStatusChange } = useFilterAdManagement();

  return (
    <MainHeaderLayout>
      <PageTitleH2>광고관리</PageTitleH2>
      <AdManagementCardSection flexDirection="column" gap="4rem">
        <FlexBox justifyContent="space-between">
          {/* TODO: react-select */}
          <CustomSelect
            defaultValue={{ label: '전체', value: 'all' }}
            options={[
              { label: '전체', value: 'all' },
              { label: '진행중', value: 'processing' },
              { label: '중단됨', value: 'exit' },
            ]}
            onChange={onStatusChange}
            padding="0.4rem 0.2rem"
            isLightFont
          />
          <AdCreateButton>광고 만들기</AdCreateButton>
        </FlexBox>
        <AdCardSection gap="2rem">
          {adManagementCardList.map(listItem => (
            <AdCardArticle key={listItem.id} flexDirection="column" gap="2rem">
              <CardTitleH2>{listItem.title}</CardTitleH2>
              <CardContentList>
                {listItem.report.map(reportItem => (
                  <ContentItem key={reportItem.key}>
                    <GrayFontParagraph>{reportItem.name}</GrayFontParagraph>
                    <ContentParagraph>{reportItem.value}</ContentParagraph>
                  </ContentItem>
                ))}
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
    flex: 1 1 50%;
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
  height: 4rem;
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
