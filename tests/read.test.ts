import { sum } from "../src/index.js";
import { describe, expect, it } from "vitest";

describe("draft-unit-tests", () => {
	it("2+3 should be 5", async () => {
		const spy = sum(2, 3);

		expect(spy).toBe(5);
	});
});
