import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header/Header';
import { Loader } from 'components/Loader/Loader';
import { GlobalStyle } from 'components/GlobalStyle';

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
