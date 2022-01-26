import ExpenseItems from "./expenseItems"
import React from "react";

const Expenses = (props) => {

    return (
        props.title.map(
            expense => (
                <ExpenseItems 
                topic = { expense.expensetopic}
                amount = { expense.expenseamount}
                date = { expense.expensedate}
                />
                // date = "10th Jan , 2022" 
            )
        )
        
        // </> else we need todo this
        //   <ExpenseItems 
        //   topic = { props.title[0].expensetopic}
        //   amount = { props.title[0].expenseamount}
        //   date = "10th Jan , 2022" /> 
        //   <ExpenseItems 
        //   topic = { props.title[1].expensetopic}
        //   amount = { props.title[1].expenseamount}
        //   date = "11th Jan , 2022" />
        //   <ExpenseItems 
        //   topic = { props.title[2].expensetopic}
        //   amount = { props.title[2].expenseamount}
        //   date = "15th Jan , 2022" />
        //   <ExpenseItems 
        //   topic = { props.title[3].expensetopic}
        //   amount = { props.title[3].expenseamount}
        //   date = "20th Jan , 2022" />
        //   <ExpenseItems 
        //   topic = { props.title[4].expensetopic}
        //   amount = { props.title[4].expenseamount}
        //   date = "22th Jan , 2022" />
    )
}

export default Expenses;