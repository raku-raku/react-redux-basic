import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <p>Parent</p>
      <Child message={'Data passed from parent.'}/>
    </div>
  )
}

export default Parent
