import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import PropTypes from 'prop-types';

const GoalChart = ({ data }) => {
  const myData = [
    { name: 'Score', value: data, fill: '#ff0000' },
    { name: 'RestScore', value: 100 - data, fill: '#ffffff' },
  ];

  return (
    <article className="goal-chart">
      <h2 className="goal-chart__title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={myData}
            innerRadius={70}
            outerRadius={80}
            startAngle={180}
            endAngle={-180}
            fill="#ffffff"
            dataKey="value"
          >
            {myData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fill}
                stroke="0"
                cornerRadius="50%"
              />
            ))}
          </Pie>
          <Legend
            payload={[
              {
                value: (
                  <p className="goal-chart__legend">
                    <span className="goal-chart__legend__value">{data}%</span>{' '}
                    de votre objectif
                  </p>
                ),
              },
            ]}
            width={70}
            height={70}
            layout="vertical"
            verticalAlign="middle"
          />
        </PieChart>
      </ResponsiveContainer>
      <svg
        className="goal-chart__circle"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="70" />
      </svg>
    </article>
  );
};

GoalChart.propTypes = {
  data: PropTypes.number.isRequired,
};

export default GoalChart;
