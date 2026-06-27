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

// THis is with arrow function
// function State() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   return (

//     <div>

//       <input type="text"
//        placeholder="Name" onChange={(e) => setName(e.target.value)}

//       />
//       <br />

//        <input type="number"
//          placeholder="Age" onChange={(e) => setAge(e.target.value)} />

//        <br></br>

//       <h2> {name} is {age} years old </h2>
//     </div>
//   );
// }
// export default State;



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
