import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<div className="flex flex-col flex-nowrap h-[100vh]">
			<main className="relative flex-1 bg-violet-950 text-white">
				<Outlet />
			</main>
			<div className="flex-none bg-black w-full md:h-14 h-20"> hidden </div>
			<nav className="fixed bottom-0 w-full md:h-14 h-20 px-8 bg-black text-orange-500">
				<ul className="relative flex justify-between items-center gap-8 md:list-disc list-none">
					<li>
						<Link className="text-blue-200" to="/CP2020">
							Cyberpunk 2020 character sheet
						</Link>
					</li>
					<li>
						<Link className="text-blue-200" to="/CP2020help">
							Cyberpunk 2020 utilities
						</Link>
					</li>
					<li>
						<Link className="text-blue-200" to="/CP2020plain">
							See Stats and Skills descriptions as plain text
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
export function Guide() {
	return (
		<div className="h-full flex justify-center items-center">
			<div className="flex shade-cont">
				<div className="text-shades">
					<div style={{ background: 'rgb(0, 0, 0)' }}>
						<span className="hex-value">#000000</span>
					</div>
					<div style={{ background: 'rgb(24, 19, 2)' }}>
						<span className="hex-value">#181302</span>
					</div>
					<div style={{ background: 'rgb(48, 39, 3)' }}>
						<span className="hex-value">#302703</span>
					</div>
					<div style={{ background: 'rgb(72, 58, 5)' }}>
						<span className="hex-value">#483a05</span>
					</div>
					<div style={{ background: 'rgb(95, 78, 7)' }}>
						<span className="hex-value">#5f4e07</span>
					</div>
					<div style={{ background: 'rgb(119, 97, 8)' }}>
						<span className="hex-value">#776108</span>
					</div>
					<div style={{ background: 'rgb(143, 116, 10)' }}>
						<span className="hex-value">#8f740a</span>
					</div>
					<div style={{ background: 'rgb(167, 136, 12)' }}>
						<span className="hex-value">#a7880c</span>
					</div>
					<div style={{ background: 'rgb(191, 155, 13)' }}>
						<span className="hex-value">#bf9b0d</span>
					</div>
					<div style={{ background: 'rgb(215, 175, 15)' }}>
						<span className="hex-value">#d7af0f</span>
					</div>
					<div style={{ background: 'rgb(238, 194, 17)' }}>
						<span className="hex-value">#eec211</span>
					</div>
					<div style={{ background: 'rgb(240, 200, 40)' }}>
						<span className="hex-value">#f0c828</span>
					</div>
					<div style={{ background: 'rgb(242, 206, 64)' }}>
						<span className="hex-value">#f2ce40</span>
					</div>
					<div style={{ background: 'rgb(243, 212, 88)' }}>
						<span className="hex-value">#f3d458</span>
					</div>
					<div style={{ background: 'rgb(245, 218, 112)' }}>
						<span className="hex-value">#f5da70</span>
					</div>
					<div style={{ background: 'rgb(247, 225, 136)' }}>
						<span className="hex-value">#f7e188</span>
					</div>
					<div style={{ background: 'rgb(248, 231, 160)' }}>
						<span className="hex-value">#f8e7a0</span>
					</div>
					<div style={{ background: 'rgb(250, 237, 183)' }}>
						<span className="hex-value">#faedb7</span>
					</div>
					<div style={{ background: 'rgb(252, 243, 207)' }}>
						<span className="hex-value">#fcf3cf</span>
					</div>
					<div style={{ background: 'rgb(253, 249, 231)' }}>
						<span className="hex-value">#fdf9e7</span>
					</div>
				</div>
				<div className="bg-shades">
					<div style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
						<span className="hex-value">#000000</span>
					</div>
					<div style={{ backgroundColor: 'rgb(19, 7, 19)' }}>
						<span className="hex-value">#130713</span>
					</div>
					<div style={{ backgroundColor: 'rgb(38, 13, 38)' }}>
						<span className="hex-value">#260d26</span>
					</div>
					<div style={{ backgroundColor: 'rgb(57, 20, 57)' }}>
						<span className="hex-value">#391439</span>
					</div>
					<div style={{ backgroundColor: 'rgb(75, 27, 75)' }}>
						<span className="hex-value">#4b1b4b</span>
					</div>
					<div style={{ backgroundColor: 'rgb(94, 33, 94)' }}>
						<span className="hex-value">#5e215e</span>
					</div>
					<div style={{ backgroundColor: 'rgb(113, 40, 113)' }}>
						<span className="hex-value">#712871</span>
					</div>
					<div style={{ backgroundColor: 'rgb(132, 46, 132)' }}>
						<span className="hex-value">#842e84</span>
					</div>
					<div style={{ backgroundColor: 'rgb(151, 53, 151)' }}>
						<span className="hex-value">#973597</span>
					</div>
					<div style={{ backgroundColor: 'rgb(170, 60, 170)' }}>
						<span className="hex-value">#aa3caa</span>
					</div>
					<div style={{ backgroundColor: 'rgb(189, 66, 189)' }}>
						<span className="hex-value">#bd42bd</span>
					</div>
					<div style={{ backgroundColor: 'rgb(195, 85, 195)' }}>
						<span className="hex-value">#c355c3</span>
					</div>
					<div style={{ backgroundColor: 'rgb(202, 104, 202)' }}>
						<span className="hex-value">#ca68ca</span>
					</div>
					<div style={{ backgroundColor: 'rgb(209, 123, 209)' }}>
						<span className="hex-value">#d17bd1</span>
					</div>
					<div style={{ backgroundColor: 'rgb(215, 142, 215)' }}>
						<span className="hex-value">#d78ed7</span>
					</div>
					<div style={{ backgroundColor: 'rgb(222, 161, 222)' }}>
						<span className="hex-value">#dea1de</span>
					</div>
					<div style={{ backgroundColor: 'rgb(228, 180, 228)' }}>
						<span className="hex-value">#e4b4e4</span>
					</div>
					<div style={{ backgroundColor: 'rgb(235, 198, 235)' }}>
						<span className="hex-value">#ebc6eb</span>
					</div>
					<div style={{ backgroundColor: 'rgb(242, 217, 242)' }}>
						<span className="hex-value">#f2d9f2</span>
					</div>
					<div style={{ backgroundColor: 'rgb(248, 236, 248)' }}>
						<span className="hex-value">#f8ecf8</span>
					</div>
				</div>
				<div className="primary-shades">
					<div style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
						<span className="hex-value">#000000</span>
					</div>
					<div style={{ backgroundColor: 'rgb(23, 23, 3)' }}>
						<span className="hex-value">#171703</span>
					</div>
					<div style={{ backgroundColor: 'rgb(45, 45, 6)' }}>
						<span className="hex-value">#2d2d06</span>
					</div>
					<div style={{ backgroundColor: 'rgb(68, 68, 9)' }}>
						<span className="hex-value">#444409</span>
					</div>
					<div style={{ backgroundColor: 'rgb(90, 90, 12)' }}>
						<span className="hex-value">#5a5a0c</span>
					</div>
					<div style={{ backgroundColor: 'rgb(113, 113, 15)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#71710f
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(135, 135, 18)' }}>
						<span className="hex-value">#878712</span>
					</div>
					<div style={{ backgroundColor: 'rgb(158, 158, 21)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#9e9e15
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(181, 181, 23)' }}>
						<span className="hex-value">#b5b517</span>
					</div>
					<div style={{ backgroundColor: 'rgb(203, 203, 26)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#cbcb1a
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(226, 226, 29)' }}>
						<span className="hex-value">#e2e21d</span>
					</div>
					<div style={{ backgroundColor: 'rgb(229, 229, 52)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#e5e534
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(232, 232, 74)' }}>
						<span className="hex-value">#e8e84a</span>
					</div>
					<div style={{ backgroundColor: 'rgb(234, 234, 97)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#eaea61
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(237, 237, 120)' }}>
						<span className="hex-value">#eded78</span>
					</div>
					<div style={{ backgroundColor: 'rgb(240, 240, 142)' }}>
						<span className="hex-value">#f0f08e</span>
					</div>
					<div style={{ backgroundColor: 'rgb(243, 243, 165)' }}>
						<span className="hex-value">#f3f3a5</span>
					</div>
					<div style={{ backgroundColor: 'rgb(246, 246, 187)' }}>
						<span className="hex-value">#f6f6bb</span>
					</div>
					<div style={{ backgroundColor: 'rgb(249, 249, 210)' }}>
						<span className="hex-value">#f9f9d2</span>
					</div>
					<div style={{ backgroundColor: 'rgb(252, 252, 232)' }}>
						<span className="hex-value">#fcfce8</span>
					</div>
				</div>
				<div className="secondary-shades" />
				<div className="accent-shades">
					<div style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#000000
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(9, 16, 9)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#091009
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(19, 32, 19)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#132013
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(28, 48, 28)' }}>
						<span className="hex-value">#1c301c</span>
					</div>
					<div style={{ backgroundColor: 'rgb(38, 64, 38)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#264026
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(47, 80, 47)' }}>
						<span className="hex-value">#2f502f</span>
					</div>
					<div style={{ backgroundColor: 'rgb(57, 96, 57)' }}>
						<span className="hex-value">#396039</span>
					</div>
					<div style={{ backgroundColor: 'rgb(66, 112, 66)' }}>
						<span className="hex-value">#427042</span>
					</div>
					<div style={{ backgroundColor: 'rgb(75, 129, 75)' }}>
						<span className="hex-value">#4b814b</span>
					</div>
					<div style={{ backgroundColor: 'rgb(85, 145, 85)' }}>
						<span className="hex-value">#559155</span>
					</div>
					<div style={{ backgroundColor: 'rgb(94, 161, 94)' }}>
						<span className="hex-value">#5ea15e</span>
					</div>
					<div style={{ backgroundColor: 'rgb(110, 170, 110)' }}>
						<span className="hex-value">#6eaa6e</span>
					</div>
					<div style={{ backgroundColor: 'rgb(126, 180, 126)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#7eb47e
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(143, 189, 143)' }}>
						<span className="hex-value" style={{ visibility: 'hidden' }}>
							#8fbd8f
						</span>
					</div>
					<div style={{ backgroundColor: 'rgb(159, 198, 159)' }}>
						<span className="hex-value">#9fc69f</span>
					</div>
					<div style={{ backgroundColor: 'rgb(175, 208, 175)' }}>
						<span className="hex-value">#afd0af</span>
					</div>
					<div style={{ backgroundColor: 'rgb(191, 217, 191)' }}>
						<span className="hex-value">#bfd9bf</span>
					</div>
					<div style={{ backgroundColor: 'rgb(207, 227, 207)' }}>
						<span className="hex-value">#cfe3cf</span>
					</div>
					<div style={{ backgroundColor: 'rgb(223, 236, 223)' }}>
						<span className="hex-value">#dfecdf</span>
					</div>
					<div style={{ backgroundColor: 'rgb(239, 246, 239)' }}>
						<span className="hex-value">#eff6ef</span>
					</div>
				</div>
			</div>
		</div>
	);
}
