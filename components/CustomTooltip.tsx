import { TooltipProps } from "recharts";
import {
	ValueType,
	NameType,
} from "recharts/src/component/DefaultTooltipContent";

const CustomTooltip = ({
	active,
	payload,
	label,
}: TooltipProps<ValueType, NameType>) => {
	if (active) {
		return (
			<div className="bg-white uppercase tracking-wide text-gray-700 text-s font-bold leading-normal">
				<p>
					Fraction of total spend: <span className="text-sky-600">{label}</span>
				</p>
				<p>
					Amount: <span className="text-sky-800">{payload?.[0].value}</span>
				</p>
			</div>
		);
	}

	return null;
};

export default CustomTooltip;
