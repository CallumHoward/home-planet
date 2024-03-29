import React, { FunctionComponent, useEffect, useState } from "react";
import { ContentContainer } from "../styles/page-styles";
import Starfield from "../components/starfield";
import styled, { keyframes } from "styled-components";
import { collection, Firestore, getDocs, onSnapshot } from "firebase/firestore";
import type { Planet } from "../types/content";
import { GlowingPlanet, PlanetProfilePage } from "./planet-profile-page";
import { circle, zoom } from "../styles/styles";

const TRANSITION_DELAY = 5;
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
  animation: ${keyframes`
    to {
      transform: translateX(400px);
    }
  `} 6s infinite ${(p) => p.offset}s ease-in-out alternate;

  @media only screen and (max-width: 768px) {
    margin-left: -100px;
    animation: ${keyframes`
      to {
        transform: translateX(200px);
      }
    `} 6s infinite ${(p) => p.offset}s ease-in-out alternate;
  }
`;

const Satellite = styled(GlowingPlanet)<{ offset: number }>`
  margin-left: -200px;
  transform-origin: 200px center;

  @media only screen and (max-width: 768px) {
    margin-left: -100px;
    transform-origin: 100px center;
  }

  animation: ${circle} 12s infinite ${(p) => p.offset}s linear;
`;

type Visitor = {
  name: string;
  age: number;
};

type Props = {
  age: number;
  db: Firestore;
  onBack: () => void;
};

export const PlanetsPage: FunctionComponent<Props> = ({ age, db, onBack }) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [showProfile, setShowProfile] = useState(false);
  const [visitorNames, setVisitorNames] = useState<string[]>([]);

  const getData = async () => {
    const planetsLocal: Planet[] = [];
    const querySnapshot = await getDocs(collection(db, "content"));
    querySnapshot.forEach((doc) => {
      planetsLocal.push(doc.data() as Planet);
    });
    setPlanets(planetsLocal);
  };

  const handleVisitorChanges = (snapshot: any) => {
    const visitorsLocal: Visitor[] = [];
    const removeIds: string[] = [];
    const changes = snapshot.docChanges();
    changes.forEach((change: any) => {
      if (change.type === "added") {
        visitorsLocal.push(change.doc.data() as Visitor);
      } else if (change.type === "removed") {
        removeIds.push(change.doc.id);
      }
    });

    const newNames = visitorsLocal
      .filter((v) => v.age % 12 === age % 12)
      .map((v) => v.name);
    setVisitorNames((currentNames) =>
      currentNames.concat(newNames).filter((n) => !removeIds.includes(n))
    ); // works because id is also name
  };

  useEffect(() => {
    console.info("Reading data");
    getData().then(() => {
      setTimeout(() => {
        setShowProfile(true);
      }, (TRANSITION_DELAY + 1) * 1000);
    });
    const query = collection(db, "visitors");
    const unsubscribe = onSnapshot(query, handleVisitorChanges, (err: any) => {
      console.error(err);
    });
    return unsubscribe;
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
        <PlanetProfilePage
          planet={homePlanet}
          visitorNames={visitorNames}
          onBack={onBack}
        />
      ) : (
        renderPlanetsPage()
      )}
    </>
  );
};
