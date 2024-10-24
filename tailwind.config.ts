import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
	darkMode: "media",
	content: ["./src/**/*.{astro,js,ts,tsx,md,mdx}"],
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
