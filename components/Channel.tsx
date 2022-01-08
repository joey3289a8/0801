import React, { useState } from "react";

interface ChannelProps {
	name: string;
	calcTotal: Function;
}

const Channel = ({ name, calcTotal }: ChannelProps) => {
	const [budgetInput, setBudgetInput] = useState("");
	const [budgetInputError, setBudgetInputError] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const input = e.target.value;
		const name = e.target.name;
		setBudgetInput(input);
		validateBudgetInput(input, name);
	};

	const validateBudgetInput = (input: string, name: string) => {
		const USDRegex = /^(0|[1-9])(\d*)(\.\d{2})/;
		if (!input.match(USDRegex)) {
			setBudgetInputError(true);
		} else {
			setBudgetInputError(false);
			calcTotal(input, name);
		}
	};

	return (
		<>
			<div className="uppercase tracking-wide text-gray-700 text-xs font-bold">
				{name}
			</div>
			<div>
				<input
					className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
					type="text"
					onChange={handleInputChange}
					value={budgetInput}
					name={name}
					data-testid={`${name}-budget`}
				/>
				{budgetInputError && (
					<p className="text-red-500 text-xs italic" data-testid="format-error">
						Format must be in USD (e.g. 100.00)
					</p>
				)}
			</div>
			<div className="text-center">
				<input
					className="mr-2 leading-tight h-4 w-4"
					name={`${name}-option`}
					type="radio"
					value="consistent"
				/>
			</div>
			<div className="text-center">
				<input
					className="mr-2 leading-tight h-4 w-4"
					name={`${name}-option`}
					type="radio"
					value="exclude"
				/>
			</div>
		</>
	);
};

export default Channel;
