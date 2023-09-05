import React from 'react'

function AlertClick() {
    function sayHello(){
        alert('hello')
    }
  return (
    <div>
        <button onClick={sayHello}> Click ME!</button>
    </div>
  )
}

export default AlertClick