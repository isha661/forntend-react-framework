// importing component from Header.jsx
import Header  from "./Header";

// creating app component 
function App(){

  // display content
  return(
  <div>
    

    {/*using the Header component */}
    <Header  name = "Isha" age = {20} />
    

  
    
  </div>
  );
}
export default App;