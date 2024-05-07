import React from 'react'
import { useParams } from 'react-router-dom'

export default function Featured() {
    const{id} = useParams()
  return (
    <div>
        ID  {id}
    </div>
  )
}
