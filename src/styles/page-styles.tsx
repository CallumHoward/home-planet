import styled from "styled-components";
import { secondary } from "./styles";

export const ContentContainer = styled.div`
  min-height: 100%;

  padding: 20%;
  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }

  > * {
    margin-bottom: 2rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledInput = styled.input`
  font-size: 1.5rem;
  width: 12rem;
  height: 2.5rem;
  margin: 2rem 1rem;
  padding: 0.5rem 1rem;

  border: 2px solid ${secondary};
  background: black;
  color: white;
`;

export const StyledButton = styled.button`
  z-index: 15;
  font-size: 1.5rem;
  height: 2.5rem;
  width: 2.5rem;
  margin: 2rem 1rem;
  padding: 0.5rem;
  box-sizing: content-box;

  border: 2px solid ${secondary};
  background: black;
  color: ${secondary};
`;
