import { useState } from "react";
import Child1 from "./Child1";

export default function Parent() {
  const [name, setName] = useState("Pooja");
  return (
    <>
      <Child1 name={name} />
    </>
  );
}
