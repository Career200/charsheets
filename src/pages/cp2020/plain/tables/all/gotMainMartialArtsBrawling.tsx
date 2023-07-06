export default function gotMainMartialArtsBrawling() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Martial Arts &amp; Brawling</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							<strong>Brawling</strong> and <strong>Martial Arts</strong>{' '}
							attacks are different from other melee attacks in that an attack
							can be made in a number of ways. You could, as an attack, use:
						</p>
						<ul>
							<li>
								<strong>Strike:</strong> Cause 1D6/2 + Damage Modifier.
							</li>
							<li>
								<strong>Kick:</strong> Cause 1D6 + Damage Modifier.
							</li>
							<li>
								<strong>Block/Parry:</strong> Stop or absorb damage.
							</li>
							<li>
								<strong>Dodge:</strong> -1 to Attacker's hit roll.
							</li>
							<li>
								<strong>Disarm:</strong> On successful roll, knock or remove
								weapon from opponent's hand.
							</li>
							<li>
								<strong>Throw:</strong> Requires a Grapple first. Opponent is
								knocked to ground, taking 1D6 + Damage Modifier, plus making a
								stun roll at -2.
							</li>
							<li>
								<strong>Hold:</strong> A painful joint or body hold. You must
								Grapple your opponent first. Foe is immobilized until an escape
								is made.
							</li>
							<li>
								<strong>Escape:</strong> On successful roll, you are free of the
								hold and may move.
							</li>
							<li>
								<strong>Choke:</strong> Requires hold or grapple as the previous
								move. Opponent takes 1D6 damage per turn.
							</li>
							<li>
								<strong>Sweep/Trip:</strong> Knock opponent to ground. He is -2
								to next his attack; you gain +2 to your next attack.
							</li>
							<li>
								<strong>Grapple:</strong> A grabbing or holding move,
								prerequisite to applying a throw, choke or hold as the next
								action.
							</li>
						</ul>
						<p>
							<strong>Martial Arts:</strong> Martial Arts are traditional forms
							of melee combat that have been developed to be deadlier than
							regular brawling. All martial arts techniques have
							<strong>key attacks</strong> - attacks which reflect the
							particular strengths of the technique. When a key attack is used,
							such as a karate kick, the character gains an +2 to +4 attack
							bonus (depending on the style of martial art).
						</p>
						<p>
							<em>For example, Karate would have the following moves:</em>
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">Strike</td>
											<td width="50%">+2</td>
										</tr>
										<tr>
											<td width="50%">Block/Parry</td>
											<td width="50%">+2</td>
										</tr>
										<tr>
											<td width="50%">Kick</td>
											<td width="50%">+2</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							A <em>Karate</em> Master would be able to do any other type of
							move, but would be better at these three.
						</p>
						<p>
							A Master of <em>Choi Li Fut</em> would have:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">Strike</td>
											<td width="50%">+2</td>
										</tr>
										<tr>
											<td width="50%">Block/Parry</td>
											<td width="50%">+2</td>
										</tr>
										<tr>
											<td width="50%">Kick</td>
											<td width="50%">+2</td>
										</tr>
										<tr>
											<td width="50%">Throw</td>
											<td width="50%">+1</td>
										</tr>
										<tr>
											<td width="50%">Dodge</td>
											<td width="50%">+1</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							- making him far more versatile than our <em>Karate</em> Master.
						</p>
						<p>
							Of course, it would far more difficult to learn
							<em>Choi Li Fut</em> than <em>Karate</em>; this is reflected in
							the
							<strong>difficulty level</strong> of the form. The number of
							improvement points normally required to increase your level of
							skill is multiplied by the difficulty level to show this.
						</p>
						<br />
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="85%">
									<tbody>
										<tr>
											<td valign="top" colSpan="11">
												<strong>
													MARTIAL ARTS FORMS &amp; SPECIALIZATION BONUSES
												</strong>
											</td>
										</tr>
										<tr>
											<td valign="top">Style and Difficulty Lvl.</td>
											<td valign="top">Strike</td>
											<td valign="top">Kick</td>
											<td valign="top">Block</td>
											<td valign="top">Dodge</td>
											<td valign="top">Throw</td>
											<td valign="top">Hold</td>
											<td valign="top">Escape</td>
											<td valign="top">Choke</td>
											<td valign="top">Sweep</td>
											<td valign="top">Grapple</td>
										</tr>
										<tr>
											<td valign="top">Karate (2)</td>
											<td valign="top">+2</td>
											<td valign="top">+2</td>
											<td valign="top">+2</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
										</tr>
										<tr>
											<td valign="top">Judo (1)</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">+1</td>
											<td valign="top">+3</td>
											<td valign="top">+2</td>
											<td valign="top">+2</td>
											<td valign="top">-</td>
											<td valign="top">+2</td>
											<td valign="top">+2</td>
										</tr>
										<tr>
											<td valign="top">Boxing (1)</td>
											<td valign="top">+3</td>
											<td valign="top">-</td>
											<td valign="top">+3</td>
											<td valign="top">+1</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
										</tr>
										<tr>
											<td valign="top">Thai Boxing (4)</td>
											<td valign="top">+3</td>
											<td valign="top">+3</td>
											<td valign="top">+2</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">+1</td>
										</tr>
										<tr>
											<td valign="top">Choi Li Fut (3)</td>
											<td valign="top">+2</td>
											<td valign="top">+2</td>
											<td valign="top">+2</td>
											<td valign="top">+1</td>
											<td valign="top">+1</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">+2</td>
											<td valign="top">-</td>
										</tr>
										<tr>
											<td valign="top">Aikido (3)</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">+4</td>
											<td valign="top">+3</td>
											<td valign="top">+3</td>
											<td valign="top">+3</td>
											<td valign="top">+3</td>
											<td valign="top">+1</td>
											<td valign="top">+3</td>
											<td valign="top">+2</td>
										</tr>
										<tr>
											<td valign="top">Animal Kung Fu (3)</td>
											<td valign="top">+2</td>
											<td valign="top">+2</td>
											<td valign="top">+2</td>
											<td valign="top">+2</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">+1</td>
											<td valign="top">-</td>
										</tr>
										<tr>
											<td valign="top">Tae Kwon Do (4)</td>
											<td valign="top">+3</td>
											<td valign="top">+3</td>
											<td valign="top">+2</td>
											<td valign="top">+1</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">+2</td>
											<td valign="top">-</td>
										</tr>
										<tr>
											<td>Savate (2)</td>
											<td>-</td>
											<td>+4</td>
											<td>+1</td>
											<td>+1</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
										</tr>
										<tr>
											<td valign="top">Wrestling (1)</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">-</td>
											<td valign="top">+3</td>
											<td valign="top">+4</td>
											<td valign="top">+4</td>
											<td valign="top">+2</td>
											<td valign="top">+2</td>
											<td valign="top">+4</td>
										</tr>
										<tr>
											<td>Capeoira (3)</td>
											<td>+1</td>
											<td>+2</td>
											<td>+2</td>
											<td>+2</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>+3</td>
											<td>-</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>Damage:</strong> In addition, martial arts are far more
							deadly than regular brawling. When using martial arts, you will
							gain a damage bonus equal to your current level of martial arts in
							addition to any strength bonuses.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
