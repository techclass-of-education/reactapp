function addition() {
  let n1 = parseInt(prompt("Enter any number"));
  let n2 = parseInt(prompt("Enter any number"));

  let add = n1 + n2;
  alert(add);
}

export default function CompEvent1() {
  return (
    <div>
      <h1>Click button to excecute addition function</h1>
      <button onClick={addition}>Add</button>
    </div>
  );
}
