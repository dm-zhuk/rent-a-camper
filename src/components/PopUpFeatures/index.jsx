import styled from '@emotion/styled';
import { ReactComponent as HeartDefaultIcon } from 'img/heartDefault.svg';

export const Layout = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const CardsContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #fff;
`;

export const CardFrame = styled.div`
  display: flex;
  width: 840px;
  align-items: flex-start;
  gap: 24px;
`;

export const CardContent = styled.div`
  display: flex;
  width: 526px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
`;

export const CardTitleHolder = styled.div`
  display: flex;
  width: 526px;
  flex-direction: column;
  gap: 8px;
`;

export const ImgThumb = styled.img`
  width: 290px;
  height: 310px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 10px;
  background: lightgray -57px -4.651px / 195.679% 103.001% no-repeat;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export const H1 = styled.h1`
  margin: 0;
  color: #101828;
  color: #101828;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25em;
`;

export const PriceFavoriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Favorite = styled(HeartDefaultIcon)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  stroke: #101828;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:focus,
  &:hover {
    fill: #e44848;
    stroke: #e44848;
    transform: scale(1.1);
  }
`;

export const ReviewLocationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const IconTextWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 0;
`;

export const IconThumb16 = styled.img`
  width: 16px;
  height: 16px;
`;

export const IconThumb20 = styled.img`
  width: 20px;
  height: 20px;
`;

export const BodyText = styled.p`
  color: #101828;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  margin: 0;
`;

export const ReviewRate = styled.p`
  text-decoration-line: underline;
  margin: 0;
`;

export const CardAdvert = styled.p`
  display: -webkit-box;
  width: 525px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #475467;
  text-overflow: ellipsis;
  margin: 0;
`;

export const SegmentedPicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const CategoryButton = styled.button`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 100px;
  background: #f2f4f7;
  mix-blend-mode: multiply;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:focus,
  &:hover {
    transform: scale(1.03);
  }
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

export const LoadMore = styled.button`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 200px;
  background-color: #fff;
  border: 1px solid rgba(71, 84, 103, 0.2);
  transition: transform 0.3s ease;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
  letter-spacing: -0.08px;

  &:focus,
  &:hover {
    border: 1px solid #e44848;
    transform: scale(1.03);
  }
`;
/* 
export {
  CardsContainer,
  CardContainer,
  CardFrame,
  CardContent,
  ImgThumb,
  CardTitleHolder,
  CardTitle,
  H1,
  PriceFavoriteWrapper,
  Favorite,
  ReviewLocationWrapper,
  IconTextWrapper,
  IconThumb16,
  IconThumb20,
  ReviewRate,
  BodyText,
  CardAdvert,
  SegmentedPicker,
  CategoryButton,
  Button,
  LoadMore,
  Layout,
}; */
