import React, { FunctionComponent } from "react";
import { ContentContainer } from "../styles/page-styles";
import Starfield from "../components/starfield";
import styled from "styled-components";

const StyledStarfield = styled(Starfield)`
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

type Props = {
  age: number;
};

export const PlanetsPage: FunctionComponent<Props> = ({ age }) => {
  return (
    <>
      <StyledStarfield />
      <ContentContainer>
        <h1>Planets Page</h1>
        <p>Age is {age}</p>
      </ContentContainer>
    </>
  );
};
