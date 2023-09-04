import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userData from './../../utils/userDataModel';
import Sidebar from './../../components/Sidebar';
import DailyActivityChart from './../../components/Charts/DailyActivityChart';
import AverageSessionChart from './../../components/Charts/AverageSessionChart';
import GoalChart from './../../components/Charts/GoalChart';
import RadarChartPerformance from './../../components/Charts/RadarChart';
import NutrimentCardGroup from './../../components/NutrimentCardGroup';
import Loader from './../../components/Loader';
import Error from './../Error';
import mockedData from './../../mocks/mockedData.json';
import { getDataByProperty, getDataById } from './../../utils/get';

const Dashboard = () => {
  const { userId } = useParams();
  const parsedUserId = parseInt(userId);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [needMock, setNeedMock] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        needMock ? usingMockedData() : usingApiData();
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    };

    const usingApiData = async () => {
      try {
        setIsLoading(true);
        const fetchedData = await userData(parsedUserId);
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };

    const usingMockedData = async () => {
      try {
        setData(
          await getDataById(
            await getDataByProperty(mockedData, 'USER'),
            parsedUserId,
          ),
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [parsedUserId, needMock]);

  if (isLoading) {
    return <Loader />;
  } else {
    if (data && data.name) {
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
      return (
        <Error
          needMock={!needMock}
          mockStateFunction={() => setNeedMock(true)}
        />
      );
    }
  }
};

export default Dashboard;
