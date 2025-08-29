import { useCallback, useEffect, useRef, useState } from 'react';
import { getRandomUsers } from '../api';
import { User } from '../interfaces/user.interfaces';

export const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const controllerRef = useRef<AbortController | null>(null);
  
  const getUsers = useCallback(async() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();
    const randomUsers = await getRandomUsers(setIsLoading, controllerRef.current.signal);
    setUsers((prev) => [...prev, ...randomUsers]);
  }, []);
  
  useEffect(() => {
    getUsers();
    return () => {
      controllerRef.current?.abort();
    };
  }, [getUsers]);
  
  return {
    isLoading,
    users,
    getUsers
  };
};