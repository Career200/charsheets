export default function gotMainAntiPersonnelAttacksStuffThatCanKillYou() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Anti-Personnel Attacks (Stuff That Can Kill You)</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Anti-personnel programs physically attack the Netrunner, either
							through physical damage or through attacks on the Netrunner's
							stats. These can be used by both computer systems and Netrunners.
						</p>
						<p>Anti-personnel attacks are made with the formula:</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													DEFENDER'S PROGRAM STR + INT + INTERFACE + 1D10 VS.
													ATTACKER'S PROGRAM STRENGTH + INT + INTERFACE + 1D10
												</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<em>
								On an equal or higher roll, the Attacker will win the combat
								exchange. For example, Spider is attacked by a powerful
								Brainwipe program. She raises her own Force Shield counter
								program. The rolls are Spider 18, the computer 17. Spider
								successfully thwarts the Brainwipe.
							</em>
						</p>
						<p>
							<em>
								In the next turn, Spider goes on the offensive, launching a
								Killer at the Brainwipe. Her total roll is an IS; the system's
								roll is only a 15. The Brainwipe takes 5 points in Strength
								Damage. As it's only a Strength 4 program, it de-rezzes.
							</em>
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
