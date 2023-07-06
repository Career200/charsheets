export default function gotMainLinearFrames() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Linear Frames</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							Linear frames are the 2020 version of the exoskeleton. An
							exoskeleton is basically a metal framework with synthetic muscles
							for movement; you sit in the exoskeleton and steer while it does
							the work. Early exoskeletons were rarely used for anything
							important; clumsy and hard to control, hapless operators often
							tossed half-ton cargo modules through walls and ripped loading
							doors off hinges. It was not until the advanced bio-feedback
							systems of the 2000's that the more practical linear frame could
							be developed.
						</p>
						<p>
							A linear frame resembles a suit of contoured metal body armor. The
							frame is grafted onto your body, while its systems are directly
							neurolinked to your muscles and bones. Linear frames are designed
							to take over a <em>percentage</em> of the load, while leaving you
							enough "work" to allow you to gauge how much you're lifting and
							maintain control of the weight.
						</p>
						<p>
							For example, if you exert enough force to lift ten pounds, the
							linear frame provides no more power than would be required to move
							its own bulk. If you lift a hundred pounds, the linear frame
							splits the difference, lifting 20% of this mass so that you lift
							80 Ibs. If you lift 500 pounds, the linear frame takes 80% (400
							Ibs), leaving you to lift 100 Ibs. At the top end of the scale
							(almost 1800 Ibs for Linear Omega), the frame lifts 90% of the
							weight, while you only lift about 180 lbs.
						</p>
						<p>
							But hey, you didn't come here for a physics lesson, right? You
							wanna know how much you can pick up and throw around.
						</p>
						<p>
							Linear frames come in three <strong>strengths</strong>. When using
							the linear frame, you will use its strength value instead of your
							normal Body Type value for any lifting, bending, carrying or
							breaking task. Remember; for all their advanced construction,
							implanted linear frames are still quite heavy (50-100 kg) and
							bulky. You can't swim in them, and they have a -1 penalty to your
							REF. But if you want to toss a car out of the way, they're just
							the ticket. All linear frames lift 50x their Strength value.
							(Example: Sigma can dead lift 600 kg.).
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td>
												<strong>Frame</strong>
											</td>
											<td>
												<strong>Strength</strong>
											</td>
											<td>
												<strong>Damage Modifiers</strong>
											</td>
										</tr>
										<tr>
											<td>Linear Sigma</td>
											<td>12</td>
											<td>+4</td>
										</tr>
										<tr>
											<td width="33%">Linear Beta</td>
											<td width="33%">14</td>
											<td width="34%">+6</td>
										</tr>
										<tr>
											<td width="33%">Linear Omega</td>
											<td width="33%">16</td>
											<td width="34%">+8</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>-</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
