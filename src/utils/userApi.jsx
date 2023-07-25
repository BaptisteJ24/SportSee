const baseURL = 'http://localhost:3000';

const routes = {
  id: '/user/:id',
  activity: '/activity',
  averageSession: '/average-sessions',
  performance: '/performance',
};

/**
 * description: Fetches data from url
 * @param {string} url - The url to fetch data from
 * @returns {object} - The data fetched
 * @throws {Error} - The error thrown by fetch
 * @async
 */
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};

/**
 * description: Fetches user data from the API
 * @param {number} id - The user id
 * @returns {object} - The user data
 * @throws {Error} - The error thrown by fetchData
 * @async
 */
const getUser = async (id) => {
  const url = `${baseURL}${routes.id.replace(':id', id)}`;
  return fetchData(url);
};

/**
 * description: Fetches user activity data from the API
 * @param {number} id - The user id
 * @returns {object} - The user activity data
 * @throws {Error} - The error thrown by fetchData
 * @async
 */
const getUserActivity = async (id) => {
  const url = `${baseURL}${routes.id.replace(':id', id)}${routes.activity}`;
  return fetchData(url);
};

/**
 * description: Fetches user average session data from the API
 * @param {number} id - The user id
 * @returns {object} - The user average session data
 * @throws {Error} - The error thrown by fetchData
 * @async
 */
const getUserAverageSession = async (id) => {
  const url = `${baseURL}${routes.id.replace(':id', id)}${
    routes.averageSession
  }`;
  return fetchData(url);
};

/**
 * description: Fetches user performance data from the API
 * @param {number} id - The user id
 * @returns {object} - The user performance data
 * @throws {Error} - The error thrown by fetchData
 * @async
 */
const getUserPerformance = async (id) => {
  const url = `${baseURL}${routes.id.replace(':id', id)}${routes.performance}`;
  return fetchData(url);
};

export { getUser, getUserActivity, getUserAverageSession, getUserPerformance };
