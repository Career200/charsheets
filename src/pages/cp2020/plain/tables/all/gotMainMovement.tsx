export default function gotMainMovement() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Movement</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							As discussed before, Netrunners move at a speed of five spaces per
							round. But how fast do programs move, if ever?
						</p>
						<p>
							Most programs are limited to staying within the confines of a
							system. However, once they spot you, they can move anywhere within
							the system to intercept, also moving at a speed of five spaces per
							round. A program can pursue a Netrunner anywhere within it's home
							system, and up to one space outside of it. It will then break off
							the attack and go back to it's original position.
						</p>
						<p>
							<em>Hellhounds</em>, <em>Bloodhounds</em> and <em>Pit Bulls</em>{' '}
							have no such restrictions; they are designed with a tracing
							function that allows them to move away from their home system and
							follow you anywhere. The only way to ditch one of these monsters
							is to jack out and hope the pursuer isn't able to make a
							successful
							<strong>Trace roll</strong> on you. Otherwise, it'll be waiting
							the next time you log on in that location of the Net.
						</p>
						<p>
							<strong>Trace Rolls:</strong> A Trace roll is made by comparing
							the program's STRENGTH + 1D10 to the total of all the Trace Values
							of all the LDLs you passed through during your run.
						</p>
						<p>
							<em>
								Example: Spider's most recent run has taken her through Salt
								Lake (1), Denver (2), New Orleans (3), Havana (3). Bogota (4)
								and Rio (2). In Rio, she encounters a Hellhound (Strength 6)
								which attacks her outside of the Petrochem's new Data Fortress.
								Spider jacks out, and the Hellhound tries to run a trace back to
								her original position. It must beat a total of fifteen
								(1+2+3+3+4+2=15) in order. to make a successful trace. That
								Hellhound better roll a 9 or 10, or it's going to be out in the
								cold.
							</em>
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
