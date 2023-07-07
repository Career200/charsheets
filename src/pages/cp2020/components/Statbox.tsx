import TooltipWrapper from '../../../components/TooltipWrap/TooltipWrap';
import { statMap } from '../../../data/models/cp2020';

export default function Statbox({
	stat,
	value,
	onClick,
	onChange,
	inputAttr
}: {
	stat: string;
	value: number;
	onClick: (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputAttr?: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;
}) {
	return (
		<TooltipWrapper tooltipContent={statMap[stat as statString]}>
			<h4
				className="flex flex-col justify-center items-center gap-2 shrink-0 hover:shadow-blue-400 hover:shadow-xl p-2 border-2 border-orange-900 text-xl"
				onClick={onClick}
			>
				{stat}
				<input
					type="number"
					className="hover:animate-pulse block w-16 pl-2 bg-black text-2xl text-blue-200"
					value={value}
					onChange={onChange}
					{...inputAttr}
				/>
			</h4>
		</TooltipWrapper>
	);
}
