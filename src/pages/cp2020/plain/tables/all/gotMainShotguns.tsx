export default function gotMainShotguns() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Shotguns</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Shotguns fire a cloud of small metal pellets called a "pattern".
							The width of the pattern is based on the distance between the
							attacker and the defender. Any target in a straight path between
							attacker and intended target is also considered to be in the area
							of effect. Note: if something is between the path of the shotgun
							and its intended target, the intervening spaces behind that object
							are considered to be exempt from the effects of fire.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="80%">
									<tbody>
										<tr>
											<td colSpan={3} width="100%">
												<strong>SHOTGUN TABLE</strong>
											</td>
										</tr>
										<tr>
											<td width="33%">Range</td>
											<td width="33%">Size of Pattern</td>
											<td width="34%">Damage</td>
										</tr>
										<tr>
											<td width="33%">Close, PB</td>
											<td width="33%">1 meters</td>
											<td width="34%">4D6</td>
										</tr>
										<tr>
											<td width="33%">Medium</td>
											<td width="33%">2 meters</td>
											<td width="34%">3D6</td>
										</tr>
										<tr>
											<td width="33%">Long</td>
											<td width="33%">3 meters</td>
											<td width="34%">2D6</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							Any target within the pattern will take damage based on the range
							(damage listed on the Weapons Table is based on
							<u>maximum</u> damage).
						</p>
						<p>
							<em>
								Example: Ripperjack opens up his shotgun on two boosters at
								medium range (pattern width=2m). He hits the first booster dead
								on. However, the second booster is within 1 meter of the first -
								the pattern overlaps him as well. Both take damage.
							</em>
						</p>
						<p>
							Shotguns are a very effective weapon in situations where aiming
							isn't critical. For instance, in six foot hallways, there would be
							no way for a target to escape taking wounds no matter how much his
							reflexes were boosted. However, shotguns are also limited to
							relatively short ranges and don't do a lot of damage on the
							individual pellet level.
						</p>
						<p>
							<strong>Autoshotguns:</strong> One of the nastiest house to house
							weapons is the <strong>autoshotgun</strong>. In combat, you may
							make as many attacks as your weapon's rate of fire on Full auto.
							All shots must be within 1 meter of each other. Each attack has a
							-2 penalty for every additional shot past the first. However, when
							this means you can put five two-meter clouds of lead all over an
							area, a -4 or -6 penalty is a small price to pay. Autoshotguns are
							slow, bulky and have lousy range, but they are hell on wheels when
							it comes to house to house, short range combat.
						</p>
						<p>
							<em>
								Example: Ripperjack opens up with a CAWS, Firing 5 shots. He
								takes a -8 penalty to his attack roll to do this. He targets a 5
								meter hallway, spacing his shots in I meter intervals. The
								hallway becomes Hamburger Heaven.
							</em>
						</p>
						<p>
							<strong>
								New Rule: The Armor-Piercing Effects of Shotgun Slugs
							</strong>
						</p>
						<p>
							These projectiles have normal AP ability vs. all armors. Damage
							that penetrates <strong>Hard armor is not halved</strong>. Damage
							that penetrates Soft armor is halved as normal. This represents
							the concussive results of mass and impact by finned/saboted slugs.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="80%">
									<tbody>
										<tr>
											<td width="50%">10ga. slugs</td>
											<td width="50%">5D6+3</td>
										</tr>
										<tr>
											<td width="50%">12ga. slugs</td>
											<td width="50%">4D6+2</td>
										</tr>
										<tr>
											<td width="50%">20ga. slugs</td>
											<td width="50%">3D6+1</td>
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
