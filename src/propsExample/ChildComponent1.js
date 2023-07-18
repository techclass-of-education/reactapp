export default function ChildComponent1({heading,content,person})
{

    
    return(
        <div>
           <h1> {heading} </h1>
           <p> {content} </p>
           <p>{person[0].name}</p>
           <p>{person[0].age}</p>
        </div>
    )
}