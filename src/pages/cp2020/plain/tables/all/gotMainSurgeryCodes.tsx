export default function gotMainSurgeryCodes() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Surgery Codes</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Each type of cyberwear has a Surgery Code. This code represents
							the minimum level of medical care required to install the
							cyberwear, the length of surgical time required, the cost of the
							surgery, the damage taken in surgery and the Difficulty of the
							installation procedure.
						</p>
						<p>
							<strong>Negligible</strong>
							<br />
							Required: Mall clinic or other drop-in bodyshop.
							<br />
							Surgical Time: 1 hr.
							<br />
							Surgical Damage: 1 point
							<br />
							Surgical Costs: Included with installation.
							<br />
							DIFF = Easy (10)
						</p>
						<p>
							<strong>Minor</strong>
							<br />
							Required: Medical center or Ripperdoc clinic.
							<br />
							Surgical Time: 2hrs.
							<br />
							Surgical Damage: 1D6+1
							<br />
							Surgical Costs: 500eb
							<br />
							DIFF = Simple (15).
						</p>
						<p>
							<strong>MAjor</strong>
							<br />
							Required: Full hospital with surgery center.
							<br />
							Surgical Time: 4 hrs.
							<br />
							Surgical Damage: 2D6+1
							<br />
							Surgical Costs: 1,500eb
							<br />
							DIFF = Trained (20)
						</p>
						<p>
							<strong>CRitical</strong>
							<br />
							Required: Full hospital surgery center.
							<br />
							Surgical Time: 6 hrs.
							<br />
							Surgical Damage: 3D6+1
							<br />
							Surgical Costs: 2,500eb
							<br />
							DIFF = Difficult (25)
						</p>
						<p>
							For more on healing times and surgery and other information, see
							the
							<a className="text-orange-400" href="#">
								<em>Trauma Team</em>
							</a>{' '}
							section.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
