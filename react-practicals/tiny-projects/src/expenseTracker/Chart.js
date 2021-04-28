import React,{useContext} from 'react'
import { GlobalContext} from '../context/GlobalState'
import { Pie } from 'react-chartjs-2'


const Chart = () => {
    const {transactions } = useContext(GlobalContext)

    const amounts = transactions.map( transaction => transaction.amount )
    const income = amounts.filter( item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2)
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0).toFixed(0)

    const data = {
        labels:['Income','Expense'],
        datasets:[
            {
                label: ['Income','Expense'],
                data:[income,expense],
                backgroundColor:[' #2ecc71','#c0392b'],
                borderWidth: 1
            }
        ],
  
         
    }
    const options = {
        title:{
            display: true,
            text:'Pie Chart'
        }
    }
    console.log(income)
    return (
        <div className="chart">
            <Pie data={data} width={50} height={50} options={options} />
        </div>
    )
}
export default Chart
