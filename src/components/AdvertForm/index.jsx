import styled from '@emotion/styled';
import { ReactComponent as HeartDefaultIcon } from 'img/heartDefault.svg';

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
  fill: transparent;
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

export const IconTextWrapper = styled.div`
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

/* ModalFeatures */
export const CardContainerModal = styled.section`
  display: inline-flex;
  flex-direction: column;
`;

export const ModalFeatures = styled.section`
  display: inline-flex;
  padding: 40px;
  flex-direction: column;
  gap: 24px;
`;

export const ModalHeader = styled.section`
  display: flex;
  width: 902px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const ModalTitleHolder = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
`;

export const CloseBtn32 = styled.span`
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
`;

export const ModalTitleContent = styled.div`
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

export const ModalContentBox = styled.div`
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

export const FeatureReviewVerBox = styled.div`
  display: flex;
  height: 740px;
  flex-direction: column;
  align-items: flex-start;
  gap: 44px;
  flex-shrink: 0;
  align-self: stretch;
`;

export const FeatureReviewHorBox = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: 24px;
`;

export const FeaturesUnderlineBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
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

export const FeatureTagsBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 430px;
  height: 200px;
  gap: 8px;
`;

export const TxtFieldBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 430px;
  gap: 24px;
`;

export const TxtField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

export const VehicleDetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const VehicleItemTxt = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33em;
  margin: 0;
`;

export const BookingBox = styled.div`
  ${FeaturesUnderlineBox};
  padding: 24px;
`;

export const BookingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const BodyTextBooking = styled.p`
  ${BodyText}
  color: #475467;
`;

export const BookingItem = styled.div`
  display: flex;
  padding: 18px 341px 18px 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: #f7f7f7;
`;

export const Input = styled.input`
  padding: 10px;
  background: #f7f7f7;
  border: none;
  font-weight: 400;
  line-height: 1.25em;
`;

export const TextArea = styled.textarea`
  ${Input};
`;

export const BookingItemRel = styled.div`
  ${BookingItem};
  position: relative;
`;

export const DatePicker = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

export const DateDropdown = styled.select`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #fff;
`;

export const ReviewsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ReviewsHeader = styled.div`
  ${ModalTitleContent};
  width: 430px;
`;

export const ReviewsAvatar = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: #f2f4f7;
`;

export const ReviewsAvatarInitial = styled.h1`
  position: absolute;
  left: 21px;
  top: 15px;
  color: #e44848;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25em;
`;

export const ReviewerNameRate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const ReviewerName = styled.p`
  color: #101828;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33em;
`;

export const ReviewerRate = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export const ReviewsTxt = styled.p`
  color: #475467;
`;
