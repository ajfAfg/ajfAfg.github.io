import { usePluginData } from "@docusaurus/useGlobalData";
import styles from "./index.module.css";
import type { ArticleInfo } from "./types";

export const RecentTechArticles = () => {
	const articles = usePluginData("tech-articles-fetch-plugin") as ArticleInfo[];
	const sortedItems = [...articles]
		.sort(
			(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
		)
		.slice(0, 3);

	return (
		<ul className={styles.techArticles}>
			{sortedItems.map((item) => (
				<li key={item.title}>
					<a href={item.link} target="_blank" rel="noopener noreferrer">
						<img src={item.thumbnailUrl} alt={item.title} />
					</a>
				</li>
			))}
		</ul>
	);
};
