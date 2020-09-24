import Styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import styled from "styled-components";

//css property for sharing the link.
const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = Styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = Styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = Styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

//the option css will be added the link
export const OptionLink = Styled(Link)`
${OptionContainerStyles}
`;

//the option css will be added the div.
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
