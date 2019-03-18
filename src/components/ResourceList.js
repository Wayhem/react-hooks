import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseResources = resource => {
  const [resources, setResources] = useState([])

  const fetchResource = async resource => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    setResources(response.data)
  }

  useEffect(() => {
    //could also make an IIFE of this
    fetchResource(resource)
  }, [resource])

  return resources
}

const ResourceList = ({ resource }) => {
  const resources = UseResources(resource)
  return (
    <ul>
      {resources.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList
