export default function gotMainBeamWeapons() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Beam Weapons</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Beam Weapons include <strong>lasers</strong> and
							<strong>microwave</strong>
							weapons. Powerful beam weapons, are extremely rare in the
							<em>Cyberpunk</em> universe (1 in 10 chance of availability, and
							even then only from major Corporations and/or governments).
						</p>
						<p>
							<strong>Lasers</strong>
						</p>
						<p>
							Lasers have a rechargeable powerpack holding a total of 10 six
							sided dice of damage. You can use as little as 1D6 or as much as
							5D6 in a single shot, until you have used all 10 dice. Lasers
							recharge from wall current at a rate of 1D6 per hour.
						</p>
						<p>
							<em>
								Example: Ripperjack has recently captured a laser from on
								Arasaka guard. He has 10D6 to work with; he dials the power
								grudge up to 5D6 and fires. At this rate, he'll only have one
								more shot before it's recharge time.
							</em>
						</p>
						<p>
							<strong>Microwavers</strong>
						</p>
						<p>
							Microwavers are fired like any other ranged weapon, delivering 1D6
							in bum damage. In addition, any target within 1 meter of the path
							of the beam must roll 1D6 on the microwaver side effects table to
							determine if there are electrical side effects on exposed
							cyberwear. Shielded cyberwearis not effected by electrical side
							effects.
						</p>
						<p>
							Like lasers, microwavers recharge from a wall socket, taking one
							hour to reach a usable charge.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="80%">
									<tbody>
										<tr>
											<td valign="top" colSpan={2}>
												<strong>MICROWAVER SIDE EFFECTS</strong>
											</td>
										</tr>
										<tr>
											<td valign="top">1</td>
											<td valign="top">Cyberoptics short for 1D6 turns.</td>
										</tr>
										<tr>
											<td valign="top">2</td>
											<td valign="top">
												Neural pulse! if character has interface plugs, reflex
												boosts or other hardwiring, REF stat reduced by 1D6/2
												until repaired.
											</td>
										</tr>
										<tr>
											<td valign="top">3</td>
											<td valign="top">Cyberaudio shorts for 1D6 turns.</td>
										</tr>
										<tr>
											<td valign="top">4</td>
											<td valign="top">
												Cyberlimb malfunction: Lose all use of cyberlimb for
												1D10 turns. Roll 1D6 for limb, re-rolling if no
												cyberlimb limb is present:
												<div>
													<center>
														<table
															border={0}
															cellPadding="0"
															cellSpacing="0"
															width="80%"
														>
															<tbody>
																<tr>
																	<td>1-2</td>
																	<td>Right Arm</td>
																</tr>
																<tr>
																	<td>3</td>
																	<td>Left Leg</td>
																</tr>
																<tr>
																	<td>4</td>
																	<td>Right Leg</td>
																</tr>
																<tr>
																	<td>5-6</td>
																	<td>Left Arm</td>
																</tr>
															</tbody>
														</table>
													</center>
												</div>
											</td>
										</tr>
										<tr>
											<td valign="top">5</td>
											<td valign="top">
												Total Neural breakdown! Character reduced to twitching,
												epileptic fit for 1 D6/3 turns.
											</td>
										</tr>
										<tr>
											<td valign="top">6</td>
											<td valign="top">No Effect.</td>
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
