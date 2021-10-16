import { css } from "styled-components";

const BounceEffect = css`
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export default BounceEffect;
