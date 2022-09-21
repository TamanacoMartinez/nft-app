import React from 'react'

const Button = () => {

    const handleClick = () => {
        alert("Hello There !");
        }
  return (
    <button onClick={handleClick}>
      Press Me !
    </button>
  )
}

export default Button
