export default function gotMainActions() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Actions</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							During your part of the round, you may perform one
							<strong>action</strong> without penalty. This includes:
						</p>
						<p>
							<strong>ACTIONS</strong>
						</p>
						<ul>
							<li>
								Move up to your full Movement (3x your Movement Allowance In
								meters) per round.
							</li>
							<li>
								Attack up to your weapon's maximum Rate of Fire (ROF), or make a
								Melee attack.
							</li>
							<li>
								Dodge (making yourself harder to hit. Melee attacks only.)
							</li>
							<li>Parry (deflecting damage onto something else.)</li>
							<li>Escape a hold or trap.</li>
							<li>
								Aim (gaining +1 to hit for every consecutive turn of aiming up
								to 3 rounds)
							</li>
							<li>Reload or change weapons.</li>
							<li>Mount or dismount from a vehicle.</li>
							<li>Repair or give Medical Aid.</li>
							<li>Perform a non-combat task.</li>
						</ul>
						<p>
							<a className="text-orange-400" href="#">
								More Then One Turn
							</a>
							<br />
							<a className="text-orange-400" href="#">
								Two Weapons Attacks
							</a>
							<br />
							<a className="text-orange-400" href="#">
								Ambushes &amp; Backstabs
							</a>
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
