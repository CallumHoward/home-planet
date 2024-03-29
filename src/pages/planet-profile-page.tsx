import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Soul } from "../components/soul";
import { ContentContainer, StyledButton } from "../styles/page-styles";
import { neon2, primary, secondary, secondaryGlow } from "../styles/styles";
import type { Planet } from "../types/content";

const PlanetNameContainer = styled.div`
  text-align: center;
  font-size: 7em;
`;

const SoulsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  * {
    margin: 1.5rem;
  }
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

const StyledSvg = styled.img`
  height: 5.5rem;
  filter: drop-shadow(0px 0px 10px ${secondaryGlow})
    drop-shadow(0 0 20px ${secondaryGlow}) drop-shadow(0 0 70px ${secondary})
    drop-shadow(0 0 80px ${secondary}) drop-shadow(0 0 100px ${secondary})
    drop-shadow(0px 0px 150px ${secondary});
`;

const Subtitle = styled.h2`
  font-family: forgottenfuturistregular, Arial, Helvetica, sans-serif;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 0.5rem 1rem 1rem;
  color: ${primary};
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const GlowingPlanet = styled.div<{ colors: string[]; scale: number }>`
  color: ${(p) => p.colors[0]};
  background: ${(p) => (p.colors.length > 2 ? p.colors[2] : p.colors[1])};
  width: ${(p) => p.scale * 300}px;
  height: ${(p) => p.scale * 300}px;
  border-radius: 50%;
  // inner glow
  box-shadow: inset 0 0 ${(p) => p.scale * 50}px #ffffff,
    // inner left primary short
    inset ${(p) => p.scale * 20}px 0 ${(p) => p.scale * 80}px
      ${(p) => p.colors[0]},
    // inner right secondary short
    inset ${(p) => p.scale * -20}px 0 ${(p) => p.scale * 80}px
      ${(p) => (p.colors.length >= 3 ? p.colors[3] : p.colors[1])},
    // inner left primary broad
    inset ${(p) => p.scale * 20}px 0 ${(p) => p.scale * 300}px
      ${(p) => p.colors[1]},
    // inner right secondary broad
    inset ${(p) => p.scale * -20}px 0 ${(p) => p.scale * 300}px
      ${(p) => (p.colors.length >= 2 ? p.colors[2] : p.colors[1])},
    // outer glow
    0 0 ${(p) => p.scale * 50}px ${(p) => p.colors[1]},
    // outer left primary
    ${(p) => p.scale * -10}px 0 ${(p) => p.scale * 80}px ${(p) => p.colors[0]},
    // outer right secondary
    ${(p) => p.scale * 10}px 0 ${(p) => p.scale * 80}px ${(p) => p.colors[0]};
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
  visitorNames: string[];
  onBack: () => void;
};

export const PlanetProfilePage: FunctionComponent<Props> = ({
  planet,
  visitorNames,
  onBack,
}) => {
  return (
    <ContentContainer>
      <ProfileContainer>
        <LeftContainer>
          <GlowingPlanet colors={planet.colors} scale={1} />
        </LeftContainer>
        <RightContainer>
          {planet.symbol.endsWith(".svg") ? (
            <Symbol>
              <StyledSvg
                src={`assets/planets/${planet.symbol}`}
                alt="planet-symbol"
              />
            </Symbol>
          ) : (
            <Symbol>{planet.symbol}</Symbol>
          )}
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
      <Subtitle>Souls who are home here</Subtitle>
      <SoulsContainer>
        {visitorNames.map((name: string, i: number) => (
          <Soul key={i} name={name} />
        ))}
      </SoulsContainer>
      <ContainerShadow />
    </ContentContainer>
  );
};
