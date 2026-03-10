import styled from "styled-components";

export const Wrap = styled.section`
  padding: 100px 5% 60px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: var(--color-bg);
  padding: 30px;
  border-radius: 24px;
  border: 1px solid var(--color-border);

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);

  &:hover {
    border-color: var(--color-accent-mint);
    box-shadow: 0 15px 35px rgba(153, 170, 140, 0.1);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;
