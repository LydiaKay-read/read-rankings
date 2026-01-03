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

  const personalityTraits = [
    { userId: 1, dressSense: 10, basicBitchLevel: 0, wrestling: 9, humour: 8},
    { userId: 2, dressSense: 7, basicBitchLevel: 2, wrestling: 2, humour: 7},
    { userId: 1, dressSense: 7, basicBitchLevel: 10, wrestling: 7, humour: 7},
  ]

  return (
    <div className="app-root">
      <main className="container">
        <h1 className="title">Lydia Read Rankings</h1>
        <RankingTable users={users} />
      </main>
    </div>
  )
}




