import { useState } from "react"
import ListItem from "../components/ListItem"

export default function SubmitForm() {

    const [addTodo, setAddTodo] = useState([
        "Go to the Gym",
        "Travel by motorcycle"
    ])
    const [todoValue, setTodoValue] = useState("")
    

    function handleChange(e) {
        setTodoValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(todoValue === ""){
            alert("Please enter todo!")
        }
        else

        setAddTodo((prev)=>[...prev,todoValue])
        setTodoValue("")
    }

    function handleDelete(id){
       setAddTodo(addTodo.filter((item,index)=> id !== index))
    }

    function handleAllClear(){
        setAddTodo([])
    }



    return (
        <>
            <form onSubmit={handleSubmit} className="submitForm">
                <div className="submitSite">
                    <label id="todolabel" htmlFor="todo">Please entered a to do :</label>
                    <input

                        onChange={handleChange}
                        value={todoValue}
                        placeholder="Go to the school..." id="todo" type="text" />
                    <button className="submitButton">Submit</button>
                </div>
            </form>
            <div className="list">
            <div className="todoList">
                <h3> {addTodo.length} Todo Found</h3>
                   {
                addTodo.map((item,index)=> <ListItem
                 key={index} 
                 item={item}
                 id={index}
                 handleDelete={handleDelete}/>)
                   }
                   <button 
                   onClick={()=>handleAllClear()}
                   className="allClearButton">All Clear</button>
                </div>
            </div>
            
        </>
    )
}