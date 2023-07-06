export default function gotMainDeath() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Death</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Whenever a character's Wound State drops to MORTAL, he has a
							pretty good chance of dying. But when? In <em>Cyberpunk</em>, each
							time you are at a MORTAL wound state, you must make a Death Save
							to avoid dying. To make the Save, roll a 1D10 value lower than
							your character's Body Type, subtracting the level of Mortality
							from your base chance to save. Each turn, you must make another
							death save to see if the character makes it through another turn.
							On a successful roll, you make it; on a failed roll, you will die
							at the end of the turn in which the roll was made.
						</p>
						<p>
							<em>
								For example, soy Savage has a Body Type of 10 (Very Strong) and
								takes a Mortal 4 wound. He must roll lower than (10-4)=6 to stay
								alive. The first turn he rolls a 5. Whew. The next turn, he
								rolls a 7 and expires. Immediately, his mates start fighting
								over who gets his boots.
							</em>
						</p>
						<p>
							Get the point? Sooner or later, you'll fail a roll and die. The
							only way out is <strong>stabilization</strong>.
						</p>
						<p>
							Stabilization means the patient is no longer losing blood and that
							his major damage has been contained through use of drugs,
							battlefield surgery, and/or wound dressing. A stabilized character
							will no longer be required to make Death saves each turn. Anyone
							(except the patient himself) can attempt to stabilize a mortally
							wounded character; it just works better if the physician has had
							some medical training. A lot better.
						</p>
						<p>
							A successful stabilization is made by rolling a total of your TECH
							stat, any Medical Skill and one D10 for a result equal to or
							higher than the total number of damage points the patient has
							taken.
							<em>
								For example, Savage has taken 20 points of damage, placing him
								in a Mortal I Wound State. To stabilize him will require a roll
								of 20 or greater.
							</em>
							Once stabilized, the character is no longer in danger of dying
							unless another wound is taken. At that point, the whole messy
							business begins again...
						</p>
						<p>
							The chances of a successful stabilization roll can be increased by
							the following modifiers, added to your die roll.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">
												<strong>Advantage</strong>
											</td>
											<td width="50%">
												<strong>Add to die roll</strong>
											</td>
										</tr>
										<tr>
											<td>Full Hospital &amp; Surgery</td>
											<td>+5</td>
										</tr>
										<tr>
											<td width="50%">Trauma Team Ambulance</td>
											<td width="50%">+3</td>
										</tr>
										<tr>
											<td width="50%">Cryo Tank</td>
											<td width="50%">+3</td>
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
