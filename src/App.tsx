import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { LandingPage } from "./pages/landing-page";
import { PlanetsPage } from "./pages/planets-page";
// import { TitlesPage } from "./pages/titles-page";
import { secondary } from "./styles/styles";

const StyledApp = styled.div`
  color: ${secondary};
`;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// import { upsertDb } from "./fixtures/content";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi4ev_ST3j2i10a7KcVeaDzeumJlNj1uE",
  authDomain: "home-planet-af50f.firebaseapp.com",
  projectId: "home-planet-af50f",
  storageBucket: "home-planet-af50f.appspot.com",
  messagingSenderId: "777298492038",
  appId: "1:777298492038:web:4f9e2bf280389d272f6f07",
  measurementId: "G-8GK3YZCHEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// db.settings({ timestampsInSnapshots: true });
const analytics = getAnalytics(app);

export const App = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [age, setAge] = useState<number | undefined>();

  useEffect(() => {
    // upsertDb(db);
  }, []);

  const renderDefaultPage = () => {
    return (
      <LandingPage
        age={age}
        onChangeAge={(newAge: number) => setAge(newAge)}
        onContinue={() => setCurrentPage("planets")}
      />
    );
  };

  const renderPage = (page: string) => {
    switch (page) {
      case "planets":
        if (age) {
          return <PlanetsPage age={age} db={db} />;
        }
        return renderDefaultPage();
      default:
        return renderDefaultPage();
    }
  };

  return <StyledApp className="App">{renderPage(currentPage)}</StyledApp>;
};
