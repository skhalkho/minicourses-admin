import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import AdminEnrolments from './components/AdminEnrolments';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/admin/enrolments" element={<AdminEnrolments />} />
              </Routes>
      </Routes>
    </Router>
  );
};

export default App;
