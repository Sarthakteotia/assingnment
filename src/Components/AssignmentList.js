import React from 'react';
import { Outlet } from 'react-router-dom';

const AssignmentList = () => {
  return (
    <div>
      <h2>Assignments</h2>
      <ul>
        {/* Display list items */}
      </ul>
      <hr />
      {/* Render nested routes */}
      <Outlet />
    </div>
  );
};

export default AssignmentList;
