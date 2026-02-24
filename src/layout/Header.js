import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { flexCenter } from "../styles/mixin";

const Header = () => {
  return (
    <HeaderWrap>
      <LogoStyle to="/">2doh</LogoStyle>
      <Nav>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/projects">Projects</MenuLink>
        <MenuLink to="/features">Features</MenuLink>
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

const shake = keyframes`
  0% {transform : scale(1) rotate(0deg)}
  30% {transform : scale(1.1) rotate(3deg)}
  60% {transform : scale(0.95) rotate(-2deg)}
  100% {transform : scale(1) rotate(0deg)}
`;

const LogoStyle = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  ${flexCenter}
  background: linear-gradient(90deg, #222, var(--color-deep-teal));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    animation: ${shake} 0.5s ease-out forwards;
    text-shadow: 1px 1px 20px rgba(255, 255, 255, 0.7);
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

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-text-secondary);
  font-weight: 600;
  padding: 10px 20px;
  margin: 0 8px;
  position: relative;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover,
  &.active {
    color: var(--color-text-primary);
    background-color: var(--color-accent-mint);
    box-shadow: 0 0 10px rgba(153, 170, 140, 0.2);
    transition: all 0.5s ease;
  }
`;
