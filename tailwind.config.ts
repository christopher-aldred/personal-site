import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
	content: ["./src/**/*.{astro,js,ts,tsx,md,mdx}"],
	darkMode: "class",
	plugins: [typography],
	theme: {
		extend: {
			fontFamily: {
				eskool: ["Eskool-Regular", "serif"],
				iaWriterMono: ["iA Writer Mono"],
				iaWriterMonoBold: ["iA Writer Mono Bold"],
			},
		},
	},
};

export default config;
