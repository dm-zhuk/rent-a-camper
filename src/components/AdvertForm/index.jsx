import styled from '@emotion/styled';
import { ReactComponent as HeartDefaultIcon } from 'img/heartDefault.svg';

const CardsContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const CardContainer = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #fff;
`;

const CardFrame = styled.div`
  display: flex;
  width: 840px;
  align-items: flex-start;
  gap: 24px;
`;

const CardContent = styled.div`
  display: flex;
  width: 526px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
`;

const CardTitleHolder = styled.div`
  display: flex;
  width: 526px;
  flex-direction: column;
  gap: 8px;
`;

const ImgThumb = styled.img`
  width: 290px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 10px;
  background: url(<path-to-image>) lightgray -57px -4.651px / 195.679% 103.001%
    no-repeat;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

const H1 = styled.h1`
  margin: 0;
  color: #101828;
  line-height: 1.25em;
`;

const PriceFavoriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Favorite = styled(HeartDefaultIcon)`
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

const ReviewLocationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const IconTextWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 0;
`;

const IconThumb16 = styled.img`
  width: 16px;
  height: 16px;
`;

const IconThumb20 = styled.img`
  width: 20px;
  height: 20px;
`;

const BodyText = styled.p`
  color: #101828;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  margin: 0;
`;

const ReviewRate = styled.p`
  text-decoration-line: underline;
  margin: 0;
`;

const CardAdvert = styled.p`
  display: -webkit-box;
  width: 525px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #475467;
  text-overflow: ellipsis;
  margin: 0;
`;

const SegmentedPicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const CategoryButton = styled.button`
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

const Button = styled.button`
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

const LoadMore = styled.button`
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
};
