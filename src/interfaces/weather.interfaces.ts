export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: Current;
  hourly_units: HourlyUnits;
  hourly: Hourly;
  daily_units: DailyUnits;
  daily: Daily;
}

interface CurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  weather_code: string;
}

interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  weather_code: number;
}

interface HourlyUnits {
  time: string;
}

interface Hourly {
  time: string[];
}

interface DailyUnits {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
}

interface Daily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}