import React from 'react'
import Filter from '../components/Filter'
import Counter from '../components/Counter'
import AddGuest from '../components/AddGuest'

const Main = () => {
  return (
    <div className="main">
      <Filter />
      <AddGuest />
      <Counter />
    </div>
  )
}
export default Main
