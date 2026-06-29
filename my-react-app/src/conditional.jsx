import { useState } from "react";

function Condition(){

    const [age, setAge] = useState("");

    function handleAge(e){
        setAge(e.target.value)
    }

    return(
        <div>
            <input type="number" placeholder="your age" onChange={handleAge}/>
            {/* ternary operator : condition ? trueValue : falseValue*/}

            {age !== "" &&
             ( age >= 18 ? <h1>Adult</h1> : <h1>Minor</h1>)
            }
        </div>
    );
}
export default Condition;



// creating buttion with useSatet condition , display

// function Condition(){
//     // initially it is false
//     const [login, setLogin] = useState(false);

//     function isLogin(){
//       setLogin(true);
//     }

//     return(
//         <div>
//             <button onClick={isLogin}> Login Button </button>
//             {login && <h1> Welcome Isha</h1>}
//         </div>
//     );
// }
// export default Condition;







// using if statement


function Condition() {

    const [login, setLogin] = useState(false);

    function isLogin() {
        alert("Welcome Isha");
        setLogin(true);
    }

    return (
        <div>
            <button onClick={isLogin}>
                Click Button
            </button>

            {login && <h1>Logged In</h1>}
        </div>
    );
}


export default Condition;

// function Condition() {

//     const [login, setLogin] = useState(false);

//     function isLogin() {

//         if (login === false) {
//             alert("Welcome Isha");
//             setLogin(true);
//         }
//     }

//     return (
//         <div>
//             <button onClick={isLogin}>
//                 Click Button
//             </button>

//             {login && <h1>Logged In</h1>}
//         </div>
//     );
// }