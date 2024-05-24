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
  background: #f7f7f7;
  border: none;
  font-weight: 400;
  line-height: 1.25em;
  color: rgba(16, 24, 40, 0.6);
  transform: translateY(-50%);
  left: 1rem;
  z-index: 1;
  margin-right: 24px;
`;

export const H2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2em;
  margin: 0 10px;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  line-height: 1.5em;
  letter-spacing: -0.08px;
  border: none;
  border-radius: 200px;
  color: white;
  margin-top: 48px;
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
  margin: 0 10px;
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
  padding: 4px 118px 4px 18px;
  align-items: center;
  border-radius: 10px;
  background: #f7f7f7;
  margin-bottom: 24px;
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

export const CheckBoxContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const VectorLine = styled.img`
  width: 302px;
`;

export const CheckRadioInput = styled.div`
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

export const CheckRadioLabel = styled.label`
  display: flex;
  height: 95px;
  width: 95px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background-color: transparent;
  transition: 0.3s ease-in-out;
  mix-blend-mode: multiply;
  user-select: none;
  cursor: pointer;

  &:focus,
  &:hover {
    border-color: #e44848;
  }
`;

export const FiltersTypeInput = styled.input`
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  padding: 0;
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;

  &:checked,
  &${CheckRadioLabel} {
    border: 1px solid #e44848;
  }
`;

export const ContentBox = styled.label`
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
