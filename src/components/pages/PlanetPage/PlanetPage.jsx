import { StatsSection } from 'components/StatsSection/StatsSection';
import { useSelector } from 'react-redux';
import { getData, getIsLoading } from 'redux/planetInfo/selectors';
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import Overview from '../../Overview/Overview';
import { Loader } from 'components/Loader/Loader';

export default function PlanetPage({ index }) {
  const data = useSelector(getData);
  const location = useLocation();
  const loading = useSelector(getIsLoading);

  return (
    <>
      {loading && <Loader />}
      {location.pathname === `/${data[index].name.toLowerCase()}` && (
        <Overview index={index} />
      )}
      <Outlet />
      <StatsSection data={data} idx={index} />
    </>
  );
}

PlanetPage.propTypes = { index: PropTypes.number };
