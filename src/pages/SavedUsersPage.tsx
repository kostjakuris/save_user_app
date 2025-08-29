import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import UserCard from '../components/UserCard/UserCard';
import { titleOne } from '../asserts/globalStyles';

const SavedUsersPage = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  if (users.length === 0) {
    return (
      <Flex
        justify={'center'}
        align={'center'}
        height={'100vh'}
      >
        <Text css={titleOne} color={'black'}>There are no saved users yet!</Text>
      </Flex>
    );
  }
  
  return (
    <Flex
      justify={'center'}
      align={'center'}
      flexWrap='wrap'
    >
      {
        users.map((user: any) => (
          <UserCard
            latitude={user.location.coordinates.latitude}
            longitude={user.location.coordinates.longitude}
            key={user.name.first}
            picture={user.picture.large}
            name={`${user.name.title} ${user.name.first} ${user.name.last}`}
            gender={user.gender}
            location={user.location.country}
            email={user.email}
          />
        ))
      }
    </Flex>
  );
};

export default SavedUsersPage;