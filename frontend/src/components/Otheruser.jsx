import React from "react";

const Otheruser = ({user}) => {
  return (
    <div>
      
        <div className="flex gap-2 items-center text-white hover:text-zinc-900 hover:bg-zinc-200 rounded-sm p-2 cursor-pointer">
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src={user?.profilePhoto} alt="user-profile" />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex justify-between  gap-2 ">
                   <p className="text-black">{user?.fullName}</p>
                </div>
            </div>
        </div>
        <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default Otheruser;
