import './NewItem.css';
import React , { useState } from "react";
function NewItem (props) {
    const [data , setData] = useState(" ")
    // const [date , setDate] = useState(" ")
    const [amnt , setAmnt] = useState(" ")

    const changeHandler = (event) => {
        setData(event.target.value)
        console.log(event.target.value)
    }
    const amntHandler = (event) => {
        setAmnt(event.target.value)
        console.log(event.target.value)
    } 

    const clickHandler = () => {
        alert("Successfully Added")
    }
    const newValue = (event) => {
        event.preventDefault()
        const nayaa = {
            expensetopic:data,
            expenseamount:amnt,
        }
        props.newData(nayaa);

    }
    return (
        <div className="container col-lg-4">
            <h2 >Add New Expenses :- </h2>
        <form onSubmit={newValue}>
            <div className='mb-2'><input type="text" value={ data } onChange={changeHandler} placeholder="topic" /></div>
            <div ><input type="number" value={ amnt }  onChange={amntHandler}/></div>
            {/* <div><input type="text"  value={date} onChange={dateHandler}/></div> */}
            <div> <button className="btn btn-primary mt-2" onClick={clickHandler}>Add</button></div>
        </form>
        </div>
    )
}

export default NewItem;