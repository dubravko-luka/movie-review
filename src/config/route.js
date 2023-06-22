const SERVER_API_URL = 'http://app.reshare.com.au:8085';
const NEXT_PUBLIC_API_URL = '/graphql';

module.exports = {
	rewrites: [
		// Category
		{
			source: '/the-loai',
			destination: '/category',
		},
		// {
		// 	source: '/the-loai/:slug',
		// 	destination: '/category/:slug',
		// },
		// // Nation
		// {
		// 	source: '/quoc-gia',
		// 	destination: '/nation',
		// },
		// {
		// 	source: '/quoc-gia/:slug',
		// 	destination: '/nation/:slug',
		// },
		{
			source: `${process.env.NEXT_PUBLIC_API_URL || NEXT_PUBLIC_API_URL}/:path*`,
			destination: `${process.env.SERVER_API_URL || SERVER_API_URL}${process.env.NEXT_PUBLIC_API_URL || NEXT_PUBLIC_API_URL}`,
		},
	],
};
