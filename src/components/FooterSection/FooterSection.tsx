import React from 'react'

import { useSelector } from 'react-redux'
import ClearCompletedButton from './ClearCompletedButton'
import FilterButtons from './FilterButtons'
import ActiveTodosCounter from './ActiveTodosCounter'

const FooterSection: React.FC = () => {
  const counters = useSelector((state: { todos }) => state.todos.counters)

  return (
    <section className="footer">
      {counters.active > 0 && <ActiveTodosCounter />}
      <FilterButtons />
      {counters.completed > 0 && <ClearCompletedButton />}
    </section>
  )
}

export default FooterSection
