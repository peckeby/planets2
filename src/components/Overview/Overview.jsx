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
} from './Overview.styled';
import { planets_sizes } from 'assets/planets_sizes';
import Media from 'react-media';

export default function Overview({ index }) {
  const data = useSelector(getData);
  const overview = `/${data[index].name.toLowerCase()}`;
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
                    <ButtonItem>
                      <LinkArticleActive
                        to={overview}
                        bkgColor={colorPlanet.color}
                      >
                        Overview
                      </LinkArticleActive>
                    </ButtonItem>
                    <ButtonItem>
                      <LinkArticle to={'structure'}>structure</LinkArticle>
                    </ButtonItem>
                    <ButtonItem>
                      <LinkArticle to={'geology'}>geology</LinkArticle>
                    </ButtonItem>
                  </ButtonList>
                  <ImgContainer ind={index}>
                    <ImgPlanet
                      src={data[index].images.planet}
                      alt="planet"
                      ind={index}
                    />
                  </ImgContainer>
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
                </>
              ) : (
                <>
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
                          <Button type="button" bkgColor={colorPlanet.color}>
                            <SpanNum>1</SpanNum>
                            Overview
                          </Button>
                        </Link>
                      </ButtonItem>
                      <ButtonItem>
                        <Link to={'structure'}>
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
                        <Link to={'geology'}>
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
