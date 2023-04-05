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
  background-color: #f00;
`;

export default ({ title, children }) => (
  <BodyDiv>
    <h1>{title}</h1>
    <Header />
    <div style={{ padding: "20px", margin: "20px", backgroundColor: "tomato" }}>{children}</div>

    <Content>{children}</Content>
    <Footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by vercel
      </a>
    </Footer>
  </BodyDiv>
);
