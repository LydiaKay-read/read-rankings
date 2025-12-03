// src/App.jsx
import React from 'react'
import './App.css'

export default function App() {
  const users = [
    {id: 1, firstName: 'James', height: '6ft 1'},
    {id: 2, firstName: 'Lydia', height: '5ft 9'},
    {id: 3, firstName: 'Nic', height: '4ft 2'},
  ]

  return (
    <div className="app-root">
      <main className="container">
        <h1 className="title">Read Rankings</h1>

        <div className="table-wrap" role="region" aria-label="Read Rankings table">
          <table className="rank-table">
            <caption className="sr-only">List of users and their read rankings</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Height</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.height}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
