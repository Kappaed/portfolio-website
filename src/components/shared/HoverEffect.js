import { css } from "styled-components";

const HoverEffect = css`
  &:after {
    transition: width 0.3s ease-in;
    content: "";
    top: 100%;
    left: 0;
    position: absolute;
    height: 1px;
    width: 0px;
    background: var(--secondary-font-color);
    display: block;
    margin-top: 5px;
  }
  &:hover:after {
    width: 100%;
  }
`;

export default HoverEffect;
