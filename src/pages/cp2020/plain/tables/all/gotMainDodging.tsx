export default function gotMainDodging() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Dodging</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Defenders can try to dodge melee attacks by announcing their
							intention to dodge at the start of the turn. This will impose a -2
							attack penalty to any attacks made against them in that turn;
							however, any other actions the defender makes will have a
							corresponding -3 penalty for each successive action.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="50%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													DODGE = -2 TO ATTACKER ROLL, -3 TO DEFENDER'S OTHER
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
