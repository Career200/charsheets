export default function gotMainExplosives() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Explosives</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Explosives vary from grenades in that the more you use, the bigger
							the blast area. Explosive amounts are defined as units; one unit
							of TNT would equal one stick; one unit of plastique would be an
							ounce, etc.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="80%">
									<tbody>
										<tr>
											<td colSpan={4}>
												<strong>EXPLOSIVE RANGES</strong>
											</td>
										</tr>
										<tr>
											<td width="25%">Explosive</td>
											<td width="25%">Unit</td>
											<td width="25%">Area</td>
											<td width="25%">Damage</td>
										</tr>
										<tr>
											<td width="25%">Plastique</td>
											<td width="25%">1kg</td>
											<td width="25%">4m</td>
											<td width="25%">7D10</td>
										</tr>
										<tr>
											<td width="25%">C6</td>
											<td width="25%">1kg</td>
											<td width="25%">5m</td>
											<td width="25%">8D10</td>
										</tr>
										<tr>
											<td width="25%">TNT</td>
											<td width="25%">1stick</td>
											<td width="25%">3m</td>
											<td width="25%">4D10</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							Take the area covered by one unit of explosive and multiply this
							by the total number of units. Damage is applied to the overall
							body, rather than to a location.
						</p>
						<p>
							<em>
								Example: Ripperjack lumps four sticks of TNT together and tosses
								them into on abandoned building 10 meters away. One stick has a
								blast area of 3 meters - 4x3=12 meters. Ripperjack is caught in
								his own explosion and takes big damage. Bad move, Jack.
							</em>
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
