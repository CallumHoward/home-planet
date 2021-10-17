import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ContentContainer, StyledButton } from "../styles/page-styles";
import { neon2, primary } from "../styles/styles";
import { Planet } from "../types/content";

const PlanetNameContainer = styled.div`
  text-align: center;
  font-size: 7em;
`;

const StyledH1 = styled.h1`
  font-family: "xirodregular", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;

  margin: 0.5rem 1rem 1rem;
  font-size: 4rem;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
  letter-spacing: 0.5rem;
  color: #ffffff;

  animation: ${neon2} 5s ease-in-out infinite alternate;
  animation-play-state: paused;
`;

const Subtitle = styled.h2`
  margin: 0.5rem 1rem 1rem;
  font-size: 1.5rem;
  color: ${primary};
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DescriptionContainer = styled.div`
  display: flex;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 4rem;
  flex: 1;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 4rem;
  flex: 1;
  flex-grow: 1;
`;

const StyledP = styled.p`
  text-align: justify;
  line-height: 2.5rem;
  font-size: 1.25rem;
`;

const Symbol = styled(StyledH1)`
  font-size: 5.5rem;
  font-family: Arial, sans-serif;
`;

const GlowingPlanet = styled.div<{ colors: string[] }>`
  background: ${(p) => (p.colors.length > 2 ? p.colors[2] : "#f8f")};
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

const ContainerShadow = styled.div`
  width: 100vw;
  height: 0.5rem;
  bottom: -0.5rem;
  margin: 0;

  position: fixed;
  box-shadow: 0rem -0.5rem 1rem 0.2rem #000000;
`;

type Props = {
  planet: Planet;
  onBack: () => void;
};

export const PlanetProfilePage: FunctionComponent<Props> = ({
  planet,
  onBack,
}) => {
  return (
    <ContentContainer>
      <ProfileContainer>
        <LeftContainer>
          <GlowingPlanet colors={planet.colors} />
        </LeftContainer>
        <RightContainer>
          <Symbol>{planet.symbol}</Symbol>
          <PlanetNameContainer>
            <StyledH1>{planet.name}</StyledH1>
          </PlanetNameContainer>
          <Subtitle>{planet.subtitle}</Subtitle>
        </RightContainer>
      </ProfileContainer>
      <DescriptionContainer>
        <StyledP>
          <i>{planet.description}</i>
        </StyledP>
      </DescriptionContainer>
      <StyledButton onClick={onBack} style={{ marginBottom: "5rem" }}>
        {"<"}
      </StyledButton>
      <ContainerShadow />
    </ContentContainer>
  );
};
