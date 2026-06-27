import { useState } from "react";

// function State(){

//     const [name, setName] = useState("");

//     function handleChange(event){
//         setName(event.target.value);
//     }

//     return(

//         <div>
//             <input type="text" onChange={handleChange}/>
            
//             <h1> Hello {name}</h1>
//         </div>
//     );
// }
// export default State;


/// Age input 
function State (){
     const[age, setAge] = useState("");
     
     function myAge(event){

        setAge(event.target.value);
     }



     return (
        <div>
            <input type="number" onChange={myAge}/>

            <h1> My age is {age}</h1>
        </div>

       
     );
}
export default State;
