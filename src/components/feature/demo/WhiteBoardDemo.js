import styled from "styled-components";
import BoardControl from "./BoardControl";
import BoardField from "./BoardField";

const WhiteBoardDemo = () => {
  return (
    <DemoContainer>
      <BoardField />

      <BoardControl />
    </DemoContainer>
  );
};

export default WhiteBoardDemo;

const DemoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: var(--color-bg-sub);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
