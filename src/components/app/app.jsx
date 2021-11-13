import { Route, Routes } from 'react-router';

import { AppRoutes } from '../../constans';
import ErrorPage from '../../pages/error-page/error-page';
import ExamplePage from '../../pages/example-page/example-page';
import HomePage from '../../pages/home-page/home-page';
import Layout from '../layout/layout';

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={AppRoutes.Example} element={<ExamplePage />} />
        <Route path="*" element={<ErrorPage code={404} />} />
      </Route>
    </Routes>
  );
}

export default App;
