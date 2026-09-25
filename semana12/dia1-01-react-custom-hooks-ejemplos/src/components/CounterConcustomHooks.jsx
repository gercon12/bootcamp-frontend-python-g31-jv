//import React from 'react'
//import PropTypes from 'prop-types'

//import { useState } from "react"

import {useCounter} from "../Hooks/useCounter"

const CounterConcustomHooks = () => {
    const { count, decrement, increment } = useCounter()

    return (
        <div className="bg-slate-200 p-4">
            <h3 className="2xl">Contador (Custom Hook)</h3>

            <div>
                <button className="bg-blue-400 px-3 py-2" onClick={decrement}>-</button>
                <strong className="px-3">{count}</strong>
                <button className="bg-blue-400 px-3 py-2" onClick={increment}> +</button>
            </div>
        </div>
    )

}


export default CounterConcustomHooks
