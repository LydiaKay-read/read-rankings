// src/App.jsx
import React, { startTransition } from 'react'
import './App.css'
import RankingTable from './components/RankingsTable';

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
        <RankingTable users={users} />
      </main>
    </div>
  )
}




