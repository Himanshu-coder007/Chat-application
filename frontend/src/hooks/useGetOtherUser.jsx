import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  // Function to get the token from cookies or localStorage
  const getToken = () => {
    // Check for token in cookies
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    // If not found in cookies, check localStorage
    return token || localStorage.getItem("token");
  };

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const token = getToken();

        // If no token, log and return early
        if (!token) {
          console.log("No token found, user not authenticated.");
          return;
        }

        // Ensure to pass the token in the headers
        const res = await axios.get(
          `https://chat-application-6og6.onrender.com/api/v1/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in headers
            },
            withCredentials: true, // Ensure credentials are sent with the request
          }
        );

        console.log("other users -> ", res.data);

        // Dispatch to store other users in Redux
        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.error("Error fetching users:", error.response?.data || error);
      }
    };

    fetchOtherUsers();
  }, [dispatch]); // Re-run the effect when the dispatch function changes

  return null; // No need to return anything, just side effect
};

export default useGetOtherUsers;
