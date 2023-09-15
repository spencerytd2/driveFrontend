/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'dark-1': '#000000',
				'dark-2': '#0C2444',
				'dark-3': '#00346f',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')]
}
