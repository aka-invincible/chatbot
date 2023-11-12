import React from 'react'

const GotIt = (props) => {
  const initialAction = () => {
    // console.log(props);
    props.actions.initialAction()
  }
  return (
      <button className='got-it' onClick={() => initialAction()}>Got it!</button>
  )
}

export default GotIt
