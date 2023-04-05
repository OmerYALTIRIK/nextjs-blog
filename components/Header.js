import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  border: 10px solid #f00;
  padding: 30px;
  background-color: #f00;
  display: flex;
  gap: 20px;

  & span {
    font-size: 30px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  border: ${({ borderSize }) => borderSize}px solid yellow;
  font-size: ${({ big }) => (big ? "20px" : "12px")};
  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <HeaderDiv>
    <StyledLink href="/" borderSize={20}>Anasayfa</StyledLink>

    <StyledLink href="/about" big borderSize={10}>
      Hakkımızda
    </StyledLink>

    <span>Ek açıklamalar</span>
  </HeaderDiv>
);
