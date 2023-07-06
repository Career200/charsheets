export default function gotMainUnusualRangedWeapons() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Unusual Ranged Weapons</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							These weapons are often used for crowd control, stealth missions
							and other situations where you want killing to be only one of the
							options, or where you want a limited number of targets eliminated
							quietly.
						</p>
						<p>
							<strong>Airguns</strong>
						</p>
						<p>
							These are advanced versions of the "paintball" guns of the 1990's.
							Airguns can be loaded with poison, marking paint, drugs or acid.
						</p>
						<p>
							<strong>Paint:</strong> Bruise damage only. Head hits have a 5 in
							10 chance of blinding the target for 3 rounds with paint in the
							eyes, and a 4 in 10 chance of permanently destroying the eye.
						</p>
						<p>
							<strong>Poison &amp; Drugs:</strong> To avoid the effects, the
							character must make a save roll. On a successful save, damage is
							reduced by half.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="80%">
									<tbody>
										<tr>
											<td colSpan={3} width="100%">
												<strong>DRUG &amp; POISON EFFECTS</strong>
											</td>
										</tr>
										<tr>
											<td width="33%">Type</td>
											<td width="33%">Effect</td>
											<td width="34%">Damage</td>
										</tr>
										<tr>
											<td width="33%">Hallucinogen</td>
											<td width="33%">Confusion</td>
											<td width="34%">-4 INT</td>
										</tr>
										<tr>
											<td width="33%">Nausea Drugs</td>
											<td width="33%">Illness</td>
											<td width="34%">-4 REF</td>
										</tr>
										<tr>
											<td width="33%">Sleep Drugs</td>
											<td width="33%">Sleep**</td>
											<td width="34%">None</td>
										</tr>
										<tr>
											<td width="33%">Biotoxin I</td>
											<td width="33%">Death</td>
											<td width="34%">4D6</td>
										</tr>
										<tr>
											<td>Biotoxin II</td>
											<td>Death</td>
											<td>8D6</td>
										</tr>
										<tr>
											<td>Nerve toxin/gas</td>
											<td>Death</td>
											<td>8D10</td>
										</tr>
										<tr>
											<td colSpan={3}>
												<em>** Half effect it drowsiness, -2 to all stats.</em>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>Acid:</strong> Acid causes 1 D6 in acid damage per pellet.
							Although armor will stop this, the acid will eat away at the
							armor, reducing its SP by 1D6 per round, for a total of 3 rounds.
						</p>
						<p>
							<em>
								Example: Ripperjack hits armor SP 15 with two pellets. He roils
								2D6 for a total of 7 points of damage. The first turn, the
								armor's SP is reduced to 8. The next turn, it's reduced to 1.
								The next turn, 6 points get through the armor and sear into the
								target's skin.
							</em>
						</p>
						<p>
							<strong>Tasers</strong>
						</p>
						<p>
							Tasers require the victim to make a save against stun. The save
							number is reduced by -2 for every successive shot in a three-turn
							time period. Tasers can be recharged from wall current, taking 1
							hour to reach full charge.
						</p>
						<p>
							<strong>Dart and Needleguns</strong>
						</p>
						<p>
							Dartguns can be loaded with poison or drugs. Each hit does 1D6/2,
							plus effect of the drug or poison used (see <em>Airguns</em>,
							above).
						</p>
						<p>
							<strong>Power Squirtguns</strong>
						</p>
						<p>
							Power squirtguns can be loaded with drugs or acids. Effects are as
							with <em>Airguns</em> (above), with each "squirt" equal to 2
							pellets.
						</p>
						<p>
							<strong>Bows, Crossbows, Spears &amp; Throwing Stars</strong>
						</p>
						<p>
							Although they are not common,
							<strong>bows, crossbows, spears</strong> and
							<strong>throwing stars</strong> are available in the 2000s. These
							weapons are either thrown (using the character's
							<a href="028r002.htm">
								<em>Throwing</em>
							</a>{' '}
							Skill for shiriken, darts, knives and spears), or fired (using
							<a href="028r001.htm">
								<em>Archery</em>
							</a>{' '}
							Skill). All non-grenade thrown weapons have a range equal to the
							thrower's BODx3 in meters.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
