const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			mobile: '375px',
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				'baloo': ['"Baloo Bhai 2"', 'sans-serif']
			},
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
