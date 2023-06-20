import type { PageConfig } from 'next';
import styles from './styles.module.css'

export const config: PageConfig = { amp: false };

const Page404: React.FC = () => {

	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={styles.container}>
					<p className={styles.title}>404</p>
					<p className={styles.text}>Oops! Trang bạn tìm kiếm không tồn tại.</p>
					<p className={styles.text}>
						Hãy truy cập <a className={styles.link} href="/">trang chủ</a> hoặc quay lại trang trước đó.
					</p>
				</div>
			</div>
		</>
	);
};

export default Page404;
