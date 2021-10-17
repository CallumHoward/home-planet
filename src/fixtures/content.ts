import { doc, setDoc, Firestore } from "firebase/firestore";
import { Planet } from "../types/content";

export const getInitialContent = () => {
  const content: Planet[] = [
    {
      colors: ["#2600ff", "#fff200"],
      description:
        "You will be moving to Mercury. As the closest planet to the Sun, Mercury is seen as the mediator between humanity and the gods. Named after the Roman fleet-footed messenger of the Gods renowned for his swiftness, Mercury quickly orbits the Sun in just 88 days. It travels through space faster than any other planet, moving at nearly 47 kilometres per second. On Mercury you will enjoy speaking and interacting with others with lightness and ease. Mercury brings together two worlds, it unites day with night, spirit with physicality. On Mercury have fun exploring the different ways you are perceived by others and how others perceive you.",
      offset: 0,
      name: "Mercury",
      subtitle: "The Helm",
      symbol: "☿",
    },
    {
      colors: ["#4b0096", "#0b002e", "#d9ff00"],
      description:
        "You will be moving to Pluto. This dwarf planet, the largest in our solar system, was considered the ninth and most distant planet from the Sun. It sits at the outermost frontier of our solar system and remains shrouded in mystery. It is one of the largest known members of the Kuiper Belt, a shadowy zone beyond the orbit of Neptune populated by icy bodies. Named after the Roman god of the Underworld, Pluto represents power. Its discovery in 1930 coincided with events such as the Great Depression, World War II and the rise of Nazi Germany. To the Romans, Pluto was also known as “The Wealthy One” or the “Giver of Wealth”. On this dark and distant planet, if all were to be lost — consider what you have, your resources, and what you value most.",
      offset: 1,
      name: "Pluto",
      subtitle: "Gate of Hades",
      symbol: "?",
    },
    {
      colors: ["#ffffff", "#d6d6d6"],
      description:
        "You will be moving to the Moon. Throughout history the Moon has enchanted us with her luminous glow. Her many faces represent the waxing and waning phases that we see each night. Her rhythm informs our daily routines and her light guides our travels. She has been a muse to countless artists, poets, and musicians and an inspiration to humanity as a whole. The Roman Goddess of the Moon was known as Luna, her name being the prefix of the word lunatic. Greek philosopher Aristotle and Roman historian Pliny the Elder thought that due to the moistness of the brain, our minds were inherently susceptible to the hypnotic influence of the moon - the same power which controls the tides. On the Moon, consider the malleability of our minds and the ways we think and learn. As the closest celestial body to Earth, consider what it means to be a good neighbour in your new Lunar community.",
      offset: 2,
      name: "Moon",
      subtitle: "Place of the Goddess",
      symbol: "☽",
    },
    {
      colors: ["#e6e6e6", "#8cadfa"],
      description:
        "You will be moving to Ceres. Ceres is named for the Roman goddess of corn and harvests. The word cereal comes from the same name.",
      offset: 3,
      name: "Ceres",
      subtitle: "The Root",
      symbol: "?",
    },
    {
      colors: ["#5e24ff", "#ffcc00"],
      description: "Lorem ipsum cogito sum",
      offset: 4,
      name: "Venus",
      subtitle: "Place of Good Fortune",
      symbol: "♀",
    },
    {
      colors: ["#ff0000", "#d9ff00"],
      description: "Lorem ipsum cogito sum",
      offset: 5,
      name: "Mars",
      subtitle: "The Warrior",
      symbol: "♂",
    },
    {
      colors: ["#1912c9", "#2dfc7d"],
      description: "Lorem ipsum cogito sum",
      offset: 6,
      name: "Neptune",
      subtitle: "The Romantic",
      symbol: "♆",
    },
    {
      colors: ["#ededed", "#6e0808"],
      description: "Lorem ipsum cogito sum",
      offset: 7,
      name: "Eris",
      subtitle: "The Disruptor",
      symbol: "?",
    },
    {
      colors: ["#d9ff00", "#ff4800"],
      description: "Lorem ipsum cogito sum",
      offset: 8,
      name: "Sun",
      subtitle: "Place of God",
      symbol: "☉",
    },
    {
      colors: ["#00ddff", "#7bff00"],
      description: "Lorem ipsum cogito sum",
      offset: 9,
      name: "Uranus",
      subtitle: "The Promethean",
      symbol: "♅",
    },
    {
      colors: ["#ff4c00", "#c7fff5"],
      description: "Lorem ipsum cogito sum",
      offset: 10,
      name: "Jupiter",
      subtitle: "The Good Spirit",
      symbol: "♃",
    },
    {
      colors: ["#735612", "#0a0700"],
      description: "Lorem ipsum cogito sum",
      offset: 11,
      name: "Saturn",
      subtitle: "The Hermit",
      symbol: "♄",
    },
  ];
  return content;
};

export const upsertDb = async (db: Firestore) => {
  for (const content of getInitialContent()) {
    const contentRef = doc(db, "content", content.name.toString());
    await setDoc(contentRef, { ...content }, { merge: true });
  }
};
