export default function gotMainHitLocation() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Hit Location</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							The first step in applying damage is to figure out <em>where</em>{' '}
							to apply it. Most combat attacks are just barely aimed; you're
							looking for an opening, your opponent slips up, and you take it.
							This means that unless you attempt to aim your shot at a specific
							location (and take the -4 penalty for this), you will have to
							determine where you hit on a random basis.
						</p>
						<p>
							The Location section of your Hardcopy Form is designed for this;
							it lists all body areas with a value from 1 to 10 written
							underneath. When your character is hit, roll 1D10 and compare the
							chart number to the roll to determine where he has been hit.
						</p>
						<p>
							Use some common sense with this rule; for example, if a character
							is standing behind a low wall, a roll of 7-8 (R.Leg) is pretty
							silly. Ignore it and re-roll.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
