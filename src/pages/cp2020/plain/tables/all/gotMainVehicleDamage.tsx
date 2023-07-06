export default function gotMainVehicleDamage() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Vehicle Damage</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Vehicles have both SP values and Structural Damage Points (SDP).
							If armored, the vehicle's SP is subtracted from the damage taken,
							with the remaining damage subtracted from the vehicle's SDP.
						</p>
						<p>
							When a vehicle is reduced to 0 SDP, it is considered to be
							destroyed or inoperable, in this simplified system, there are no
							locations for damage - all points are subtracted directly from the
							vehicle's SDP.
						</p>
						<p>
							<strong>Crashing &amp; Ramming</strong>
						</p>
						<p>
							Crash and ram damage is determined by dividing the speed of the
							moving vehicle by 20 (round down), to determine the number of
							six-sided dice thrown. This value is multiplied by a modifier
							based on the mass of the object collided with, listed in the
							Weight Modifier Table below. The vehicle takes this many dice in.
							damage to its SDP, while all occupants take one-half of this die
							amount.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td valign="top" colSpan={2} width="100%">
												<strong>WEIGHT MODIFIER TABLE</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Size</td>
											<td width="50%">Multiplier</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												Very Light (small box, feathers) . x.5 Light (man, large
												box)
											</td>
											<td valign="top" width="50%">
												x1
											</td>
										</tr>
										<tr>
											<td width="50%">Medium (motorcycle)</td>
											<td width="50%">x2</td>
										</tr>
										<tr>
											<td valign="top">Heavy (car)</td>
											<td valign="top">x3</td>
										</tr>
										<tr>
											<td>Very Heavy (truck, ground)</td>
											<td>x4</td>
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
