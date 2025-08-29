import { getUsersWeather } from '../api';
import { useCallback, useEffect, useState } from 'react';
import { WeatherResponse } from '../interfaces/weather.interfaces';

interface WeatherProps {
  latitude: string;
  longitude: string;
}

export const useGetWeather = ({latitude, longitude}: WeatherProps) => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const getCurrentUserWeather = useCallback(async() => {
    const currentWeather = await getUsersWeather(latitude, longitude);
    setWeather(currentWeather);
  }, [latitude, longitude]);
  useEffect(() => {
    getCurrentUserWeather();
  }, [getCurrentUserWeather]);
  return {
    weather: weather && weather as WeatherResponse,
  };
};
