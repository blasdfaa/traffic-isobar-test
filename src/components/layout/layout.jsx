import { Outlet } from 'react-router';

import AppFooter from '../app-footer/app-footer';
import AppHeader from '../app-header/app-header';

function Layout() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}

export default Layout;
