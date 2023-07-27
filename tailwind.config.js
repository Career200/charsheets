/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
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
