import Header from "./Header";
import styled from "styled-components";

const BodyDiv = styled.div`
  margin: 0;
  padding: 0;
`;

const Footer = styled.footer`
  padding: 20px;
  background-color: #ccc;
`;

const Content = styled.div`
  padding: 20px;
`;

export default ({ title, children }) => (
  <BodyDiv>
    <h1>{title}</h1>
    <Header />
    <Content>{children}</Content>
    <Footer>
      <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
        Powered by vercel
      </a>
    </Footer>
  </BodyDiv>
);
