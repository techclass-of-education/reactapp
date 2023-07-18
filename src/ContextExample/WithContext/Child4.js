import { useContext } from "react"
import { NameContext } from "./Parent"




export default function Child4()
{
    const person=useContext(NameContext);
    return(<>
    
    <h1> from Child 4 Name :{person.name}</h1>
    <h1> from Child 4 Age :{person.age}</h1>
        
    </>)
}