import styled from '@emotion/styled';
import css from '@emotion/styled';

export const SharedPageCtnr = styled.section`
  flex: 1;
  padding: 1rem;
`;

export const HeaderStyles = css`
  .header {
    position: fixed;
    z-index: 9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    height: 48px;
    gap: 24px;
    padding: 16px 42px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #d84343;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);

    @media only screen and (min-width: 768px) {
      ${css`
        .header-container {
          display: flex;
          align-items: center;
        }
      `}
    }

    .header-nav {
      display: flex;
      align-items: center;
      margin-right: auto;

      .header-nav-list {
        display: flex;
        gap: 40px;
      }
    }

    .header-logo {
      color: #e44848;
      font-size: 18px;
      font-weight: 800;
      line-height: 1.17;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      padding-top: 24px;
      padding-bottom: 24px;
      margin-right: ${props => (props.width < 768 ? '76px' : '120px')};

      @media not (hover: hover) {
        :active {
          background-color: #d84343;
        }
      }
    }

    .header-logo-accent {
      color: #e44848;
    }

    .header-btn {
      min-width: ${props => (props.width > 768 ? '40px' : 'none')};
      min-height: ${props => (props.width > 768 ? '40px' : 'none')};
      display: flex;
      align-items: center;
      justify-content: center;
      stroke: #e44848;
      border-radius: 50%;
      border: none;
      background-color: transparent;
      padding: ${props => (props.width > 768 ? '0' : 'inherit')};
      margin-left: auto;
      transition: background-color
        ${props =>
          props.width > 768 ? '250ms cubic-bezier(0.4, 0, 0.2, 1);' : 'none'};

      :hover {
        background-color: #d84343;
      }
    }

    .header-contacts {
      display: flex;
      align-items: center;

      .header-contacts-list {
        display: flex;
        gap: ${props => (props.width < 768 ? '40px' : '12px')};

        ${props =>
          props.width < 768
            ? ''
            : `
        margin-top: ${props => (props.width > 768 ? '16px' : 'inherit')};
        margin-bottom: ${props => (props.width > 768 ? '16px' : 'inherit')};
      `};
      }
    }

    .nav-item-link {
      font-weight: 600;
      display: block;
      padding-top: ${props => (props.width > 768 ? '24px' : 'inherit')};
      padding-bottom: ${props => (props.width > 768 ? '24px' : 'inherit')};
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

      &.current {
        position: relative;
        color: #d84343;
      }

      &::after {
        content: '';
        position: absolute;
        display: flex;
        left: 0;
        width: 100%;
        height: ${props => (props.width > 768 ? '4px' : 'inherit')};
        bottom: -1px;
        border-radius: ${props => (props.width > 768 ? '2px' : 'inherit')};
        background-color: #d84343;
      }
    }

    .nav-item-link:hover,
    .nav-item-link:focus,
    .header-contacts-link:hover,
    .header-contacts-link:focus {
      color: #d84343;
    }
  }
`;
