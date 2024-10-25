import React, { useEffect } from "react";
import Sendinput from "./Sendinput";
import Messages from "./Messages";
import { useSelector,useDispatch} from "react-redux";
import {setSelectedUser} from "../redux/userSlice";

const MessageContainer = () => {
  const {selectedUser} = useSelector(store=>store.user);
  return (
    <>
    {
      selectedUser !== null ? (<div className="md:min-w-[550px] flex flex-col">
        <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img
                src={selectedUser?.profilePhoto }
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between  gap-2 ">
              <p className="">{selectedUser?.fullName}</p>
            </div>
          </div>
        </div>
        <Messages/>
        <Sendinput/>
      </div>) : (<h1>Let's start conversation </h1>)
    }
    </>
  );
};

export default MessageContainer;
