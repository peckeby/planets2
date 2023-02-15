import { StatsBox, StatsDiv, StatsName, StatsNum } from './StatsSection.styled';

export const StatsSection = ({ data, idx }) => {
  return (
    <StatsDiv>
      <StatsBox>
        <StatsName>Rotation time</StatsName>
        <StatsNum>{data[idx].rotation}</StatsNum>
      </StatsBox>
      <StatsBox>
        <StatsName>revolution time</StatsName>
        <StatsNum>{data[idx].revolution}</StatsNum>
      </StatsBox>
      <StatsBox>
        <StatsName>radius</StatsName>
        <StatsNum>{data[idx].radius}</StatsNum>
      </StatsBox>
      <StatsBox>
        <StatsName>average temp.</StatsName>
        <StatsNum>{data[idx].temperature}</StatsNum>
      </StatsBox>
    </StatsDiv>
  );
};
