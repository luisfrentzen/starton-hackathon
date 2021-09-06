module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"secondary-100": "#00B0FF",
				"secondary-200": "#0477fb",
				"secondary-300": "#005EDD",
				"secondary-400": "#0046BF",
				primary: "#ffffff",
				"accent-100": "#FFA32E",
				"accent-200": "#fb8804",
				"accent-300": "#CF6500",
			},
			zIndex: {
				"-10": "-10",
			},
			animation: {
				"bounce-right": "bounce-right 2s ease-out infinite",
				"chart-grow-50": "chart-grow-50 1.5s ease-out",
				"chart-grow-75": "chart-grow-75 1.5s ease-out",
				"chart-grow-33": "chart-grow-33 1.5s ease-out",
			},
			keyframes: {
				"bounce-right": {
					"0%, 100%": {
						transform: "translateX(0)",
					},
					"50%": {
						transform: "translateX(-5%)",
					},
				},
				"chart-grow-50": {
					"0%": {
						height: "0",
					},
					"100%": {
						height: "50%",
					},
				},
				"chart-grow-75": {
					"0%": {
						height: "0",
					},
					"100%": {
						height: "75%",
					},
				},
				"chart-grow-33": {
					"0%": {
						height: "0",
					},
					"100%": {
						height: "33%",
					},
				},
			},
		},
	},
	variants: {
		extend: {
			animation: ["hover"],
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
