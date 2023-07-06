export default function gotMainMeleeDamage() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Melee Damage</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							When making melee attacks with weapons, the damage is listed as
							part of the weapons description.
						</p>
						<p>
							When making a melee attack, you must also add a damage modifier
							based on your character's body type to any damage. This damage
							modifier is listed in the <em>Damage Modifier</em> Table below.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>DAMAGE MODIFIERS</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Strength</td>
											<td width="50%">Add to Damage</td>
										</tr>
										<tr>
											<td width="50%">Very Weak</td>
											<td width="50%">-2</td>
										</tr>
										<tr>
											<td width="50%">Weak</td>
											<td width="50%">-1</td>
										</tr>
										<tr>
											<td width="50%">Average</td>
											<td width="50%">+0</td>
										</tr>
										<tr>
											<td width="50%">Strong</td>
											<td width="50%">+1</td>
										</tr>
										<tr>
											<td width="50%">Very Strong</td>
											<td width="50%">+2</td>
										</tr>
										<tr>
											<td width="50%">Body Type 11-12</td>
											<td width="50%">+4</td>
										</tr>
										<tr>
											<td>Body Type 13-14</td>
											<td>+6</td>
										</tr>
										<tr>
											<td>Body Type 15+</td>
											<td>+8</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>-</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
