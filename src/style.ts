import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.Orange};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
