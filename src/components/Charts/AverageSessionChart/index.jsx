import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const AverageSessionChart = ({ data }) => {
  const day = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const myData = data.sessions.map((session, index) => ({
    day: day[index],
    sessionLength: session.sessionLength,
  }));

  return (
    <article className="average-session-chart">
      <h2 className="average-session-chart__title">
        {`Durée moyenne des\n sessions`}
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={myData}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: '#FFFFFF', opacity: 0.5 }}
            dy={15}
            padding={{ left: 5, right: 5 }}
          />
          <YAxis hide domain={[0, 'dataMax + 30']} />
          <Tooltip
            content={({ payload, active }) => {
              if (active) {
                return (
                  <p className="average-session-chart__tooltip">
                    {`${payload[0].payload.sessionLength} min`}
                  </p>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            yAxisId={0}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
};

AverageSessionChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AverageSessionChart;
