import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import { Loader } from 'components/Loader/Loader';
import { GlobalStyle } from 'components/GlobalStyle';
import { MobileMenuHeader } from 'components/MobileMenuHeader/MobileMenuHeader';
import Media from 'react-media';

function Layout() {
  return (
    <div className="mainContainer">
      <Media
        queries={{
          small: '(max-width: 767px)',
        }}
      >
        {matches => (matches.small ? <MobileMenuHeader /> : <Header />)}
      </Media>

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
