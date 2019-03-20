import React from 'react'
import useResources from './useResources'
import _ from 'lodash'

const UserList = () => {
  const users = useResources('users')
  return (
    <ul>
      {_.map(users, item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export default UserList
