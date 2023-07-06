export default function gotMainProgramsList() {
	return (
		<table className="dataTable">
			<tbody>
				<tr>
					<td width="100%">
						<h3>Programs List</h3>
					</td>
				</tr>
				<tr>
					<td width="100%">
						<p>.</p>
						<div>
							<center>
								<table border={0} cellPadding="0" cellSpacing="0" width="90%">
									<tbody>
										<tr>
											<td valign="top">Name</td>
											<td valign="top">Class</td>
											<td valign="top">Function</td>
											<td valign="top">Strength</td>
											<td valign="top">MU</td>
											<td valign="top">Cost</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151a.htm">
													<strong>INTRUSION</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">Hammer</td>
											<td valign="top">Intrusion</td>
											<td valign="top">
												Knocks down data walls (2D6 per attack to data wall
												Strength)
											</td>
											<td valign="top">4</td>
											<td valign="top">1</td>
											<td valign="top">400</td>
										</tr>
										<tr>
											<td valign="top">Jackhammer</td>
											<td valign="top">Intrusion</td>
											<td valign="top">
												Knocks down data walls (1D6 per attack to data wall
												Strength)
											</td>
											<td valign="top">2</td>
											<td valign="top">2</td>
											<td valign="top">360</td>
										</tr>
										<tr>
											<td valign="top">Worm</td>
											<td valign="top">Intrusion</td>
											<td valign="top">
												Infiltrates and breaks down data walls silently in 2
												turns
											</td>
											<td valign="top">2</td>
											<td valign="top">5</td>
											<td valign="top">660</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151b.htm">
													<strong>DECRYPTION</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">Code Cracker</td>
											<td valign="top">Decryptor</td>
											<td valign="top">
												Breaks down code gates and file locks
											</td>
											<td valign="top">3</td>
											<td valign="top">2</td>
											<td valign="top">380</td>
										</tr>
										<tr>
											<td valign="top">Wizard's Book</td>
											<td valign="top">Decryptor</td>
											<td valign="top">
												Deciphers code gates (STR 6) &amp; file locks
											</td>
											<td valign="top">4/6</td>
											<td valign="top">2</td>
											<td valign="top">400</td>
										</tr>
										<tr>
											<td valign="top">Raffles</td>
											<td valign="top">Decryptor</td>
											<td valign="top">
												Deciphers code gates &amp; file locks
											</td>
											<td valign="top">5</td>
											<td valign="top">3</td>
											<td valign="top">560</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151c.htm">
													<strong>DETECTION/ALARM</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">Watchdog</td>
											<td valign="top">Detect/Alarm</td>
											<td valign="top">Detects entry and alerts owner</td>
											<td valign="top">4</td>
											<td valign="top">5</td>
											<td valign="top">610</td>
										</tr>
										<tr>
											<td valign="top">Bloodhound</td>
											<td valign="top">Detect/Alarm</td>
											<td valign="top">
												Detects entry and traces signal, then alerts master
											</td>
											<td valign="top">3</td>
											<td valign="top">5</td>
											<td valign="top">700</td>
										</tr>
										<tr>
											<td valign="top">Pit Bull</td>
											<td valign="top">Detect/Alarm</td>
											<td valign="top">
												Detects entry, traces signal and cuts intruder's line
												until killed
											</td>
											<td valign="top">2</td>
											<td valign="top">6</td>
											<td valign="top">780</td>
										</tr>
										<tr>
											<td valign="top">SeeYa</td>
											<td valign="top">Detect/Alarm</td>
											<td valign="top">Detects "Invisible" ICONS</td>
											<td valign="top">3</td>
											<td valign="top">1</td>
											<td valign="top">280</td>
										</tr>
										<tr>
											<td valign="top">Hidden Virtue</td>
											<td valign="top">Detect/Alarm</td>
											<td valign="top">
												Detects "real" things in virtual reality
											</td>
											<td valign="top">3</td>
											<td valign="top">1</td>
											<td valign="top">280</td>
										</tr>
										<tr>
											<td valign="top">Speedtrap</td>
											<td valign="top">Detect/Alarm</td>
											<td valign="top">
												Detects hidden programming within 10 spaces
											</td>
											<td valign="top">4</td>
											<td valign="top">4</td>
											<td valign="top">600</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151d.htm">
													<strong>ANTI SYSTEM</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">Flatline</td>
											<td valign="top">Anti System</td>
											<td valign="top">Kills operating CPU</td>
											<td valign="top">3</td>
											<td valign="top">2</td>
											<td valign="top">570</td>
										</tr>
										<tr>
											<td valign="top">Poison Flatline</td>
											<td valign="top">Anti System</td>
											<td valign="top">Kills all system Memory</td>
											<td valign="top">2</td>
											<td valign="top">2</td>
											<td valign="top">540</td>
										</tr>
										<tr>
											<td valign="top">Krash</td>
											<td valign="top">Anti System</td>
											<td valign="top">Crashes system CPU for 1D6+1 turns</td>
											<td valign="top">3</td>
											<td valign="top">2</td>
											<td valign="top">570</td>
										</tr>
										<tr>
											<td valign="top">DecKrash</td>
											<td valign="top">Anti System</td>
											<td valign="top">
												Crashes deck CPU for 1D6 turns. Drops opponent out of
												Netspace
											</td>
											<td valign="top">4</td>
											<td valign="top">2</td>
											<td valign="top">600</td>
										</tr>
										<tr>
											<td valign="top">Virizz</td>
											<td valign="top">Anti System</td>
											<td valign="top">
												Ties up 1 action of system till deck is turned off
											</td>
											<td valign="top">4</td>
											<td valign="top">2</td>
											<td valign="top">600</td>
										</tr>
										<tr>
											<td valign="top">VIRAL 15</td>
											<td valign="top">Anti System</td>
											<td valign="top">Erases one file randomly each turn</td>
											<td valign="top">4</td>
											<td valign="top">2</td>
											<td valign="top">590</td>
										</tr>
										<tr>
											<td valign="top">Murphy</td>
											<td valign="top">Anti System</td>
											<td valign="top">
												Causes system to randomly launch programs
											</td>
											<td valign="top">3</td>
											<td valign="top">2</td>
											<td valign="top">600</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151e.htm">
													<strong>EVASION/STEALTH</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">Invisibility</td>
											<td valign="top">Evasion</td>
											<td valign="top">
												Hides cybersignal, making you appear "Invisible"
											</td>
											<td valign="top">3</td>
											<td valign="top">1</td>
											<td valign="top">300</td>
										</tr>
										<tr>
											<td valign="top">Stealth</td>
											<td valign="top">Evasion</td>
											<td valign="top">
												Mutes cybersignal, making it harder to detect
											</td>
											<td valign="top">4</td>
											<td valign="top">3</td>
											<td valign="top">480</td>
										</tr>
										<tr>
											<td valign="top">Replicator</td>
											<td valign="top">Evasion</td>
											<td valign="top">
												Confuses attacking IC by creating millions of deck
												signals
											</td>
											<td valign="top">3/4</td>
											<td valign="top">2</td>
											<td valign="top">320</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151f.htm">
													<strong>PROTECTION</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">Shield</td>
											<td valign="top">Protection</td>
											<td valign="top">Stops attacks to Netrunner</td>
											<td valign="top">3</td>
											<td valign="top">1</td>
											<td valign="top">150</td>
										</tr>
										<tr>
											<td valign="top">Force</td>
											<td valign="top">Shield</td>
											<td valign="top">
												Protection Stops stronger attacks to Netrunner
											</td>
											<td valign="top">4</td>
											<td valign="top">2</td>
											<td valign="top">160</td>
										</tr>
										<tr>
											<td valign="top">Reflector</td>
											<td valign="top">Protection</td>
											<td valign="top">
												Reflects and stops <em>Stun</em>, <em>Hellbolt</em>,
												<em>Knockout</em> attacks
											</td>
											<td valign="top">5</td>
											<td valign="top">2</td>
											<td valign="top">160</td>
										</tr>
										<tr>
											<td valign="top">Armor</td>
											<td valign="top">Protection</td>
											<td valign="top">
												Reduce
												<em>Stun, Hellbolt, Brainwipe, Zombie, Hellhound</em>
												attacks by -3 pts
											</td>
											<td valign="top">4</td>
											<td valign="top">2</td>
											<td valign="top">170</td>
										</tr>
										<tr>
											<td valign="top">Flack</td>
											<td valign="top">Protection</td>
											<td valign="top">
												Creates static walls to blind attackers. STR 2 vs. DOG
												series programs
											</td>
											<td valign="top">4/2</td>
											<td valign="top">2</td>
											<td valign="top">180</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151g.htm">
													<strong>ANTI-IC</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">Killer ll</td>
											<td valign="top">Anti IC</td>
											<td valign="top">
												Attacks all types, 1D6 damage to target STR. Mobile
											</td>
											<td valign="top">2</td>
											<td valign="top">5</td>
											<td valign="top">1320</td>
										</tr>
										<tr>
											<td valign="top">Killer IV</td>
											<td valign="top">Anti IC</td>
											<td valign="top">
												Attacks all types, 1D6 damage to target STR. Mobile
											</td>
											<td valign="top">4</td>
											<td valign="top">5</td>
											<td valign="top">1400</td>
										</tr>
										<tr>
											<td valign="top">Killer VI</td>
											<td valign="top">Anti IC</td>
											<td valign="top">
												Attacks <em>Demons</em>, de-rezzing instantly
											</td>
											<td valign="top">6</td>
											<td valign="top">5</td>
											<td valign="top">1480</td>
										</tr>
										<tr>
											<td valign="top">Manticore</td>
											<td valign="top">Anti IC</td>
											<td valign="top">
												Attacks <em>Demons</em>, de-rezzing instantly
											</td>
											<td valign="top">2</td>
											<td valign="top">3</td>
											<td valign="top">880</td>
										</tr>
										<tr>
											<td valign="top">Hydra</td>
											<td valign="top">Anti IC</td>
											<td valign="top">
												Attacks <em>Demons</em>, de-rezzing instantly
											</td>
											<td valign="top">3</td>
											<td valign="top">3</td>
											<td valign="top">920</td>
										</tr>
										<tr>
											<td valign="top">Dragon</td>
											<td valign="top">Anti IC</td>
											<td valign="top">
												Attacks <em>Demons</em>, de-rezzing instantly
											</td>
											<td valign="top">4</td>
											<td valign="top">3</td>
											<td valign="top">960</td>
										</tr>
										<tr>
											<td valign="top">Aardvark</td>
											<td valign="top">Anti IC</td>
											<td valign="top">
												Detects and attacks <em>Worms</em>, de-rezzing instantly
											</td>
											<td valign="top">4</td>
											<td valign="top">3</td>
											<td valign="top">1000</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151h.htm">
													<strong>ANTI-PERSONNEL</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">Stun</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">Freezes Netrunner for 1D6 turns</td>
											<td valign="top">3</td>
											<td valign="top">3</td>
											<td valign="top">6000</td>
										</tr>
										<tr>
											<td valign="top">Hellbolt</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">
												Cause 1D10 physical damage to Netrunner
											</td>
											<td valign="top">4</td>
											<td valign="top">4</td>
											<td valign="top">6750</td>
										</tr>
										<tr>
											<td valign="top">Sword</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">
												Hellbolt variant, causes 1D6 physical damage to
												Netrunner
											</td>
											<td valign="top">3</td>
											<td valign="top">4</td>
											<td valign="top">6520</td>
										</tr>
										<tr>
											<td valign="top">Brainwipe</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">
												Reduce INT by 1D6 each turn, killing Netrunner
											</td>
											<td valign="top">3</td>
											<td valign="top">4</td>
											<td valign="top">6500</td>
										</tr>
										<tr>
											<td valign="top">Zombie</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">
												Reduce INT by 1D6 each turn, leaving Netrunner mindless
											</td>
											<td valign="top">5</td>
											<td valign="top">4</td>
											<td valign="top">7500</td>
										</tr>
										<tr>
											<td valign="top">Liche</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">
												Erases memory, replacing with pseudo-personality
											</td>
											<td valign="top">4</td>
											<td valign="top">4</td>
											<td valign="top">7250</td>
										</tr>
										<tr>
											<td valign="top">Firestarter</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">
												Causes power surge, starting fire in Netrunner's deck
											</td>
											<td valign="top">4</td>
											<td valign="top">4</td>
											<td valign="top">6250</td>
										</tr>
										<tr>
											<td valign="top">Hellhound</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">
												Tracks Netrunner, waits, then causes 2D10 damage/turn
											</td>
											<td valign="top">6</td>
											<td valign="top">6</td>
											<td valign="top">10,000</td>
										</tr>
										<tr>
											<td valign="top">Spazz</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">Reduces Netrunner REF for 1D6</td>
											<td valign="top">4</td>
											<td valign="top">3</td>
											<td valign="top">6250</td>
										</tr>
										<tr>
											<td valign="top">Glue</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">
												Locks Netrunner in place for 1D10 turns
											</td>
											<td valign="top">5</td>
											<td valign="top">4</td>
											<td valign="top">6500</td>
										</tr>
										<tr>
											<td valign="top">Knockout</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">Causes coma for 1D6 hours</td>
											<td valign="top">5</td>
											<td valign="top">4</td>
											<td valign="top">6250</td>
										</tr>
										<tr>
											<td valign="top">Jack Attack</td>
											<td valign="top">Anti-Person.</td>
											<td valign="top">Prevents Netrunner from logging off</td>
											<td valign="top">3</td>
											<td valign="top">3</td>
											<td valign="top">6000</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151i.htm">
													<strong>CONTROLLERS</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">Viddy Master</td>
											<td valign="top">Controller</td>
											<td valign="top">Video board controller</td>
											<td valign="top">4</td>
											<td valign="top">1</td>
											<td valign="top">140</td>
										</tr>
										<tr>
											<td valign="top">Soundmachine</td>
											<td valign="top">Controller</td>
											<td valign="top">Microphone/voxbox controller</td>
											<td valign="top">4</td>
											<td valign="top">1</td>
											<td valign="top">140</td>
										</tr>
										<tr>
											<td valign="top">Open Sesame</td>
											<td valign="top">Controller</td>
											<td valign="top">Electronic door controller</td>
											<td valign="top">3</td>
											<td valign="top">1</td>
											<td valign="top">130</td>
										</tr>
										<tr>
											<td valign="top">Genie</td>
											<td valign="top">Controller</td>
											<td valign="top">
												More powerful door, elevator controller
											</td>
											<td valign="top">5</td>
											<td valign="top">1</td>
											<td valign="top">150</td>
										</tr>
										<tr>
											<td valign="top">Hotwire</td>
											<td valign="top">Controller</td>
											<td valign="top">Vehicle controller</td>
											<td valign="top">3</td>
											<td valign="top">1</td>
											<td valign="top">130</td>
										</tr>
										<tr>
											<td valign="top">Dee-2</td>
											<td valign="top">Controller</td>
											<td valign="top">Robot controller</td>
											<td valign="top">3</td>
											<td valign="top">1</td>
											<td valign="top">130</td>
										</tr>
										<tr>
											<td valign="top">Crystal Ball</td>
											<td valign="top">Controller</td>
											<td valign="top">Video/Camera controller</td>
											<td valign="top">4</td>
											<td valign="top">1</td>
											<td valign="top">140</td>
										</tr>
										<tr>
											<td valign="top">News At 8</td>
											<td valign="top">Controller</td>
											<td valign="top">Screamsheet box controller</td>
											<td valign="top">4</td>
											<td valign="top">1</td>
											<td valign="top">140</td>
										</tr>
										<tr>
											<td valign="top">Phone Home</td>
											<td valign="top">Controller</td>
											<td valign="top">
												Send &amp; receive cellular calls, intercepts calls at
												STR. 2
											</td>
											<td valign="top">5</td>
											<td valign="top">1</td>
											<td valign="top">150</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151j.htm">
													<strong>UTILITIES</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">DataBaser</td>
											<td valign="top">Utility</td>
											<td valign="top">
												Stores up to 10,000 pages per file of information/text
											</td>
											<td valign="top">8</td>
											<td valign="top">2</td>
											<td valign="top">180</td>
										</tr>
										<tr>
											<td valign="top">Alias</td>
											<td valign="top">Utility</td>
											<td valign="top">Replaces file name with false one</td>
											<td valign="top">6</td>
											<td valign="top">2</td>
											<td valign="top">160</td>
										</tr>
										<tr>
											<td valign="top">ReRezz</td>
											<td valign="top">Utility</td>
											<td valign="top">
												Recompiles and restores destroyed programs
											</td>
											<td valign="top">3</td>
											<td valign="top">1</td>
											<td valign="top">130</td>
										</tr>
										<tr>
											<td valign="top">Instant Replay</td>
											<td valign="top">Utility</td>
											<td valign="top">
												Records coordinates of current Netrun for replay later
											</td>
											<td valign="top">8</td>
											<td valign="top">2</td>
											<td valign="top">180</td>
										</tr>
										<tr>
											<td valign="top">GateMaster</td>
											<td valign="top">Utility</td>
											<td valign="top">
												Detects and destroys <em>Virizz</em>,<em>Viral 15</em>{' '}
												programs
											</td>
											<td valign="top">5</td>
											<td valign="top">1</td>
											<td valign="top">150</td>
										</tr>
										<tr>
											<td valign="top">Padlock</td>
											<td valign="top">Utility</td>
											<td valign="top">
												Refuses to allow log on through deck unless code is
												given
											</td>
											<td valign="top">4</td>
											<td valign="top">2</td>
											<td valign="top">160</td>
										</tr>
										<tr>
											<td valign="top">ElectroLock</td>
											<td valign="top">Utility</td>
											<td valign="top">Locks files as is a STR. 3 code gate</td>
											<td valign="top">7</td>
											<td valign="top">2</td>
											<td valign="top">170</td>
										</tr>
										<tr>
											<td valign="top">Filelocker</td>
											<td valign="top">Utility</td>
											<td valign="top">
												Utility Locks files, requiring code word (runner's
												choice) to open
											</td>
											<td valign="top">4</td>
											<td valign="top">1</td>
											<td valign="top">140</td>
										</tr>
										<tr>
											<td valign="top">NetMap</td>
											<td valign="top">Utility</td>
											<td valign="top">
												Provides accurate maps of most well-known Net locations
											</td>
											<td valign="top">4</td>
											<td valign="top">1</td>
											<td valign="top">150</td>
										</tr>
										<tr>
											<td valign="top">Packer</td>
											<td valign="top">Utility</td>
											<td valign="top">
												Reduces programs by 1/2 size. Take 2 turns to unpack
											</td>
											<td valign="top">4</td>
											<td valign="top">1</td>
											<td valign="top">140</td>
										</tr>
										<tr>
											<td valign="top">Backup</td>
											<td valign="top">Utility</td>
											<td valign="top">
												Creates copies of most programs on chip
											</td>
											<td valign="top">4</td>
											<td valign="top">1</td>
											<td valign="top">140</td>
										</tr>
										<tr>
											<td valign="top" colSpan={6}>
												<a href="151k.htm">
													<strong>DEMON SERIES</strong>
												</a>
											</td>
										</tr>
										<tr>
											<td valign="top">Imp II</td>
											<td valign="top">Demon</td>
											<td valign="top">Carries 2 programs</td>
											<td valign="top">3</td>
											<td valign="top">3</td>
											<td valign="top">1000</td>
										</tr>
										<tr>
											<td valign="top">Afreet ll</td>
											<td valign="top">Demon</td>
											<td valign="top">Carries 3 programs</td>
											<td valign="top">3</td>
											<td valign="top">4</td>
											<td valign="top">1160</td>
										</tr>
										<tr>
											<td valign="top">Succubus</td>
											<td valign="top">Demon</td>
											<td valign="top">Carries 4 programs</td>
											<td valign="top">4</td>
											<td valign="top">4</td>
											<td valign="top">1200</td>
										</tr>
										<tr>
											<td valign="top">Balron ll</td>
											<td valign="top">Demon</td>
											<td valign="top">Carries 4 programs</td>
											<td valign="top">5</td>
											<td valign="top">5</td>
											<td valign="top">1240</td>
										</tr>
									</tbody>
								</table>
							</center>
						</div>
						<p>.</p>
					</td>
				</tr>
				<tr></tr>
			</tbody>
		</table>
	);
}
