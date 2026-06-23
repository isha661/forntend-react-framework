// Creating a component named Header

function Header({name,age}){
    
    // return tells react what to display on the screen
    return(
        <div>
        <h1> Hello {name}</h1>
        <p> {name} is {age} year </p>
        </div>

        // props allow one component to send data to another component 
    );
}
// Allows other files to use this component
export default Header;
