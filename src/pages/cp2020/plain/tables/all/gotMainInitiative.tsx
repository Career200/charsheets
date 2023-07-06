export default function gotMainInitiative() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Initiative</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							The first thing to determine in a Net combat is who goes first.
							This can be critical, as most offensive software can seriously
							incapacitate or kill in a single turn. To determine who will act
							first, compare:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													COMPUTER'S INT + 1D10 VS NETRUNNER'S REF + DECK SPEED
													+ 1D10
												</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							When there is more than one Netrunner or system involved in an
							attack, each combatant must make it's own initiative roll, taking
							turns from highest to lowest total. Like normal combat, you may
							elect to hold your action until later, or even set up an ambush.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
