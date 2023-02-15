import s from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={s.contentBox}>
      <div className={s.content}>
        <div className={s.planet}>
          <div className={s.ring}></div>
          <div className={s.coverRing}></div>
          <div className={s.spots}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p>loading</p>
      </div>
    </div>
  );
};
