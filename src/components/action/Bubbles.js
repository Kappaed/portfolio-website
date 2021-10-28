import styled, { css, keyframes } from "styled-components";

const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* overflow: hidden; */
`;

const Bubble = styled.div`
  position: absolute;
  left: ${(props) => props.bubbleProps.bubbleLeftOffset};
  bottom: ${(props) => props.bubbleProps.bubbleStart};
  display: block;
  width: ${(props) => props.bubbleProps.bubbleRadius};
  height: ${(props) => props.bubbleProps.bubbleRadius};
  border-radius: 50%;
  animation: ${(props) =>
    css`
      ${floatUp} ${props.bubbleProps.bubbleFloatDuration} ${props.bubbleProps
        .bubbleFloatDelay} ease-in infinite
    `};

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(219, 112, 147, 0.3);
    border-radius: inherit;
    animation: ${(props) =>
      css`
        ${props.bubbleProps.bubbleSwayType} ${props.bubbleProps
          .bubbleSwayDuration} ${props.bubbleProps
          .bubbleSwayDelay} ease-in-out alternate infinite
      `};
  }
`;

const floatUp = keyframes`
  to {
    transform: translateY(-175vh);
  }
`;

const swayLeftToRight = keyframes`
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  `;

const swayRightToLeft = keyframes`
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(-100%);
    }
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
          bubbleLeftOffset: `${randRange(0, 100)}vw`,
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
