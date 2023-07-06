import TooltipWrapper from '../../components/TooltipWrap/TooltipWrap';
import { stat } from '../../data/models/cp2020';

export default function Charsheet2020() {
	const dude = new intStat(5);
	dude.addSkill({ Accounting: 4, Botany: 5 });
	const man = new stat('REF', 5);
	//dude.addStats('Swimming', 2);
	//dude.addStats({ Swimming: { name: 'Swimming', is: 2 } });
	console.log(dude);
	return (
		<div className="min-h-full bg-cyan-950 text-white">
			<div className="p-4 flex flex-nowrap gap-4">
				<TooltipWrapper tooltipContent={dude.full}>
					<h4 className="shrink-0 hover:shadow-blue-400 hover:shadow-xl p-2 border-2 border-orange-900 text-xl">
						{dude.short}
						<span className="pl-2 text-2xl text-blue-200">{dude.value}</span>
					</h4>
				</TooltipWrapper>
				<TooltipWrapper tooltipContent={'Intellect'}>
					<h4 className="shrink-0 hover:shadow-blue-400 hover:shadow-xl p-2 border-2 border-orange-900 text-xl">
						{man.short}
						<span className="pl-2 text-2xl text-blue-200">{man.value}</span>
					</h4>
				</TooltipWrapper>
			</div>
			<div className="p-2 flex flex-wrap gap-2">
				{dude &&
					Object.entries(dude.skills).map(([key, value]) => {
						if (value.value && value.value > 0) {
							return (
								<div className="p-2 border-2 border-orange-900">
									<p>{value.name + ' - ' + value.value}</p>
								</div>
							);
						}
					})}
			</div>
		</div>
	);
}
