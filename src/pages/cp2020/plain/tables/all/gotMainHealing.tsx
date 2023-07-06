export default function gotMainHealing() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Healing</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>Okay, so you're not on a slab in Savage Doc's place...</p>
						<p>
							In order to recover from damage, characters must make some type of
							medical skill check. Otherwise, the patient continues to take
							damage (from infection and system shock) at the rate of 2 points
							per day. If the patientis at a Mortal Wound State, he must make a
							daily Death Save as well as taking this damage. Without medical
							aid, you're going to run out of luck pretty soon. This is probably
							why humans invented medicine in the first place.
						</p>
						<p>
							To make a successful medical skill check, you must roll a value
							(using TECH, your medical Skill and 1D10) greater than the total
							number of points of damage the patient has taken. Medical skill
							checks are made with two skills,{' '}
							<a href="028t011.htm">
								<em>First Aid</em>
							</a>{' '}
							or
							<a href="030h.htm">
								<em>Medical Tech</em>
							</a>
							.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
