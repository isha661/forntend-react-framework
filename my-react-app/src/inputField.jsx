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
// function State (){
//      const[age, setAge] = useState("");
     
//      function myAge(event){

//         setAge(event.target.value);
//      }



//      return (
//         <div>
//             <input type="number" onChange={myAge}/>

//             <h1> My age is {age}</h1>
//         </div>

       
//      );
// }
// export default State;




// Multiple input
function State(){
    const [name ,setName] = useState("");
    const [age, setAge] = useState("");

    function handelAge(event){
        setAge(event.target.value);
    }

    function handelName(event){
        setName(event.target.value);
    }

    return(

        <div>
            <input type="text" placeholder="name" onChange={handelName}/>
            <br></br>
            <input type="number" placeholder="age" onChange={handelAge}/>
        </div>
    );
}
export default State;
