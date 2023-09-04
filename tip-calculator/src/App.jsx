import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentageOne, setPercentageOne] = useState(0);
  const [percentageTwo, setPercentageTwo] = useState(0);

  // Derived State
  const tip = bill * ((percentageOne + percentageTwo) / 2 / 100);

  return (
    <div>
      <BillInput bill={bill} onBill={setBill} />
      <SelectPercentage percentage={percentageOne} onSelect={setPercentageOne}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentageTwo} onSelect={setPercentageTwo}>
        How did your friend like the service?
      </SelectPercentage>

      {/*  Makes it to display only if there's bill created*/}

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );

  function handleReset() {
    setBill("");
    setPercentageOne(0);
    setPercentageTwo(0);
  }
}

function BillInput({ bill, onBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay X (${bill + tip} + (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
