import {useState} from "react";

function InputComponent()
{
    const [name,setName]=useState("Pooja") //its a hook
    return(<div>

        <p>{name}</p>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>

    </div>)
}

export default InputComponent;