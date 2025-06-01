import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/CourseList.css'
import { useNavigate } from 'react-router-dom';


const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    //fetch('/api/courses')
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error(err));
  }, []);

const navigate = useNavigate();



return (
    <div>
        <div className="hero-banner">
            <img src="../images/mainbanner.png" alt="IT courses" width="1100" height="300" loading="eager"></img>
      <h1 className="h1">Explore Our Top Courses</h1>
        </div>
    <div className="courses-grid">
        {courses.slice(0, 8).map((course) => (
          <div className="course-card" key={course._id}>
            <img src={course.imageUrl} alt={course.title} className="course-image" />
            <h3>{course.title}</h3>
            <p>{course.description.slice(0, 100)}...</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration} hours</p>
           <button className="button" onClick={() => navigate(`/courses/${course.details_id}`)} >View Details</button> 
          </div>
        ))}
      </div>
 {/* Go to Top Button */}
    <button 
      className="go-top-button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      ↑ Back to Top
    </button>
  </div>
  );
};



export default CourseList;

