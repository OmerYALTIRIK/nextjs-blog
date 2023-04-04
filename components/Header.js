import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  color: #f00;
  border: 10px solid #f00;
  padding: 30px;
`;

export default () => (
  <div>
    <HeaderDiv>
      <Link href="/">Anasayfa</Link>
    </HeaderDiv>
    <div>
      <Link href="/about">Hakkımızda</Link>
    </div>
  </div>
);
