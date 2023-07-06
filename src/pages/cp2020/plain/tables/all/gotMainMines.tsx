export default function gotMainMines() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Mines</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Mines come in two types; standard land mines and "claymore"
							antipersonnel mines. A <strong>land mine</strong> is designed to
							stop vehicles or other heavy objects; it is easily detected with
							most magnetic sensors (7 in 10 chance). You step on it and it
							blows up. Simple. Damage is 4D10.
						</p>
						<p>
							A <strong>claymore</strong> is designed to stop people, not
							vehicles. Claymores can be triggered by tripwires, time delays, or
							remote switches. Claymore mines have an hourglass shaped area of
							effect, rather than a circular one (see illustration). The
							dimensions of the "front" cone of destruction are 6m wide by 75m
							long; the dimensions of the "rear" cone of destruction are 6m wide
							by 6m long. At the juncture of the two cones is a 6 meter wide
							circle. Damage is 4D10.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
