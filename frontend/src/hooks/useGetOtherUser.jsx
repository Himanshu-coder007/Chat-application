import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;

        // Get the auth token from cookies or localStorage
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          ?.split("=")[1];

        // If no token, return early
        if (!token) {
          console.log("No token found, user not authenticated.");
          return;
        }

        const res = await axios.get(
          `https://chat-application-6og6.onrender.com/api/v1/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // 🔥 Include the token
            },
          }
        );

        console.log("other users -> ", res.data);

        // Store the users in Redux
        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.error("Error fetching users:", error.response?.data || error);
      }
    };

    fetchOtherUsers();
  }, [dispatch]); // ✅ Include dispatch in dependency array

  // Optional: return any useful data (if needed in the future)
  return null;
};

export default useGetOtherUsers;
