import  { useEffect } from 'react';
import { useUser } from './UserContext';
import axios from 'axios';

const UserInitializer = ({ children }) => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (token && userInfo) {
      setUser(userInfo);
    }
  }, [setUser]);

  useEffect(() => {
    if (user && user.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [user]);

  // This component doesn't render any UI itself; it just initializes user state and axios headers.
  return children || null;
};

export default UserInitializer;
