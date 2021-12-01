import React, { FunctionComponent, useEffect, useState } from "react";
import { ContentContainer } from "../styles/page-styles";
import Starfield from "../components/starfield";
import styled from "styled-components";
import { collection, Firestore, getDocs } from "firebase/firestore";
import type { Planet } from "../types/content";
import { GlowingPlanet, PlanetProfilePage } from "./planet-profile-page";
import { circle, sideToSide, zoom } from "../styles/styles";

const TRANSITION_DELAY = 10;
const TRANSITION_DURATION = 5;

const PlanetsContainer = styled.div`
  margin-top: 50%;
  animation: ${zoom} ${TRANSITION_DURATION}s ease-in ${TRANSITION_DELAY}s;
`;

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
  animation: ${sideToSide} 6s infinite ${(p) => p.offset}s ease-in-out alternate;
`;

const Satellite = styled(GlowingPlanet)<{ offset: number }>`
  margin-left: -200px;
  transform-origin: 200px center;
  animation: ${circle} 12s infinite ${(p) => p.offset}s linear;
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
    console.info("Reading data");
    getData().then(() => {
      setTimeout(() => {
        setShowProfile(true);
      }, (TRANSITION_DELAY + 1) * 1000);
    });
  }, []);

  const isHome = (offset: number) => age % planets.length === offset;
  const homePlanet = planets.find((p) => isHome(p.offset));

  const renderPlanetsPage = () => (
    <ContentContainer>
      <PlanetsContainer>
        {planets
          .sort((lhs, rhs) => lhs.offset - rhs.offset)
          .map(({ offset, colors }) => {
            const timeOffset = -offset;
            return (
              <Gravity key={offset} offset={timeOffset}>
                <Satellite colors={colors} scale={0.1} offset={timeOffset} />
              </Gravity>
            );
          })}
      </PlanetsContainer>
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
