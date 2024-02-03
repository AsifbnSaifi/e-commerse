import React from "react";
import { MdDelete } from "react-icons/md";

const Users = () => {
  return (
    <>
      <div className="">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-600 text-white">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* foodimage */}
              <td className="lg:w-[20rem]">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <h1>1</h1>
                    </div>
                  </div>
                </div>
              </td>
              {/* itemsname */}
              <td className="lg:w-[20rem]">Asif Ali</td>
              {/* Quantity */}
              <td className="lg:w-[15rem] flex pt-6 space-x-2">
                <button></button>
                <p>example@gmail.com</p>
                <button></button>
              </td>
              {/* price */}
              <th className="lg:w-[15rem]">
                <button className="btn btn-ghost btn-xs">Admin</button>
              </th>
              {/* delete */}
              <th className="text-blue-600 w-[10rem] ">
                <button>
                  <MdDelete size={25} />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
