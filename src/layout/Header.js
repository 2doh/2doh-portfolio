import React from "react";
import styled from "styled-components";

const Header = () => {
  const scrollTo = id => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <HeaderWrap>
      <h2 onClick={() => window.scrollTo(0, 0)} style={{ cursor: "pointer" }}>
        2doh
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
  height: 70px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  z-index: 1000;
  h2 {
    color: var(--color-text-primary);
    font-weight: 800;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  button {
    font-size: 0.95rem;
    color: var(--text-sub);
    transition: color 0.2s;
    &:hover {
      color: var(--primary);
    }
  }
`;
