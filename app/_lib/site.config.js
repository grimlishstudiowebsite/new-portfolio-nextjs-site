const siteConfig = {

	name: 'Grimlish Studio',
	description: 'Original artwork by a Bundaberg-based artist, showcasing contemporary pieces across Brisbane, the Gold Coast and South East Queensland.',
	url: new URL(
		process.env.APP_URL ?? "http://localhost:3000"
	)
}

export default siteConfig;
