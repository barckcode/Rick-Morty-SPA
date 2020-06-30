import React from 'react'

const Button = ({ text, handleClick, location }) => {

  return (
    <button
      className='btn'
      type='button'
      onClick={() => handleClick(location)}
    >
      <h4>{text}</h4>
    </button>
  )
}

export default Button
