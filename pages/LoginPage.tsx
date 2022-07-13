import React, { ChangeEvent, MouseEvent, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const LoginPage = () => {
  const [apiData, setApiData] = useState([])
  const [data, setData] = useState({
    email: '',
    password: '',
    whitelabelId: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setData({
      ...data,
      [e.currentTarget.name]: value
    })
  }

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userData = {
      email: data.email,
      password: data.password,
      whitelabelId: data.whitelabelId
    }

    console.log(userData)
    axios
      .post('https://new-api.urbis.cc/auth/user', userData)
      .then((response) => {
        console.log(response.status)
        console.log(response.data)
        setApiData(response.data)
        console.log(apiData)
      })
  }

  return (
    <>
      <div>
        <h1>Login Account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="whitelabelId">
            Id
            <input
              type="text"
              name="whitelabelId"
              value={data.whitelabelId}
              onChange={handleChange}
            />
          </label>
          <Link href={'/LoggedPage'} passHref>
            <button type="submit">Login</button>
          </Link>
        </form>
      </div>
    </>
  )
}

export default LoginPage
