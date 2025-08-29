import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { system } from './theme/theme';
import MainPage from './pages/MainPage';
import SavedUsersPage from './pages/SavedUsersPage';
import ModalProvider from './providers/ModalProvider/ModalProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, Component: MainPage},
      {path: '/saved-users', Component: SavedUsersPage},
    ],
  },
]);
root.render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ChakraProvider>
  </React.StrictMode>
);

