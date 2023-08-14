import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	esbuild: {
		minifyIdentifiers: false,
		keepNames: true,
	},
	plugins: [react()],
	resolve: {
		alias: {
			"@avatar": path.resolve(__dirname, "public/avatar"),
		},
	},
});
