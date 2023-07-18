import {useState} from "react";
import ExampleChild from "./ExampleChild";

function ExampleParent()
{
    const [name,setName]=useState("Pooja") //its a hook
    return(<div>
<h1>Parent Component</h1>
        <p>{name}</p>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>

        <ExampleChild name={name}/>

    </div>)
}

export default ExampleParent;