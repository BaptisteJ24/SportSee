import {
  getUser,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
} from './userApi';

/**
 * description: User class
 * @param {number} id
 * @param {string} name
 * @param {number} todayScore
 * @param {object} nutriments
 * @param {object} activity
 * @param {object} averageSession
 * @param {object} performance
 * @return {object} userData
 */
class User {
  constructor(
    id,
    name,
    todayScore,
    nutriments,
    activity,
    averageSession,
    performance,
  ) {
    this.id = id;
    this.name = name;
    this.todayScore = todayScore;
    this.nutriments = nutriments;
    this.activity = activity;
    this.averageSession = averageSession;
    this.performance = performance;
  }
}

/**
 * description: Get user data from API
 * @param {number} id
 * @return {object} formattedUserData
 */
const getUserData = async (id) => {
  const user = await getUser(id);
  const activity = await getUserActivity(id);
  const averageSession = await getUserAverageSession(id);
  const performance = await getUserPerformance(id);

  const userData = new User(
    user.data.id,
    user.data.userInfos,
    user.data.todayScore,
    user.data.keyData,
    activity.data.sessions,
    averageSession.data.sessions,
    performance.data,
  );

  const formattedUserData = await formatUserData(userData);
  return formattedUserData;
};

/**
 * description: Format user data for front-end
 * @param {object} data
 * @return {object} formattedUserData
 */
const formatUserData = async (data) => {
  const {
    id,
    name,
    todayScore,
    nutriments,
    activity,
    averageSession,
    performance,
  } = data;

  const formattedUserData = {
    id,
    name: name.firstName,
    todayScore: todayScore * 100,
    nutriments: {
      calories: nutriments.calorieCount,
      proteins: nutriments.proteinCount,
      carbohydrates: nutriments.carbohydrateCount,
      lipids: nutriments.lipidCount,
    },
    activity: activity.map((session) => {
      return {
        kilogram: session.kilogram,
        calories: session.calories,
      };
    }),
    averageSession: averageSession.map((session) => {
      return {
        duration: session.sessionLength,
      };
    }),
    performance: performance.data
      .map((kind, index) => {
        return {
          kind: performance.kind[index + 1],
          value: kind.value,
        };
      })
      .slice()
      .reverse(),
  };
  return formattedUserData;
};

export default getUserData;
