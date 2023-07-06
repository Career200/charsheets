export default function gotMainCharacterPoints() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3 align="left">Character Points</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Character points are the cash of character creation - you use them
							to "buy" the various "mechanics" aspects of the character, like
							good looks, a strong, hard body, unshakable cool and street smarts
							(but not Skills). We've given you three ways to generate Character
							Points:
						</p>
						<blockquote>
							<p>
								1) <strong>Random</strong>: Roll 9D10 and total them. You have
								this many Character Points.
							</p>
							<p>
								2) <strong>Fast:</strong> Roll 1D10 for each stat (9 in all),
								rerolling scores of 2 or less. Place rolls in each stat as
								desired.
							</p>
							<p>
								3) <strong>Cinematic:</strong> This option is for Referees only.
								As the designer of the adventure, the Referee has the option of
								choosing the number of points for each character based on its
								position in his or her game.
							</p>
						</blockquote>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">Major Hero</td>
											<td align="right" width="50%">
												80pts
											</td>
										</tr>
										<tr>
											<td width="50%">Major Supporting Char</td>
											<td align="right" width="50%">
												70pts
											</td>
										</tr>
										<tr>
											<td width="50%">Minor Hero</td>
											<td align="right" width="50%">
												75pts
											</td>
										</tr>
										<tr>
											<td width="50%">Minor Supporting Char</td>
											<td align="right" width="50%">
												60pts
											</td>
										</tr>
										<tr>
											<td width="50%">Average</td>
											<td align="right" width="50%">
												50pts
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>Note:</strong> We could, at this point, warn prospective
							Referee about the various dodges their players will have for
							creating "supercharacters". But face it; if they want to create a
							mondo character, who are we to stop them? You'll all big boys and
							girls now, and if you, as Referee, think your players are getting
							way outa line, why not just go ahead and waste'em?
						</p>
						<p>
							That's the <em>Cyberpunk</em> way.
						</p>
					</td>
				</tr>
				<tr>
					<td>
						<a className="text-orange-400" href="#"></a>
						<a className="text-orange-400" href="#"></a>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
