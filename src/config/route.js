// const SERVER_API_URL = 'http://api.karsales.asia';
// const NEXT_PUBLIC_API_URL = '/graphql';

module.exports = {
	rewrites: [
		{
			source: '/the-loai',
			destination: '/category',
		},
		// {
		// 	source: `${process.env.NEXT_PUBLIC_API_URL || NEXT_PUBLIC_API_URL}/:path*`,
		// 	destination: `${process.env.SERVER_API_URL || SERVER_API_URL}${
		// 		process.env.NEXT_PUBLIC_API_URL || NEXT_PUBLIC_API_URL
		// 	}`,
		// },
	],
};
