// hello

function addition(n1, n2) {
  let add = n1 + n2;
  alert(add);
}

export default function CompEventArgs() {
  return (
    <div>
      <h1>Click button to excecute addition function with arguments</h1>
      <button
        onClick={() => {
          addition(10, 30);
        }
      }
      >
        Add
      </button>
    </div>
  );
}
