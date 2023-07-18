export default function ChildComponent(props)
{
    // props.heading="hello" //ERROR
    //Cannot assign to read only property 'heading' of object
    
    return(
        <div>
           <h1> {props.heading} </h1>
           <p> {props.content} </p>
           <button onClick={props.fun}>Show Msg</button>
        </div>
    )
}