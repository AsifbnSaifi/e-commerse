import React from "react";
import { Outlet , Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <p>DashBoard</p>
            </li>
            <li>
                <Link to='/dashboard/adddata'>
              <p>AddItem</p>
              </Link>
            </li>
            <li>
              <p>ManageItem</p>
            </li>
            <li>
              <Link to='/dashboard/users'>
              <p>Users</p>
              </Link>
            </li>
            <li>
              <p>ProductsList</p>
            </li>
            <li>
              <p>Account</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
