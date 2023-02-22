import { planets_sizes } from 'assets/planets_sizes';
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
import Media from 'react-media';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from 'redux/planetInfo/selectors';

export default function Structure({ index }) {
  const data = useSelector(getData);

  const overview = `/${data[index].name.toLowerCase()}`;

  const locate = data[index].images.internal;

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
                      <LinkArticleActive
                        to={`${overview}/structure`}
                        bkgColor={colorPlanet.color}
                      >
                        structure
                      </LinkArticleActive>
                    </ButtonItem>
                    <ButtonItem bkgColor={`${colorPlanet.color}`}>
                      <LinkArticle to={`${overview}/geology`}>
                        geology
                      </LinkArticle>
                    </ButtonItem>
                  </ButtonList>
                  <ImgContainer ind={index}>
                    <ImgPlanet ind={index} src={'.' + locate} alt="planet" />
                  </ImgContainer>
                  <TextSection>
                    <NamePlanet>{data[index].name}</NamePlanet>
                    <InfoText>{data[index].structure.content}</InfoText>
                    <SourseDiv>
                      Source :{' '}
                      <SourceLink href={data[index].structure.source}>
                        Wikipedia
                        <LinkSpan />
                      </SourceLink>
                    </SourseDiv>
                  </TextSection>
                </>
              ) : (
                <>
                  <ImgContainer ind={index}>
                    <ImgPlanet ind={index} src={'.' + locate} alt="planet" />
                  </ImgContainer>
                  <InfoSection>
                    <TextSection>
                      <NamePlanet>{data[index].name}</NamePlanet>
                      <InfoText>{data[index].structure.content}</InfoText>
                      <SourseDiv>
                        Source :{' '}
                        <SourceLink href={data[index].structure.source}>
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
                          <Button type="button" bkgColor={`transparent`}>
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
