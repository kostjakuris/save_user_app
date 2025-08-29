import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { FadeLoader } from 'react-spinners';
import UserCard from '../components/UserCard/UserCard';
import { useNavigate } from 'react-router-dom';
import { button } from '../asserts/globalStyles';
import { useGetUsers } from '../hooks/useGetUsers';

const MainPage = () => {
  const {isLoading, users, getUsers} = useGetUsers();
  const navigate = useNavigate();
  
  if (isLoading) {
    return (
      <>
        <Flex justifyContent={'center'} align={'center'} height={'73vh'}>
          <FadeLoader height={20} color={'white'} loading />
        </Flex>
      </>
    );
  }
  
  
  return (
    <Flex w={'100x'} direction={'column'}>
      <Button mt={'20px'} ml={'auto'} bg={'blue.400'} _hover={{bg: 'blue.500'}} css={button}
        onClick={() => navigate('/saved-users')}>
        Saved users
      </Button>
      <Flex
        justify={'center'}
        align={'center'}
        flexWrap='wrap'
      >
        {
          users.map((user) => (
            <UserCard
              latitude={user.location.coordinates.latitude}
              longitude={user.location.coordinates.longitude}
              key={user.name.first}
              currentUser={user}
              picture={user.picture.large}
              name={`${user.name.title} ${user.name.first} ${user.name.last}`}
              gender={user.gender}
              location={user.location.country}
              email={user.email}
              isMainPage
            />
          ))
        }
      </Flex>
      <Button m={'30px auto'} bg={'blue.400'} _hover={{bg: 'blue.500'}} css={button}
        onClick={async() => await getUsers()}>
        Load more
      </Button>
    </Flex>
  );
};

export default MainPage;
