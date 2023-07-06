export default function gotMainRoundsActions() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Rounds &amp; Actions</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							A Netrunner combat round is one second long. During this time, a
							Netrunner can take one action (unlike a normal combat round, in
							which a character has three full seconds to cram in a lot of
							actions). This action can be anything listed on the Menu in
							addition to movement For example. Edger elects in his combat round
							to move five spaces away from the <em>Hellhound</em> and RUN a
							program (in this case, a<em>Killer</em>) to attack his enemy.
						</p>
						<p>
							Computers, of course, are a lot faster than humans. Single-CPU
							systems perform only one action per turn.
							<strong>
								A computer may perform one extra action per turn for every two
								additional CPU present in the system.
							</strong>
							A really powerful computer could activate two, three, four or more
							programs to attack a single Netrunner.
						</p>
						<p>This is why Netrunners team up to tackle big systems.</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
