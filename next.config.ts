import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
};

module.exports = {
	images: {
		remotePatterns: [new URL('https://images.unsplash.com/**')],
	},
};

export default nextConfig;
