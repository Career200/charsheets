export default function gotMainCityGrids() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>City Grids</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Once you hit your target city, it's time to move to the City Grid
							map. This is an overall map of the city; much like a Realspace
							map, the City Grid Map shows the locations of important places in
							the city -in this case, important systems and Data Fortresses. You
							enter the City Grid map through the LDL ICON on the map, then move
							at five spaces per turn to where your target system is located.
						</p>
						<p>
							We've given you a sample City Grid based on Night City. As a
							Referee, you'll want to construct your own City Grids; there's a
							blank map for this purpose as well. If you have a really large
							city, you may want to use several City Maps placed end to end.
						</p>
						<p>
							Each Data Fortress on the City Grid has an identifying ICON on the
							City Grid Map. These ICONS are coded by the level of security the
							system is known to have.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="5" width="80%">
									<tbody>
										<tr>
											<td valign="top">
												<strong>Grey Systems:</strong>
											</td>
											<td valign="top" rowSpan={2}>
												These systems utilize only Alarm and Detection programs.
												They include most City governments, Universities and
												small private businesses.
											</td>
										</tr>
										<tr>
											<td valign="top"></td>
										</tr>
										<tr>
											<td valign="top">
												<strong>Level 1:</strong>
											</td>
											<td valign="top" rowSpan={2}>
												These systems include small corporations, police
												services and large private businesses. Anti-IC programs
												are used in these systems, as well as Detection and
												Alarm programs.
											</td>
										</tr>
										<tr>
											<td valign="top"></td>
										</tr>
										<tr>
											<td valign="top">
												<strong>Level 2:</strong>
											</td>
											<td valign="top" rowSpan={2}>
												Anti-IC and anti system programs are used here. These
												systems include medium sized corporations and very large
												private businesses.
											</td>
										</tr>
										<tr>
											<td valign="top"></td>
										</tr>
										<tr>
											<td valign="top">
												<strong>Level 3:</strong>
											</td>
											<td valign="top" rowSpan={2}>
												These systems use non-fatal anti-personnel programs.
												Level three systems are usually operated by large
												corporations, state governments and other moderately
												powerful groups. These people don't want you in their
												systems, but they don't have the clout to waste you out
												of hand. They'll just hurt you and hand you over to
												NETWATCH.
											</td>
										</tr>
										<tr>
											<td valign="top"></td>
										</tr>
										<tr>
											<td valign="top">
												<strong>Black Systems:</strong>
											</td>
											<td valign="top" rowSpan={2}>
												These fortresses use fatal and non-fatal anti-personnel
												software. Black systems include multinational
												corporations and government agencies like the CIA. They
												know you have no business being in their system, and
												they don't care what your lawyers think about them.
												They're willing to bury both you and the ACLU in the
												landfill, and have the clout to do it.
											</td>
										</tr>
										<tr>
											<td valign="top"></td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
