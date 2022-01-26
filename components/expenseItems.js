import './expensesItem.css'
import React, { useState } from "react"

function ExpenseItems(props){
  
    // const [newText,setNewText] = useState("")
    // const [head,setHead] = useState(props.topic)
    // const clickHandler =() => {
    //     setHead(newText);
    // } 
    // const changeHandler = (event) => {
    //     setNewText(event.target.value);
    // }

    return(
        <div className='container box col-sm-12 col-lg-4'> 
        <div>{ props.date }</div>  
            <div>
                <h2>{ props.topic }</h2>      

{/* head ki value props.topic se aa rhi , maane usestate head ki value set krta h aur sethead se us value ko replace kr deta h*/}
                
                <p>{ props.amount }</p>
            </div>
            <button className='btn btn-primary'>Edit</button>
            

{/* new text will be replaced by new value which is obtained from setnewtext variable */}
        
        </div>
    )
}

export default ExpenseItems;

