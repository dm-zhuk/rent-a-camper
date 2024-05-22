import styled from '@emotion/styled';

/* HomePage */
export const HomeContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const ImgThumb = styled.img`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 10px;
  background: lightgray -57px -4.651px / 195.679% 103.001% no-repeat;
`;

export const Features = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;

export const FeatureItem = styled.li`
  display: inline-flex;
`;

export const Button = styled.button`
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  line-height: 1.5em;
  letter-spacing: -0.08px;
  border: none;
  border-radius: 200px;
  color: white;
  background: #e44848;
  cursor: pointer;

  &:focus,
  &:hover {
    background: #d84343;
  }
`;

export const H1 = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25em;
`;

export const H2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2em;
  margin: 0 10px;
`;

export const CategoryText = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  line-height: 1.25em;
  margin: 0;
`;
