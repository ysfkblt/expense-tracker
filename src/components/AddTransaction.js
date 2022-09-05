import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState();

	const { addTransaction } = useGlobalContext();

	function uniqueId() {
		let a = new Uint32Array(4);
		window.crypto.getRandomValues(a);
		return (
			performance.now().toString(36) +
			Array.from(a)
				.map((A) => A.toString(36))
				.join('')
		).replace(/\./g, '');
	}

	const textHandler = (e) => {
		setText(e.target.value);
	};

	const amountHandler = (e) => {
		setAmount(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: uniqueId(),
			text,
			amount: +amount,
		};

		addTransaction(newTransaction);

		setAmount('');
		setText('');
	};

	return (
		<div className='mt-8 flex flex-col'>
			<h1 className='mb-1 font-bold'>Add New Transaction</h1>
			<form spellCheck='false' onSubmit={onSubmit}>
				<div className='mb-3'>
					<input
						value={text}
						type='text'
						className='focus:outline-none bg-zinc-50 h-9 w-72  rounded px-2 caret-blue-400'
						onChange={textHandler}
						placeholder='Description'
						onFocus={(e) => (e.target.placeholder = '')}
						onBlur={(e) => (e.target.placeholder = 'Description')}
					/>
				</div>

				<input
					value={amount}
					onChange={amountHandler}
					className='focus:outline-none bg-zinc-50 h-9 w-72  rounded px-2 caret-blue-400'
					type='number'
					placeholder='Amount*'
					onFocus={(e) => (e.target.placeholder = '')}
					onBlur={(e) => (e.target.placeholder = 'Amount*')}
				/>
				<p className='text-xs text-zinc-600 pt-2 pl-1'>
					*Use negative sign for expense
				</p>

				<button
					disabled={!text || !amount}
					className='mt-4 disabled:bg-blue-400 h-14 w-72 bg-blue-600 text-zinc-100 text-xl rounded transition-colors focus:outline-none font-medium'
				>
					Add
				</button>
			</form>
		</div>
	);
};
