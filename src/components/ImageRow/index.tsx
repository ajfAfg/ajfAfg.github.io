import type { ReactNode } from "react";
import styles from "./index.module.css";

type ImageRowProps = {
	// 横並びにする画像
	// （MDX 中で Markdown の画像記法を使う場合は、前後に空行を入れる）
	children: ReactNode;
};

export const ImageRow = ({ children }: ImageRowProps): ReactNode => (
	<div className={styles.imageRow}>{children}</div>
);
