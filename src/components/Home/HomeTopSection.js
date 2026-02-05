import React from "react";
import styled from "styled-components";

const HomeTopSection = () => {
  return (
    <>
      <h1 style={{ fontSize: "3rem" }}>Dohyoen Lee</h1>
      <p>Front-end Developer</p>
      <BadgeContainer>
        <img
          src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"
          alt="js"
        />
        <img
          src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white"
          alt="sc"
        />
        {/* 필요한 뱃지를 여기에 추가 */}
      </BadgeContainer>
    </>
  );
};

export default HomeTopSection;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
  img {
    height: 28px;
  }
`;
