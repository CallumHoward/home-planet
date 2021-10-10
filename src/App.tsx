import React, { useState } from "react";
import styled from "styled-components";
import { LandingPage } from "./pages/landing-page";
import { PlanetsPage } from "./pages/planets-page";
import { secondary } from "./styles/styles";

const StyledApp = styled.div`
  color: ${secondary};
`;

export const App = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [age, setAge] = useState<number | undefined>();

  const renderDefaultPage = () => {
    return (
      <LandingPage
        age={age}
        onChangeAge={(newAge: number) => setAge(newAge)}
        onContinue={() => setCurrentPage("planets")}
        />
    );
  }

  const renderPage = (page: string) => {
    switch (page) {
      case "planets":
        if (age) {
          return <PlanetsPage age={age} />;
        }
        return renderDefaultPage();
      default:
        return renderDefaultPage();
    }
  };

  return <StyledApp className="App">{renderPage(currentPage)}</StyledApp>;
};
