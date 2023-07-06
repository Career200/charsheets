export default function gotMainTracing() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Tracing</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							There's another reason to pick your LDLs carefully. Besides having
							a Security Level, each LDL also has a <strong>Trace Value</strong>
							. The trace value represents the difficulty of tracking your
							cybersignal through that particular LDL. Each LDL you pass through
							has it's own Trace Value; the total value of all LDLs passed
							through in a Net run represents the Difficulty of tracing your
							signal back to it's source. By picking the right LDLs, or by going
							through a lot of them, you can make it nearly impossible to trace
							your point of origin.
						</p>
						<p>
							This is important, particularly if you are being attacked by a
							program with some type of tracing function built into it. For
							example, if a<em>Hellhound</em> fails to nail you before you jack
							out, it must attempt to trace your signal in order to execute it's
							backup program (find out where the Netrunner entered the Net and
							wait till he reenters - then kill him).
						</p>
						<p>
							To trace you, the program must roll a 1D10 + Strength value equal
							to or greater than the total of all the Trace Values you have
							passed through on your trip. If the program fails this roll, it
							will not be able to get a trace on your signal.
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
