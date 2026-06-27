// importing component from Header.jsx
// import Header  from "./Header";

// // creating app component 
// function App(){
  

//   // display content
//   return(
//   <div>
    

//     {/*using the Header component */}
//     <Header  name = "Isha" age = {20} />
    

  
    
//   </div>
//   );
// }
// export default App;





// function App(){

//   function Hello(){
//     alert("hello isha");
//     alert("This is event handeling onClick method")
//   }

//   return(
//     <div>
//       <button onClick={Hello}>
//          Click Me
//       </button>
//     </div>
//   );
// }

// export default App;





// Event handeling : onClick
// run when the value of an input changes

// function App(){
// function typing(){
//   console.log("user is typing");
// }

//   return(
//     <div>
//       <input type="text" onChange={typing}/>
//     </div>
//   );

// }
// export default App;



// Getting the typed value 

// function App(){
// function typing(event){
//   console.log(event.target.value);
// }

//   return(
//     <div>
//       <input type="text" onChange={typing}/>
//     </div>
//   );

// }
// export default App;




// Event handeling : onSubmit 

// function App(){
//   function submit(){
//     event.preventDefault(); // form refresh the page by default 
//     alert("Form submitted isha ");
//   }

//   return(
   
//     <form onSubmit = {submit}> 
//     <button> Submit </button>
//     </form>
    
  
//   );
// }
// export default App;




// Event handeling : onMouseOver

// function App(){
//   function message(){
//     alert("Mouse is here");
//   }

//   return(
//     <h1 onMouseOver ={message}> put mouse here </h1> 
//   );
// }
// export default App;



// onMouseOut

// function App(){
//   function bye(){
//     alert("byeee");
//   }

//   return(

//     <h1 onMouseOut = {bye}> hover here</h1>
//   );
// }

// export default App;



// onDoubleClick

// function App(){
//   function double(){
//     alert("hello you clicked double ig");
//   }

//   return(

//     <button onDoubleClick={double}> here double click</button>
//   );
// }

// export default App;




// Importing useState hook from React
//
// import { useState } from "react";

// function App(){
//         // state  ,setSate
//   const [count, setCount] = useState(0);
//   // count= current value, setCount = function to change count
//   // array destructuring

//   function increase(){
//     setCount(count +1);
//     // update the count value and new count become 1
  
//   }
//   function decrease(){
//     setCount(count -1);
//   }

//   return(

//     <div>

//       {/* {count} = show the js varaible count here*/}
//       <h1>{count}</h1>
//       <button onClick={increase}> add </button>
//       <button onClick={decrease}> minus</button>

//     </div>
//   );
// }
// export default App;