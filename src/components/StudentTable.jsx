import React from 'react';

const StudentTable = () => {
  const headers = ['ID', 'Name', 'Age', 'Grade', 'Email'];

  const rows = [
    { id: 1, name: 'Aarav Sharma', age: 18, grade: 'A', email: 'aarav@example.com' },
    { id: 2, name: 'Isha Patel', age: 19, grade: 'B', email: 'isha@example.com' },
    { id: 3, name: 'Rohan Verma', age: 17, grade: 'A+', email: 'rohan@example.com' },
    { id: 4, name: 'Sanya Mehta', age: 20, grade: 'B+', email: 'sanya@example.com' },
    { id: 5, name: 'Neha Joshi', age: 18, grade: 'C', email: 'neha@example.com' },
    { id: 6, name: 'Kabir Rao', age: 19, grade: 'A', email: 'kabir@example.com' },
    { id: 7, name: 'Divya Nair', age: 18, grade: 'B-', email: 'divya@example.com' },
    { id: 8, name: 'Manav Singh', age: 17, grade: 'A-', email: 'manav@example.com' },
    { id: 9, name: 'Tanya Kapoor', age: 20, grade: 'B', email: 'tanya@example.com' },
    { id: 10, name: 'Rahul Mishra', age: 19, grade: 'C+', email: 'rahul@example.com' },
  ];

  return (
    <div>
      <h2>Student Table</h2>
      <table border="1">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
