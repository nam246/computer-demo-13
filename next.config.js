/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		domains: ["payload-headless-cms-website.vercel.app"],
	},
};

module.exports = nextConfig;
