import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import Otherusers from "./Otherusers";

const Sidebar = () => {
  return (
    <div className="border-slate-500 p-4 flex flex-col">
      <form action="" className="flex items-center gap-2">
        <input
          className="input input-bordered rounded-md"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="btn  bg-zinc-700 text-white">
          <BiSearchAlt2 className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider px-3">
      </div>
      <Otherusers/>
      <div className="mt-2">
        <button className="btn">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
