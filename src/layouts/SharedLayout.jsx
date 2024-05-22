import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import HeaderStyles from './index';

const Header = styled.header`
  ${HeaderStyles}
`;

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav className="header-nav">
          <img
            src="../img//favicon.png"
            alt="Logo"
            width="30"
            height="24"
          ></img>
          <a className="header-logo link" href="./index.html">
            RENT-A-<span className="header-logo-accent">CAMPER</span>
          </a>

          <ul className="header-nav-list list">
            <li className="header-nav-item">
              <NavLink to="/" className="nav-item-link link current">
                Home
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/catalog" className="nav-item-link link">
                Catalog
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/favorites" className="nav-item-link link">
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>

        <address className="header-contacts">
          <ul className="header-contacts-list list">
            <li>
              <a
                className="header-contacts-link link"
                href="mailto:info@camperrental.com"
              >
                info@camperrental.com
              </a>
            </li>
            <li>
              <a className="header-contacts-link link" href="tel:+380631234567">
                +380 (63) 123-45-67
              </a>
            </li>
          </ul>
        </address>
      </Header>

      <section className="homeSection">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};

export default SharedLayout;
