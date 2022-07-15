// A mock function to mimic making an async request for data
export function fetchTheme(wait = 1000) {
	return new Promise((resolve) => setTimeout(() => resolve, wait));
}
