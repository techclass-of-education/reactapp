import {useState} from "react";

function ObjectStateParent()
{
    const [person,setPerson]=useState({name:"Pooja",age:34,mobile:"23456789"}) //its a hook
    console.log(person)
    return(<div>
        {person.name}

           <button onClick={()=> {setPerson({...person,name:"Mohan",city:"Nagpur"})}}>Set Person</button>

        <p>{person.name}</p>
        <input type="text" onChange={(e)=>setPerson({...person,name:e.target.value})}/>
        <p>{person.age}</p>
        <input type="text" onChange={(e)=>setPerson({...person,age:e.target.value})}/>
        <p>{person.mobile}</p>
        <input type="text" onChange={(e)=>setPerson({...person,mobile:e.target.value})}/>

    </div>)
}

export default ObjectStateParent;