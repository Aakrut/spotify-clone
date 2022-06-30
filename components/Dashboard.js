import React from "react";
import Right from "./Right";
import Sidebar from "./Sidebar";
import Body from "./Body";

const Dashboard = () => {
  return (
    <main>
      <Sidebar />
      <Body />
      <Right />
    </main>
  );
};

export default Dashboard;
