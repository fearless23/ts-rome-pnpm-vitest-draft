/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		env: {
			LOG_LEVEL: "debug",
			ENVIRONMENT: "UAT2",
		},
		coverage: {
			provider: "istanbul",
		},
	},
});
