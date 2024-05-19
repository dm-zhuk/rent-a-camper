import styled from '@emotion/styled';
import { ReactComponent as HeartDefaultIcon } from 'img/heartDefault.svg';

/* PopUpFeatures */
export const CardContainerModal = styled.section`
  display: inline-flex;
  flex-direction: column;
`;

export const PopUpFeatures = styled.section`
  display: inline-flex;
  padding: 40px;
  flex-direction: column;
  gap: 24px;
`;

export const PopUpHeader = styled.section`
  display: flex;
  width: 902px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const PopUpTitleHolder = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
`;

export const IconThumb32 = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const PopUpTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const ImgsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const PopUpContentBox = styled.div`
  display: flex;
  height: 1074px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const AdvertFullText = styled.p`
  width: 902px;
  color: #475467;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0;
`;

export const FeatureReviewBox = styled.div`
  display: flex;
  height: 740px;
  flex-direction: column;
  align-items: flex-start;
  gap: 44px;
  flex-shrink: 0;
  align-self: stretch;
`;

export const FeatureReviewTitles = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

export const FeatureSubtitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2em;
  margin: 0;
`;

export const FeatureReviewTitle = styled.p`
  ${FeatureSubtitle};
  cursor: pointer;
`;

export const VectorLine1 = styled.img`
  width: 902px;
  height: 0px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: rgba(16, 24, 40, 0.2);
`;

export const VectorLine2 = styled.img`
  width: 430px;
  height: 0px;
  stroke-width: 1px;
  stroke: rgba(16, 24, 40, 0.1);
`;

export const FeatureBox = styled.div`
  display: flex;
  width: 430px;
  height: 200px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
`;

/* AdvertForm */

export const CardsContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const Layout = styled.section`
  ${CardsContainer};
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
  align-items: center;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0;
`;

export const CategoryText = styled.p`
  font-size: 16px;
  text-align: center;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
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
};
 */
