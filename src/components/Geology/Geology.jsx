import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from 'redux/planetInfo/selectors';
import {
  Button,
  ButtonItem,
  ButtonList,
  DivInfo,
  ImgContainer,
  ImgPlanet,
  InfoSection,
  InfoText,
  NamePlanet,
  SourceLink,
  SourseDiv,
  SpanNum,
} from 'components/Overview/Overview.styled';
import { ImgGeology } from './Geology.styled';
import { colorSizeArr } from 'assets/colorsSizeArr';

export default function Geology({ index }) {
  const data = useSelector(getData);

  const overview = `/${data[index].name.toLowerCase()}`;

  const geologyImg = '.' + data[index].images.geology;
  const overviewImg = '.' + data[index].images.planet;

  const colorPlanet = colorSizeArr[index];

  return (
    <>
      {data && (
        <DivInfo>
          <ImgContainer ind={index}>
            <ImgPlanet
              ind={index}
              src={overviewImg}
              alt="planet"
              width={`${colorPlanet.size}`}
              height={`${colorPlanet.size}`}
            />
            <ImgGeology
              src={geologyImg}
              alt="planet"
              width={163}
              height={199}
            />
          </ImgContainer>
          <InfoSection>
            <NamePlanet>{data[index].name}</NamePlanet>
            <InfoText>{data[index].geology.content}</InfoText>
            <SourseDiv>
              Source :{' '}
              <SourceLink href={data[index].geology.source}>
                Wikipedia
              </SourceLink>
            </SourseDiv>
            <ButtonList>
              <ButtonItem>
                <Link to={overview}>
                  <Button type="button" bkgColor={`transparent`}>
                    <SpanNum>1</SpanNum>
                    Overview
                  </Button>
                </Link>
              </ButtonItem>
              <ButtonItem>
                <Link to={`${overview}/structure`}>
                  <Button type="button" bkgColor={`transparent`}>
                    <SpanNum>2</SpanNum>
                    Internal structure
                  </Button>
                </Link>
              </ButtonItem>
              <ButtonItem>
                <Link to={`${overview}/geology`}>
                  <Button type="button" bkgColor={`${colorPlanet.color}`}>
                    <SpanNum>3</SpanNum>
                    Surface geology
                  </Button>
                </Link>
              </ButtonItem>
            </ButtonList>
          </InfoSection>
        </DivInfo>
      )}
    </>
  );
}
