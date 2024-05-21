import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {} from 'components/AdvertForm/index';

const HomePage = () => {
  return (
    <nav class="Navbar">
      <div class="container-fluid">
        <a class="NavbarLogo" href="#">
          RENT-A-CAMPER
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Catalog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Favorites
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomePage;
