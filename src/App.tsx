import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { EnterPage } from "./pages/enter-page";
import { LandingPage } from "./pages/landing-page";
import { PlanetsPage } from "./pages/planets-page";
import { TitlesPage } from "./pages/titles-page";
import { StyledButton as StyledButtonBase } from "./styles/page-styles";
import { secondary } from "./styles/styles";
// import { upsertDb } from "./fixtures/content";

const StyledApp = styled.div`
  color: ${secondary};
`;

const StyledButton = styled(StyledButtonBase)`
  opacity: 75%;
  transform: scale(0.75);
  :hover {
    opacity: 100%;
  }

  position: fixed;
  bottom: 1rem;
  left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi4ev_ST3j2i10a7KcVeaDzeumJlNj1uE",
  authDomain: "home-planet-af50f.firebaseapp.com",
  projectId: "home-planet-af50f",
  storageBucket: "home-planet-af50f.appspot.com",
  messagingSenderId: "777298492038",
  appId: "1:777298492038:web:4f9e2bf280389d272f6f07",
  measurementId: "G-8GK3YZCHEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// db.settings({ timestampsInSnapshots: true });
const analytics = getAnalytics(app);

export const App = () => {
  const [currentPage, setCurrentPage] = useState("enter");
  const [age, setAge] = useState<number | undefined>();
  const [muted, setMuted] = useState<boolean>(false);

  useEffect(() => {
    // upsertDb(db);
  }, []);

  const audioRef = useRef<HTMLAudioElement>(null);
  const playMusic = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
  };

  const renderDefaultPage = () => {
    return (
      <LandingPage
        age={age}
        onChangeAge={(newAge: number) => setAge(newAge)}
        onContinue={() => setCurrentPage("planets")}
        db={db}
      />
    );
  };

  const renderPage = (page: string) => {
    switch (page) {
      case "planets":
        if (age) {
          return (
            <PlanetsPage age={age} db={db} onBack={() => setCurrentPage("")} />
          );
        }
        return renderDefaultPage();
      case "titles":
        return <TitlesPage onNext={() => setCurrentPage("landing")} />;
      case "enter":
        return (
          <EnterPage
            onNext={() => {
              setCurrentPage("titles");
              playMusic();
            }}
          />
        );
      default:
        return renderDefaultPage();
    }
  };

  return (
    <>
      <StyledApp className="App">{renderPage(currentPage)}</StyledApp>
      <StyledButton onClick={() => setMuted(!muted)}>
        <span className="material-icons">
          {muted ? "volume_off" : "volume_up"}
        </span>
      </StyledButton>
      <audio ref={audioRef} loop muted={muted}>
        <source
          src="assets/betarecords_neptunethemysticgustavholst.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  );
};
