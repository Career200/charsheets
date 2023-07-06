export default function gotMainParrying() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Parrying</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Defenders may also elect to parry melee attacks by announcing
							their intention to parry at the start of the turn. Any attacks
							made during the turn must expend their damage against the parrying
							object first.
						</p>
						<p>
							Swords and other bladed weapons can be used to parry without
							taking damage, but must make a save (9 or lower on 1D10 for normal
							weapons) to avoid breaking. Any other actions the defender makes
							will have a corresponding -3 penalty for each successive action.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="50%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													PARRY = STOPS THE ATTACK AT -3 TO DEFENDER'S OTHER
													ACTIONS
												</strong>
											</td>
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
