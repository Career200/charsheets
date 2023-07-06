export default function gotMainVehiclesInFNFF() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Vehicles In FNFF</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Vehicles involve two elements. The first is control of the
							vehicle; the second is attacks and damage. Although a more
							realistic system is included in <em>Solo of Fortune</em>, this
							simple system will work for most cases.
						</p>
						<p>
							<strong>a) Making a Control Roll:</strong> To control a vehicle
							you must roll a combination of your
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="50%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													REF + DRIVING/PILOTING SKILL+1D10+ MODIFIERS
												</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							equal to or greater than a specific control number. The control
							number is determined by the difficulty of the maneuver you want to
							perform.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="85%">
									<tbody>
										<tr>
											<td valign="top">
												<strong>Simple</strong> (swerve, take off or land,
												hover, rotate)
											</td>
											<td valign="top">15</td>
										</tr>
										<tr>
											<td valign="top">
												<strong>Difficult</strong> (tight turn, control a skid,
												recover from a stall, emergency stop, pull out of dive,
												reverse or pull away)
											</td>
											<td valign="top">20</td>
										</tr>
										<tr>
											<td valign="top">
												<strong>Very Difficult</strong> (bootlegger turn, regain
												control from spin)
											</td>
											<td valign="top">25</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>b) When making your roll:</strong> you must add any and
							all modifiers that apply to the situation to your final Control
							Roll. There are modifiers for both vehicles and speed of travel:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>CONTROL MODIFIERS</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Standard car</td>
											<td width="50%">-0</td>
										</tr>
										<tr>
											<td width="50%">Limousine</td>
											<td width="50%">-3</td>
										</tr>
										<tr>
											<td width="50%">Sportscar</td>
											<td width="50%">+2</td>
										</tr>
										<tr>
											<td width="50%">AV-4</td>
											<td width="50%">-2</td>
										</tr>
										<tr>
											<td width="50%">AV-6</td>
											<td width="50%">+2</td>
										</tr>
										<tr>
											<td width="50%">AV-7</td>
											<td width="50%">+1</td>
										</tr>
										<tr>
											<td width="50%">Motorcycle</td>
											<td width="50%">+1</td>
										</tr>
										<tr>
											<td width="50%">Truck</td>
											<td width="50%">-4</td>
										</tr>
										<tr>
											<td>Rotorcraft</td>
											<td>-0</td>
										</tr>
										<tr>
											<td>Osprey</td>
											<td>-0</td>
										</tr>
										<tr>
											<td>Boat</td>
											<td>-1</td>
										</tr>
										<tr>
											<td>Double safe speed</td>
											<td>-2</td>
										</tr>
										<tr>
											<td>Triple safe speed</td>
											<td>-4</td>
										</tr>
										<tr>
											<td>Four times safe speed</td>
											<td>-6</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							On a failed roll, roll 1D6 and consult the
							<em>Control Loss Table</em> below:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td valign="top" colSpan={2} width="100%">
												<strong>CONTROL LOSS TABLE</strong>
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												Roll
											</td>
											<td valign="top" width="50%">
												Result
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												1-2
											</td>
											<td valign="top" width="50%">
												Skid or slew; no other result.
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												3-4
											</td>
											<td valign="top" width="50%">
												Major skid; slide 1D10x10 feet sideways in direction of
												travel. Aircraft stalls, losing 1D10x50 feet of
												altitude.
											</td>
										</tr>
										<tr>
											<td valign="top" width="50%">
												5-6
											</td>
											<td valign="top" width="50%">
												Roll ground vehicle after sliding 1D10x10 feet sideways
												in direction of travel; take 5D6 damage. Aircraft goes
												into spin, lose 1D10x100 feet of altitude.
											</td>
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
