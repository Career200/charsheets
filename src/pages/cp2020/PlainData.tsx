export default function PlainData() {
	return (
		<div className="bg-gray-900 p-12 pt-4">
			<h2 id="stats">Stats</h2>
			<div className="  flex flex-row justify-center items-center gap-8 lg:gap-0 flex-wrap lg:items-start">
				<div className="stat lg:w-1/2 xl:w-1/3   min-w-1/3 min-h-1/3">
					<h3 className="my-4 text-2xl text-terminal-500 font-bold">
						Intelligence (INT)
					</h3>
					<p className="text-lg">
						This is a measure of your problem solving ability; figuring out
						problems, noticing things, remembering information. Almost every
						character type will need a high Intelligence, with Netrunners and
						Corporates requiring the highest of all
					</p>
					<h5 className="ml-4 text-xl font-semibold">related skills:</h5>
					<ul className="mt-2 list-disc">
						<li>Accounting</li>
						<li>Anthropology</li>
						<li>Awareness/Notice</li>
						<li>Biology</li>
						<li>Botany</li>
						<li>Chemistry</li>
						<li>Composition</li>
						<li>Diagnose illness</li>
						<li>Education &amp; General knowledge</li>
						<li>Expert ___</li>
						<li>Gamble</li>
						<li>Geology</li>
						<li>Hide/Evade</li>
						<li>History</li>
						<li>Languages ___</li>
						<li>Library Search</li>
						<li>Mathematics</li>
						<li>Physics</li>
						<li>Programming</li>
						<li>Shadow/Track</li>
						<li>Stock market</li>
						<li>System knowledge</li>
						<li>Teaching</li>
						<li>Wilderness Survival</li>
						<li>Zoology</li>
					</ul>
				</div>
				<div className="stat lg:w-1/2 xl:w-1/3   min-w-1/3 min-h-1/3">
					<h3 className="my-4 text-2xl text-terminal-500 font-bold">
						Reflexes (REF)
					</h3>
					<p className="text-lg">
						This is a combined index, covering not only your basic dexterity,
						but also how your level of physical coordination will affect feats
						of driving, piloting, fighting and athletics. Characters who intend
						to engage in a great deal of combat (such as Solos, Nomads or
						Rockerboys) should always invest in the highest possible Reflex
					</p>
					<h5 className="ml-4 text-xl font-semibold">related skills:</h5>
					<ul className="mt-2 list-disc">
						<li>Archery</li>
						<li>Athletics</li>
						<li>Brawling</li>
						<li>Dance</li>
						<li>Dodge &amp; Escape</li>
						<li>Driving</li>
						<li>Fencing</li>
						<li>Handgun</li>
						<li>Heavy weapons</li>
						<li>Martial arts ___</li>
						<li>Melee</li>
						<li>Motorcycle</li>
						<li>Operate Heavy Machinery</li>
						<li>Pilot (Gyro) </li>
						<li>Pilot (Fixed wing)</li>
						<li>Pilot (Dirigible)</li>
						<li>Pilot (Vector Thrust Vehicle)</li>
						<li>Rifle</li>
						<li>Stealth</li>
						<li>Submachinegun</li>
					</ul>
				</div>
				<div className="stat lg:w-1/2 xl:w-1/3   min-w-1/3 min-h-1/3">
					<h3 className="my-4 text-2xl text-terminal-500 font-bold">
						Cool (CL)
					</h3>
					<p className="text-lg">
						This index measures how well the character stands up to stress,
						feaer, pressure, physical pain and/or torture. In determining your
						willingness to fight on despite wounds or your fighting ability
						under fire, Cool (CL) is essential. It is also the measure of how
						&quot;together&quot; your character is and how tough he appears to
						others. Rockerboys and Fixers should always have a high Cool, with
						Solos and Nomads having the higtest of all
					</p>
					<h5
						className="ml-4 text-xl font-semibold"
						id="related-skills-cool-will-"
					>
						related skills (COOL/WILL) :
					</h5>
					<ul className="mt-2 list-disc">
						<li>Interrogation</li>
						<li>Intimidate</li>
						<li>Oratory</li>
						<li>Resist Torture/Drugs</li>
						<li>Streetwise</li>
					</ul>
					<p className="text-lg">REPUTATION</p>
				</div>
				<div className="stat lg:w-1/2 xl:w-1/3   min-w-1/3 min-h-1/3">
					<h3 className="my-4 text-2xl text-terminal-500 font-bold">
						Technical Ability (TECH)
					</h3>
					<p className="text-lg">
						This is an index of how well you relate to hardware and other
						technically oriented things. In Cyberpunk, the ability to use and
						repair technology is of paramount importance - TECH will be the Stat
						used when fixing, repairing and attempting to use unfamiliar tech.
						While all characters should have a decent Tech Stat, potential
						Techies should always opt for the highest possible score in this
						area
					</p>
					<h5 className="ml-4 text-xl font-semibold">related skills:</h5>
					<ul className="mt-2 list-disc">
						<li>Aero Tech</li>
						<li>AV Tech</li>
						<li>Basic Tech</li>
						<li>Cryotank Operation</li>
						<li>Cyberdeck Design</li>
						<li>CyberTech</li>
						<li>Demolitions</li>
						<li>Disguise</li>
						<li>Electronics</li>
						<li>Electrical Security</li>
						<li>First Aid</li>
						<li>Forgery</li>
						<li>Gyro Tech</li>
						<li>Paint or Draw</li>
						<li>Photo &amp; Film</li>
						<li>Pharmaceuticals</li>
						<li>Pick Lock</li>
						<li>Pick Pocket</li>
						<li>Play Instrument</li>
						<li>Weaponsmith</li>
					</ul>
				</div>
				<div className="stat lg:w-1/2 xl:w-1/3   min-w-1/3 min-h-1/3">
					<h3 className="my-4 text-2xl text-terminal-500 font-bold">
						Luck (LK)
					</h3>
					<p className="text-lg">
						This is the intangible &quot;something&quot; that throws the balance
						of events into your favor. Your luck represents how many points you
						may use each game to influence the outcome of a critical event. To
						use Luck, you may add any or all of the points of luck (declaring
						your intention to use Luck before the roll is made) untilall of your
						Luck stat is used up. Luck is always restored at the end of each
						game session.
					</p>
				</div>
				<div className="stat lg:w-1/2 xl:w-1/3   min-w-1/3 min-h-1/3">
					<h3 className="my-4 text-2xl text-terminal-500 font-bold">
						Attractiveness (ATT)
					</h3>
					<p className="text-lg">
						This is how good-looking you are. In Cyberpunk, it&#39;s not enough
						to be good - you have to look good while you&#39;re doing it
						(Attitude is Everything). Attractiveness is especially important to
						Medias and Rockerboys, as being good-looking is part of their jobs
					</p>
					<h5 className="ml-4 text-xl font-semibold">related skills:</h5>
					<ul className="mt-2 list-disc">
						<li>Personal Grooming</li>
						<li>Wardrobe &amp; Style</li>
					</ul>
				</div>
				<div className="stat lg:w-1/2 xl:w-1/3   min-w-1/3 min-h-1/3">
					<h3 className="my-4 text-2xl text-terminal-500 font-bold">
						Movement Allowance (MA)
					</h3>
					<p className="text-lg">
						This is an index of how fast your character can run (important in
						combat situations). The higher your Movement Allowance (MA), the
						more distance you can cover in a turn
					</p>
					<h5 className="ml-4 text-xl font-semibold">related stats:</h5>
					<ul className="mt-2 list-disc">
						<li>
							RUN: To determine how far your character can run in a single
							combat round (@3.2 seconds) in meters, multiply your MA by 3. The
							Character can run three times this distance in a full 10 second
							turn.
						</li>
						<li>
							LEAP: To determine how far your character can leap (from a running
							start), divide your RUN by 4
						</li>
					</ul>
				</div>
				<div className="stat lg:w-1/2 xl:w-1/3   min-w-1/3 min-h-1/3">
					<h3 className="my-4 text-2xl text-terminal-500 font-bold">Empathy</h3>
					<p className="text-lg">
						This stat represents how well you relate to other living things - a
						measure of charisma and sympathetic emotions. In a world of
						alienated, future-shocked survivors, the ability to be
						&quot;human&quot; can no longer be taken for granted. Empathy (EM)
						is critical when leading, convincing, seducing or percieving
						eotional undercurrents. Empathy is also a measure of how close
						he/she is to the line between feeling human being and cold blooded
						cyber-monster
					</p>
					<h5 className="ml-4 text-xl font-semibold">related stats:</h5>
					<ul className="mt-2 list-disc">
						<li>
							Humanity: This is a measure of the toll cybernetics takes on your
							ability to relate to otherliving things. Multiply your EMP by 10
							to determine how many humanity points you have. Remember: For
							every 10 points of Humanity lost, you will automatically lose 1
							point of EMP. This can have a serious effect on anyEmpathy-related
							Skills, as well as forcing you to the edge of cybernetic-induced
							psychosis
							<h5 className="ml-4 text-xl font-semibold">related skills:</h5>
						</li>
						<li>Human Perception</li>
						<li>Interview</li>
						<li>Leadership</li>
						<li>Seduction</li>
						<li>Social</li>
						<li>Persuasion &amp; Fast Talk</li>
						<li>Perform</li>
					</ul>
				</div>
				<div className="stat lg:w-1/2 xl:w-1/3   min-w-1/3 min-h-1/3">
					<h3 className="my-4 text-2xl text-terminal-500 font-bold">
						Body Type (BT)
					</h3>
					<p className="text-lg">
						Strength, Endurance and Constitution are all based on the
						character&#39;s Body Type. Body Type determines how much damage you
						can take in wounds, how much you can lift or carry, how far you can
						throw, how well you recover from shock, and how much additional
						damage you cause with physical attacks. Body Type is important to
						all character types, but to Solos, Rockerboys and Nomads most of
						all.
					</p>
					<h5 className="ml-4 text-xl font-semibold">related stats:</h5>
					<ul className="mt-2 list-disc">
						<li>Carry: 10x your Body Type</li>
						<li>Deadlift: 40x your Body Type</li>
						<li>
							Save Number: a value equal to your Body Type. To make saves, you
							must roll a value on 1D10 equal to or lower than this number.
							There are wo types of saves: Stun Saves (take damage, exposed to
							knockout drugs, fail - knocked out of combat until a successful
							save on later turns), and Death Saves (When Mortally Wounded or
							exposed to certain poisons, fail - RIP)
						</li>
						<li>
							Body Type Modifier (BTM): special bonus used by your character to
							reduce the effects of damage. Subtracted from any damage taken in
							combat (0 to -5,)
							<h5 className="ml-4 text-xl font-semibold">related skills:</h5>
						</li>
						<li>Endurance</li>
						<li>Strength Feat</li>
						<li>Swimming</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
