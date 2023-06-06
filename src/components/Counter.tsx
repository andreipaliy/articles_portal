import { useState } from 'react'
import classes from "./Counter.module.scss"

export function Counter() {

    const [count, setCount] = useState(0)

     function increment() {
      setCount((prev) => prev +1)
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment} className={classes.btn}>Increment</button>
    </>
  ) 
}
 