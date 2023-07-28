/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				terminal: {
					400: '#49f626',
					500: '#3ae817',
					600: '#38b120',
					700: '#306525',
					800: '#1c291a'
				},
				olive: {
					400: '#476841',
					500: '#40593b',
					600: '#364833',
					700: '#262d24',
					800: '#141513'
				},
				blood: {
					400: '#b40808',
					500: '#990f0f',
					600: '#741616',
					700: '#431919',
					800: '#1c1212'
				}
			},
			fontFamily: {
				major: ['Major Mono Display', 'monospace'],
				press: ['"Press Start 2P"', 'cursive'],
				space: ['Space Grotesk', 'sans-serif']
			},

			animation: {
				shine: 'shine 1s ease-in-out'
			},
			keyframes: {
				shine: {
					'0%, 100%': {
						filter: 'brightness(1)'
					},
					'50%': {
						filter: 'brightness(2)',
						textShadow: '1px 1px 5px black, -1px -1px 5px white'
					}
				}
			}
		}
	},
	plugins: []
};
