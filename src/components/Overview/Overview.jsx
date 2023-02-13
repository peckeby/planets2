import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from 'redux/planetInfo/selectors';
import {
  Button,
  ButtonItem,
  ButtonList,
  DivInfo,
  ImgPlanet,
  InfoText,
  NamePlanet,
  SourceLink,
  SourseDiv,
} from './Overview.styled';

export default function Overview({ index }) {
  const data = useSelector(getData);
  const overview = `/${data[index].name.toLowerCase()}`;

  return (
    <>
      {data && (
        <DivInfo>
          <ImgPlanet
            src={data[index].images.planet}
            alt="planet"
            width={336}
            height={336}
          />
          <div>
            <div>
              <NamePlanet>{data[index].name}</NamePlanet>
              <InfoText>{data[index].overview.content}</InfoText>
              <SourseDiv>
                Source :{' '}
                <SourceLink href={data[index].overview.source}>
                  Wikipedia
                </SourceLink>
              </SourseDiv>
            </div>
            <ButtonList>
              <ButtonItem>
                <Button type="button">
                  <span>1</span>
                  <Link to={overview}>Overview </Link>
                </Button>
              </ButtonItem>
              <ButtonItem>
                <Button type="button">
                  <span>2</span>
                  <Link to={'structure'}>Internal structure </Link>
                </Button>
              </ButtonItem>
              <ButtonItem>
                <Button type="button">
                  <span>3</span>
                  <Link to={'geology'}>Surface geoloy </Link>
                </Button>
              </ButtonItem>
            </ButtonList>
          </div>
        </DivInfo>
      )}
    </>
  );
}
