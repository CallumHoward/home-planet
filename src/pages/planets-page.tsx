import React, { FunctionComponent, useEffect, useState } from "react";
import { ContentContainer, StyledButton } from "../styles/page-styles";
import Starfield from "../components/starfield";
import styled from "styled-components";
import { collection, Firestore, getDocs } from "firebase/firestore";
import { Planet } from "../types/content";
import { PlanetProfilePage } from "./planet-profile-page";

const StyledStarfield = styled(Starfield)`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

type Props = {
  age: number;
  db: Firestore;
};

export const PlanetsPage: FunctionComponent<Props> = ({ age, db }) => {
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

  useEffect(() => {
    console.log("LOG Stage 1: planets-page.tsx:39");
    console.log("LOG showProfile: ", showProfile);
  }, [showProfile]);

  const isHome = (offset: number) => age % planets.length === offset;
  const homePlanet = planets.find((p) => isHome(p.offset));

  const renderPlanetsPage = () => (
    <ContentContainer>
      <h1>Planets Page</h1>
      <p>Age is {age}</p>
      <ul>
        {planets
          .sort((lhs, rhs) => lhs.offset - rhs.offset)
          .map(({ name, offset }) => {
            return (
              <li key={offset}>{isHome(offset) ? <b>{name}</b> : name}</li>
            );
          })}
      </ul>
      <StyledButton
        onClick={() => {
          setShowProfile(true);
          console.log("click");
        }}
      >
        {">"}
      </StyledButton>
    </ContentContainer>
  );

  return (
    <>
      <StyledStarfield />
      {showProfile && homePlanet ? (
        <PlanetProfilePage planet={homePlanet} />
      ) : (
        renderPlanetsPage()
      )}
    </>
  );
};
