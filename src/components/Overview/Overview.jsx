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
  LinkSpan,
  NamePlanet,
  SourceLink,
  SourseDiv,
  SpanNum,
  TextSection,
} from './Overview.styled';
import { colorSizeArr } from 'assets/colorsSizeArr';

export default function Overview({ index }) {
  const data = useSelector(getData);
  const overview = `/${data[index].name.toLowerCase()}`;
  const colorPlanet = colorSizeArr[index];

  return (
    <>
      {data && (
        <DivInfo>
          <ImgContainer ind={index}>
            <ImgPlanet
              src={data[index].images.planet}
              alt="planet"
              ind={index}
            />
          </ImgContainer>
          <InfoSection>
            <TextSection>
              <NamePlanet>{data[index].name}</NamePlanet>
              <InfoText>{data[index].overview.content}</InfoText>
              <SourseDiv>
                Source :{' '}
                <SourceLink href={data[index].overview.source}>
                  Wikipedia
                  <LinkSpan />
                </SourceLink>
              </SourseDiv>
            </TextSection>
            <ButtonList>
              <ButtonItem>
                <Link to={overview}>
                  <Button type="button" bkgColor={`${colorPlanet.color}`}>
                    <SpanNum>1</SpanNum>
                    Overview
                  </Button>
                </Link>
              </ButtonItem>
              <ButtonItem>
                <Link to={'structure'}>
                  <Button type="button" bkgColor={`transparent`}>
                    <SpanNum>2</SpanNum>
                    Internal structure
                  </Button>
                </Link>
              </ButtonItem>
              <ButtonItem>
                <Button type="button" bkgColor={`transparent`}>
                  <SpanNum>3</SpanNum>
                  <Link to={'geology'}>Surface geology </Link>
                </Button>
              </ButtonItem>
            </ButtonList>
          </InfoSection>
        </DivInfo>
      )}
    </>
  );
}
