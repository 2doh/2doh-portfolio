import styled from "styled-components";

const SoundControlGroup = ({ children }) => {
  return <ControlContainer>{children}</ControlContainer>;
};

export default SoundControlGroup;

const ControlContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: var(--color-bg-secondary, #f8f9fa);
  border-radius: 10px;
`;
