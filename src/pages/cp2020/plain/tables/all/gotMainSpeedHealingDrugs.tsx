export default function gotMainSpeedHealingDrugs() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Speed Healing Drugs</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Drugs can be used to speed the healing rate by 1 additional point
							per day. Expensive and often proscribed, these drugs have a neural
							side effect of reducing the patient's REF stat by 1D6/3 for a week
							after use.{' '}
							<a className="text-orange-400" href="#">
								<em>Speedheal</em>
							</a>{' '}
							costs 1650eb per treatment.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
