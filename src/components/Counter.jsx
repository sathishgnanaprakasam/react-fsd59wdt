import React, { useEffect, useState } from 'react';

const Counter = ({ onCountChange }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
        onCountChange(count);
    }, [count]);

    const handleIncrement = () => {
        setCount(count + 1);
        // onCountChange(count + 1);
    }

  return (
      <button onClick={handleIncrement}>Inc</button>
  )
}

export default Counter;