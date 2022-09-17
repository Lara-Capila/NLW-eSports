module.exports = {
	content: [
		'./src/**/*.tsx',
		'./index.html',
	],
	theme: {
		extend: {
			backgroundImage: {
				galaxy: 'url(\'/background-galaxy.png\')',
				'gradient-1': 'linear-gradient(89.86deg, #9572FC 13.08%, #43E7AD 73.94%, #E1D55D 53.57%)',
				'game-card-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
			},
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
	},
	plugins: [],
};
