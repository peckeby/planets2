import styled from 'styled-components';

export const ImgPlanet = styled.img`
  padding-left: 10.625rem;
  padding-top: 1.875rem;
`;

export const DivInfo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5.4375rem;
`;

export const InfoSection = styled.div`
  margin-left: 18.75rem;
`;

export const NamePlanet = styled.h2`
  font-size: 5rem;
  line-height: 6.5rem;
  text-transform: uppercase;
  font-family: 'Antonio';
`;

export const InfoText = styled.p`
  margin-top: 1.4375rem;
  font-size: 0.88rem;
  font-family: 'Spartan';
  line-height: 1.56rem;
  margin-bottom: 1.4375rem;
  max-width: 21.88rem;
`;

export const SourseDiv = styled.p`
  font-size: 0.88rem;
  line-height: 1.56rem;
  font-family: 'Spartan';
  opacity: 0.5;
  width: 21.88rem;
  margin-bottom: 2.4375rem;
`;

export const SourceLink = styled.a`
  font-weight: 700;
  text-decoration: underline;
  display: inline-flex;
`;

export const LinkSpan = styled.span`
  content: url('./assets/external.svg');
  display: inline-block;
  width: 12px;
  height: 12px;
  align-self: center;
  margin-left: 8px;
`;

export const ButtonList = styled.ul`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

export const ButtonItem = styled.li`
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  color: var(--white);
  cursor: pointer;
  font-family: 'Spartan';
  font-weight: 700;
  width: 21.88rem;
  height: 3rem;
  background-color: ${props => props.bkgColor};
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1.56rem;
  letter-spacing: 0.19rem;
  text-transform: uppercase;

  &:hover {
    background: rgba(85, 85, 85, 0.2);
  }
`;

export const SpanNum = styled.span`
  opacity: 0.5;
  color: var(--white);
  margin-right: 1.75rem;
  margin-left: 1.75rem;
`;
