import { sum } from "../src/index.js";

try {
	const count = sum(2, 3);
	console.log(count, "count");
} catch (error) {
	console.error(error, "FDF");
}
