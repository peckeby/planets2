import { Route, Routes } from 'react-router-dom';
import { getIsLoading } from 'redux/planetInfo/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchInfo } from 'redux/planetInfo/operations';
import Layout from './Layout/Layout';
import PlanetPage from './pages/PlanetPage/PlanetPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';

export const App = () => {
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p>Please, wait</p>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/mercury" element={<PlanetPage index={0} />} />
            <Route path="/venus" element={<PlanetPage index={1} />} />
            <Route path="/earth" element={<PlanetPage index={2} />} />
            <Route path="/mars" element={<PlanetPage index={3} />} />
            <Route path="/jupiter" element={<PlanetPage index={4} />} />
            <Route path="/saturn" element={<PlanetPage index={5} />} />
            <Route path="/uranus" element={<PlanetPage index={6} />} />
            <Route path="/neptune" element={<PlanetPage index={7} />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      )}
    </>
  );
};
