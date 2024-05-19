import styled from '@emotion/styled';
import { ReactComponent as HeartDefaultIcon } from 'img/heartDefault.svg';

export const Layout = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

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
