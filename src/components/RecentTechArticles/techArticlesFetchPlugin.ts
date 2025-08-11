import type { PluginModule } from "@docusaurus/types";
import { XMLParser } from "fast-xml-parser";

export type Content = {
	"?xml": unknown;
	rss: {
		channel: {
			title: string;
			link: string;
			description: string;
			image: unknown;
			generator: string;
			lastBuildDate: string;
			"atom:link": unknown;
			language: string;
			item: {
				title: string;
				description: string;
				link: string;
				guid: unknown;
				pubDate: string;
				enclosure: {
					"@_url": string;
					"@_length": number;
					"@_type": string;
				};
				"dc:creator": string;
			}[];
		};
	};
};

export const techArticlesFetchPlugin: PluginModule<Content> = (
	_context,
	_options,
) => {
	return {
		name: "tech-articles-fetch-plugin",
		async loadContent() {
			const text = await fetch("https://zenn.dev/arjef/feed").then((response) =>
				response.text(),
			);
			const json = new XMLParser({
				ignoreAttributes: false,
				parseAttributeValue: true,
			}).parse(text);
			return json;
		},
		async contentLoaded({ content, actions }) {
			actions.setGlobalData(content);
		},
	};
};
