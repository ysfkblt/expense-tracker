import { useGlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
	let p = num.toFixed(2).split('.');
	return (
		'$' +
		(p[0].split('')[0] === '-' ? '-' : '') +
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

export const Balance = () => {
	const { transactions } = useGlobalContext();

	const amounts = transactions.map((transaction) => transaction.amount);

	const total = amounts.reduce((acc, item) => (acc += item), 0);

	return (
		<div className='flex flex-col w-72 mt-8 '>
			<h4 className='text-zinc-400 text-xs'>Total Balance</h4>
			<h1 className='text-5xl tracking-tighter font-medium ml-1'>
				{moneyFormatter(total)}
			</h1>
		</div>
	);
};
