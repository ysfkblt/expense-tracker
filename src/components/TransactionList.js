import { Transaction } from './Transaction';
import { useGlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
	const { transactions } = useGlobalContext();

	return (
		<div className='mt-4 w-72'>
			{transactions.length > 0 && (
				<h3 className='text-start font-bold mb-1'>History</h3>
			)}
			<ul className=''>
				{transactions.map((transaction) => (
					<Transaction
						key={transaction.id}
						transaction={transaction}
					/>
				))}
			</ul>
		</div>
	);
};
