import styled from '@emotion/styled';

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
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const InputForm = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
`;

export const Label = styled.label`
  margin-right: 10px;
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
  padding: 0 218px 0 18px;
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
  min-width: 100px;
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
  width: 360px;
  height: 1px;
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
  padding: 17px 40px;
  align-items: center;
  gap: 8px;
`;
