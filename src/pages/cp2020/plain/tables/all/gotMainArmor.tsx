export default function gotMainArmor() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Armor</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Armor is what stops targets from taking the damage you just
							located. The <em>Armor</em> SP section is directly under the
							Location section on the Hardcopy. Write the Armor Stopping Power
							(SP) value for each body area in the space corresponding to that
							body area.
						</p>
						<p>
							Stopping power (SP) refers to the ability of armor to stop damage.
							Each type of armor has it's own Stopping Power. When the armor is
							struck by a round, the armor's SP "is subtracted from the total
							amount of damage done by the hit. The remaining damage is then
							applied to the target area. If the damage done is less than the SP
							of the armor, no damage is done.
						</p>
						<p>
							<em>
								Example: Ripperjack is wearing a Kevlar jacket with an SP of 18.
								A 5.56 round strikes him in the chest, causing 14 points of
								damage. The armor's higher SP thwarts the attack. The next shot
								does 22 points of damage. The armor reduces this by 18 points.
								Only 4 points get through to cause Ripperjack harm.
							</em>
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
