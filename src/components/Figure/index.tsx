import type { ReactNode } from "react";
import styles from "./index.module.css";

type FigureProps = {
	// 縦に並べる画像や ImageRow
	// （MDX 中で Markdown の画像記法を使う場合は、前後に空行を入れる）
	children: ReactNode;
};

// 画像の領域。中の画像や ImageRow を一定の間隔で縦に並べる
export const Figure = ({ children }: FigureProps): ReactNode => (
	<figure className={styles.figure}>{children}</figure>
);
