// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@radix-ui/themes/dist/**/*.{js,ts,jsx,tsx}', // include Radix Themes
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // Radix uses Inter by default
			},
			colors: {
				// Optional: Map Radix theme tokens to Tailwind colors
				radix: {
					bg: 'var(--color-background)',
					fg: 'var(--color-foreground)',
					accent: 'var(--color-accent)',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'), // nice defaults for inputs & forms
	],
}
