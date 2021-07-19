import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import { buttons } from '../../utils/constants'
import { Filter } from '../../utils/interfaces'

const FilterButtons = ({ activeFilter, setFilter }) => {
  const [filterButtons, setFilterButtons] = useState<Filter[]>([])

  useEffect(() => {
    return setFilterButtons(buttons)
  }, [])

  const handlerSetFilter = useCallback((event) => {
    setFilter(event.target.textContent)
  }, [setFilter])

  return (
    <ul className='filters'>
      {filterButtons.map((filterButton) => (
        <li key={filterButton.key}>
          <button
            type='button'
            className={classNames({
              selected: activeFilter === filterButton.key
            })}
            onClick={handlerSetFilter}
          >
            {filterButton.title}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default FilterButtons
