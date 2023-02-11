import React from 'react';
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
// import { Container } from './Layout.styled';
import Header from './Header/Header';
import { GlobalStyle } from 'components/GlobalStyle';
import WelcomePage from 'components/pages/WelcomePage/WelcomePage';

function Layout() {
  return (
    <body className="mainContainer">
      <Header />
      <main>
        {/* <Container> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        {/* </Container> */}
      </main>
      <GlobalStyle />
    </body>
  );
}

export default Layout;
