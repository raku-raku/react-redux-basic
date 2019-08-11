import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div style={{padding: '16px', width: '800px', backgroundColor: '#999'}}>
      <p>Parent</p>
      <Child parentData={'Data passed from parent.'}/>
    </div>
  )
}

export default Parent
