
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminEnrolments.css';

const AdminEnrolments = () => {
  const [enrolments, setEnrolments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/enrolments')
      .then(res => {
        setEnrolments(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch enrolments.');
        setLoading(false);
      });
  }, []);

const handleSearch = (e) => {
  const value = e.target.value.toLowerCase();
  setSearch(value);

  const filteredData = enrolments.filter((enrolment) => {
    const title = (enrolment.courseTitle || '').toLowerCase();
    const email = (enrolment.userEmail || '').toLowerCase();
    return title.includes(value) || email.includes(value);
  });

  setFiltered(filteredData);
};


  return (
    <div className="enrolment-container">
      <h2>📋 Enrolment Records</h2>

      <input
        type="text"
        placeholder="Search by course or email..."
        value={search}
        onChange={handleSearch}
        className="search-input"
      />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table className="enrolment-table">
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Course ID</th>
              <th>User Email</th>
              <th>Enrolled At</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => (
              <tr key={e._id}>
                <td>{e.courseTitle}</td>
                <td>{e.courseId}</td>
                <td>{e.userEmail}</td>
                <td>{new Date(e.enrolledAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminEnrolments;

//----------------------------------------------------


