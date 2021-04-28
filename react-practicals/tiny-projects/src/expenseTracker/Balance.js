import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    console.log(transactions)
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2)
    return (
        <div className="bal-container">
            <h3>Balance</h3>
            <p className="balance">${total}</p>
        </div>
    )
}

// export default Balance
