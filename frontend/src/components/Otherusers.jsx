import React from "react";
import Otheruser from "./Otheruser";
import useGetOtherUsers from "../hooks/useGetOtherUser";
import { useSelector } from "react-redux";

const Otherusers = () => {

  useGetOtherUsers();
  const {otherUsers} = useSelector(store=> store.user);
  if(!otherUsers) return; // early return in react

  return (
    <div className="overflow-auto flex-1">
        {
          otherUsers?.map((user)=> {
            return(
              <Otheruser key={user._id} user={user}/>
            )
          })
        }

    </div>
  );
};

export default Otherusers;
