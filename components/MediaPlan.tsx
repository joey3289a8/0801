import { useEffect, useState } from "react";
import Channel from "./Channel";

const MediaPlan = () => {
	const channelNames = ["SEA", "Display", "Social", "Affiliate", "Remarketing"];
	const channelsInitialState = {
		SEA: 0,
		Display: 0,
		Social: 0,
		Affiliate: 0,
		Remarketing: 0,
	};

	const [channels, setChannels] = useState(channelsInitialState);
	const [total, setTotal] = useState("");

	const calcTotal = (amount: string, channel: keyof typeof channels) => {
		setChannels((prevState) => ({
			...prevState,
			...{ [channel]: parseFloat(amount) },
		}));
	};

	useEffect(() => {
		const sum = Object.values(channels)
			.reduce((prev, curr) => prev + curr)
			.toFixed(2);
		setTotal(sum);
	}, [channels]);

	return (
		<>
			<form className="w-full max-w-lg">
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="plan-name"
						>
							Media Plan
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							type="text"
							placeholder="Name of this media plan"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="start-date"
						>
							Start Date
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							type="date"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="end-date"
						>
							End Date
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							type="date"
						/>
					</div>
				</div>
				<div className="w-full grid grid-cols-4 gap-2 mb-6">
					<div className="uppercase tracking-wide text-gray-700 text-xs font-bold">
						Channel
					</div>
					<div className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
						Budget
					</div>
					<div className="uppercase tracking-wide text-gray-700 text-xs font-bold">
						Keep Consistent
					</div>
					<div className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-center">
						Exclude
					</div>
				</div>
				<div className="w-full grid grid-cols-4 gap-4 mb-8">
					{channelNames.map((n, i) => (
						<Channel key={i} name={n} calcTotal={calcTotal} />
					))}
				</div>
				<div className="w-full grid grid-cols-4 gap-4 mb-8">
					<div className="uppercase tracking-wide text-gray-700 text-s font-bold">
						Total
					</div>
					<div className="uppercase tracking-wide text-gray-700 font-bold px-1 text-s">
						USD {total}
					</div>
				</div>
				<div className="w-full mb-6 flex justify-end">
					<button className="px-4 py-3 mr-4 rounded bg-sky-600 block uppercase tracking-wide text-gray-200 text-xs font-bold hover:bg-sky-500">
						Copy Plan
					</button>
					<button className="px-4 py-3 rounded bg-sky-800 block uppercase tracking-wide text-gray-200 text-xs font-bold hover:bg-sky-700">
						Save Plan
					</button>
				</div>
			</form>
		</>
	);
};

export default MediaPlan;
