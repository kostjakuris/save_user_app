import axios from 'axios';


export const getRandomUsers = async(setIsLoading: (loading: boolean) => void,
  signal: AbortSignal): Promise<Array<any>> => {
  try {
    setIsLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_USER_API_URL}/?results=6&inc=gender,name,location,picture,email`, {signal});
    return response.data.results;
  } catch (error: any) {
    setIsLoading(false);
    if (axios.isCancel(error)) {
      return [];
    } else {
      return error;
    }
  } finally {
    setIsLoading(false);
  }
};

export const getUsersWeather = async(latitude: string, longitude: string) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&hourly=&forecast_days=1`);
    return response.data;
  } catch (error: any) {
    return error;
  }
};