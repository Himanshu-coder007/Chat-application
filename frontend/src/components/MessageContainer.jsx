import React from "react";
import Sendinput from "./Sendinput";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const {selectedUser} = useSelector(store=>store.user)
  return (
    <div className="md:min-w-[550px] flex flex-col">
      <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCQV6KQI-1grd2BsWjg5astMDaDlwbSxtKw&s"
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
    </div>
  );
};

export default MessageContainer;
