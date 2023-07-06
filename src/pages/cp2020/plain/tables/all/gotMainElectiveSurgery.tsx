export default function gotMainElectiveSurgery() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Elective Surgery</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Not all medical care is the result of accidents or combat. This is
							the Metal Age, and when you want to get cybered up, you gotta pay
							a price in blood.
						</p>
						<p>
							If you're going to get wired with a cyber-limb, the first thing
							you'll have to decide is whether you want to keep the meat one.
							For 100eb a month, a Body Bank will store your old one until you
							decide to reclaim it, with only a 20% chance that someone will
							sell it for spare parts in the meantime. For 200eb a month, this
							drops to a 5% chance; not perfect, but better than nothing.
						</p>
						<p>
							Now you've ditched the old meat in the freezer, it's time to get
							cybered up. A Medical Tech skill is required to install cyberwear.
							You can't install cyberwear on yourself. Each type of cyberwear
							has a
							<a className="text-orange-400" href="#">
								<strong>Surgery Code</strong>
							</a>
							. This code represents the minimum level of medical care required
							to install the cyberwear, the length of surgical time required,
							the cost of the surgery, the damage taken in surgery and the
							Difficulty of the installation procedure. The Surgery Code assumes
							that a successful
							<a className="text-orange-400" href="#">
								<em>Medical Tech</em>
							</a>{' '}
							check has been made on the patient as part of the operation.
							Healing is then based on the number of points lost due to the
							surgery.
						</p>
						<p>
							<strong>Negligible.</strong>
						</p>
						<p>
							Required: Mall clinic or other drop-in bodyshop.
							<br />
							Surgical Time: 1 hr.
							<br />
							Surgical Damage: 1 point Surgical costs: Included with
							installation.
							<br />
							DIFF = Easy (10)
						</p>
						<p>
							<strong>Minor.</strong>
						</p>
						<p>
							Required: Medical center or ripperdoc clinic.
							<br />
							Surgical Time: 2 hrs.
							<br />
							Surgical Damage: 1D6+1 Surgical costs: 500eb
							<br />
							DIFF = Simple(15)
						</p>
						<p>
							<strong>MAjor.</strong>
						</p>
						<p>
							Required: Full hospital with surgery center.
							<br />
							Surgical Time: 4 hrs.
							<br />
							Surgical Damage: 2D6+1
							<br />
							Surgical costs: 1,500eb
							<br />
							DIFF = Trained (20)
						</p>
						<p>
							<strong>CRitical.</strong>
						</p>
						<p>
							Required: Full hospital with surgery center.
							<br />
							Surgical Time: 6 hrs.
							<br />
							Surgical Damage: 3D6+1
							<br />
							Surgical costs: 2,500eb
							<br />
							DIFF = Difficult (25)
						</p>
						<p>
							<em>
								Example: Morgan Blackshadow decides to get a cyberarm installed.
								The surgery code is Critical (CR). Morgan takes 11 points in
								surgical damage (Wound State = Critical). The surgery is
								Difficult (25), requires a hospital, takes six hours and costs
								2,500eb. It will take Morgan 11 days to recover fully, but he
								can be bock on the street in a week (operating at a Light Wound
								State).
							</em>
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
