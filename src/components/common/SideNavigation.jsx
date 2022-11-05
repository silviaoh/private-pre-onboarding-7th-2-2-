import React from 'react';
import styled from 'styled-components';
import { iconMenu01Off, iconMenu02Off } from '../../assets';
import { Link } from 'react-router-dom';

const SideNavigation = () => {
  return (
    <SideNavigationLayout>
      <SideNavigationHeader>
        <LogoImageBox></LogoImageBox>
      </SideNavigationHeader>
      <SideNavigationSection>
        <ServiceSection>
          <NavTitleH3>서비스</NavTitleH3>
          {/* TODO: react-select */}
        </ServiceSection>
        <AdvertisementCenterSection>
          <NavTitleH3>광고 센터</NavTitleH3>
          <AdvertisementCenterNav>
            <Link to="/">
              <NavIconBox>
                <img src={iconMenu01Off} alt="dashboard" />
              </NavIconBox>
              <NavSpan>대시보드</NavSpan>
            </Link>
            <Link to="/manage">
              <NavIconBox>
                <img src={iconMenu02Off} alt="advertisement" />
              </NavIconBox>
              <NavSpan>광고관리</NavSpan>
            </Link>
          </AdvertisementCenterNav>
        </AdvertisementCenterSection>
        <LeverExtraSection>
          <BlueGuideBox>
            <GuideIconBox></GuideIconBox>
            <GuideDescriptionBox>
              <GuideH3>레버 이용 가이드</GuideH3>
              <GuideSpan>시작하기 전에 알아보기</GuideSpan>
            </GuideDescriptionBox>
          </BlueGuideBox>
          <ExtraBox>
            <ExtraParagraph>레버는 함께 만들어갑니다.</ExtraParagraph>
            <Link to="#">이용약관</Link>
          </ExtraBox>
        </LeverExtraSection>
      </SideNavigationSection>
    </SideNavigationLayout>
  );
};

export default SideNavigation;

const SideNavigationLayout = styled.aside``;

const SideNavigationHeader = styled.header``;

const SideNavigationSection = styled.section``;

const ServiceSection = styled.section``;

const AdvertisementCenterSection = styled.section``;

const LeverExtraSection = styled.section``;

const AdvertisementCenterNav = styled.nav``;

const LogoImageBox = styled.div``;

const NavIconBox = styled.div``;

const BlueGuideBox = styled.div``;

const GuideIconBox = styled.div``;

const GuideDescriptionBox = styled.div``;

const ExtraBox = styled.div``;

const NavTitleH3 = styled.h3``;

const GuideH3 = styled.h3``;

const NavSpan = styled.span``;

const GuideSpan = styled.span``;

const ExtraParagraph = styled.p``;
