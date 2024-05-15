import styled from '@emotion/styled';

export const LeftSection = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

/* Location */

export const Input = styled.input`
  padding: 10px;
  color: #101828;
  background: #f7f7f7;
  border: none;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25em;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
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

export const InputForm = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin: 24px 10px 0;
  align-self: stretch;
  color: rgba(16, 24, 40, 0.6);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5em;
`;

export const TextField = styled.div`
  display: flex;
  padding: 0 68px 0 18px;
  align-items: center;
  border-radius: 10px;
  background: #f7f7f7;
`;

export const Map = styled.img`
  width: 18px;
  height: 20px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

/* Filters */

export const NumberInputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const VectorLine = styled.img`
  width: 302px;
`;

export const NumberInput = styled.div`
  display: flex;
  width: 360px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  width: 360px;
  align-items: flex-end;
  gap: 10px;
`;

export const FiltersButton = styled.button`
  display: flex;
  height: 95px;
  width: 95px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background-color: #fff;
  mix-blend-mode: multiply;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid #e44848;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const BodyText = styled.p`
  max-width: 100%;
`;
