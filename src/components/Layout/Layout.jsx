import React from 'react';
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
// import { Container } from './Layout.styled';
import Header from './Header/Header';
import { GlobalStyle } from 'components/GlobalStyle';
import { Loader } from 'components/Loader/Loader';

function Layout() {
  return (
    <div className="mainContainer">
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </div>
  );
}

export default Layout;
