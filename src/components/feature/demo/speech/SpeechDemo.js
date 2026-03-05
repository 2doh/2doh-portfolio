import { useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import vocaData from "../../../../data/vackData.json";

const SpeechDemo = () => {
  const { step } = useParams();

  const currentIndex = useMemo(
    () => (step ? parseInt(step, 10) - 1 : 0),
    [step],
  );
  const currentItem = vocaData[currentIndex];

  return (
    <VocaWrapStyle>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${((currentIndex + 1) / vocaData.length) * 100}%` }}
        />
        <span className="step-text">
          {currentIndex + 1} / {vocaData.length}
        </span>
      </div>

      <CardSection>
        <img src={currentItem.pic} alt="voca" className="voca-img" />
        <h3 className="voca-word">{currentItem.word}</h3>
        <p className="voca-sentence">{currentItem.sentence}</p>
      </CardSection>
    </VocaWrapStyle>
  );
};

export default SpeechDemo;

const VocaWrapStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .progress-container {
    width: 100%;
    height: 8px;
    background: #eee;
    border-radius: 4px;
    position: relative;
    .progress-bar {
      height: 100%;
      background: #4ade80;
      border-radius: 4px;
      transition: width 0.3s ease;
    }
    .step-text {
      position: absolute;
      right: 0;
      top: -25px;
      font-size: 0.8rem;
      color: #888;
    }
  }
`;

const CardSection = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
  .voca-img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin-bottom: 20px;
  }
  .voca-word {
    font-size: 2rem;
    color: #333;
    margin: 10px 0;
  }
  .voca-sentence {
    color: #666;
    font-style: italic;
  }
`;
