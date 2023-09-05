import React, { useState } from 'react'

function FunctionClick() {
  const [state, setState] = useState(0);
  return (
    <div>
      <button onClick={()=>setState(state+1)}>Click Increase</button>
      <h1>{state}</h1>
      <button onClick={()=>(state>0)?setState(state-1):0}> Click Decrease</button>
    </div>
  )
}

export default FunctionClick