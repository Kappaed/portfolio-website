import SideWrapper from "../shared/SideWrapper";
import styled from "styled-components";
import SecondaryText from "../shared/SecondaryText";
import VerticalDivider from "./VerticalDivider";
import BounceEffect from "../shared/BounceEffect";

const SideText = styled(SecondaryText)`
  color: var(--tertiary-font-color);
  cursor: pointer;
  ${BounceEffect};
  &:hover {
    color: var(--secondary-font-color);
  }
`;

const EmailElement = () => {
  return (
    <SideWrapper right>
      <SideText as="a" href="mailto:nathansing.ns@gmail.com">
        nathansing.ns@gmail.com
      </SideText>
      <VerticalDivider />
    </SideWrapper>
  );
};

export default EmailElement;
