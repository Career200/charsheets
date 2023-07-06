export default function gotMainStatistics() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Statistics</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Each <i>Cyberpunk</i> character has nine Statistics - values
							representing the level of native ability of the character in
							specific areas of activity. These Stats are rated from two to ten,
							with two worst possible, ten being the best possible, and the
							average falling at about five or six. Divide your total number of
							Character Points between each of your nine Stats, adjusting the
							amounts in each one as you thing best describes the character's
							natural abilities. No Statistic may be less than two or greater
							than ten.
						</p>
						<p>
							<strong>Intelligence (INT):</strong>
							<br />
							This is a measure of your problem solving ability; figuring out
							problems, noticing things, remembering information. Almost every
							character type will need a high intelligence, with Netrunnes and
							Corporates requiring the highest of all.
						</p>
						<p>
							<strong>Reflexes (REF):</strong>
							<br />
							This is a combined index, covering not only your basic dexterity,
							but also how your level of physical coordination will affect feats
							of driving, piloting, fighting and athletics. Characters who
							intend to engage in great deal of combat (such as Solos, Nomads,
							Rockerboys) should always invest in the highest possible Reflex.
						</p>
						<p>
							<strong>Cool (CL):</strong>
							<br />
							This index measures how well the character stands up to stress,
							pressure, physical pain and/or torture. In determining your
							willingness to fight on despite wounds or your fighting ability
							under fire, Cool (CL) is essential. It is also the measure of how
							"together" your character is and how tough he appears to others.
							Rockerboys and Fixers should always have a high Cool with Solos
							and Nomads having the highest of all.
						</p>
						<p>
							<strong>Technical Ability (TECH):</strong>
							<br />
							This is an index of how well you relate to hardware and other
							technically oriented things. In <i>Cyberpunk</i>, the ability to
							use and repair technology is of paramount impotence - TECH will be
							the Stat used when fxing, repairing and attempting to use
							unfamiliar tech. While all character should have a descent Tech
							Stat, potential Techies should always opt for the highest possible
							score in this area.
						</p>
						<p>
							<strong>Luck (LK):</strong>
							<br />
							This is the intangible "something" that throws the balance of
							events into your favor. Your luck represents how many points you
							may use each game to influence the outcome of critical event. To
							use Luck, you may add any or all the points of luck a character
							has to a critical die roll (declaring your inetntion to use Luck
							before the roll is made) until all of your Luck stat is used up.
							Luck is always restored at the end of each game session.
						</p>
						<p>
							<strong>Attractiveness (ATT):</strong>
							<br />
							This is how good-looking you are. In <i>Cyberpunk</i>, it's not
							enough to be good - you have to look good while you're doing it
							(Attitude vs Everything). Attractiveness is especially impotent to
							Medias and Rockerboys, as being good-looking is part of their
							jobs.
						</p>
						<p>
							<strong>Movement Allowance (MA):</strong>
							<br />
							This is index of how fast character can run (impotent in combat
							situations). The higher your Movement Allowance (MA), the more
							distance you can cover in turn.
						</p>
						<blockquote>
							<p>
								<strong>RUN</strong>: To determine how far your character can
								run in a single combat round (@3.2 seconds) in meters, multiply
								your MA by 3. The character can run three times this distance in
								full 10 seconds turn. Write this in the RUN section of your
								Hardcopy Form.
							</p>
							<p>
								<strong>LEAP:</strong> To determine how far your character can
								leap (from running start), divide your RUN by 4. Write this in
								the LEAP section of your Hardcopy Form.
							</p>
						</blockquote>
						<p>
							<strong>Empathy:</strong>
							<br />
							This Stat represent how well you relate to other living things - a
							measure of charisma and sympathetic emotions. In a world of
							alienated, future-shocked survivors, the ability to be "human" can
							no longer be taken for granted. Empathy (EM) is critical when
							leading, convincing, seducing or perceiving emotional
							undercurrents. Empathy is also a measure of how close he/she is to
							the line between feeling human being and cold blooded
							cyber-monster.
						</p>
						<blockquote>
							<p>
								<strong>Humanity:</strong>
								<br />
								This is a measure of the toll cybernetics takes on your ability
								to relate to other living things. Multiply your EMP by 10 to
								determine how many humanity points you have. Write the result in
								the box on your Hardcopy Form. Remember: for every 10 points of
								Humanity lost, you will automatically lose 1 point of EMP. This
								can have serious effect on any Empathy related Skills, as well
								as forcing you to the edge of cybernetic-induced psychosis.
							</p>
						</blockquote>
						<p>
							<strong>Body Type (BT):</strong>
							<br />
							Strength, Endurance and Constitution are all based on the
							character's Body Type. Body Type determines how much damage you
							can take in wounds, how much you can lift or carry. How far you
							can throw, how well you recover from shock, and how much
							additional damage you cause with physical attacks. Body Type is
							important to all character types, but to Solos, Rockerboys and
							Nomads most of all.
						</p>
						<p>
							<strong>Body Type &amp; Points</strong>
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">2pts</td>
											<td width="50%">Very Weak</td>
										</tr>
										<tr>
											<td width="50%">3-4pts</td>
											<td width="50%">Weak</td>
										</tr>
										<tr>
											<td width="50%">5-7pts</td>
											<td width="50%">Average</td>
										</tr>
										<tr>
											<td width="50%">8-9pts</td>
											<td width="50%">Strong</td>
										</tr>
										<tr>
											<td width="50%">10pts</td>
											<td width="50%">Very Strong</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							You may carry up to 10x Body Type in kg. You may also dead lift 40
							times your Body Type in kg.
						</p>
						<p>
							<strong>Save Number</strong>
							<br />
							Your character's Save Number is a value equal to your Body Type.
							To make saves, you must roll a value on 1D10 equal or lower than
							this number. There are two types of saves in <i>Cyberpunk</i>:
						</p>
						<blockquote>
							<p>
								<strong>Stun Saves:</strong> When you take damage in Cyberpunk,
								or have been exposed to knockout drugs, you will be required to
								make a Stunt Save. If you fail a Stunt Save, you will
								automatically be knocked out of combat and be unable to recover
								until you can make successful Stunt Save in a following combat
								turn. You may make one Save roll every turn until you succeed.
							</p>
							<p>
								<strong>Death Saves:</strong> When you have been Mortally
								Wounded, or when you have encountered certain types of poisons,
								you will need to make a Save against Death. On a failed roll,
								you're Body Bank fodder.
							</p>
							<p>
								Take a moment to find the Save box on your Hardcopy Form and
								fill it in.
							</p>
						</blockquote>
						<p>
							<strong>Body Type Modifier (BTM)</strong>
							<br />
							Not all people take damage the same way. For example, it takes a
							lot more damage to stop Arnold The Terminator than it does Arnold
							The Nerd. This is reflected by the Body Type Modifier, a special
							bonus used by your character to reduce the effects of damage. The
							Body type modifier is subtracted from any damage your character
							takes in combat.
						</p>
						<p>
							<strong>Body Type Modifier Table</strong>
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">Very Weak</td>
											<td width="50%">-0</td>
										</tr>
										<tr>
											<td width="50%">Weak</td>
											<td width="50%">-1</td>
										</tr>
										<tr>
											<td width="50%">Average</td>
											<td width="50%">-2</td>
										</tr>
										<tr>
											<td width="50%">Strong</td>
											<td width="50%">-3</td>
										</tr>
										<tr>
											<td width="50%">Very Strong</td>
											<td width="50%">-4</td>
										</tr>
										<tr>
											<td>Superhuman*</td>
											<td>-5</td>
										</tr>
										<tr>
											<td colSpan={2}> Possible only with cybernetics</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<i>
								For example, say you took ten points of damage. If you were a
								Very Weak Body Type, you would take the full ten. But with a
								Very Strong Body Type, you'd only take (10-4=6) six points of
								damage.
							</i>
						</p>
						<p>
							Find the Body Type Modifier (BTM) box on your Hardcopy Form and
							fill it in. Remember; no matter how cybered up you get, make sure
							you're solid meat underneath.
						</p>
					</td>
				</tr>
				<tr>
					<td>
						<a className="text-orange-400" href="#"></a>
						<a className="text-orange-400" href="#"></a>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
