import { useGlobalContext } from '../context/GlobalState';
import DeleteIcon from './icons/deleteIcon';

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

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useGlobalContext();

	return (
		<div
			className={`mb-3 h-9 w-72 rounded px-2 flex items-center justify-between bg-zinc-50`}
		>
			<li className=''>
				{transaction.text}{' '}
				<span
					className={`font-medium ${
						transaction.amount < 0
							? 'text-red-500'
							: 'text-emerald-500'
					}`}
				>
					{moneyFormatter(transaction.amount)}
				</span>
			</li>
			<button onClick={() => deleteTransaction(transaction.id)}>
				<DeleteIcon
					style={{
						cursor: 'pointer',
					}}
					size={19}
					fill='#ef4444'
				/>
			</button>
		</div>
	);
};
