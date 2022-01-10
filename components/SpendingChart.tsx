import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
	Label,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { data } from "../data/data.js";

const SpendingChart = () => {
	const chartData = data;

	return (
		<div data-testid="spending-chart">
			<LineChart width={600} height={300}>
				<XAxis type="number" dataKey="fraction" height={60}>
					<Label
						offset={5}
						position="insideBottom"
						style={{
							textAnchor: "middle",
							fill: "rgb(55 65 81)",
						}}
					>
						Fraction of total spend
					</Label>
				</XAxis>

				<YAxis type="number" dataKey="amount" width={70}>
					<Label
						offset={0}
						angle={-90}
						position="insideLeft"
						style={{
							textAnchor: "middle",
							fill: "rgb(55 65 81)",
						}}
					>
						Amount
					</Label>
				</YAxis>
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip content={<CustomTooltip />} />
				<Legend verticalAlign="top" height={40} />
				<Line
					data={chartData}
					type="monotone"
					dataKey="amount"
					stroke="rgb(2 132 199)"
					strokeWidth={3}
					dot={false}
					activeDot={{ stroke: "rgb(7 89 133)", strokeWidth: 2, r: 8 }}
					name="social_Facebook"
				/>
			</LineChart>
		</div>
	);
};

export default SpendingChart;
