import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <NavLink to={"./Home.jsx"}>
            <button >Home</button>
        </NavLink>
    </div>
  )
}

export default Home