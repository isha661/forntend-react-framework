// learning list and map


// function Food(){
//     const fruits = ["Apple", "banana", "orange"];

//     return(
//         <div>
//             {fruits.map((fruit, index) => 
//                 (
//                     <h1 key ={index}> {fruit} </h1>
//                 ))}
//         </div>
//     );
// }
// export default Food;

function Food(){
    // array of  student object
    const students = [{name:"Isha", age: 20}
        ,{name:"Dibya", age: 21}
        ,{name:"ismini", age: 18}
    ];


    return (
        <div>

            {/* arrow function */}

            {students.map((student, index) => (
                <div key={index}>
                    <h2>{`${student.name} is ${student.age} years old`}</h2>
                </div>

            ))}
        </div>
    );
}
export default Food ;
