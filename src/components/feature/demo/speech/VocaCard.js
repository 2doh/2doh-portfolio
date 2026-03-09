import React from "react";
import styled from "styled-components";

const VocaCard = ({ currentItem }) => {
  return (
    <CardSection>
      <img src={currentItem.pic} alt="voca" className="voca-img" />
      <h3 className="voca-word">{currentItem.word}</h3>
      <p className="voca-sentence">{currentItem.sentence}</p>
    </CardSection>
  );
};

export default VocaCard;

const CardSection = styled.div`
  background: var(--color-card-bg);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
  .voca-img {
    max-width: 500px;
    max-height: 400px;
    width: 50%;
    height: 50%;
    object-fit: contain;
    margin-bottom: 20px;
  }
  .voca-word {
    font-size: 2rem;
    color: var(--color-text-primary);
    margin: 10px 0;
  }
  .voca-sentence {
    color: var(--color-text-secondary);
    font-style: italic;
  }
`;
