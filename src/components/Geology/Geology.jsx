import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from 'redux/planetInfo/selectors';
import s from './Geology.module.css';

export default function Geology({ index }) {
  const data = useSelector(getData);

  const overview = `/${data[index].name.toLowerCase()}`;

  const geologyImg = '.' + data[index].images.geology;
  const overviewImg = '.' + data[index].images.planet;

  return (
    <>
      {data && (
        <section>
          <img
            className={s.geologyImg}
            src={overviewImg}
            alt="planet"
            width={336}
          />
          <img
            className={s.addimg}
            src={geologyImg}
            alt="planet"
            width={163}
            height={199}
          />

          <div>
            <p>{data[index].geology.content}</p>
            <p>Source</p>
            <a href={data[index].geology.source}>Wikipedia</a>
          </div>
          <div>
            <button type="button">
              <span>1</span>
              <Link to={overview}>Overview </Link>
            </button>
            <button type="button">
              <span>2</span>
              <Link to={`${overview}/structure`}>Internal structure </Link>
            </button>
            <button type="button">
              <span>3</span>
              <p>Surface geology </p>
            </button>
          </div>
        </section>
      )}
    </>
  );
}
