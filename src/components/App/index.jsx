import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  padding: 100px 64px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const LeftSection = styled.section`
  overflow: auto;
`;

export const RightSection = styled.section`
  display: flex;
  width: auto;
`;
