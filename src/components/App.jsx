import { Route, Routes } from 'react-router-dom';
import { getIsLoading } from 'redux/planetInfo/selectors';
import Layout from './Layout/Layout';
import { PlanetPage } from './pages/PlanetPage/PlanetPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from 'redux/planetInfo/selectors';
import { useEffect } from 'react';
import { fetchInfo } from 'redux/planetInfo/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  const loading = useSelector(getIsLoading);
  const data = useSelector(getData);

  return (
    <>
      {loading ? (
        <p>Please, wait</p>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/mercury" element={<PlanetPage data={data} />} />
            <Route path="/venus" element={<PlanetPage data={data} />} />
            <Route path="/earth" element={<PlanetPage data={data} />} />
            <Route path="/mars" element={<PlanetPage data={data} />} />
            <Route path="/jupiter" element={<PlanetPage data={data} />} />
            <Route path="/saturn" element={<PlanetPage data={data} />} />
            <Route path="/uranus" element={<PlanetPage data={data} />} />
            <Route path="/neptune" element={<PlanetPage data={data} />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      )}
    </>
  );
};
