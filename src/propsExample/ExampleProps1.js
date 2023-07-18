import ChildComponent from "./ChildComponent";
import ChildComponent1 from "./ChildComponent1";


function show()
{
    alert("hello")
}

const obj=[{
    name:"Piyush",
    age:23,
}]

export default function ExampleProps1()
{
    const text=`Note that the development build is not optimized.
    To create a production build, use npm run build.Note that the development build is not optimized.
    To create a production build, use npm run build.Note that the development build is not optimized.
    To create a production build, use npm run build.`
    return(<div>
            <ChildComponent heading="This is a Title" content={text} fun={show}/>
            <ChildComponent1 heading="This is a Title1" content={text} person={obj}/>
    </div>)
}