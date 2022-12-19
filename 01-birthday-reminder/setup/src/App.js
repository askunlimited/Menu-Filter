import React, { useState } from 'react'
import data from './data'
import List from './List'
import List2 from './List2'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className='container'>
        <h4>{people.length} birthdays today</h4>
        <List people={people} />
        {/* {people.map((person)=> <List2 key={person.id} {...person}/>)} */}
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  )
}

export default App
