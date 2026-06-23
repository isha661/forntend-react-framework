// importing component from Header.jsx
import Header  from "./Header";

// creating app component 
function App(){

  // display content
  return(
  <div>
    

    {/*using the Header component */}
    <Header />

    <p> I am learning React</p>
    
  </div>
  );
}
export default App;