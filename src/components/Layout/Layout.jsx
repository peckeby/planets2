import React from 'react';
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
// import { Container } from './Layout.styled';
import Header from './Header/Header';
import { GlobalStyle } from 'components/GlobalStyle';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        {/* <Container> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        {/* </Container> */}
      </main>
      <GlobalStyle />
    </div>
  );
}

export default Layout;
