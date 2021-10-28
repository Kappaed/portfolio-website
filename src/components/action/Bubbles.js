import styled from "styled-components";
import Bubble, { swayLeftToRight, swayRightToLeft } from "./Bubble";

const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  max-width: 100%;
`;

const randRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randSample = (arr) => arr[randRange(0, arr.length - 1)];

const generateBubbles = () => {
  const bubbles = [];
  for (let i = 0; i < 35; i++) {
    bubbles.push(
      <Bubble
        key={i}
        bubbleProps={{
          bubbleLeftOffset: `${randRange(0, 90)}vw`,
          bubbleRadius: `${randRange(1, 10)}vw`,
          bubbleFloatDuration: `${randRange(6, 12)}s`,
          bubbleSwayDuration: `${randRange(4, 6)}s`,
          bubbleFloatDelay: `${randRange(0, 4)}s`,
          bubbleSwayDelay: `${randRange(0, 4)}s`,
          bubbleStart: `${randRange(-75, 0)}%`,
          bubbleSwayType: randSample([swayLeftToRight, swayRightToLeft]),
        }}
      />
    );
  }
  return bubbles;
};

const Bubbles = () => {
  return <Wrapper>{generateBubbles()}</Wrapper>;
};

export default Bubbles;
