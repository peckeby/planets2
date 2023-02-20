import { Route, Routes } from 'react-router-dom';
import { getIsLoading } from 'redux/planetInfo/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchInfo } from 'redux/planetInfo/operations';
import Layout from './Layout/Layout';
import PlanetPage from '../pages/PlanetPage/PlanetPage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import Structure from './Structure/Structure';
import Geology from './Geology/Geology';
import { Loader } from './Loader/Loader';

export const App = () => {
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/mercury" element={<PlanetPage index={0} />}>
              <Route path="structure" element={<Structure index={0} />} />
              <Route path="geology" element={<Geology index={0} />} />
            </Route>
            <Route path="/venus" element={<PlanetPage index={1} />}>
              <Route path="structure" element={<Structure index={1} />} />
              <Route path="geology" element={<Geology index={1} />} />
            </Route>
            <Route path="/earth" element={<PlanetPage index={2} />}>
              <Route path="structure" element={<Structure index={2} />} />
              <Route path="geology" element={<Geology index={2} />} />
            </Route>
            <Route path="/mars" element={<PlanetPage index={3} />}>
              <Route path="structure" element={<Structure index={3} />} />
              <Route path="geology" element={<Geology index={3} />} />
            </Route>
            <Route path="/jupiter" element={<PlanetPage index={4} />}>
              <Route path="structure" element={<Structure index={4} />} />
              <Route path="geology" element={<Geology index={4} />} />
            </Route>
            <Route path="/saturn/" element={<PlanetPage index={5} />}>
              <Route path="structure" element={<Structure index={5} />} />
              <Route path="geology" element={<Geology index={5} />} />
            </Route>

            <Route path="/uranus" element={<PlanetPage index={6} />}>
              <Route path="structure" element={<Structure index={6} />} />
              <Route path="geology" element={<Geology index={6} />} />
            </Route>
            <Route path="/neptune" element={<PlanetPage index={7} />}>
              <Route path="structure" element={<Structure index={7} />} />
              <Route path="geology" element={<Geology index={7} />} />
            </Route>

            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      )}
    </>
  );
};
