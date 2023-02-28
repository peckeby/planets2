import {
  LoaderImg,
  PlanetBottom,
  PlanetTop,
  Ring,
} from './PlanetImgLoader.styled';

export const PlanetImgLoader = () => {
  return (
    <LoaderImg>
      <PlanetTop />
      <PlanetBottom />
      <Ring />
    </LoaderImg>
  );
};
