import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from 'redux/planetInfo/selectors';

export default function Structure({ index }) {
  const data = useSelector(getData);

  const overview = `/${data[index].name.toLowerCase()}`;
  const locate = data[index].images.internal;

  return (
    <>
      {data && (
        <section>
          <img src={'.' + locate} alt="planet" width={336} />
          <div>
            <p>{data[index].structure.content}</p>
            <p>Source</p>
            <a href={data[index].structure.source}>Wikipedia</a>
          </div>
          <div>
            <button type="button">
              <span>1</span>
              <Link to={overview}>Overview </Link>
            </button>
            <button type="button">
              <span>2</span>
              <p>Internal structure </p>
            </button>
            <button type="button">
              <span>3</span>
              <Link to={`${overview}/geology`}>Surface geology </Link>
            </button>
          </div>
        </section>
      )}
    </>
  );
}
