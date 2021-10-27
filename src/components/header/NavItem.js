import styled, { css } from "styled-components";
import SecondaryText from "../shared/SecondaryText";

const NavText = styled(SecondaryText)`
  &:hover span {
    color: var(--secondary-font-color);
  }
`;

const MobileWrapper = css`
  margin: 40px 0;
  font-size: 2rem;
`;

const Wrapper = styled.ul`
  margin-right: 40px;
  ${(props) => props.mobile && MobileWrapper};
`;

const ChildWrapper = styled.span`
  display: inline-block;
  margin-left: 4px;
  color: var(--primary-font-color);
`;

const NavItem = (props) => {
  return (
    <Wrapper mobile={props.mobile} onClick={props.onItemClick}>
      <NavText as="a" href={props.href}>
        {`0${props.index}.`}
        <ChildWrapper>{props.children}</ChildWrapper>
      </NavText>
    </Wrapper>
  );
};

export default NavItem;
