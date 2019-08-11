import React from 'react'
import { connect } from 'react-redux'
import { action1 } from '../actions/state1Actions'

const Child = ({ parentData, state1, action1 }) => {
  const handleClick = () => {
    action1(`Updated state1. ${Math.random()}`)
  }

  return (
    <div style={{padding: '16px', backgroundColor: '#eee'}}>
      <p>Child</p>
      <dl>
        <dt>Props data passed from the parent component.</dt>
        <dd>{parentData}</dd>
        <hr/>
        <dt>State data passed from store.</dt>
        <dd>{state1.message}</dd>
        <hr/>
        <dt>Dispatch data passed from store.</dt>
        <dd>{action1.toString()}</dd>
      </dl>
      <div onClick={handleClick}>Click</div>
    </div>
  )
}

const mapStateToProps = state => ({
  state1: state.state1
})

const mapDispatchToProps = { action1 }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Child)
