import React from 'react';
import { Outlet } from 'react-router-dom';

const AssessmentList = () => {
  return (
    <div>
      <h2>Assessments</h2>
      <ul>
        {/* Display list items */}
      </ul>
      <hr />
      {/* Render nested routes */}
      <Outlet />
    </div>
  );
};

export default AssessmentList;
