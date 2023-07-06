export default function gotStatsKnowLanguage() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Know Language</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<br />
						<p>
							The knowledge of foreign tongue. At +2, you can "get by" with
							speaking the language. At +3, you can actually read a written from
							of it. At +6 and above, you are fairly fluent, although no naive
							will be fooled by your ability. At +8 and above, you speak and
							read language like a native.
						</p>
						<p>
							Each language known requires a separate Know <em>Language</em>{' '}
							Skill, however, one may use the knowledge of a particular Language
							with up to ? (round down) proficiency with any language in the
							same linguistic family (example: knowing Cantonese at +4 will give
							you the ability to understand and speak Mandarin at +2).
						</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
