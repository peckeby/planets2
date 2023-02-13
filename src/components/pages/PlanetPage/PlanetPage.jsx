import { StatsSection } from 'components/StatsSection/StatsSection';
import { useSelector } from 'react-redux';
import { getData } from 'redux/planetInfo/selectors';
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import Overview from '../../Overview/Overview';
import { SectionMain } from './PlanetPage.styled';

export default function PlanetPage({ index }) {
  const data = useSelector(getData);
  const location = useLocation();
  // console.log(location);

  return (
    <>
      <div>
        <SectionMain>
          {location.pathname === `/${data[index].name.toLowerCase()}` && (
            <Overview index={index} />
          )}
          <Outlet />
        </SectionMain>
        <StatsSection data={data} idx={index} />
      </div>
    </>
  );
}

PlanetPage.propTypes = { index: PropTypes.number };
