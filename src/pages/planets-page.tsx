import React, { FunctionComponent, useEffect, useState } from "react";
import { ContentContainer, StyledButton } from "../styles/page-styles";
import Starfield from "../components/starfield";
import styled from "styled-components";
import { collection, Firestore, getDocs } from "firebase/firestore";
import type { Planet } from "../types/content";
import { GlowingPlanet, PlanetProfilePage } from "./planet-profile-page";
import { circle, sideToSide } from "../styles/styles";

const StyledStarfield = styled(Starfield)`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const Gravity = styled.div<{ offset: number }>`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  animation: ${sideToSide} 3s infinite ${(p) => p.offset}s ease-in-out alternate;
`;

const Satellite = styled(GlowingPlanet)<{ offset: number }>`
  margin-left: -200px;
  transform-origin: 200px center;
  animation: ${circle} 6s infinite ${(p) => p.offset}s linear;
`;

type Props = {
  age: number;
  db: Firestore;
  onBack: () => void;
};

export const PlanetsPage: FunctionComponent<Props> = ({ age, db, onBack }) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [showProfile, setShowProfile] = useState(false);

  const getData = async () => {
    const planetsLocal: Planet[] = [];
    const querySnapshot = await getDocs(collection(db, "content"));
    querySnapshot.forEach((doc) => {
      planetsLocal.push(doc.data() as Planet);
    });
    setPlanets(planetsLocal);
  };

  useEffect(() => {
    getData();
  }, []);

  const isHome = (offset: number) => age % planets.length === offset;
  const homePlanet = planets.find((p) => isHome(p.offset));

  const renderPlanetsPage = () => (
    <ContentContainer>
      <h1>Planets Page</h1>
      <p>Age is {age}</p>
      <div>
        {planets
          .sort((lhs, rhs) => lhs.offset - rhs.offset)
          .map(({ offset, colors }) => {
            const timeOffset = -offset / 2;
            return (
              <Gravity offset={timeOffset}>
                <Satellite colors={colors} scale={0.1} offset={timeOffset} />
              </Gravity>
            );
          })}
      </div>
      <StyledButton
        onClick={() => {
          setShowProfile(true);
        }}
      >
        {">"}
      </StyledButton>
    </ContentContainer>
  );

  return (
    <>
      {/* <StyledStarfield /> */}
      {showProfile && homePlanet ? (
        <PlanetProfilePage planet={homePlanet} onBack={onBack} />
      ) : (
        renderPlanetsPage()
      )}
    </>
  );
};
