export default function gotMainDeckOptions() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Deck Options</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							In addition to your basic models, any type of deck can be enhanced
							by adding a few options.
						</p>
						<p>
							<strong>Trode sets</strong> are self-sticking electrodes that
							allow you to run the Net without plugs. Trodes are slower than
							plugs (-2 to REF when in the Net), but have no humanity loss. They
							are commonly used by novice runners and by "tourists" visiting the
							Net on a lark.
						</p>
						<p>
							<strong>Keyboards</strong> are an option which allow a Netrunner
							to control a deck indirectly. They are abysmally slow (-4 to REF),
							but are immune to all anti-personnel attacks except{' '}
							<em>Firestarter</em>.
						</p>
						<p>
							<strong>Videoboards</strong> are flat screen, high definition TV
							monitors which can be used to show a Net's-eye view to outsiders.
						</p>
						<p>
							<strong>Printers</strong> allow you to make hardcopy images and
							records from your deck. Most are small laser-printers about the
							size of a large book, using plain paper.
						</p>
						<p>
							<strong>Chipreader/recorders</strong> use standard data chips
							(10eb each) to store programs, images and other useful things from
							your deck. They are about the size of a pack of cigarettes.
						</p>
						<p>
							<strong>VoxBoxes</strong> are small speaker units that can
							synthesize sound from a deck. They can also be used by the
							Netrunner to talk to outsiders while he's in the Net. About the
							size of a pack of smokes.
						</p>
						<p>
							<strong>Scanners</strong> are flat plastic plates with optical
							character reading and image recording capacity. They range from
							the size of a sheet of paper, all the way up to a meter on a side.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">
												<strong>Option</strong>
											</td>
											<td width="50%">
												<strong>Cost</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Trode set</td>
											<td width="50%">10eb</td>
										</tr>
										<tr>
											<td width="50%">Keyboard</td>
											<td width="50%">100eb</td>
										</tr>
										<tr>
											<td width="50%">Videoboard</td>
											<td width="50%">100eb per sq. ft.</td>
										</tr>
										<tr>
											<td width="50%">Printer</td>
											<td width="50%">300eb</td>
										</tr>
										<tr>
											<td width="50%">Chipreader</td>
											<td width="50%">100eb</td>
										</tr>
										<tr>
											<td>Extra Chips</td>
											<td>10eb/ea</td>
										</tr>
										<tr>
											<td>Vox Box</td>
											<td>300eb</td>
										</tr>
										<tr>
											<td>Scanner</td>
											<td>100-300eb</td>
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
