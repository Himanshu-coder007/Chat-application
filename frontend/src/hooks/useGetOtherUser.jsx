import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  const getAuthToken = () => {
    // Try to get token from cookies first
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
    
    // Fallback to localStorage if cookie not found
    return tokenCookie 
      ? tokenCookie.split('=')[1] 
      : localStorage.getItem('token');
  };

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const token = getAuthToken();
        
        if (!token) {
          console.error("No authentication token found");
          // Redirect to login or handle unauthorized state
          window.location.href = '/login';
          return;
        }

        const res = await axios.get(
          `https://chat-application-6og6.onrender.com/api/v1/user/`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (res.data && Array.isArray(res.data)) {
          dispatch(setOtherUsers(res.data));
        } else {
          console.error("Invalid response format", res.data);
          dispatch(setOtherUsers([]));
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        
        if (error.response?.status === 401) {
          // Clear invalid tokens and redirect
          localStorage.removeItem('token');
          document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          window.location.href = '/login';
        } else {
          dispatch(setOtherUsers([]));
        }
      }
    };

    fetchOtherUsers();
  }, [dispatch]);
};

export default useGetOtherUsers;