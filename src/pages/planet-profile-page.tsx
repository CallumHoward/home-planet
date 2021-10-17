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
`;

const Subtitle = styled.h2`
  margin: 0.5rem 1rem 1rem;
  font-size: 1.5rem;
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

const StyledP = styled.p`
  line-height: 2rem;
`;

const Symbol = styled.div`
  font-size: 4rem;
`;

const GlowingPlanet = styled.div<{ colors: string[] }>`
  background: ${p => p.colors.length > 2 ? p.colors[2] : "#f8f"};
  width: 300px;
  height: 300px;
  border-radius: 50%;
  // inner glow
  box-shadow: inset 0 0 50px #ffffff,
    // inner left primary short
    inset 20px 0 80px ${(p) => p.colors[0]},
    // inner right secondary short
    inset -20px 0 80px ${(p) => p.colors[1]},
    // inner left primary broad
    inset 20px 0 300px ${(p) => p.colors[0]},
    // inner right secondary broad
    inset -20px 0 300px ${(p) => p.colors[1]},
    // outer glow
    0 0 50px ${(p) => (p.colors.length >= 2 ? p.colors[2] : "#f0f")},
    // outer left primary
    -10px 0 80px ${(p) => p.colors[0]},
    // outer right secondary
    10px 0 80px ${(p) => p.colors[1]};
`;

type Props = {
  planet: Planet;
};

export const PlanetProfilePage: FunctionComponent<Props> = ({ planet }) => {
  return (
    <ContentContainer>
      <ProfileContainer>
        <LeftContainer>
          <GlowingPlanet colors={planet.colors} />
        </LeftContainer>
        <RightContainer>
          <Subtitle>YOU WILL BE MOVING TO</Subtitle>
          <StyledH1>{planet.name}</StyledH1>
          <Symbol>{planet.symbol}</Symbol>
          <Subtitle>{planet.subtitle}</Subtitle>
          <StyledP>{planet.description}</StyledP>
        </RightContainer>
      </ProfileContainer>
    </ContentContainer>
  );
};
