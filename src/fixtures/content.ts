import { doc, setDoc, Firestore } from "firebase/firestore";

export const getInitialContent = () => {
  const content = [
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 0,
      name: "Mercury",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 1,
      name: "Eris",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 2,
      name: "Moon",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 3,
      name: "Ceres",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 4,
      name: "Venus",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 5,
      name: "Mars",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 6,
      name: "Neptune",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 7,
      name: "Pluto",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 8,
      name: "Sun",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 9,
      name: "Uranus",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 10,
      name: "Juptier",
    },
    {
      primaryColor: "#f0f",
      secondaryColor: "#0ff",
      description: "Lorem ipsum cogito sum",
      offset: 11,
      name: "Saturn",
    },
  ];
  return content;
};

export const upsertDb = async (db: Firestore) => {
  for (const {
    name,
    offset,
    primaryColor,
    secondaryColor,
    description,
  } of getInitialContent()) {
    const contentRef = doc(db, "content", name.toString());
    await setDoc(
      contentRef,
      {
        name,
        offset,
        primaryColor,
        secondaryColor,
        description,
      },
      { merge: true }
    );
  }
};
