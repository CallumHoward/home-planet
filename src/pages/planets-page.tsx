import React, { FunctionComponent } from "react";
import { ContentContainer } from "../styles/page-styles";

type Props = {
  age: number;
};

export const PlanetsPage: FunctionComponent<Props> = ({age}) => {
  return (
    <ContentContainer>
      <h1>Planets Page</h1>
      <p>Age is {age}</p>
    </ContentContainer>
  );
};
