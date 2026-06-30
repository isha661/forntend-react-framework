// learning form and onSubmit

// function Forms(){

//     function handleForm(event){
//         event.preventDefault();  //with this it wont refresh
//         alert("form submiteed")
//     }


//     return(
//         <form onSubmit={handleForm}>
//             <button type="submit"> Submit</button>

//         </form>
//     );
// }export default Forms;




//Name Form
import {useState} from "react";

function Form(){

    const[name, setName] = useState("");

    function handleSubmit(event){
        //prevent page refresh
        event.preventDefault();

        alert(`Welcome ${name}`);
    }


    return(

        <form onSubmit={handleSubmit}>

             {/*Input Field */}
            <input type="text" 
            placeholder="Enter your name" 
            onChange={(event) => setName(event.target.value)}/>


             {/*Submit button*/}
            <button type="submit">
                Submit
            </button>

        </form>    
        
    );
}
export default Form;