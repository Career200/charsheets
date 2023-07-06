export default function gotMainMODIFIERSEFFECTS() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>MODIFIERS, EFFECTS</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>ATTACK MODIFIERS / WEAPON RANGES</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Handguns</td>
											<td width="50%">50m</td>
										</tr>
										<tr>
											<td width="50%">Submachineguns</td>
											<td width="50%">150m</td>
										</tr>
										<tr>
											<td width="50%">Shotguns</td>
											<td width="50%">50m</td>
										</tr>
										<tr>
											<td width="50%">Rifles</td>
											<td width="50%">400m</td>
										</tr>
										<tr>
											<td width="50%">Throwing</td>
											<td width="50%">10m x BOD (-10m/kg.&gt;1)</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>TO HIT NUMBERS</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Point Blank (Touching to 1m)</td>
											<td width="50%">10</td>
										</tr>
										<tr>
											<td width="50%">Close (1/4 Long range)</td>
											<td width="50%">15</td>
										</tr>
										<tr>
											<td width="50%">Medium (1/2 Long range)</td>
											<td width="50%">20</td>
										</tr>
										<tr>
											<td width="50%">Long (Full range)</td>
											<td width="50%">25</td>
										</tr>
										<tr>
											<td width="50%">Extreme (2x Long range)</td>
											<td width="50%">30</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>MODIFIERS (add to attacker's roll)</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Target immobile</td>
											<td width="50%">+4</td>
										</tr>
										<tr>
											<td width="50%">Target dodging (melee only)</td>
											<td width="50%">-2</td>
										</tr>
										<tr>
											<td width="50%">Moving Target REF &gt;10</td>
											<td width="50%">-3</td>
										</tr>
										<tr>
											<td width="50%">Moving Target REF &gt; 12</td>
											<td width="50%">-4</td>
										</tr>
										<tr>
											<td width="50%">Moving Target REF &gt;14</td>
											<td width="50%">-5</td>
										</tr>
										<tr>
											<td>Fast draw/Snapshot</td>
											<td>-3</td>
										</tr>
										<tr>
											<td>Ambush</td>
											<td>+5</td>
										</tr>
										<tr>
											<td>Aimed shot at body location</td>
											<td>-4</td>
										</tr>
										<tr>
											<td>Ricochet or indirect fire</td>
											<td>-5</td>
										</tr>
										<tr>
											<td>Blinded by light or dust</td>
											<td>-3</td>
										</tr>
										<tr>
											<td>Target silhouetted</td>
											<td>+2</td>
										</tr>
										<tr>
											<td>Firing to face target</td>
											<td>-2</td>
										</tr>
										<tr>
											<td>Rising two weapons</td>
											<td>-3 on both</td>
										</tr>
										<tr>
											<td>Firing while running</td>
											<td>-3</td>
										</tr>
										<tr>
											<td>Firing shoulder arm from hip</td>
											<td>-2</td>
										</tr>
										<tr>
											<td>Turret mounted weapon</td>
											<td>+2</td>
										</tr>
										<tr>
											<td>Vehicle mounted, no turret</td>
											<td>-4</td>
										</tr>
										<tr>
											<td>Large target</td>
											<td>+4</td>
										</tr>
										<tr>
											<td>Small target</td>
											<td>-4</td>
										</tr>
										<tr>
											<td>Tiny target</td>
											<td>-6</td>
										</tr>
										<tr>
											<td>Aiming</td>
											<td>(+1 each round, up to 3 rounds)</td>
										</tr>
										<tr>
											<td>Laser Sight</td>
											<td>+1</td>
										</tr>
										<tr>
											<td>Telescopic Sight</td>
											<td>+2 Ext, +1 Med</td>
										</tr>
										<tr>
											<td>Targeting scope</td>
											<td>+1</td>
										</tr>
										<tr>
											<td>Smartgun</td>
											<td>+2</td>
										</tr>
										<tr>
											<td>Smartgoggles</td>
											<td>+2</td>
										</tr>
										<tr>
											<td>Three Round Burst (Close/Medium only)</td>
											<td>+3</td>
										</tr>
										<tr>
											<td>Full Auto, Close</td>
											<td>+1 for every 10 mds</td>
										</tr>
										<tr>
											<td>Full Auto, all other</td>
											<td>-1 for every 10 mds</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>AREA EFFECT TABLE</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Type</td>
											<td width="50%">Area</td>
										</tr>
										<tr>
											<td width="50%">Grenades</td>
											<td width="50%">5m</td>
										</tr>
										<tr>
											<td width="50%">Molotovs</td>
											<td width="50%">2m/liter</td>
										</tr>
										<tr>
											<td width="50%">Flamethrower</td>
											<td width="50%">2m</td>
										</tr>
										<tr>
											<td width="50%">Cyberlimb flamethrower</td>
											<td width="50%">1m</td>
										</tr>
										<tr>
											<td width="50%">Mine</td>
											<td width="50%">2m</td>
										</tr>
										<tr>
											<td>Claymore</td>
											<td>6m line from center explosion</td>
										</tr>
										<tr>
											<td>C-6</td>
											<td>5m/kg</td>
										</tr>
										<tr>
											<td>SMG</td>
											<td>4m</td>
										</tr>
										<tr>
											<td>Missile</td>
											<td>6m</td>
										</tr>
										<tr>
											<td>Shotgun (Close)</td>
											<td>1m</td>
										</tr>
										<tr>
											<td>Shotgun (Med)</td>
											<td>2m</td>
										</tr>
										<tr>
											<td>Shotgun (Lng/Ext)</td>
											<td>3m</td>
										</tr>
										<tr>
											<td>Micromissile</td>
											<td>2m each</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>GRENADE TABLE</strong>
											</td>
										</tr>
										<tr>
											<td></td>
										</tr>
										<tr>
											<td>
												<em>
													Roll 1D10 if grenade throw misses; roll second D10 for
													meters from target space
												</em>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={3} width="100%">
												<strong>DRUGS &amp; POISON</strong>
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
											<td width="33%">Sleep*</td>
											<td width="34%">None</td>
										</tr>
										<tr>
											<td width="33%">Biotoxin I</td>
											<td width="33%">Death</td>
											<td width="34%">4D6</td>
										</tr>
										<tr>
											<td>Biototoxin II</td>
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
												<em>* Half effect is drowsiness, 2 to all stats</em>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td valign="top" colSpan={2} width="100%">
												<strong>MICROWAVE SIDE EFFECTS</strong>
											</td>
										</tr>
										<tr>
											<td valign="top" width="10%">
												1
											</td>
											<td valign="top" width="90%">
												Cyberoptics short for 1D6 turns
											</td>
										</tr>
										<tr>
											<td valign="top" width="10%">
												2
											</td>
											<td valign="top" width="90%">
												Neural pulse! If character has interface plugs, reflex
												boosts or other hardwiring, REF stat reduced by 1D6/2
												until repaired.
											</td>
										</tr>
										<tr>
											<td valign="top" width="10%">
												3
											</td>
											<td valign="top" width="90%">
												Cyberaudio shorts for 1D6 turns.
											</td>
										</tr>
										<tr>
											<td valign="top" width="10%">
												4
											</td>
											<td valign="top" width="90%">
												Cyberlimb malfunction: Lose all use of cyberlimb for
												1D10 turns Roll 1D6 for limb, rerolling if no limb
												present
												<div>
													<center>
														<table
															border={0}
															cellPadding="0"
															cellSpacing="0"
															width="90%"
														>
															<tbody>
																<tr>
																	<td>1-2</td>
																	<td>Right Arm</td>
																</tr>
																<tr>
																	<td width="10%">3</td>
																	<td width="90%">Left Leg</td>
																</tr>
																<tr>
																	<td width="10%">4</td>
																	<td width="90%">Right Leg</td>
																</tr>
																<tr>
																	<td width="10%">5-6</td>
																	<td width="90%">Left Arm</td>
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
												epileptic fit for 1D6/3 turns.
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
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>ADD TO DAMAGE</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Strength</td>
											<td width="50%">Add to Damage</td>
										</tr>
										<tr>
											<td width="50%">Very Weak</td>
											<td width="50%">2</td>
										</tr>
										<tr>
											<td width="50%">Weak</td>
											<td width="50%">-1</td>
										</tr>
										<tr>
											<td width="50%">Average</td>
											<td width="50%">+0</td>
										</tr>
										<tr>
											<td width="50%">Strong</td>
											<td width="50%">+1</td>
										</tr>
										<tr>
											<td>Very Strong</td>
											<td>+2</td>
										</tr>
										<tr>
											<td>Body Type 11-12</td>
											<td>+4</td>
										</tr>
										<tr>
											<td>Body Type 13-14</td>
											<td>+6</td>
										</tr>
										<tr>
											<td>Body Type 15+</td>
											<td>+8</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>COMMON COVER SPS</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Sheetrock Wall</td>
											<td width="50%">5</td>
										</tr>
										<tr>
											<td width="50%">Stone Wall</td>
											<td width="50%">30</td>
										</tr>
										<tr>
											<td width="50%">Tree, Phone Pole</td>
											<td width="50%">30</td>
										</tr>
										<tr>
											<td width="50%">Brick Wall</td>
											<td width="50%">25</td>
										</tr>
										<tr>
											<td width="50%">Concrete Block Wall</td>
											<td width="50%">10</td>
										</tr>
										<tr>
											<td width="50%">Wood Door</td>
											<td width="50%">5</td>
										</tr>
										<tr>
											<td width="50%">Heavy Wood Door</td>
											<td width="50%">15</td>
										</tr>
										<tr>
											<td width="50%">Steel Door</td>
											<td width="50%">20</td>
										</tr>
										<tr>
											<td width="50%">Concrete Utility Pole</td>
											<td width="50%">35</td>
										</tr>
										<tr>
											<td>Data Term</td>
											<td>25</td>
										</tr>
										<tr>
											<td>Car Body, Door</td>
											<td>10</td>
										</tr>
										<tr>
											<td>Armored Car Body</td>
											<td>40</td>
										</tr>
										<tr>
											<td>AV-4 Body</td>
											<td>40</td>
										</tr>
										<tr>
											<td>Engine Block</td>
											<td>35</td>
										</tr>
										<tr>
											<td>Mailbox</td>
											<td>25</td>
										</tr>
										<tr>
											<td>Hydrant</td>
											<td>35</td>
										</tr>
										<tr>
											<td>Curb</td>
											<td>25</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={3} width="100%">
												<strong>ARMOR SPS</strong>
											</td>
										</tr>
										<tr>
											<td width="33%">Type of Armor</td>
											<td width="33%">SP*</td>
											<td width="34%">EV**</td>
										</tr>
										<tr>
											<td width="33%">Cloth, leather***</td>
											<td width="33%">0</td>
											<td width="34%">+0</td>
										</tr>
										<tr>
											<td width="33%">Heavy Leather</td>
											<td width="33%">4</td>
											<td width="34%">+0</td>
										</tr>
										<tr>
											<td width="33%">Kevlar T-Shirt, Vest***</td>
											<td width="33%">10</td>
											<td width="34%">+0</td>
										</tr>
										<tr>
											<td width="33%">Steel helmet</td>
											<td width="33%">14</td>
											<td width="34%">+0</td>
										</tr>
										<tr>
											<td width="33%">Light Armor Jacket***</td>
											<td width="33%">14</td>
											<td width="34%">+0</td>
										</tr>
										<tr>
											<td width="33%">Med Armor Jacket</td>
											<td width="33%">18</td>
											<td width="34%">+1</td>
										</tr>
										<tr>
											<td width="33%">Flack vest***</td>
											<td width="33%">20</td>
											<td width="34%">+1</td>
										</tr>
										<tr>
											<td width="33%">Flack Pants***</td>
											<td width="33%">20</td>
											<td width="34%">+1</td>
										</tr>
										<tr>
											<td width="33%">Nylon Helmet</td>
											<td width="33%">20</td>
											<td width="34%">+0</td>
										</tr>
										<tr>
											<td width="33%">Heavy Armor Jacket</td>
											<td width="33%">20</td>
											<td width="34%">+2</td>
										</tr>
										<tr>
											<td>Doors Gunner's Vest</td>
											<td>25</td>
											<td>+3</td>
										</tr>
										<tr>
											<td>MetalGear</td>
											<td>25</td>
											<td>+2</td>
										</tr>
										<tr>
											<td colSpan={3}>*AP rounds: treat Armor as half SP</td>
										</tr>
										<tr>
											<td colSpan={3}>*** = Edged weapons treat SP as half</td>
										</tr>
										<tr>
											<td colSpan={3}>
												** (EV) Encumberance Values should be added together and
												subtracted from character's total REF Slat.
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>CYBERWEAPON DAMAGE</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Weapon</td>
											<td width="50%">Damage</td>
										</tr>
										<tr>
											<td width="50%">Scratchers</td>
											<td width="50%">1D6/2</td>
										</tr>
										<tr>
											<td width="50%">Fangs</td>
											<td width="50%">1D6/3</td>
										</tr>
										<tr>
											<td width="50%">Rippers</td>
											<td width="50%">1D6+3(AP^)</td>
										</tr>
										<tr>
											<td width="50%">Wolvers</td>
											<td width="50%">3D6 (AP^)</td>
										</tr>
										<tr>
											<td width="50%">Big Knucks</td>
											<td width="50%">1D6+2</td>
										</tr>
										<tr>
											<td width="50%">Slice n' Dice</td>
											<td width="50%">2D6 (mono)</td>
										</tr>
										<tr>
											<td width="50%">Cybersnake</td>
											<td width="50%">1D6</td>
										</tr>
										<tr>
											<td width="50%">Hammerhand</td>
											<td width="50%">1D10</td>
										</tr>
										<tr>
											<td>Buzzhand</td>
											<td>2D6+2</td>
										</tr>
										<tr>
											<td>Spikehand</td>
											<td>1D6+3AP</td>
										</tr>
										<tr>
											<td>Talon Foot</td>
											<td>1D6</td>
										</tr>
										<tr>
											<td>Spike Heel</td>
											<td>2D6AP</td>
										</tr>
										<tr>
											<td>Flamethrower</td>
											<td>2D6 (1D6/2***)</td>
										</tr>
										<tr>
											<td>Micro Missile</td>
											<td>4D6ea</td>
										</tr>
										<tr>
											<td>Capacitor Laser</td>
											<td>3D6</td>
										</tr>
										<tr>
											<td>Cyber Strike</td>
											<td>1, 2* or 3D6**</td>
										</tr>
										<tr>
											<td>Cyber Kick, Crush</td>
											<td>2, 4* or 6D6**</td>
										</tr>
										<tr>
											<td colSpan={2}>
												<em>** with hydraulic rams</em>
											</td>
										</tr>
										<tr>
											<td colSpan={2}>
												<em>* thickened myomar</em>
											</td>
										</tr>
										<tr>
											<td colSpan={2}>
												<em>*** secondary damage 3 rounds.</em>
											</td>
										</tr>
										<tr>
											<td colSpan={2}>
												<em>^ knife AP</em>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
