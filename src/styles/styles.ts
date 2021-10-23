import { keyframes } from "styled-components";

export const primary = "#F872D1";
export const secondary = "#952DE6";
export const secondaryGlow = "#FFAAFF";

export const fadeInAndOut = keyframes`
  0% {
    opacity: 0%;
  }
  25% {
    opacity: 100%;
  }
  75% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
`;

export const neon2 = keyframes`
  from {
    text-shadow: 0 0 10px ${secondaryGlow},
    0 0 20px ${secondaryGlow},
    0 0 30px ${secondaryGlow},
    0 0 40px ${secondary},
    0 0 70px ${secondary},
    0 0 80px ${secondary},
    0 0 100px ${secondary},
    0 0 150px ${secondary};
  }
  to {
    text-shadow: 0 0 5px ${secondaryGlow},
    0 0 10px ${secondaryGlow},
    0 0 15px ${secondaryGlow},
    0 0 20px ${secondary},
    0 0 35px ${secondary},
    0 0 40px ${secondary},
    0 0 50px ${secondary},
    0 0 75px ${secondary};
  }
`;
