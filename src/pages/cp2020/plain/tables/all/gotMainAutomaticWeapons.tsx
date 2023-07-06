export default function gotMainAutomaticWeapons() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Automatic Weapons</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							There are three ways to use automatic weapons. The
							<strong>three round burst</strong> is used to put multiple shots
							on a single target at any range. <strong>Full Auto</strong> is
							used to deliver a lot of bullets at close range to one or more
							targets.
							<strong>Suppresslve fire</strong> is used to force an opponent to
							keep his head down or risk taking a slug. Each form has its own
							advantages and disadvantages in combat, and the smart street
							warrior knows when to use the right technique for the right job.
						</p>
						<p>
							<strong>Three Round Burst</strong>
						</p>
						<p>
							The <strong>three round burst</strong> is a setting used on most
							automatic weapons to conserve ammunition and improve accuracy. The
							three round burst gives you an automatic +3 to hit advantage at
							certain ranges. The attack is made as one action. If successful,
							roll 1D6/2 to see how many rounds actually hit the target. This
							technique may only be used against single targets.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="50%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													3 ROUND BURST = +3, CLOSE &amp; MEDIUM ONLY
												</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>Full Auto</strong>
						</p>
						<p>
							This attack is best used to cover a wide range of targets or to
							make sure a single target is dead, dead, dead. A weapon on full
							auto is a bucking bronco; hard to hold on a target more than a few
							meters away. Using a scope or taking aim is also impossible.
							Therefore, range is critical in the full auto technique.
						</p>
						<p>
							The <strong>full auto</strong> option is based on the rate of fire
							(ROF) of the weapon. If attacking more than one target, you must
							divide the ROF of the weapon by the total number of targets (round
							down), then roll for each target individually.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>FULL AUTO RULES</strong>
											</td>
										</tr>
										<tr>
											<td width="100%">At Close Range:</td>
										</tr>
										<tr>
											<td width="100%">
												For every 10 rounds fired at Close range, add 1 to your
												Attack Total.
											</td>
										</tr>
										<tr>
											<td width="100%">At Medium, Long and Extreme Ranges:</td>
										</tr>
										<tr>
											<td width="100%">
												For every 10 rounds fired at Medium, Long and Extreme
												ranges, subtract 1 from your Attack Total.
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							For every point of success over the required to Hit roll, one
							round hits the target, up to the maximum ROF for the weapon.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="50%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													NUMBER OF HITS = # POINTS &gt; THAN TO HIT NUMBER
												</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>Suppressive Fire</strong>
						</p>
						<p>
							<strong>Suppressive</strong> fire is used to cover an area (called
							a<strong>fire zone</strong>) with bullets, making the area
							hazardous to pass through. All targets entering or crossing the
							fire zone during this attack must make a "save" against taking a
							bullet by rolling their{' '}
							<strong>Athletics Sklll + REF + 1D10</strong> and beating a save
							number. A failed save means the target takes 1D6 rounds, each
							randomly located.
						</p>
						<p>
							This save number is determined by dividing the total number of
							bullets fired by the width of the fire zone.
						</p>
						<p>
							<em>
								Example: 64 rounds into a 2 meter area would require a save of
								32 or higher. 64 rounds into a 5 meter area would require a save
								of 12 or greater.
							</em>
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="50%">
									<tbody>
										<tr>
											<td width="100%">
												<strong>
													SAVE = NUMBER OF ROUNDS DIVIDED BY THE WIDTH OF THE
													FIRE ZONE IN METERS
												</strong>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							You may overlap the fire zones of more than one weapon, dividing
							the total number of shots to determine the save number. For
							example, two Uzis with an ROF of 32 would place 64 bullets into
							the fire zone.
						</p>
						<p>
							Two rules are immediately apparent with suppressive fire. First,
							it's only useful when you can fire a LOT of rounds into a small
							space. This means teams should coordinate their actions and fire
							at the same time, placing the maximum number of rounds into the
							fire zone. Also, the fire zone should be a tight as possible (the
							minimum width of a tire zone is two meters).
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
