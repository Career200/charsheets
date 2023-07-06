export default function gotMainTheBodyTypeModifier() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>The Body Type Modifier</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							The next step after Armor is to apply your character's Body Type
							Modifier to the damage. This is a special bonus which reduces the
							effects of damage, reflecting the stamina and general toughness of
							the character. Each time your character takes damage, subtract
							your Body Type Modifier from the total amount of damage before
							applying it to your character.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>BODY TYPE MODIFIER TABLE</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Very Weak</td>
											<td width="50%">-0</td>
										</tr>
										<tr>
											<td width="50%">Weak</td>
											<td width="50%">-1</td>
										</tr>
										<tr>
											<td width="50%">Average</td>
											<td width="50%">-2</td>
										</tr>
										<tr>
											<td width="50%">Strong</td>
											<td width="50%">-3</td>
										</tr>
										<tr>
											<td width="50%">Very Strong</td>
											<td width="50%">-4</td>
										</tr>
										<tr>
											<td width="50%">Superhuman*</td>
											<td width="50%">-5</td>
										</tr>
										<tr>
											<td colSpan={2}>*Possible only with cybernetics</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<em>
								For example, say you took ten points of damage. If you were a
								Very Weak Body Type, you would take the full ten. But with a
								Very Strong Body Type, you'd only take (10-4=6) six points of
								damage.
							</em>
						</p>
						<p>
							The A. Swenson Memorial. He Shrugs Off Damage Like An Old Overcoat
							Rule: Occasionally, you'll encounter a situation where the
							combination of armor and Body Type Modifier will seem to reduce
							the damage done to zero or less. A Body Type Modifier may never
							reduce damage to
							<u>less than one</u> - in these cases, the character will
							automatically take 1 point of damage.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
