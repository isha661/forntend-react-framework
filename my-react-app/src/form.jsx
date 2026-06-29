


function Forms(){

    function handleForm(){
        alert("form submiteed")
    }


    return(
        <form onSubmit={handleForm}>
            <button type="submit"> Submit</button>

        </form>
    );
}export default Forms;