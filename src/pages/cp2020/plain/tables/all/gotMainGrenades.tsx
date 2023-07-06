export default function gotMainGrenades() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Grenades</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Grenades come in
							<strong>
								fragmentation, incendiary, stun, dazzle, sonic, concussion
							</strong>
							and <strong>gas</strong> varieties. Each type has its own area of
							effect, usually between 2 to 5 meters. Grenades and explosives can
							be detonated using timers, radio controls, tripwires or remote
							detonators. All grenade types are available in hand or
							rifle-propelled versions, and are described in the
							<a className="text-orange-400" href="#">
								<em>Area Effect Weapons &amp; Grenade Table</em>
							</a>
							. Grenades may be thrown up to 10x the character's Body Type in
							meters (-10m for every extra kg. past the initial 1), or launched
							to a range of 225 meters.
						</p>
						<p>
							<strong>Gas:</strong> Gas differs from other grenade effects in
							that it moves around. To use gas, first determine the point of
							impact. All targets within 3 meters are immediately affected.
						</p>
						<p>
							On the next turn, determine which way the wind is blowing by
							rolling again on the Area Effect Table. Place the new area of
							effect. Any target within the first and second areas of effect
							must save vs the gas, as well as any targets in a straight line
							the width of the gas cloud between the two points. On the third
							turn, the gas dissappates.
						</p>
						<p>
							Gas grenades have eitherfatal or incapacitating effects. To avoid
							the effects, the character must make a save; armor doesn't help
							(although filters or gas masks will). On a successful Save, he
							will take half effects (a -2 REF reduced to -1, 4D6 reduced to 2,
							etc.).
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="80%">
									<tbody>
										<tr>
											<td colSpan={3} width="100%">
												<strong>GAS EFFECTS</strong>
											</td>
										</tr>
										<tr>
											<td width="33%">Type</td>
											<td width="33%">Effect</td>
											<td width="34%">Damage</td>
										</tr>
										<tr>
											<td width="33%">Nausea</td>
											<td width="33%">Illness</td>
											<td width="34%">-4 REF</td>
										</tr>
										<tr>
											<td width="33%">Teargas</td>
											<td width="33%">Tearing</td>
											<td width="34%">-2 REF</td>
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
											<td>Nerve Gas</td>
											<td>Death</td>
											<td>8D10</td>
										</tr>
										<tr>
											<td colSpan={3}>
												<em>**Half effect is drowsiness, -2 to all stats.</em>
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
