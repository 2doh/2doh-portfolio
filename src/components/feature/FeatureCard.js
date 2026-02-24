import styled from "styled-components";

const FeatureCard = ({ item }) => {
  console.log(item);
  return (
    <FeatureCardWrap>
      <div className="card-top">
        <span className="main-tag">{item.tag}</span>
        <span className="logic-tag">{item.logic}</span>
      </div>

      <div className="card-content">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>

      <div className="card-bottom">
        <div className="view-demo">
          <span>Try Demo</span>
          <div className="circle-arrow">→</div>
        </div>
      </div>
    </FeatureCardWrap>
  );
};

export default FeatureCard;

const FeatureCardWrap = styled.div`
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 35px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;

    .main-tag {
      font-size: 0.7rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-deep-teal);
      background: var(--color-warm-gray);
      padding: 6px 12px;
      border-radius: 8px;
    }

    .logic-tag {
      font-size: 0.7rem;
      font-weight: 600;
    }
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: var(--color-text-primary);
  }

  p {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
    word-break: keep-all;
  }

  .card-bottom {
    margin-top: auto;
    padding-top: 20px;

    .view-demo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      color: var(--color-text-primary);

      .circle-arrow {
        width: 32px;
        height: 32px;
        background: #f0f0f0;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
      }
    }
  }

  /* Hover Effect */
  &:hover {
    transform: translateY(-12px);
    border-color: var(--color-accent-mint);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.06);

    .circle-arrow {
      background: var(--color-accent-mint);
      color: white;
      transform: rotate(-45deg);
    }

    /* 배경에 살짝 테마 컬러 입히기 */
    background: ${props => props.bgColor}10; /* 10% 투명도 */
  }
`;
