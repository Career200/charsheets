export default function gotMainFamilyBackground() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Family Background</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Who are you, and where did you come from? Everybody on the Street
							has a story a past they're trying to live with. What's yours?
						</p>
						<hr />
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2}>
												<a>
													<strong>FAMILY RANKING</strong>
												</a>
												<strong>
													<br />
													Choose or roll one:
												</strong>
											</td>
										</tr>
										<tr>
											<td>1</td>
											<td>Corporate Executive</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Corporate Manager</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Corporate Technician</td>
										</tr>
										<tr>
											<td>4</td>
											<td>Nomad Pack</td>
										</tr>
										<tr>
											<td>5</td>
											<td>Pirate Fleet</td>
										</tr>
										<tr>
											<td>6</td>
											<td>Gang Family</td>
										</tr>
										<tr>
											<td>7</td>
											<td>Crime Lord</td>
										</tr>
										<tr>
											<td>8</td>
											<td>Combat Zone Poor</td>
										</tr>
										<tr>
											<td>9</td>
											<td>Urban homeless</td>
										</tr>
										<tr>
											<td>10</td>
											<td>Arcology family</td>
										</tr>
										<tr>
											<td colSpan={2}>
												Go to{' '}
												<a href="#002">
													<strong>PARENTS</strong>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<hr />
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td valign="top" colSpan={2}>
												<a>
													<strong>PARENTS</strong>
												</a>
												<strong>
													<br />
													Choose or roll one:
												</strong>
											</td>
										</tr>
										<tr>
											<td valign="top">1-6</td>
											<td valign="top">
												Both parents are living. Go to
												<a href="#004">
													<strong>FAMILY STATUS</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">7-10</td>
											<td valign="top">
												Something has happened to one or both parents. Go to
												<a href="#003">
													<strong>SOMETHING HAPPEND TO YOUR PARENTS</strong>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<hr />
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2}>
												<a>
													<strong>SOMETHING HAPPED TO YOUR PARENTS</strong>
												</a>
												<strong>
													<br />
													Choose or roll one:
												</strong>
											</td>
										</tr>
										<tr>
											<td>1</td>
											<td>Your parent(s) died in warfare</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Your parent(s) died in an accident</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Your parent(s) were murdered</td>
										</tr>
										<tr>
											<td>4</td>
											<td>
												Your parent(s) have amnesia and don't remember you
											</td>
										</tr>
										<tr>
											<td>5</td>
											<td>You never knew your parent(s)</td>
										</tr>
										<tr>
											<td>6</td>
											<td>Your parent(s) are in hiding to protect you</td>
										</tr>
										<tr>
											<td>7</td>
											<td>You were left with relatives for safekeeping</td>
										</tr>
										<tr>
											<td>8</td>
											<td>You grew up on the Street and never had parents</td>
										</tr>
										<tr>
											<td>9</td>
											<td>Your parent(s) gave you up for adoption</td>
										</tr>
										<tr>
											<td>10</td>
											<td>Your parent(s) sold you for money</td>
										</tr>
										<tr>
											<td colSpan={2}>
												Go to{' '}
												<a href="#004">
													<strong>FAMILY STATUS</strong>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<hr />
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td valign="top" colSpan={2}>
												<a>
													<strong>FAMILY STATUS</strong>
												</a>
												<strong>
													<br />
													Choose or roll one:
												</strong>
											</td>
										</tr>
										<tr>
											<td valign="top">1-6</td>
											<td valign="top">
												Family status in danger, and you risk losing everything
												(if you haven't already). Go to
												<a href="#006">
													<strong>FAMILY TRGEDY</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">7-10</td>
											<td valign="top">
												Family status is OK, even if parents are missing or
												dead. Go to{' '}
												<a href="#005">
													<strong>CHILDHOOD ENVIRONMENT</strong>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<hr />
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2}>
												<a>
													<strong>CHILDHOOD ENVIRONMENT</strong>
												</a>
												<strong>
													<br />
													Choose or roll one:
												</strong>
											</td>
										</tr>
										<tr>
											<td>1</td>
											<td>Spent on the Street with no adult supervision</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Spent in a safe Corporate Suburbia</td>
										</tr>
										<tr>
											<td>3</td>
											<td>In a Nomad Pack moving from town to town</td>
										</tr>
										<tr>
											<td>4</td>
											<td>In a decaying, once upscale neighborhood</td>
										</tr>
										<tr>
											<td>5</td>
											<td>In a defended Corporate Zone in the central City</td>
										</tr>
										<tr>
											<td>6</td>
											<td>In the heart of the Combat Zone</td>
										</tr>
										<tr>
											<td>7</td>
											<td>In a small village or town far from the City</td>
										</tr>
										<tr>
											<td>8</td>
											<td>In a large arcology city</td>
										</tr>
										<tr>
											<td>9</td>
											<td>In a aquatic Pirate Pack</td>
										</tr>
										<tr>
											<td>10</td>
											<td>
												On a Corporate controlled Farm or Research Facility
											</td>
										</tr>
										<tr>
											<td colSpan={2}>
												Go to{' '}
												<a href="#007">
													<strong>SIBLINGS</strong>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<hr />
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td valign="top" colSpan={2}>
												<a>
													<strong>FAMILY TRAGEDY</strong>
												</a>
												<strong>
													<br />
													Choose or roll one:
												</strong>
											</td>
										</tr>
										<tr>
											<td valign="top">1</td>
											<td valign="top">
												Family lost everything through betrayal
											</td>
										</tr>
										<tr>
											<td valign="top">2</td>
											<td valign="top">
												Family lost everything through bad management
											</td>
										</tr>
										<tr>
											<td valign="top">3</td>
											<td valign="top">
												Family exiled or otherwise driven from their original
												home/nation/corporation
											</td>
										</tr>
										<tr>
											<td valign="top">4</td>
											<td valign="top">
												Family is imprisoned and you alone escaped
											</td>
										</tr>
										<tr>
											<td valign="top">5</td>
											<td valign="top">
												Family vanished. You are only remaining member
											</td>
										</tr>
										<tr>
											<td valign="top">6</td>
											<td valign="top">
												Family was murdered/killed and you were only survivor
											</td>
										</tr>
										<tr>
											<td valign="top">7</td>
											<td valign="top">
												Family is involved in longterm conspiracy, organization
												or association, such as a crime family or revolutionary
												group
											</td>
										</tr>
										<tr>
											<td valign="top">8</td>
											<td valign="top">
												Your family was scattered to the winds due to misfortune
											</td>
										</tr>
										<tr>
											<td valign="top">9</td>
											<td valign="top">
												Your family is cursed with a hereditary feud that has
												lasted for generation
											</td>
										</tr>
										<tr>
											<td valign="top">10</td>
											<td valign="top">
												You are the inheritor of a family debt; you must honor
												this debt before moving on with your life
											</td>
										</tr>
										<tr>
											<td valign="top" colSpan={2}>
												Go to
												<a href="#005">
													<strong>CHILDHOOD ENVIRONMENT</strong>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<hr />
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td valign="top" colSpan={2}>
												<a>
													<strong>SIBLINGS</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top" colSpan={2}>
												You may have up to 7 brothers/sisters. Roll 1D10. 1-7 is
												equal to the number of siblings you have. On 8-10, you
												are an only child. For each brother or sister:
											</td>
										</tr>
										<tr>
											<td valign="top" colSpan={2}>
												1) Roll 1D10. Even: the sibling is male. Odd: the
												sibling if female.
												<br />
												2) Roll age, relative to yourself
												<br />
												1-5 = older
												<br />
												6-9 = younger
												<br />
												10 = twin
												<br />
												For each sibling, choose or roll their feelings about
												you:
											</td>
										</tr>
										<tr>
											<td valign="top">1-2</td>
											<td valign="top">Sibling dislike you</td>
										</tr>
										<tr>
											<td valign="top">3-4</td>
											<td valign="top">Sibling likes you</td>
										</tr>
										<tr>
											<td valign="top">5-6</td>
											<td valign="top">Sibling neutral</td>
										</tr>
										<tr>
											<td valign="top">7-8</td>
											<td valign="top">They hero worship you</td>
										</tr>
										<tr>
											<td valign="top">9-10</td>
											<td valign="top">They are hate you</td>
										</tr>
										<tr>
											<td valign="top" colSpan={2}>
												Go to{' '}
												<a className="text-orange-400" href="#">
													<strong>MOTIVATIONS</strong>
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<br />
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
