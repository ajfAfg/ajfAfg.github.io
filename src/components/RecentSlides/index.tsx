import { usePluginData } from "@docusaurus/useGlobalData";
import styles from "./index.module.css";
import type { Content } from "./slidesFetchPlugin";

export const RecentSlides = () => {
	const content = usePluginData("slides-fetch-plugin") as Content;
	const sortedItems = content.rss.channel.item
		.sort(
			(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
		)
		.slice(0, 3);

	return (
		<ul className={styles.slides}>
			{sortedItems.map((item) => (
				<li key={item.title}>
					<a href={item.link} target="_blank">
						<img src={item["media:content"]["@_url"]} alt={item.title} />
					</a>
				</li>
			))}
		</ul>
	);
};
