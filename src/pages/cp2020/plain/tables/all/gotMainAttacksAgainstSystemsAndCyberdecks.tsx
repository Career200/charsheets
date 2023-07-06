export default function gotMainAttacksAgainstSystemsAndCyberdecks() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Attacks Against Systems and Cyberdecks</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Some programs are designed to attack, only systems and cyberdecks.
							They operate by penetrating the data walls that protect the
							system, then running their attack programs. Anti System attacks
							include Intrusion and Anti-System Programs. These attacks are made
							with the formula:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													ATTACKING PROGRAM'S STR + 1D10 VS. CODE OR DATA WALL'S
													STRENGTH + 1D10
												</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							If the attacking program's roll is greater than the data wall's
							the wall is penetrated.
						</p>
						<p>
							Some <strong>Intrusion</strong> programs are "noisier" than
							others.
							<em>Hammer</em> will always alert the system to a break in,
							allowing it to send offensive programs to deal with the break.
							<em>Jackhammer</em> will alert the system on a roll of 8, 9 or 10
							on a 1D10 roll; this check is made after the program is run,
							whether the wall is breached or not. <em>Worm</em> will alert the
							system on a roll of 9 or 10 in a 1D10 roll.
						</p>
						<p>
							Anti-system attacks are also made against the data walls of the
							system. The formula is the same as with Intrusion attacks. If the
							Anti-system program's roll is greater than the data wall's, the
							wall is penetrated and the program takes effect in the next turn.
						</p>
						<p>
							For example, if a <em>Poison Flatline</em> breaks through a level
							5 data wall, in the next turn, one of the system or deck's
							memories will be erased each turn until the Flatline is stopped.
							This could be done with a Killer or other anti IC program.
						</p>
						<p>
							Decryption programs attack <em>Code gates</em> and
							<em>file locks</em>. Code gates are entryways into a computer
							system. File locks are often placed on files to protect them from
							entry. Decryption attacks are made as are other anti-system
							attacks.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
