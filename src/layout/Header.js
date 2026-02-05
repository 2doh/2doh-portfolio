import React from "react";
import styled from "styled-components";

const Header = () => {
  const scrollTo = id => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <HeaderWrap>
      <h2 onClick={() => window.scrollTo(0, 0)} style={{ cursor: "pointer" }}>
        Dohyoen.Log
      </h2>
      <Nav>
        <button onClick={() => window.scrollTo(0, 0)}>Home</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
      </Nav>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  z-index: 1000;
  border-bottom: 1px solid #eee;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      color: #007bff;
    }
  }
`;
