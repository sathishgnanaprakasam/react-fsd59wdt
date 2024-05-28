import { useState } from "react"

const D = ({ counts }) => {
  return (
    <div>
      <h2>D</h2>
      <p>Total counts: { counts.a + counts.b + counts.c + counts.d }</p>
    </div>
  )
}

const C = ({ counts }) => {
  return (
    <div>
      <h2>C</h2>
      <D 
        counts={counts}
      />
    </div>
  )
}

const B = ({ counts }) => {
  return (
    <div>
      <h2>B</h2>
      <C 
        counts={counts}
      />
    </div>
  )
}

const App = () => {

  const [counts, setCounts] = useState({
    a: 10,
    b: 20,
    c: 30,
    d: 40
  });

  return (
    <div>
      <h1>App</h1>
      <B 
        counts={counts}
      />
    </div>
  )
}

export default App;