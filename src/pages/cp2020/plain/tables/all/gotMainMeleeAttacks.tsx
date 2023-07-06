export default function gotMainMeleeAttacks() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Melee Attacks</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Melee attacks include
							<strong>
								clubs, knives, swords, axes, chainsaws, sledgehammers,
								monokatanas
							</strong>
							and
							<strong>
								monoknives, monomolecular chains, cyberbeasts, battlegloves,
								rippers, scratchers, martial arts weapons, hand to hand attacks
							</strong>
							and <strong>brawling</strong>.
						</p>
						<p>
							Melee attacks differ from ranged attacks in that you are opposing
							a person, instead of a target. To make a melee attack, the formula
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="50%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													ATTACKER REF + SKILL + 1D10 VS DEFENDER'S REF + SKILL*
													+ 1D10
												</strong>
											</td>
										</tr>
										<tr>
											<td width="100%">
												<em>
													*MartiaI arts, Fencing, Melee, Dodge or Athletics can
													be used, depending on situation and Referee decision.
												</em>
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
