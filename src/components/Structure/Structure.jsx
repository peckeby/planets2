import { colorSizeArr } from 'assets/colorsSizeArr';
import {
  Button,
  ButtonItem,
  ButtonList,
  DivInfo,
  ImgPlanet,
  InfoSection,
  InfoText,
  LinkSpan,
  NamePlanet,
  SourceLink,
  SourseDiv,
  SpanNum,
} from 'components/Overview/Overview.styled';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from 'redux/planetInfo/selectors';

export default function Structure({ index }) {
  const data = useSelector(getData);

  const overview = `/${data[index].name.toLowerCase()}`;
  const locate = data[index].images.internal;

  const colorPlanet = colorSizeArr[index];

  return (
    <>
      {data && (
        <DivInfo>
          <ImgPlanet src={'.' + locate} alt="planet" width={336} height={336} />
          <InfoSection>
            <NamePlanet>{data[index].name}</NamePlanet>
            <InfoText>{data[index].structure.content}</InfoText>
            <SourseDiv>
              Source :{' '}
              <SourceLink href={data[index].structure.source}>
                Wikipedia
                <LinkSpan />
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
                  <Button type="button" bkgColor={`${colorPlanet.color}`}>
                    <SpanNum>2</SpanNum>
                    Internal structure
                  </Button>
                </Link>
              </ButtonItem>
              <ButtonItem>
                <Link to={`${overview}/geology`}>
                  <Button type="button" bkgColor={`transparent`}>
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
