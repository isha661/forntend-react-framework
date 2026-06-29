// learning list and map


function Food(){
    const fruit = ["Apple", "banana", "orange"];

    return(
        <div>
            {fruit.map((fruit) => 
                (
                    <h1>{fruit}</h1>
                ))}
        </div>
    );
}
export default Food;