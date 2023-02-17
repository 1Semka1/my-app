import React, { useState } from 'react'
import Counter from './counter'

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь' },
    { id: 1, value: 3, name: 'Ложка' },
    { id: 2, value: 3, name: 'Вилка' },
    { id: 3, value: 3, name: 'Трелка' },
    { id: 4, value: 1, name: 'Набор минималиста' },
  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelete = (id) => {
    const newCounters = counters.filter((item) => item.id !== id)
    setCounters(newCounters)
  }
  const handleReset = () => {
    setCounters(initialState)
  }
  const handleIncrement = (id) => {
    const newCounters = counters.map((item) => {
      if (item.id === id) return { ...item, value: (item.value += 1) }
      return item
    })
    setCounters(newCounters)
  }
  const handleDecrement = (id) => {
    const newCounters = counters.map((item) => {
      if (item.id === id)
        return {
          ...item,
          value: item.value !== 0 ? (item.value -= 1) : item.value,
        }

      return item
    })
    setCounters(newCounters)
  }
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  )
}

export default CountersList
