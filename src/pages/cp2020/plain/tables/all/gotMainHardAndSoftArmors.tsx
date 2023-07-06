export default function gotMainHardAndSoftArmors() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Hard and Soft Armors</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Body armors are divided up by whether or not the majority of their
							protection is based on rigid metals/ceramics/composites, or on
							softer, more flexible ballistic fabrics. This is done for layering
							purposes and for some weapon damage effects. The table below is
							arranged with heaviest protection at the top, lightest at bottom.
						</p>
						<p>
							<strong>HARD/SOFT ARMOR TABLE</strong>
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="80%">
									<tbody>
										<tr>
											<td width="50%">HARD ARMORS</td>
											<td width="50%">SOFT ARMORS</td>
										</tr>
										<tr>
											<td width="50%">Metal Gear</td>
											<td width="50%">Heavy Armor jacket</td>
										</tr>
										<tr>
											<td>Police riot armor</td>
											<td>Med. Armor jacket</td>
										</tr>
										<tr>
											<td>Door Gunner's vest</td>
											<td>Police patrol armor</td>
										</tr>
										<tr>
											<td>Steel helmet</td>
											<td>M-78 RPA jacket</td>
										</tr>
										<tr>
											<td>Hak vest/pants</td>
											<td>Light Armor jacket</td>
										</tr>
										<tr>
											<td>Ballistic Nylon helmet</td>
											<td>Kevlar T-shirt/vest</td>
										</tr>
										<tr>
											<td>M-78 RPA heavy vest</td>
											<td>M-78 RPA T-shirt</td>
										</tr>
										<tr>
											<td>Corp Mil body armor</td>
											<td>Heavy Leather</td>
										</tr>
										<tr>
											<td>C-Ballistic Light Mesh</td>
											<td>SkinTight armor padding</td>
										</tr>
										<tr>
											<td colSpan={2}>
												<em>
													A=Militech Revised Personal Amor, AP - defeating,
													CorpBook
												</em>
											</td>
										</tr>
										<tr>
											<td colSpan={2}>
												<em>
													2 C - BaIIistic Mesh, Skin Tight Padding - Interface
													vol 1, #1-2
												</em>
											</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>Mayering Armor:</strong> "What a concept", you think,
							shrugging into a bulletproof T-shirt, bulletproof vest and a
							Kevlar armor jacket. Theoretically, one should be able to layer
							protection upon itself until he becomes invulnerable.
						</p>
						<p>
							Prongo. First of all, let's look at reality. If the average cop
							could stack layers of armor on himself before tackling a domestic
							disorbance call, you can bet he'd do it. But doesn't, because it
							just isn't practical. Here's why.
						</p>
						<p>
							Then you layer flack jackets, you aren't invulnerable; you're just
							immobile. While modern armor isn't as heavy as old fashioned armor
							plate, it's very encumbering from the movement angle.Straps,
							buckles, padding and stiff plastic add up to restrict arm
							movement, chafe the torso, and weigh down the legs.
							Pillsbury-doughboy padded arms don't lift guns very well, and
							well-stuffed legs aren't much for bending, climbing and running.
						</p>
						<p>
							For this reason, every armor type in FNFF has an
							<em>encumbcrance value</em> (EV). When wearing body armor, add up
							the total of EV's (listed in the <em>Armor Table</em>), and
							subtract this from your character's REFLEX stat. Even if you're
							cybered up, a lot of armor is gonna cost you.
						</p>
						<p>
							<strong>New Armor Rules:</strong>
						</p>
						<p>
							These new rules (previously published in CP 2020 erratta sheets)
							have been added to clarify the armor question and deal with a
							reoccurring problem.
						</p>
						<p>
							<strong>New Rule 1: Maximum Armor</strong>
						</p>
						<p>
							Now, in addition to Encumberance Values, only a maximum of 3
							layers of Armor can be worn at any one time; no more than one of
							these layers can be Hard Armor (see Hard/Soft Armors Table). The
							2nd layer has an extra EV penalty of -1; the 3rd layer, an
							additional penalty of -2.
							<em>Subdermal Armor</em> and <em>Bodyplating</em> cyberware
							options are considered to be armor layers; <em>Skinweave</em> is
							considered a layer, but receives no penalty.
						</p>
						<p>
							<strong>New Rule 2: Proportional Armor</strong>
						</p>
						<p>
							When layering armor, or wearing armor behind an obstacle or cover,
							subtract the smaller SP from the larger one. Find the difference
							on the table below and read across to the other column. This is
							the bonus number you add to the larger SP to determine overall
							protection from the armor/armor, or armor/cover combination. If
							you have three or more layers of protection, calculate in pairs
							from the inside out (example: For armors A, B, C, you compare A
							and B; determine the bonus number, and then compare the new
							strength of the larger of the pair to armor C.)
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td colSpan={2} width="100%">
												<strong>PROPORTIONAL ARMOR TABLE</strong>
											</td>
										</tr>
										<tr>
											<td width="50%">Difference in SPs</td>
											<td width="50%">Bonus Number</td>
										</tr>
										<tr>
											<td width="50%">0-4</td>
											<td width="50%">+5</td>
										</tr>
										<tr>
											<td width="50%">5-8</td>
											<td width="50%">+4</td>
										</tr>
										<tr>
											<td width="50%">9-14</td>
											<td width="50%">+3</td>
										</tr>
										<tr>
											<td>15-20</td>
											<td>+2</td>
										</tr>
										<tr>
											<td>21-26</td>
											<td>+1</td>
										</tr>
										<tr>
											<td>27+</td>
											<td>+0</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							<strong>Armor Piercing Rounds</strong>
						</p>
						<p>
							There's another reason why armor isn't the universal cure for
							flying lead, and it's called <em>Armor Piercing</em> (AP) rounds.
							These are bullets designed to deliver their full impact to a
							single point, instead of mushrooming out like a normal bullet.
							They don't cause as much damage as a standard lead or hollow point
							round (1/2 normal damage), but they cut through armor like a hot
							knife through cheese. As a result, whenever AP rounds are
							encountered, armor will have one half it's total SP value.
						</p>
						<p>
							<em>
								For example, say a 5.56 AP round muses 30 points of damage. It
								hits SP 10 armor, which reduces it by 5 (10/2=5) The remaining
								25 points ore further reduced to 12 (25/2= 12.5, rounded down to
								12), based on an AP round's lower damage capacity.
							</em>
						</p>
						<p>
							The same is true of knives, swords and other edged weapons. Note
							that armors marked with a check (***) on the Armor Table are at
							half SP effectiveness against edged weapons.
						</p>
						<p>
							The smart solution in a combat situation is to rely on the
							lightest armor you think you can get away with unless you're
							planning to take on a stationary position or go up against very
							heavy firepower.
						</p>
						<p>
							<strong>Staged Penetration:</strong> Armor doesn't just keep
							absorbing damage indefinitely. One option is to use the concept of
							Staged Penetration. Each time the armor is struck by a pentrating
							attack (i.e., an attack that actually exceeds the armor's SP),
							it's SP is reduced by 1 point When the SP reaches 0, the armor
							will no longer stop damage.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
