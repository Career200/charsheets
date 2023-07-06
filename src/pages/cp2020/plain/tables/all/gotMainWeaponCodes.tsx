export default function gotMainWeaponCodes() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Weapon Codes</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Each weapon is represented by certain characteristics, such as its
							type, damage, range, accuracy, concealability, availability and
							cost. These factors are recorded as a weapon code - a profile of
							the weapon in order of:
						</p>
						<p>
							<strong>
								Name Type Accuracy Concealability Availability Damage/Ammunition
								Number of Shots Rate of Fire Reliability
							</strong>
						</p>
						<p>
							<em>
								For an example, a weapon with the code:
								<br />
								Minami 10 o SMG o 0 o J o E o 2D6+3/10mm o 40 o 20 o VR would be
								an Accurate (1) Minami 10 Submachinegun (SMG) which can be
								hidden under a jacket (J), with excellent availability (E),
								fires 10mm ammunition, has a 40 shot clip, can fire up to 20
								rounds per combat round on full auto, and is very reliable.
								Descriptions of Weapon Codes follow:
							</em>
						</p>
						<p>
							<strong>Accuracy:</strong> This is how good the weapon really is.
							Weapons are rated from -3 to +3 on accuracy, with 0 being an
							average level of accuracy.
						</p>
						<p>
							<strong>Concealability:</strong> How easily they can be hidden
							until needed (an important factor in combat weapons). A smart
							combat gunner doesn't want to walk into a bar with a shotgun
							protruding from underneath his coat - it's going to cause trouble.
							He also needs to be able to carry "holdouts" in the event of
							capture or disarmament.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">Pocket, Pants Leg or Sleeve</td>
											<td width="50%">(P)</td>
										</tr>
										<tr>
											<td width="50%">Jacket, Coat or Shoulder Rig</td>
											<td width="50%">(J)</td>
										</tr>
										<tr>
											<td width="50%">Long Coat</td>
											<td width="50%">(L)</td>
										</tr>
										<tr>
											<td width="50%">Can't be Hidden</td>
											<td width="50%">(N)</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>Availability:</strong> This is how difficult the weapon is
							to find on the open market.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">Excellent</td>
											<td width="50%">(E)</td>
										</tr>
										<tr>
											<td width="50%">Can be found almost anywhere.</td>
											<td width="50%">&nbsp;</td>
										</tr>
										<tr>
											<td width="50%">Common</td>
											<td width="50%">(C)</td>
										</tr>
										<tr>
											<td width="50%">
												Can be found in most sports &amp; gun stores or on the
												Street.
											</td>
											<td width="50%">&nbsp;</td>
										</tr>
										<tr>
											<td width="50%">Poor</td>
											<td width="50%">(P)</td>
										</tr>
										<tr>
											<td width="50%">
												Specialty weapons, black market, stolen military.
											</td>
											<td width="50%">&nbsp;</td>
										</tr>
										<tr>
											<td>Rare</td>
											<td>(R)</td>
										</tr>
										<tr>
											<td>
												Stolen, one of a kind, special military issue, may be
												highly illegal.
											</td>
											<td>&nbsp;</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>Damage/Ammunition:</strong> Each weapon is rated as to the
							type of ammunition it carries, and the damage of that ammunition
							(in numbers of dice thrown).
						</p>
						<p>
							<strong>Number of Shots:</strong> This is how many shots are held
							in the standard clip, magazine or quiver for the weapon type.
						</p>
						<p>
							<strong>Rate of Fire:</strong> This is how many shots the weapon
							can fire in a single combat round (3.2 seconds).
						</p>
						<p>
							<strong>Reliability:</strong> This is how reliable the weapon is
							in combat - its chance of jamming while on autofire, etc.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">Very Reliable</td>
											<td width="50%">(VR)</td>
										</tr>
										<tr>
											<td width="50%">Standard</td>
											<td width="50%">(ST)</td>
										</tr>
										<tr>
											<td width="50%">Unreliable</td>
											<td width="50%">(UR)</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<br />
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
