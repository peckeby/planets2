import { StatsSection } from 'components/StatsSection/StatsSection';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getData } from 'redux/planetInfo/selectors';

export const PlanetPage = () => {
  const data = useSelector(getData);
  const { images, overview } = data[0];
  const { planet } = images;
  return (
    <div>
      <section>
        <img src={planet} alt="planet" width={336} />
        <div>
          <p>{overview.content}</p>
          <p>Source</p>
          <a href={overview.source}>Wikipedia</a>
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
      <StatsSection data={data} />
    </div>
  );
};
