import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

interface CardWrapperProps {
  children: React.ReactNode;
}


const CardWrapper: FC<CardWrapperProps> = ({children}) => {
  return (
    <Box
      m={'80px 20px 0 20px'}
      p={'30px 20px'}
      borderRadius={'10px'}
      maxW={'350px'}
      w={'100%'}
      bg='blue.400'
    >
      {children}
    </Box>
  );
};

export default CardWrapper;