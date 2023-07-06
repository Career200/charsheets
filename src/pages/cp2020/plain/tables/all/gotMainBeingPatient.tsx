export default function gotMainBeingPatient() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Being Patient</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							The first thing to remember is that after a
							<a className="text-orange-400" href="#">
								First Aid
							</a>{' '}
							or
							<a className="text-orange-400" href="#">
								Medical Tech
							</a>{' '}
							roll is made, the patient
							<em>still</em> has to actually recover (this isn't a fantasy game
							where a magician can lay on hands and the gunshot victim springs
							up ready to tackle the next challenge). Each Wound State imposes
							certain limits on the character:
						</p>
						<p>
							<strong>Light Wound:</strong> The patient is fully ambulatory; he
							can go about his business with a minor amount of pain.
						</p>
						<p>
							<strong>Serious Wound:</strong> The patient is ambulatory, but
							will need his dressings changed once a day, and will be at -2 REF
							for all actions.
						</p>
						<p>
							<strong>Critical Wound:</strong> The patient must spend at least
							half of his day in bed in order to regain any lost points of
							damage. Other activities must be limited at simple tasks, at a -4
							REF to all actions. Dressings must be changed twice a day, and
							nursing care of some sort must be available.
						</p>
						<p>
							<strong>Mortal Wound:</strong> The patient is bedridden. At Mortal
							Wounds 3 and above, he is probably comatose (50%) most of the
							time, and wired into all kinds of machinery for life support. He
							requires constant care during the entire process, although he will
							not have to make Death Saves (he's been stabilized).
						</p>
						<p>
							<strong>A Sample Medical History</strong>
						</p>
						<p>
							Ripperjack takes a gunshot wound (25 points total) to the gut,
							reducing him to Mortal 3. His partner has a high
							<em>First Aid</em> skill and makes a <em>Stabilization</em> roll
							to save him. So far, so good.
						</p>
						<p>
							As soon as Ripperjack is stabilized, his partner calls in the
							Trauma Team. Four minutes later, the AV-4 touches down. The Trauma
							Team Medic makes a <em>Medical Tech</em> check on Ripperjack. The
							roll is successful. The Team takes 'Jack to Night City General
							Hospital and checks him into Emergency.
						</p>
						<p>
							As a Mortal 3 patient, it will take Ripperjack 13 days to recover
							enough to reach a Critical Wound state. During this time, he will
							be in a hospital bed, wired to life support, and out of it on
							drugs (when he reaches Mortal 2, the doctors can take him off the
							drugs and life support). At Critical, Ripperjack is able to hobble
							around the ward for a couple hours at a stretch, while the nurses
							look after him. In 4 more days, he's able to leave the hospital as
							long as he gets his dressings changed once a day. In 4 more days,
							he's nearly up to full function. It's taken him 21 days to get
							back on the Street. Now he can start earning enough money to pay
							off his medical bills.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
