import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Simple Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increment} style={styles.button}>+</button>
        <button onClick={decrement} style={styles.button}>-</button>
        <button onClick={reset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial'
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px'
  }
};

export default Counter;
