export default function gotMainRoundsTurnOrder() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h2>THE BASICS</h2>
						<h3>Rounds &amp; Turn Order</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Combat in FNFF is divided up into rounds, each representing @3
							seconds. Every round, each player gets to do something. The order
							of the round is based on an initiative roll of 1D10 plus the
							players REF stat, with finest rolls moving first to lowest rolls
							moving last. Reflex boosts are added to this roll where
							applicable.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="50%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													INITIATIVE = ROLL 1D10+REF. HIGH ROLL FIRST.
												</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<em>
								Example: Players A, B and C all have REF stats of 10. A rolls a
								5, B rolls an 8, and C rolls a 2. Turn order will be B, then A,
								then C.
							</em>
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
