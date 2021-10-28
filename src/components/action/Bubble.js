import styled, { css, keyframes } from "styled-components";

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

export const swayLeftToRight = keyframes`
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  `;

export const swayRightToLeft = keyframes`
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(-100%);
    }
  `;

export default Bubble;
