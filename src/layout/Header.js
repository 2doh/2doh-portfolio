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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-top: 2px solid var(--color-accent-mint);
    border-bottom: 2px solid var(--color-accent-mint);
    transition: width 0.3s ease;
    box-sizing: border-box;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-left: 2px solid var(--color-accent-mint);
    border-right: 2px solid var(--color-accent-mint);
    transition: height 0.3s ease;
    box-sizing: border-box;
    transition-delay: 0.1s;
  }

  &:hover::before,
  &.active::before {
    width: 100%;
  }

  &:hover::after,
  &.active::after {
    height: 100%;
  }

  &:hover,
  &.active {
    color: var(--color-text-primary);
    background-color: var(--color-accent-mint);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(153, 170, 140, 0.2);
    border-radius: 4px;
  }
`;
