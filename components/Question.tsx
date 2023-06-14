'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          value={value}
          onChange={onChange}
          placeholder="ask a question"
          type="text"
          className="border border-gray-300 rounded-md p-2 text-lg"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-md"
        >
          Ask
        </button>
        {loading && <div>...loading</div>}
        {response && <div>{response}</div>}
      </form>
    </div>
  )
}

export default Question
