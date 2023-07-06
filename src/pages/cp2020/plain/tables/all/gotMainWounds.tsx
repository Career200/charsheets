export default function gotMainWounds() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Wounds</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Okay, so the Armor didn't stop all of the damage, and your
							<a className="text-orange-400" href="#">
								<em>Body Type Modifier</em>
							</a>{' '}
							wasn't enough to shrug off the rest it's time to take a{' '}
							<em>Wound</em>.
						</p>
						<p>
							The <em>Wound</em> section of the Hardcopy Form is used to record
							damage. For each point of damage taken, check off one box, moving
							from left to right, top to bottom. The top line of this section
							(marked LIGHT, SERIOUS, CRITICAL, MORTAL, etc.) tells the overall
							state of the character's health.
						</p>
						<p>
							<strong>WOUND EFFECTS</strong>
						</p>
						<ul>
							<li>
								At a LIGHT wound level, a character suffers no penalties to his
								activities. He just hurts a lot ("it's only a flesh wound.")
							</li>
							<li>
								At a SERIOUS wound level, the character will be at -2 to his REF
								stat for all actions. He's hurting, bleeding, and definitely
								hampered.
							</li>
							<li>
								At a CRITICAL wound level, the character's REF, INT and CL stats
								are automatically reduced by half (round up). The character is
								holding his guts in with one hand and doing his damndest to stay
								in the battle.
							</li>
							<li>
								If MORTALLY wounded, the character's REF, INT and CL stats are
								reduced to 1/3rd normal (divide by 3, rounding up). Most
								characters are already out of the action by now, and are quietly
								going about the business of expiring. Messily.
							</li>
						</ul>
						<p>
							<strong>Special Wound Cases</strong>
						</p>
						<p>
							<strong>Limb Loss:</strong> If a character takes more than eight
							points of damage to a limb area in any one attack, the area is
							severed or crushed beyond recognition. The character must make an
							immediate
							<em>Death Save</em> at Mortal 0. A head wound of this type will
							kill automatically.
						</p>
						<p>
							<strong>Head Hits:</strong> A head hit always doubles damage.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
