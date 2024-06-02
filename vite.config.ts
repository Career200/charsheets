import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	esbuild: {
		minifyIdentifiers: false,
		keepNames: true,
		target: "esnext",
	},
	plugins: [
		react({
			babel: {
				plugins: [
					[
						"@babel/plugin-proposal-decorators",
						{
							version: "2023-11",
						},
					],
				],
			},
		}),
	],
	resolve: {
		alias: {
			"@avatar": path.resolve(__dirname, "public/avatar"),
		},
	},
});
