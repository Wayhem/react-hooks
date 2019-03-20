import { useEffect, useState } from 'react'
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

export default UseResources
