// client/src/components/CourseDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CourseDetail.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CourseDetail = () => {
  const { id } = useParams();
    const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!id || id === 'AdminEnrolments') return; // ⛔ prevent invalid request

    fetch(`http://localhost:5000/api/courses/detail/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!course) return <p>Loading...</p>;



const enrolInCourse = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/enrolments', {
      courseId: id,
      courseTitle: course.title,
      userEmail: 'user@example.com' // Ideally collected from user input or login
    });

    alert('🎉 Enrolment successful!');
  } catch (error) {
    console.error('Enrolment error:', error);
    alert('❌ Failed to enrol. Please try again later.');
  }
};


  return (

     <div className="course-details">
        <button className="back-button"onClick={() => navigate('/')}>
      ← Back to Course List
    </button>

       <h1>Course Title: {course.title}</h1>
       <img src={course.imageUrl} alt={course.title} className="course-image" />
        <p><strong>Description:</strong>{course.description}</p>
        <p><strong>Duration:</strong>{course.duration} hours</p>
        <p><strong>Category:</strong>{course.category}</p>
      <div>
        <h3>Modules</h3>
        <ul>
          {course.module?.length > 0 ? (
  <ul>
    {course.module.map((mod, idx) => (
      <li key={idx}>{mod}</li>
    ))}
  </ul>

) : (
  <p>No modules available.</p>
)}
        </ul>
      </div>

 <button 
  className="enrol-button" onClick={enrolInCourse} >  Enrol Now </button>

 {/* Go to Top Button */}
    <button className="go-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} > ↑ Back to Top
    </button>
    </div>
  );
};


export default CourseDetail;

