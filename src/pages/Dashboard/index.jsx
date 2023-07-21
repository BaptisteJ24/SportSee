import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData, getDataById } from '../../utils/get';

import Sidebar from '../../components/Sidebar';
import DailyActivityChart from '../../components/Charts/DailyActivityChart';
import AverageSessionChart from '../../components/Charts/AverageSessionChart';
import GoalChart from '../../components/Charts/GoalChart';
import RadarChart from '../../components/Charts/RadarChart';
import NutrimentCardGroup from '../../components/NutrimentCardGroup';
import Loader from '../../components/Loader';
import Error from '../Error';

const Dashboard = () => {
  const { userId } = useParams();
  const parsedUserId = parseInt(userId);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userMainData, setUserMainData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const fetchMainData = async () => {
      try {
        const fetchedData = await getData('/src/mocks/mockedData.json');
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMainData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (data) {
        try {
          const fetchedUserMainData = await getDataById(
            data.USER_MAIN_DATA,
            parsedUserId,
          );
          setUserMainData(fetchedUserMainData);
          const fetchedUserActivity = await getDataById(
            data.USER_ACTIVITY,
            parsedUserId,
            'userId',
          );
          setUserActivity(fetchedUserActivity);
          const fetchedUserAverageSessions = await getDataById(
            data.USER_AVERAGE_SESSIONS,
            parsedUserId,
            'userId',
          );
          setUserAverageSessions(fetchedUserAverageSessions);
          const fetchedUserPerformance = await getDataById(
            data.USER_PERFORMANCE,
            parsedUserId,
            'userId',
          );
          setUserPerformance(fetchedUserPerformance);
        } catch (error) {
          console.log(error);
        } finally {
          setTimeout(() => {
            setIsLoading(false);
          }, 800);
        }
      }
    };
    fetchUserData();
  }, [parsedUserId, data]);

  if (isLoading) {
    return <Loader />;
  } else {
    if (userMainData && userMainData.length !== 0) {
      return (
        <div className="dashboard">
          <Sidebar />
          <div className="dashboard__panel">
            <div className="dashboard__title">
              <h1>
                Bonjour{' '}
                <span className="dashboard__title__name">
                  {userMainData.userInfos.firstName}
                </span>
              </h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="dashboard__content">
              <div className="dashboard__charts">
                <DailyActivityChart data={userActivity} />
                <div className="dashboard__charts__wrapper">
                  <AverageSessionChart data={userAverageSessions} />
                  <RadarChart data={userPerformance} />
                  <GoalChart data={userMainData} />
                </div>
              </div>
              <div className="dashboard__nutriments">
                <NutrimentCardGroup nutriments={userMainData.keyData} />
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
