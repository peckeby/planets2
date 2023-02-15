import styled from 'styled-components';

export const StatsDiv = styled.section`
  display: flex;
  gap: 1.875rem;
  justify-content: center;
  padding-right: 3.25rem;
`;

export const StatsBox = styled.div`
  width: 15.94rem;
  padding-top: 1.25rem;
  padding-bottom: 1.6875rem;
  padding-left: 1.4375rem;
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  max-height: 8rem;
`;

export const StatsName = styled.p`
  font-family: 'Spartan';
  font-size: 0.69rem;
  opacity: 0.5;
  line-height: 1.56rem;
  letter-spacing: 0.06rem;
  font-weight: 700;
  margin-right: 0.5rem;
  text-transform: uppercase;
`;

export const StatsNum = styled.p`
  font-size: 2.5rem;
  line-height: 3.25rem;
  font-family: 'Antonio';
  text-transform: uppercase;
`;
