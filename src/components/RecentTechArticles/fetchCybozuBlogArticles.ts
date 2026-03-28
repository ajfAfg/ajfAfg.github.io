import type { ArticleInfo } from "./types";

const articleUrls = ["https://blog.cybozu.io/entry/2026/02/24/113000"];

const extractMetaContent = (html: string, property: string): string => {
	const match =
		html.match(
			new RegExp(`<meta\\s+property="${property}"\\s+content="([^"]+)"`, "i"),
		) ??
		html.match(
			new RegExp(`<meta\\s+content="([^"]+)"\\s+property="${property}"`, "i"),
		);
	return match?.[1] ?? "";
};

const fetchArticle = async (url: string): Promise<ArticleInfo> => {
	const response = await fetch(url);
	const html = await response.text();

	const title = extractMetaContent(html, "og:title");
	const thumbnailUrl = extractMetaContent(html, "og:image");

	const dateMatch = url.match(/\/entry\/(\d{4})\/(\d{2})\/(\d{2})\//);
	const pubDate = dateMatch
		? `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`
		: "";

	return { title, link: url, thumbnailUrl, pubDate };
};

export const fetchCybozuBlogArticles = async (): Promise<ArticleInfo[]> => {
	return Promise.all(articleUrls.map(fetchArticle));
};
