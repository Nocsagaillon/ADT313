import React, { useState } from 'react';

const MathOperation = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

  const handleMultiplication = () => {
    setResult(num1 * num2);
  };

  const handleDivision = () => {
    if (num2 !== 0) {
      setResult(num1 / num2);
    } else {
      alert('Cannot divide by zero!');
    }
  };

  return (
    <div className="math-operation">
      <h2>Math Operations</h2>
      <label htmlFor="num1">Number 1:</label>
      <input type="number" id="num1" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
      <br />
      <label htmlFor="num2">Number 2:</label>
      <input type="number" id="num2" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
      <br />
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default MathOperation;