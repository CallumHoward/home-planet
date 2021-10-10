import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ContentContainer } from "../styles/page-styles";
import { primary } from "../styles/styles";

type Props = {};

const StyledH1 = styled.h1`
  margin: 0.5rem 1rem 1rem;
  font-size: 4rem;
  color: ${primary};
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  margin: 2rem;
  flex: 1;
  width: 100%;
`;

const RightContainer = styled.div`
  margin: 2rem;
  flex: 1;
  width: 30rem;
`;

const Caption = styled(StyledH1)`
  font-size: 2rem;
`;

const StyledP = styled.p`
  line-height: 2rem;
`;

const SaturnSymbolUrl =
  "https://upload.wikimedia.org/wikipedia/commons/archive/7/74/20061003140009%21Saturn_symbol.svg";

const SvgSymbol = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  -webkit-mask: url(${SaturnSymbolUrl}) no-repeat center;
  mask: url(logo.svg) no-repeat center;
`;

export const PlanetProfilePage: FunctionComponent<Props> = () => {
  return (
    <ContentContainer>
      <ProfileContainer>
        <LeftContainer>
          <img src="assets/saturn.png" />
        </LeftContainer>
        <RightContainer>
          <Caption>You will be moving to</Caption>
          <StyledH1>Saturn</StyledH1>
          <SvgSymbol />
          <StyledP>
            Doggo ipsum heckin angery woofer blop I am bekom fat mlem dat tungg
            tho much ruin diet sub woofer adorable doggo the neighborhood
            pupper, very taste wow adorable doggo vvv pupper shooberino big ol
            doing me a frighten. Aqua doggo long doggo noodle horse most angery
            pupper I have ever seen h*ck smol borking doggo with a long snoot
            for pats, you are doing me a frighten wrinkler you are doing me the
            shock woofer. I am bekom fat vvv many pats, borkf. Blop you are
            doing me a frighten many pats blop corgo tungg, doggorino boofers
            corgo.
          </StyledP>
        </RightContainer>
      </ProfileContainer>
    </ContentContainer>
  );
};
