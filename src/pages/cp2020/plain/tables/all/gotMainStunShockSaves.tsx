export default function gotMainStunShockSaves() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Stun/Shock Saves</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Every time a character takes damage, he must make a save against
							the effects of pain, shock, fear and blood loss. This is what you
							see in most Hollywood gunfights when the bad guy gets hit -
							staggering, falling back and so on, all caused by pain and shock.
						</p>
						<p>
							The Stun Shock Save is a serious thing, because it can put an
							opponent out of the picture faster than the actual damage from the
							wound. Police officers have actually died from the shock of a
							minor bullet wound in the foot (but we won't do that to your
							character). Other people have taken as many as thirty or forty
							gunshots and managed to keep moving for up to ten minutes before
							their minds got the message their bodies were telling them ("Hey
							Bob, you're dead!").
						</p>
						<p>
							The Stun Save is equal to your character's Body Type value, minus
							a penalty based on his current Wound State.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>STUN/SHOCK SAVE MODIFIERS</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Wound State</td>
											<td width="50%">Penalty</td>
										</tr>
										<tr>
											<td width="50%">Light</td>
											<td width="50%">0</td>
										</tr>
										<tr>
											<td width="50%">Serious</td>
											<td width="50%">-1</td>
										</tr>
										<tr>
											<td width="50%">Critical</td>
											<td width="50%">-2</td>
										</tr>
										<tr>
											<td width="50%">Mortal</td>
											<td width="50%">-3</td>
										</tr>
										<tr>
											<td width="50%">Mortal 1</td>
											<td width="50%">-4</td>
										</tr>
										<tr>
											<td width="50%">Mortal 2</td>
											<td width="50%">-5</td>
										</tr>
										<tr>
											<td width="50%">Mortal 3</td>
											<td width="50%">-6</td>
										</tr>
										<tr>
											<td width="50%">Mortal 4</td>
											<td width="50%">-7</td>
										</tr>
										<tr>
											<td>Mortal 5</td>
											<td>-8</td>
										</tr>
										<tr>
											<td>Mortal 6</td>
											<td>-9</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							A failed roll means the character is out of combat. You can add
							the special effects yourself:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td valign="top" colSpan={2} width="100%">
												<strong>HOLLYWOOD OVERACTING EFFECTS TABLE</strong>
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												Roll
											</td>
											<td valign="top" width="50%">
												Effect
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												1
											</td>
											<td valign="top" width="50%">
												Screams, windmills arms, falls.
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												2
											</td>
											<td valign="top" width="50%">
												Crumples like a rag doll.
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												3
											</td>
											<td valign="top" width="50%">
												Spins around in place, falls.
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												4
											</td>
											<td valign="top" width="50%">
												Clutches wound, staggers and falls.
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												5
											</td>
											<td valign="top" width="50%">
												Stares stupidly at wound, then falls.
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												6
											</td>
											<td valign="top" width="50%">
												Slumps to ground, moaning.
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							A Stun/Shock roll can be recovered from by rolling a successful
							check in a subsequent turn.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
