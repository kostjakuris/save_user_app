import React, { FC } from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { value, valuePlaceholder } from '../../asserts/globalStyles';
import CardWrapper from '../CardWrapper/CardWrapper';
import { useGetWeather } from '../../hooks/useGetWeather';
import { weatherImages } from './WeatherCodeConfig';

interface WeatherModalProps {
  latitude: string;
  longitude: string;
}


const WeatherModal: FC<WeatherModalProps> = ({latitude, longitude}) => {
  const {weather} = useGetWeather({latitude, longitude});
  if (weather) {
    return (
      <CardWrapper>
        <Flex justify='center' align='center' direction='column'>
          <Image src={weatherImages[weather.current.weather_code]} alt={String(weather.current.weather_code)} />
          <Flex mt={'10px'} w={'100%'} justify='space-between' align='center' p={'10px 0'}>
            <Text css={valuePlaceholder}>Current temperature</Text>
            <Text css={value}>{weather.current.temperature_2m}°C</Text>
          </Flex>
          <Flex w={'100%'} justify='space-between' align='center' p={'10px 0'}>
            <Text css={valuePlaceholder}>Min. temperature</Text>
            <Text css={value}>{weather.daily.temperature_2m_min[0]}°C</Text>
          </Flex>
          <Flex w={'100%'} justify='space-between' align='center' p={'10px 0'}>
            <Text css={valuePlaceholder}>Max. temperature</Text>
            <Text css={value}>{weather.daily.temperature_2m_max[0]}°C</Text>
          </Flex>
        </Flex>
      </CardWrapper>
    );
  }
  return <></>;
};

export default WeatherModal;