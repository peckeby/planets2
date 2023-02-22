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
  LinkArticle,
  LinkArticleActive,
  LinkSpan,
  NamePlanet,
  SourceLink,
  SourseDiv,
  SpanNum,
  TextSection,
} from 'components/Overview/Overview.styled';
import { ImgGeology } from './Geology.styled';
import { planets_sizes } from 'assets/planets_sizes';
import Media from 'react-media';

export default function Geology({ index }) {
  const data = useSelector(getData);

  const overview = `/${data[index].name.toLowerCase()}`;

  const geologyImg = '.' + data[index].images.geology;
  const overviewImg = '.' + data[index].images.planet;

  const colorPlanet = planets_sizes[index];

  return (
    <>
      {data && (
        <DivInfo>
          <Media
            queries={{
              small: '(max-width: 767px)',
            }}
          >
            {matches =>
              matches.small ? (
                <>
                  <ButtonList>
                    <ButtonItem bkgColor={`${colorPlanet.color}`}>
                      <LinkArticle to={overview}>Overview</LinkArticle>
                    </ButtonItem>
                    <ButtonItem bkgColor={`${colorPlanet.color}`}>
                      <LinkArticle to={`${overview}/structure`}>
                        structure
                      </LinkArticle>
                    </ButtonItem>
                    <ButtonItem bkgColor={`${colorPlanet.color}`}>
                      <LinkArticleActive
                        to={`${overview}/geology`}
                        bkgColor={colorPlanet.color}
                      >
                        geology
                      </LinkArticleActive>
                    </ButtonItem>
                  </ButtonList>
                  <ImgContainer ind={index}>
                    <ImgPlanet ind={index} src={overviewImg} alt="planet" />
                    <ImgGeology
                      src={geologyImg}
                      alt="planet"
                      width={64}
                      height={78}
                    />
                  </ImgContainer>
                  <TextSection>
                    <NamePlanet>{data[index].name}</NamePlanet>
                    <InfoText>{data[index].geology.content}</InfoText>
                    <SourseDiv>
                      Source :{' '}
                      <SourceLink href={data[index].geology.source}>
                        Wikipedia
                        <LinkSpan />
                      </SourceLink>
                    </SourseDiv>
                  </TextSection>
                </>
              ) : (
                <>
                  <ImgContainer ind={index}>
                    <ImgPlanet ind={index} src={overviewImg} alt="planet" />
                    <ImgGeology
                      src={geologyImg}
                      alt="planet"
                      width={163}
                      height={199}
                    />
                  </ImgContainer>
                  <InfoSection>
                    <TextSection>
                      <NamePlanet>{data[index].name}</NamePlanet>
                      <InfoText>{data[index].geology.content}</InfoText>
                      <SourseDiv>
                        Source :{' '}
                        <SourceLink href={data[index].geology.source}>
                          Wikipedia
                          <LinkSpan />
                        </SourceLink>
                      </SourseDiv>
                    </TextSection>
                    <ButtonList>
                      <ButtonItem>
                        <Link to={overview}>
                          <Button type="button" bkgColor={'transparent'}>
                            <SpanNum>1</SpanNum>
                            Overview
                          </Button>
                        </Link>
                      </ButtonItem>
                      <ButtonItem>
                        <Link to={`${overview}/structure`}>
                          <Button type="button" bkgColor={`transparent`}>
                            <Media
                              queries={{
                                small: '(max-width: 767px)',
                              }}
                            >
                              {matches =>
                                matches.small ? (
                                  'structure'
                                ) : (
                                  <>
                                    <SpanNum>2</SpanNum>
                                    Internal structure
                                  </>
                                )
                              }
                            </Media>
                          </Button>
                        </Link>
                      </ButtonItem>
                      <ButtonItem>
                        <Link to={`${overview}/geology`}>
                          <Button
                            type="button"
                            bkgColor={`${colorPlanet.color}`}
                          >
                            <Media
                              queries={{
                                small: '(max-width: 767px)',
                              }}
                            >
                              {matches =>
                                matches.small ? (
                                  'geology'
                                ) : (
                                  <>
                                    <SpanNum>3</SpanNum>
                                    Surface geology
                                  </>
                                )
                              }
                            </Media>
                          </Button>
                        </Link>
                      </ButtonItem>
                    </ButtonList>
                  </InfoSection>
                </>
              )
            }
          </Media>
        </DivInfo>
      )}
    </>
  );
}
