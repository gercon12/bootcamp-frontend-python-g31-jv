// const Counter = () => {
//   return (
//     <div>Counter</div>
//   )
// }

// export default Counter

//import React from 'react'

import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(99)

    const decrement = () => {setCount(count - 1)}

    const increment = () => {setCount(count + 1)
    }   


  return (
    <div className="bg-slate-200 p-4">
      <h3 className="2xl">Contador</h3>

      <div>
        <button className="bg-blue-400 px-3 py-2" onClick={decrement}>-</button>
        <strong className="px-3">{count}</strong>
        <button className="bg-blue-400 px-3 py-2" onClick={increment}> +</button>  
      </div>
    </div>
  )
}

export default Counter
