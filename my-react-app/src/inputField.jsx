import { useState } from "react";

function State(){

    const [name, setName] = useState("");

    function handleChange(event){
        setName(event.target.value);
    }

    return(

        <div>
            <input type="text" onChange={handleChange}/>
            
            <h1> Hello {name}</h1>
        </div>
    );
}
export default State;
