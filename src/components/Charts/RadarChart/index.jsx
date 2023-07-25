import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const RadarChartPerformance = ({ data }) => {
  const kind = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ];

  const myData = data.map((item, index) => ({
    kind: kind[index],
    value: item.value,
  }));

  return (
    <article className="radar-chart-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={myData}>
          <PolarGrid radialLines={false} gridType="polygon" stroke="#fff" />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: '#fff' }}
            fontWeight="500"
            fontSize="12px"
          />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#ff0000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  );
};

RadarChartPerformance.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default RadarChartPerformance;
