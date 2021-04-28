import './App.css';
import Header from './expenseTracker/Header'
import {Balance }from './expenseTracker/Balance'
import {AddTransaction} from './expenseTracker/AddTransaction'
import {IncomeExpenses} from './expenseTracker/IncomeExpenses'
import {TransactionList} from './expenseTracker/TransactionList'
import Chart from './expenseTracker/Chart'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>     
          <div className="container">
            <Header />
            <Balance />
            <AddTransaction />
            <IncomeExpenses />
            <Chart />
            <TransactionList />
        </div>
    </GlobalProvider>
  );
}

export default App;
