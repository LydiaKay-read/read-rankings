// src/App.jsx
import React, { startTransition } from 'react'
import './App.css'

export default function App() {
const users = [
  { id: 1, firstName: 'Captain', lastName: 'Boring', height: '5ft 10', sex: 'Trans' },
  { id: 2, firstName: 'Lydia', lastName: 'Read', height: '5ft 9', sex: 'F' },
  { id: 3, firstName: 'Nic', lastName: 'Grinch', height: '4ft 3', sex: 'Lady boy' },
];

  return (
    <div className="app-root">
      <main className="container">
        <h1 className="title">Lydia Read Rankings</h1>
        <div className="table-wrap" role="region" aria-label="Read Rankings table">
    
          <table className="rank-table">
            <caption className="sr-only">List of users and their read rankings</caption>
           <thead>
  <tr>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Height</th>
    <th scope="col">Sex</th>  
  </tr>
</thead>
          <tbody>
  {users.map((user) => (
    <tr key={user.id}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.height}</td>
      <td>{user.sex}</td>  
    </tr>
  ))}
</tbody>
          </table>
          
        </div>
      </main>
    </div>
  )
}




