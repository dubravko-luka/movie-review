import Head from 'next/head';
import { memo } from 'react';

const HeadDocs: React.FC = () => {
	return (
		<>
			<Head>
				<meta name="theme-color" content="#ffffff" />
				<meta name="og:title" content="Rview Phim" />
				{/* LOGO */}
				<meta name="og:image" content="/images/logos/23x23.png" />
				<meta
					name="og:description"
					content="Rview Phim..."
				/>
				<meta
					name="keywords"
					content="english, skill, review-phim"
				/>

				<meta name="renderer" content="webkit" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="" />
				<meta name="twitter:title" content="" />
				{/* LOGO */}
				<meta name="twitter:image" content="/images/logos/23x23.png" />

				<meta name="title" content="Rview Phim" />
				{/* LOGO */}
				<meta name="image" content="/images/logos/23x23.png" />
				<meta
					name="description"
					content="Rview Phim..."
				/>

				<meta name="format-detection" content="email=no" data-shuvi-head="true" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" data-shuvi-head="true" />
				<meta name="apple-mobile-web-app-capable" content="yes" data-shuvi-head="true" />
				<meta
					name="keywords"
					content="english, skill, review-phim"
					data-shuvi-head="true"
				/>

				{/* LOGO */}
				<link rel="apple-touch-icon" type="image/png" href="/images/logos/23x23.png" />
				<link rel="shortcut icon" href="/images/logos/23x23.png" type="image/x-icon" />
				<link rel="icon" type="image/png" href="/images/logos/23x23.png" />
				<link rel="canonical" href="https://review-phim.vercel.app" data-shuvi-head="true" />
				<link rel="shortcut icon" type="image/x-icon" href="/images/logos/23x23.png" data-shuvi-head="true" />

				<meta property="og:site_name" content="Rview Phim" data-shuvi-head="true" />
				<meta property="og:title" content="Rview Phim" data-shuvi-head="true" />
				<meta property="og:type" content="website" data-shuvi-head="true" />
				<meta property="og:url" content="https://review-phim.vercel.app" data-shuvi-head="true" />
				{/* LOGO */}
				<meta property="og:image" content="/images/logos/23x23.png" data-shuvi-head="true" />
				<meta
					property="og:description"
					content="Rview Phim..."
				/>
			</Head>
		</>
	);
};

export default memo(HeadDocs);
