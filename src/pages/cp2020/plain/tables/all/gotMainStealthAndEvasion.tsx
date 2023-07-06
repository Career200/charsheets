export default function gotMainStealthAndEvasion() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Stealth and Evasion</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Like you, a program can attack anything it can see. As programs
							have no "front" or "back" facing (what's the front of a string of
							code?), this means they can see you coming in any direction, all
							the time.
						</p>
						<p>
							Well, maybe. This is where stealth and evasion come in. When you
							are running a Stealth or Invisibility-type program, the opposition
							has to make a special roll to see if it is aware of you:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													ATTACKING PROGRAM'S STR +1070 VS. YOUR PROGRAM'S STR +
													1D10
												</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>Detection</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							The other side of Stealth and Evasion is detecting the unseen. To
							use a Detection program, the Netrunner must make a roll exactly as
							when using a Stealth/Evasion program above. Note that Netrunners
							can use Detection programs against the Stealth programs of other
							runners and vice versa.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
