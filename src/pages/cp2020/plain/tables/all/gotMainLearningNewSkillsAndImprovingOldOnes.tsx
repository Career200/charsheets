export default function gotMainLearningNewSkillsAndImprovingOldOnes() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Learning New Skills and Improving Old Ones</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Players can improve their skills or begin new ones by accumulating
							<em>Improvement Points</em> (IP) . As you gain more IP, you'll
							record these points in the area next to the skills listing on your
							Hardcopy Form. When you have collected enough Improvement Points
							in a skill, the skill's level increases by one.
						</p>
						<p>
							The first level of a skill will always cost 10 IP. To determine
							how many points are re-quired to raise a skill <em>higher</em>{' '}
							than this, multiply the current level of skill by 10. This is how
							many points are required to raise a simple (IP multiplier=1) skill
							to the next level.
						</p>
						<p>
							<em>
								Example: My Brawling skill is +4. To move from +4 to +5 will
								require 40 IP. To move from +5 to +6 will require 50 IP.
							</em>
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
