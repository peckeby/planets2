import styled, { keyframes } from 'styled-components';

export const LoaderImg = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
`;

const blinktop = keyframes`
0%,  100% {
  background: linear-gradient(-15deg, #6BBAEC 0, #6987C9 50%, transparent 51%);
}
33% {
  background: linear-gradient(-15deg, #6987C9 0, #7880B5 50%, transparent 51%);
}
66% {
  background: linear-gradient(-15deg, #7880B5 0, #6BBAEC 50%, transparent 51%);
}
`;

const blinkbot = keyframes`
0%,  100% {
  background: linear-gradient(-15deg, transparent 49%, #6987C9 50%, #7880B5 100%);
}
33% {
  background: linear-gradient(-15deg, transparent 49%, #7880B5 50%, #6BBAEC 100%);
}
66% {
  background: linear-gradient(-15deg, transparent 49%, #6BBAEC 50%, #6987C9 100%);
}
`;

const flyaround = keyframes`
0%, 100% {
  top: 10%;
  left: -10%;
}
8% {
  top: 50%;
  left: 0;
}
20% {
  top: 85%;
}
25% {
  top: 80%;
}
30% {
  top: 75%;
}
40% {
  top: 45%;
  left: 90%;
}
50% {
  left: 95%;
}
60% {
  left: 90%;
  top: 0;
}
75% {
  left: 50%;
  top: -30%;
}
92% {
  left: 0;
  top: 0;
}
`;

export const PlanetTop = styled(LoaderImg)`
  width: 70%;
  height: 70%;
  position: relative;
  top: 15%;
  left: 15%;
  z-index: 20;
  border-radius: 50%;
  background: linear-gradient(-15deg, #6bbaec 0, #6987c9 50%, transparent 51%);
  animation: ${blinktop} 0.6s linear infinite;
`;
export const PlanetBottom = styled(LoaderImg)`
  height: 70%;
  width: 70%;
  z-index: 80;
  position: absolute;
  background: linear-gradient(
    -15deg,
    transparent 49%,
    #6987c9 50%,
    #7880b5 100%
  );
  top: 15%;
  left: 15%;
  border-radius: 50%;
  animation: ${blinkbot} 0.6s linear infinite;
`;
export const Ring = styled(LoaderImg)`
  width: calc(100% - 6px);
  height: calc(100% / 3);
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(-10deg);
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 50;
  &:after {
    content: '';
    position: absolute;
    top: 10%;
    left: -10%;
    width: calc(10% * 1.5);
    height: calc(33% * 1.5);
    border-radius: 50%;
    background: linear-gradient(45deg, #bcc4db, #c0a9b0);
    animation: ${flyaround} 1.8s linear infinite;
  }
`;
