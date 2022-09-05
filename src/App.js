import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

export default function App() {
	return (
		<GlobalProvider>
			<main className='flex flex-col items-center mt-[23vh]'>
				<h2 className='font-bold text-[12.45vw] sm:text-5xl whitespace-nowrap tracking-tighter'>
					Expense Tracker
				</h2>
				<Balance />
				<IncomeExpenses />
				<AddTransaction />
				<TransactionList />
			</main>
		</GlobalProvider>
	);
}
