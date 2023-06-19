import type { PageConfig } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const config: PageConfig = { amp: false };

const Page404: React.FC = () => {
	const router = useRouter();

	/* eslint-disable */
	useEffect(() => {
		router.push('/'); // Redirect về trang chủ
	}, []);
	/* eslint-enable */

	return (
		<>
			<div className="tw-px-10 tw-py-16 xxl:tw-py-20 tw-text-center tw-flex-col">
				<div className="tw-text-center">
					<img className="tw-mx-auto" alt="404" src="/images/404.png" width="640" height="488" loading="lazy" />
				</div>
				<span>Oops! Không tìm thấy trang</span>
			</div>
		</>
	);
};

export default Page404;
