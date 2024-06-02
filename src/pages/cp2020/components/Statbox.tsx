import TooltipWrapper from "../../../components/TooltipWrap/TooltipWrap";
import { StatString, statMap } from "../../../store/cyberpunk/charsheet/types";

export default function Statbox({
	stat,
	value,
	onMouseEnter,
	onChange,
	inputAttr,
}: {
	stat: StatString;
	value: number;
	onMouseEnter?: (e?: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputAttr?: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;
}) {
	return (
		<TooltipWrapper tooltipContent={statMap[stat]}>
			<div
				className="select-none"
				tabIndex={0}
				onMouseEnter={onMouseEnter}
				onKeyDown={(e) =>
					e.key === "Enter" || e.key === " " ? onMouseEnter?.() : null
				}
			>
				<h4 className="flex flex-col justify-center items-center gap-2 shrink-0 hover:outline hover:outline-orange-600 p-2 border-2 border-orange-900 text-xl">
					{stat}
					<input
						type="number"
						className="hover:animate-pulse block w-16 pl-2 bg-black text-2xl text-blue-200"
						value={value}
						onChange={onChange}
						{...inputAttr}
					/>
				</h4>
			</div>
		</TooltipWrapper>
	);
}
