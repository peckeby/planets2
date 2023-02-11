export const StatsSection = ({ data, idx }) => {
  return (
    <div>
      <div>
        <p>Rotation time</p>
        <p>{data[idx].rotation}</p>
      </div>
      <div>
        <p>revolution time</p>
        <p>{data[idx].revolution}</p>
      </div>
      <div>
        <p>radius</p>
        <p>{data[idx].radius}</p>
      </div>
      <div>
        <p>average temp.</p>
        <p>{data[idx].temperature}</p>
      </div>
    </div>
  );
};
