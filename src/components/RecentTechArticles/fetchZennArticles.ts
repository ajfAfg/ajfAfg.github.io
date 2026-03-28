import { XMLParser } from "fast-xml-parser";
import type { ArticleInfo } from "./types";

type RssItem = {
	title: string;
	link: string;
	pubDate: string;
	enclosure: {
		"@_url": string;
		"@_length": number;
		"@_type": string;
	};
};

export const fetchZennArticles = async (): Promise<ArticleInfo[]> => {
	const text = await fetch("https://zenn.dev/arjef/feed").then((response) =>
		response.text(),
	);
	const json = new XMLParser({
		ignoreAttributes: false,
		parseAttributeValue: true,
	}).parse(text);
	const items: RssItem[] = json.rss.channel.item;
	return items.map((item) => ({
		title: item.title,
		link: item.link,
		thumbnailUrl: item.enclosure["@_url"],
		pubDate: item.pubDate,
	}));
};
