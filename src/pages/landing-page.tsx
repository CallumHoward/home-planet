import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { doc, Firestore, setDoc } from "firebase/firestore";
import {
  ContentContainer,
  StyledButton,
  StyledInput,
} from "../styles/page-styles";
import { neon2 } from "../styles/styles";

const StyledH1 = styled.h1`
  font-family: "xirodregular", Arial, sand-serif;
  font-weight: normal;
  font-style: normal;

  font-size: 8rem;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }

  letter-spacing: 0.5rem;
  color: #ffffff;

  animation: ${neon2} 5s ease-in-out infinite alternate;
  animation-play-state: paused;
`;

const StyledP = styled.p`
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
  font-family: forgottenfuturistregular, Arial, Helvetica, sans-serif;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;

type Props = {
  age: number | undefined;
  onChangeAge: (newAge: number) => void;
  onContinue: () => void;
  db: Firestore;
};

export const LandingPage: FunctionComponent<Props> = ({
  age,
  onChangeAge,
  onContinue,
  db,
}) => {
  const [name, setName] = useState<string | undefined>();

  const setHome = async (name: string, age: number) => {
    const contentRef = doc(db, "visitors", name);
    await setDoc(contentRef, { name, age });
  };

  return (
    <ContentContainer>
      <StyledH1>
        HOME
        <br />
        PLANET
      </StyledH1>
      <StyledP>
        <b>FIND YOUR WAY HOME</b>
      </StyledP>
      <div>
        <StyledInput
          placeholder={"Name..."}
          onChange={(e) => setName(e.target.value)}
        ></StyledInput>
        <StyledInput
          type={"number"}
          placeholder={"Age..."}
          onChange={(e) => onChangeAge(parseInt(e.target.value))}
        ></StyledInput>
        <StyledButton
          onClick={() => {
            if (!!name && !!age) {
              setHome(name, age);
            }
            !!age && onContinue();
          }}
        >
          {">"}
        </StyledButton>
      </div>
    </ContentContainer>
  );
};
