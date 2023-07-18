import { useState, createContext } from "react";
import Child1 from "./Child1";
export const NameContext = createContext();

export default function Parent() {
  const [person, setPerson] = useState({name:"Pooja",age:40});

  return (
    <>
      <NameContext.Provider value={person}>
        <Child1 />
      </NameContext.Provider>
    </>
  );
}
