import React from 'react';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <Container maxWidth='1400px'>
      <Outlet />
    </Container>
  );
}

export default App;
