export default function gotMainRangedWeapons() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Ranged Weapons</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Ranged weapons are anything that is shot or thrown over a distance
							at the target. To <strong>make a ranged weapon attack</strong>{' '}
							(guns, bows, thrown objects, etc.) you must roll a combination of
							your:
							<br />
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="50%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>REF STAT + WEAPON SKILL + 1D10</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							equal to or greater than a specific hit number. The hit number is
							determined by the range between you and your target.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												HIT NUMBERS
											</td>
										</tr>
										<tr>
											<td width="50%">Point Blank</td>
											<td width="50%">10</td>
										</tr>
										<tr>
											<td width="50%">Close</td>
											<td width="50%">15</td>
										</tr>
										<tr>
											<td width="50%">Medium</td>
											<td width="50%">20</td>
										</tr>
										<tr>
											<td width="50%">Long</td>
											<td width="50%">25</td>
										</tr>
										<tr>
											<td width="50%">Extreme</td>
											<td width="50%">30</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>Range Definitions</strong>
						</p>
						<ul>
							<li>
								<strong>Point Blank:</strong> The weapon is very close to or in
								actual physical contact with the target. It will almost always
								hit, doing maximum damage.
							</li>
							<li>
								<strong>Close:</strong> The weapon is attacking at one quarter
								of the listed range.
							</li>
							<li>
								<strong>Medium:</strong> The weapon is attacking at one half of
								the listed range for its type.
							</li>
							<li>
								<strong>Long:</strong> The weapon is attacking at the listed
								range for its type.
							</li>
							<li>
								<strong>Extreme:</strong> The weapon is attacking at twice the
								listed range for its type.
							</li>
						</ul>
						<p>
							<strong>Modifiers</strong>
						</p>
						<p>
							When making your roll, you must add any and all modifiers that
							apply to the combat situation to your final <em>Attack</em> Roll.
							There are modifiers for Target, Aiming, Weapon Type, Type of
							Firing, Position and Movement.
						</p>
						<p>
							<strong>Aiming</strong>
						</p>
						<p>
							One way to improve your chance to hit is to aim. Each turn of
							aiming adds +1 to your <em>Attack</em>, up to three rounds. Aiming
							assumes steady position, no movement, and a clear chance to track
							your target.
						</p>
						<p>
							<strong>Critical Success</strong>
						</p>
						<p>
							On a natural roll of 10, you have had a
							<strong>critical success</strong>. Roll an additional 1D10 and
							<em>add</em> it to your original roll.
						</p>
						<p>
							<strong>Fumbles</strong>
						</p>
						<p>
							On a natural die roll of 1, you have <strong>fumbled</strong>. You
							must roll an additional 1D10 and check the result against the
							<a href="025a.htm">
								<em>Fumble Table</em>
							</a>{' '}
							to see what happens.
						</p>
						<p>
							Fumbles can encompass a wide variety of effects. Most weapon
							fumbles include jamming or misfires.
						</p>
						<p>
							<strong>Automatic weapons</strong> have the highest chance of
							fumbling, and will jam based on the Reliability of the weapon:
							When a fumble is rolled while using an automatic weapon and roll a
							value on 1D10 higher than the Reliability value for the weapon.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>RELIABILITY TABLE</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Weapon</td>
											<td width="50%">Jams on</td>
										</tr>
										<tr>
											<td width="50%">Very Reliable</td>
											<td width="50%">3 or lower</td>
										</tr>
										<tr>
											<td width="50%">Standard</td>
											<td width="50%">5 or lower</td>
										</tr>
										<tr>
											<td width="50%">Unreliable</td>
											<td width="50%">8 or lower</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>It takes 1D6 turns to unjam a jammed weapon.</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
