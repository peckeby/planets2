export const StatsSection = data => {
  return (
    <div>
      <div>
        <p>Rotation time</p>
        <p>{data.rotation}</p>
      </div>
      <div>
        <p>revolution time</p>
        <p>{data.revolution}</p>
      </div>
      <div>
        <p>radius</p>
        <p>{data.radius}</p>
      </div>
      <div>
        <p>average temp.</p>
        <p>{data.temperature}</p>
      </div>
    </div>
  );
};
