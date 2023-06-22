module.exports = {
	rewrites: [
		// Category
		{
			source: '/the-loai',
			destination: '/category',
		},
		{
			source: '/the-loai/:slug',
			destination: '/category/:slug',
		},
		// Nation
		{
			source: '/quoc-gia',
			destination: '/nation',
		},
		{
			source: '/quoc-gia/:slug',
			destination: '/nation/:slug',
		},
	],
};
