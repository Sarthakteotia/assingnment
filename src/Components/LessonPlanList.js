import React, { useState } from 'react';

const LessonPlanList = () => {
  const [lessonPlans, setLessonPlans] = useState([
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React.js' },
    { id: 2, title: 'State Management', description: 'Understanding React state management' },
  ]);

  return (
    <div>
      <h2>Lesson Plans</h2>
      <ul>
        {lessonPlans.map((lessonPlan) => (
          <li key={lessonPlan.id}>
            <h3>{lessonPlan.title}</h3>
            <p>{lessonPlan.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonPlanList;
