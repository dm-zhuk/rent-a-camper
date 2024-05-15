import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Heart = styled.img`
  width: 24px;
  height: 24px;
  fill: #ff0000;
  margin-right: 8px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Favorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ff0000;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #333333;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  color: #666666;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
