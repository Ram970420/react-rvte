import { useEffect, useState } from "react";

function Home(){

    const [count,setCount] = useState(0);
    useEffect(()=>{if(count>10) {console.log(count)}})

    return(

        <div>
            <h1>{ count }</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Home;
