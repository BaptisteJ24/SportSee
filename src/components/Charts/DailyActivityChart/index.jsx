import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const DailyActivityChart = ({ data }) => {
  const myData = data.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  return (
    <article className="daily-activity-chart">
      <h2 className="daily-activity-chart__title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          className="daily-activity-chart__bar-chart"
          data={myData}
          margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
          title="Activité quotidienne"
        >
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={['dataMin - 2', 'dataMax + 1']}
            tickCount="4"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={['dataMin - 20', 'dataMax + 10']}
            hide
          />
          <Tooltip
            content={({ payload, active }) => {
              if (active) {
                return (
                  <div className="daily-activity-chart__tooltip">
                    <p className="daily-activity-chart__tooltip__kilogram__value">
                      {`${payload[0].value} kg`}
                    </p>
                    <p className="daily-activity-chart__tooltip__calories__value">
                      {`${payload[1].value} kCal`}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconSize={8}
            payload={[
              {
                id: 'kilogram',
                value: 'Poids (kg)',
                type: 'circle',
                color: '#282d30',
              },
              {
                id: 'calories',
                value: 'Calories brûlées (kCal)',
                type: 'circle',
                color: '#ff0000',
              },
            ]}
            wrapperStyle={{ top: -20 }}
          ></Legend>
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282d30"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#ff0000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  );
};

DailyActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default DailyActivityChart;
