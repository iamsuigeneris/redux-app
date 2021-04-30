import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Pie} from 'react-chartjs-2'

export const Chart = () => {
    const { transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2)
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0).toFixed(2)
 
    const data = {
        labels:['Income','Expense'],
        datasets:[
            {
                label:['Income','Expense'],
                data:[income,expense],
                backgroundColor:['#2ecc71','#c0392b']
            }
        ]
    } 
    return (
        <div>
            <Pie data={data} width={50} height={50} />
        </div>
    )
}
