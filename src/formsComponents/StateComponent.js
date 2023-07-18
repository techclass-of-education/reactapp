
import {useState} from "react";

function StateComponent()
{
    const [name,setName]=useState("Pooja") //its a hook
    return(<div>

        <p>{name}</p>
        <button onClick={()=>{ setName("Umiya")}}>ChangeName</button>

    </div>)
}

export default StateComponent;