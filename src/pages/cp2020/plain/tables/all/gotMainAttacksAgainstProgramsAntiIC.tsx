export default function gotMainAttacksAgainstProgramsAntiIC() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Attacks Against Programs (Anti-IC)</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							<strong>Protection programs</strong> are designed to ward off
							attacks on the Netrunner. On a successful defense roll, the
							attacking program is deflected and no damage is taken. For
							example, a successful defense with a Shield will stop a{' '}
							<em>Hellhound</em> from killing the Netrunner, but will have no
							effect on a Killer attacking a Netrunner's Liche. If the Hellhound
							is not eliminated, it will be able to attack again.
						</p>
						<p>
							<strong>Anti-IC programs</strong> are used to attack other
							programs (such as <em>Killers</em> attacking <em>Hellhounds</em>).
							When a successful attack is made, the defending program loses a
							certain number of Strength points based on the program type. If
							the defending program's Strength is reduced to 0, it is
							"de-rezzed" (destroyed).
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
