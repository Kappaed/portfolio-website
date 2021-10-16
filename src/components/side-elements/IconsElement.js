import SideWrapper from "../shared/SideWrapper";
import BounceEffect from "../shared/BounceEffect";
import styled from "styled-components";
import VerticalDivider from "./VerticalDivider";
import { FiGithub } from "react-icons/fi";

const IconWrapper = styled.a`
  display: inline-block;
  color: var(--tertiary-font-color);
  font-size: 1.4rem;
  ${BounceEffect};
  &:hover {
    color: var(--secondary-font-color);
  }
`;

const IconsElement = () => {
  return (
    <SideWrapper left>
      <IconWrapper href="https://github.com/Kappaed">
        <FiGithub />
      </IconWrapper>
      <VerticalDivider />
    </SideWrapper>
  );
};

export default IconsElement;
