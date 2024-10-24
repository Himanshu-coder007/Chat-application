import React, { useEffect } from 'react'
import axios from "axios";

const useGetMessages = () => {
  useEffect(() => {
    const fetchMessages = async () => {
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8080/api/v1/message/67028e1d7681171a7c1fac27`);
        } catch (error) {
            console.log(error);
        }
    }
  })
}

export default useGetMessages