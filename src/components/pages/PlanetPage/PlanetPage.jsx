import { StatsSection } from 'components/StatsSection/StatsSection';
import { useSelector } from 'react-redux';
import { getData } from 'redux/planetInfo/selectors';
import PropTypes from 'prop-types';

export default function PlanetPage({ index }) {
  const data = useSelector(getData);

  return (
    <>
      {data && (
        <div>
          <section>
            <img src={data[index].images.planet} alt="planet" width={336} />
            <div>
              <p>{data[index].overview.content}</p>
              <p>Source</p>
              <a href={data[index].overview.source}>Wikipedia</a>
            </div>
            <div>
              <div>
                <span>1</span>
                <button>Overview</button>
              </div>
              <div>
                <span>2</span>
                <button>Internal structure</button>
              </div>
              <div>
                <span>3</span>
                <button>Surface geology</button>
              </div>
            </div>
          </section>
          <StatsSection data={data} idx={index} />
        </div>
      )}
    </>
  );
}

PlanetPage.propTypes = { index: PropTypes.number };
