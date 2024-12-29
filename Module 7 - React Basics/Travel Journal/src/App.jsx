import { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

function App() {

  const entryElements = data.map((entry) => {
    return (
      <Entry 
          key={entry.id}
          {...entry}
      />
    )
  })

  return (
    <>
      <Header />
      <main className='container'>
        {entryElements}
      </main>
    </>
  )
}

export default App
