/** @type {import('next').NextConfig} */
const nextConfig = {

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "szjthfyqejeerhqxwwvy.supabase.co",
				port: "",
				pathname: "/storage/v1/object/public/entry-images/**"
			},

		],
	},

};

export default nextConfig;
