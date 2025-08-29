import React, { FC } from 'react';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { cardButton, titleOne, value, valuePlaceholder } from '../../asserts/globalStyles';
import { useModal } from '../../providers/ModalProvider/ModalProvider.hooks';
import WeatherModal from '../WeatherModal/WeatherModal';
import CardWrapper from '../CardWrapper/CardWrapper';

interface UserCardProps {
  currentUser?: any;
  latitude: string;
  longitude: string;
  name: string;
  gender: string;
  location: string;
  picture: string;
  email: string;
  isMainPage?: boolean;
}

const UserCard: FC<UserCardProps> = ({
  name,
  location,
  gender,
  email,
  picture,
  latitude,
  longitude,
  currentUser,
  isMainPage = false
}) => {
  const saveUserInStorage = () => {
    if (currentUser) {
      const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
      allUsers.push(currentUser);
      localStorage.setItem('users', JSON.stringify(allUsers));
    }
  };
  
  const {openModal} = useModal();
  
  return (
    <CardWrapper>
      <Flex justify='center' align='center' direction='column'>
        <Image src={picture} alt={picture} borderRadius={'50%'} />
        <Text css={titleOne}>{name}</Text>
        <Flex mt={'10px'} w={'100%'} justify='space-between' align='center' p={'10px 0'}>
          <Text css={valuePlaceholder}>Gender</Text>
          <Text css={value}>{gender}</Text>
        </Flex>
        <Flex w={'100%'} justify='space-between' align='center' p={'10px 0'}>
          <Text css={valuePlaceholder}>Location</Text>
          <Text css={value}>{location}</Text>
        </Flex>
        <Flex w={'100%'} justify='space-between' align='center' p={'10px 0'}>
          <Text css={valuePlaceholder}>Email</Text>
          <Text css={value} ml={'10px'}>{email}</Text>
        </Flex>
      </Flex>
      <Flex pt='40px' width='100%' justify='space-between' align='center'>
        {isMainPage && (
          <Button css={cardButton} onClick={saveUserInStorage}>
            Save
          </Button>
        )
        }
        <Button w={isMainPage ? '130px' : '100%'} css={cardButton}
          onClick={() => openModal(<WeatherModal latitude={latitude} longitude={longitude} />)}>
          Weather
        </Button>
      </Flex>
    </CardWrapper>
  );
};

export default UserCard;