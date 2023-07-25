import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LessonPlanForm from './components/LessonPlanForm';
import AssignmentForm from './components/AssignmentForm';
import AssessmentForm from './components/AssessmentForm';
import LessonPlanList from './components/LessonPlanList';
import AssignmentList from './components/AssignmentList';
import AssessmentList from './components/AssessmentList';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-lesson-plan" element={<LessonPlanForm />} />
        <Route path="/create-assignment" element={<AssignmentForm />} />
        <Route path="/create-assessment" element={<AssessmentForm />} />
        <Route path="/assignments/*" element={<AssignmentRoutes />} />
        <Route path="/assessments/*" element={<AssessmentRoutes />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Educational Course Website!</h2>
    </div>
  );
};

const AssignmentRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AssignmentList />} />
        {/* Add more nested routes for assignment details, submission, etc. */}
      </Routes>
    </div>
  );
};

const AssessmentRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AssessmentList />} />
        {/* Add more nested routes for assessment details, grading, etc. */}
      </Routes>
    </div>
  );
};

export default App;
