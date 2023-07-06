export default function gotMainFastFortressConstructionSystem() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Fast Fortress Construction System</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							You know they're gonna do it; sooner or later, your Cyberpunkers
							are gonna blast right past the system you carefully con-structed
							to waste them, and take some side trip to the outback of the Net.
							"What do we find there?" they'll say, as you look at your notes
							and groan.
						</p>
						<p>
							No problem. We gotcha covered. With a few fast rolls (and a
							judicious use of common sense; a system filled with office gossip
							files and ten Hellhounds is pretty bogus), you can be ready to
							tackle even the most wayward group.
						</p>
						<p>
							<strong>1)</strong> Roll 1D6 to
							<strong>determine number of CPUs</strong>. Remember; for each CPU,
							the system's INT increases by 3. Also, for every CPU, gain four
							spaces of memory, one Code Gate and one terminal.
						</p>
						<p>
							<strong>Note:</strong> If the INT of your system is 12 or greater,
							your system is an Artificial Intelligence (Al). To determine your
							AI's personality, roll 1D6 for each of the following tables:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2}>
												<strong>Personality</strong>
											</td>
										</tr>
										<tr>
											<td width="10%">1</td>
											<td>Friendly, curious</td>
										</tr>
										<tr>
											<td width="10%">2</td>
											<td>Hostile, paranoid</td>
										</tr>
										<tr>
											<td width="10%">3</td>
											<td>Stable, intelligent, businesslike</td>
										</tr>
										<tr>
											<td width="10%">4</td>
											<td>Intellectual, detached</td>
										</tr>
										<tr>
											<td width="10%">5</td>
											<td>Machinelike</td>
										</tr>
										<tr>
											<td width="10%">6</td>
											<td>Remote and godlike</td>
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
											<td colSpan={2} width="10%">
												<strong>Reaction to netrunner</strong>
											</td>
										</tr>
										<tr>
											<td width="10%">1-2</td>
											<td>Neutral</td>
										</tr>
										<tr>
											<td width="10%">3</td>
											<td>Kill all intruders</td>
										</tr>
										<tr>
											<td width="10%">4</td>
											<td>Observe intruders, then act</td>
										</tr>
										<tr>
											<td width="10%">5</td>
											<td>Report all intruders</td>
										</tr>
										<tr>
											<td width="10%">6</td>
											<td>Talk to intruder to find intent</td>
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
											<td colSpan={2} width="10%">
												<strong>ICON</strong>
											</td>
										</tr>
										<tr>
											<td width="10%">1</td>
											<td>Human</td>
										</tr>
										<tr>
											<td width="10%">2</td>
											<td>Geometric</td>
										</tr>
										<tr>
											<td width="10%">3</td>
											<td>Mythological</td>
										</tr>
										<tr>
											<td width="10%">4</td>
											<td>Voice only</td>
										</tr>
										<tr>
											<td width="10%">5</td>
											<td>Technic</td>
										</tr>
										<tr>
											<td width="10%">6</td>
											<td>"Humanoid"</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>2)</strong> <strong>Determine Data Wall Strength</strong>.
							Strength is equal to 1D6/2 plus the number of CPU in the system
							(round down). Example: LTRA 1500 has three CPU. I roll a 4. LTRA's
							Data Walls are Strength 2+3=5.
						</p>
						<p>
							<strong>3)</strong> <strong>Determine Code Gate Strength</strong>{' '}
							by rolling 1D6/2 + number of CPU for each one.
						</p>
						<p>
							<strong>4) Pick 5 skills</strong>. Roll 1D6+4 for level of skill
							in each one.
						</p>
						<p>
							<strong>5)</strong> Roll for <strong>types of files</strong>. For
							each memory, roll 2 times for type:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="10%">1</td>
											<td>Inter Office</td>
										</tr>
										<tr>
											<td width="10%">2</td>
											<td>Database</td>
										</tr>
										<tr>
											<td width="10%">3</td>
											<td>Business Records</td>
										</tr>
										<tr>
											<td width="10%">4</td>
											<td>Financial Transactions</td>
										</tr>
										<tr>
											<td width="10%">5</td>
											<td>Grey Ops</td>
										</tr>
										<tr>
											<td width="10%">6</td>
											<td>Black Ops</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>Place each file in a memory of your choice.</p>
						<p>
							<strong>6) Virtuals</strong>. Roll 1D6. On a 5 or 6, there is a
							virtual reality present. Roll another D6 for type:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="10%">1</td>
											<td>Virtual Conference</td>
										</tr>
										<tr>
											<td width="10%">2</td>
											<td>Virtual Office</td>
										</tr>
										<tr>
											<td width="10%">3</td>
											<td>Virtual Rec-Area</td>
										</tr>
										<tr>
											<td width="10%">4</td>
											<td>Virtual Building</td>
										</tr>
										<tr>
											<td width="10%">5</td>
											<td>Virtual City</td>
										</tr>
										<tr>
											<td width="10%">6</td>
											<td>Virtual World</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>Roll 1D6 for level of realism:</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="10%">1-2</td>
											<td>Simple</td>
										</tr>
										<tr>
											<td width="10%">3</td>
											<td>Contextual</td>
										</tr>
										<tr>
											<td width="10%">4</td>
											<td>Fractal</td>
										</tr>
										<tr>
											<td width="10%">5</td>
											<td>Photorealistic</td>
										</tr>
										<tr>
											<td width="10%">6</td>
											<td>Superrealistic</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>7) Determine Defenses</strong>. Roll 1D6 + number of CPU
							for total defenses. For each one, roll 1 D10 for type, then 1 D6
							for subtype;
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td valign="top" width="10%">
												1-4
											</td>
											<td valign="top" width="50%">
												<strong>Detection/Alarm</strong>
											</td>
										</tr>
										<tr>
											<td valign="top" width="10%">
												&nbsp;
											</td>
											<td valign="top" width="50%">
												<div>
													<center>
														<table
															border={0}
															cellPadding="0"
															cellSpacing="0"
															width="100%"
														>
															<tbody>
																<tr>
																	<td valign="top" width="10%">
																		1-2
																	</td>
																	<td valign="top">Watchdog</td>
																</tr>
																<tr>
																	<td valign="top" width="10%">
																		3-4
																	</td>
																	<td valign="top">Bloodhound</td>
																</tr>
																<tr>
																	<td valign="top" width="10%">
																		5-6
																	</td>
																	<td valign="top">Pit bull</td>
																</tr>
															</tbody>
														</table>
													</center>
												</div>
											</td>
										</tr>
										<tr>
											<td valign="top" width="10%">
												5-6
											</td>
											<td valign="top" width="50%">
												<strong>Anti-IC</strong>
											</td>
										</tr>
										<tr>
											<td valign="top" width="10%">
												&nbsp;
											</td>
											<td valign="top">
												<div>
													<center>
														<table
															border={0}
															cellPadding="0"
															cellSpacing="0"
															width="100%"
														>
															<tbody>
																<tr>
																	<td valign="top" width="10%">
																		1-2
																	</td>
																	<td valign="top">
																		Killer (roll 1D6 for Str.)
																	</td>
																</tr>
																<tr>
																	<td valign="top" width="10%">
																		3-4
																	</td>
																	<td valign="top">Manticore</td>
																</tr>
																<tr>
																	<td width="10%">5-6</td>
																	<td>Aardvark</td>
																</tr>
															</tbody>
														</table>
													</center>
												</div>
											</td>
										</tr>
										<tr>
											<td valign="top" width="10%">
												7-8
											</td>
											<td valign="top">
												<strong>Anti-System</strong>
											</td>
										</tr>
										<tr>
											<td valign="top" width="10%">
												&nbsp;
											</td>
											<td valign="top">
												<div>
													<center>
														<table
															border={0}
															cellPadding="0"
															cellSpacing="0"
															width="100%"
														>
															<tbody>
																<tr>
																	<td width="10%">1</td>
																	<td>Flatline</td>
																</tr>
																<tr>
																	<td width="10%">2</td>
																	<td>Poison Flatline</td>
																</tr>
																<tr>
																	<td width="10%">3</td>
																	<td>Krash</td>
																</tr>
																<tr>
																	<td width="10%">4</td>
																	<td>Viral 15</td>
																</tr>
																<tr>
																	<td width="10%">5</td>
																	<td>DecKrash</td>
																</tr>
																<tr>
																	<td width="10%">6</td>
																	<td>Murphy</td>
																</tr>
															</tbody>
														</table>
													</center>
												</div>
											</td>
										</tr>
										<tr>
											<td width="10%">9-10</td>
											<td>
												<strong>Anti-Personnel</strong>
											</td>
										</tr>
										<tr>
											<td width="10%">&nbsp;</td>
											<td>
												<div>
													<center>
														<table
															border={0}
															cellPadding="0"
															cellSpacing="0"
															width="100%"
														>
															<tbody>
																<tr>
																	<td width="10%">1</td>
																	<td>Stun</td>
																</tr>
																<tr>
																	<td width="10%">2</td>
																	<td>Hellbolt</td>
																</tr>
																<tr>
																	<td width="10%">3</td>
																	<td>Brainwipe</td>
																</tr>
																<tr>
																	<td width="10%">4</td>
																	<td>Knockout</td>
																</tr>
																<tr>
																	<td width="10%">5</td>
																	<td>Zombie</td>
																</tr>
																<tr>
																	<td width="10%">6</td>
																	<td>Hellhound</td>
																</tr>
															</tbody>
														</table>
													</center>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>8)</strong> Roll 1D6 for{' '}
							<strong>number of remotes</strong>. For each remote, roll ID 10
							for type:
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="10%">1</td>
											<td>Microphone</td>
										</tr>
										<tr>
											<td width="10%">2</td>
											<td>TV camera</td>
										</tr>
										<tr>
											<td width="10%">3</td>
											<td>Extra Terminal</td>
										</tr>
										<tr>
											<td width="10%">4</td>
											<td>Videoboard</td>
										</tr>
										<tr>
											<td width="10%">5</td>
											<td>Printer</td>
										</tr>
										<tr>
											<td width="10%">6</td>
											<td>Alarm</td>
										</tr>
										<tr>
											<td width="10%">7</td>
											<td>Remote vehicle or robot</td>
										</tr>
										<tr>
											<td width="10%">8</td>
											<td>Automatic door, gate</td>
										</tr>
										<tr>
											<td width="10%">9</td>
											<td>Elevator</td>
										</tr>
										<tr>
											<td width="10%">10</td>
											<td>Manipulator or Autofactory</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>9)</strong> Pick any one of the 6 possible layout of data
							walls below or create your own. Plug your parts and programs into
							place and get ready to rock!
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
