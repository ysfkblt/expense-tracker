import { useGlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
	let p = num.toFixed(2).split('.');
	return (
		'$' +
		p[0]
			.split('')
			.reverse()
			.reduce(function (acc, num, i, orig) {
				return num === '-'
					? acc
					: num + (i && !(i % 3) ? ',' : '') + acc;
			}, '') +
		'.' +
		p[1]
	);
}

export const IncomeExpenses = () => {
	const { transactions } = useGlobalContext();

	const amounts = transactions.map((transaction) => transaction.amount);

	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0);

	const expense =
		amounts
			.filter((item) => item < 0)
			.reduce((acc, item) => (acc += item), 0) * -1;

	return (
		<div className='flex w-72 justify-between mt-2'>
			<div>
				<h4 className='text-xs text-emerald-500'>Income</h4>
				<p className='text-4xl tracking-tighter font-medium ml-1'>
					{moneyFormatter(income)}
				</p>
			</div>
			<div>
				<h4 className='text-xs text-red-500'>Expense</h4>
				<p className='text-4xl tracking-tighter font-medium ml-1'>
					{moneyFormatter(expense)}
				</p>
			</div>
		</div>
	);
};
