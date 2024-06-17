import './dashboard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Dashboard component
function Dashboard(){

  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
		axios.get('http://localhost:8000/api/data')
			.then(organizations => {
				setOrganizations(organizations.data);
				console.log(organizations.data)
			})
			.catch(error =>
				console.error('Error fetching notes:', error));
	}, []);

  
    return(
        // Displaying a heading for the dashboard
        <div>

            <h1>Organizations</h1>
   
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map( organization => (
            <tr>
              <td>{organization.name}</td>
              <td>{organization.email}</td>
              <td>{organization.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>  
    )
}


export default Dashboard;






