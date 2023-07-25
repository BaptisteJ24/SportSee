import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userData from '../../utils/userDataModel';
import Sidebar from '../../components/Sidebar';
import DailyActivityChart from '../../components/Charts/DailyActivityChart';
import AverageSessionChart from '../../components/Charts/AverageSessionChart';
import GoalChart from '../../components/Charts/GoalChart';
import RadarChartPerformance from '../../components/Charts/RadarChart';
import NutrimentCardGroup from '../../components/NutrimentCardGroup';
import Loader from '../../components/Loader';
import Error from '../Error';

const Dashboard = () => {
  const { userId } = useParams();
  const parsedUserId = parseInt(userId);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const fetchedData = await userData(parsedUserId);
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    };
    fetchUserData();
  }, [parsedUserId]);

  if (isLoading) {
    return <Loader />;
  } else {
    if (data && data.length !== 0) {
      return (
        <div className="dashboard">
          <Sidebar />
          <div className="dashboard__panel">
            <div className="dashboard__title">
              <h1>
                Bonjour{' '}
                <span className="dashboard__title__name">{data.name}</span>
              </h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="dashboard__content">
              <div className="dashboard__charts">
                <DailyActivityChart data={data.activity} />
                <div className="dashboard__charts__wrapper">
                  <AverageSessionChart data={data.averageSession} />
                  <RadarChartPerformance data={data.performance} />
                  <GoalChart data={data.todayScore} />
                </div>
              </div>
              <div className="dashboard__nutriments">
                <NutrimentCardGroup nutriments={data.nutriments} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Error />;
    }
  }
};

export default Dashboard;
