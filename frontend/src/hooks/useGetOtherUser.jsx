import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  const getToken = () => {
    try {
      // More reliable cookie parsing
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
      
      // Check both cookie formats
      const token = tokenCookie?.split('=')[1] || localStorage.getItem('token');
      
      if (!token) {
        console.log("Token not found in cookies or localStorage");
        // Clear any invalid tokens
        localStorage.removeItem('token');
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        return null;
      }
      return token;
    } catch (error) {
      console.error("Error getting token:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const token = getToken();
        
        if (!token) {
          console.log("No token found, redirecting to login");
          window.location.href = '/login';
          return;
        }

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
            credentials: 'include'
          }
        );

        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.error("Error fetching users:", error);
        if (error.response?.status === 401) {
          // Handle unauthorized (token expired/invalid)
          localStorage.removeItem('token');
          document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          window.location.href = '/login';
        }
      }
    };

    fetchOtherUsers();
  }, [dispatch]);

  return null;
};

export default useGetOtherUsers;