export default function gotMainHumanityCosts() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Humanity Costs</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							<em>So how does all this apply to me?</em>
						</p>
						<p>
							Simple. Each time you add on a cybernetic enhancement, there's a
							corresponding loss of humanity. But it's not simple, linear, or
							nice. Different people react differently to the cyborging process.
							Therefore, your Humanity Cost is based on the throw of a random
							dice value for each enhancement. This is important, because it
							means that sheer bad luck could put you over the line before you
							know it.
						</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="70%">
									<tbody>
										<tr>
											<td width="50%">Very Low</td>
											<td width="50%">1D6/2</td>
										</tr>
										<tr>
											<td width="50%">Low</td>
											<td width="50%">1D6</td>
										</tr>
										<tr>
											<td width="50%">Medium</td>
											<td width="50%">2D6</td>
										</tr>
										<tr>
											<td width="50%">High</td>
											<td width="50%">3D6</td>
										</tr>
										<tr>
											<td width="50%">Very High</td>
											<td width="50%">4D6</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>
							Remember: you must keep track of the cumulative number of points
							lost. Those little .5's and 1's are going to start adding up
							fast...
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
