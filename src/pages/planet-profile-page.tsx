import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ContentContainer } from "../styles/page-styles";
import { primary } from "../styles/styles";
import { Planet } from "../types/content";

const StyledH1 = styled.h1`
  font-family: "xirodregular", Arial, sand-serif;
  font-weight: normal;
  font-style: normal;

  margin: 0.5rem 1rem 1rem;
  font-size: 4rem;
  color: ${primary};
  -webkit-box-shadow: 2px 1px 50px -6px #ffffff;
  box-shadow: 2px 1px 50px -6px #ffffff;
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

const GlowingPlanet = styled.div`
  background: #f8f;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #fff, /* inner white */ inset 20px 0 80px #f0f,
    /* inner left magenta short */ inset -20px 0 80px #0ff,
    /* inner right cyan short */ inset 20px 0 300px #f0f,
    /* inner left magenta broad */ inset -20px 0 300px #0ff,
    /* inner right cyan broad */ 0 0 50px #fff,
    /* outer white */ -10px 0 80px #f0f,
    /* outer left magenta */ 10px 0 80px #0ff; /* outer right cyan */
`;

type Props = {
  planet: Planet;
};

export const PlanetProfilePage: FunctionComponent<Props> = ({planet}) => {
  return (
    <ContentContainer>
      <ProfileContainer>
        <LeftContainer>
          {/* <img src="assets/saturn.png" /> */}
          <GlowingPlanet />
        </LeftContainer>
        <RightContainer>
          <Caption>You will be moving to</Caption>
          <StyledH1>{planet.name}</StyledH1>
          <SvgSymbol />
          <StyledP>{planet.description}</StyledP>
        </RightContainer>
      </ProfileContainer>
    </ContentContainer>
  );
};
