import type { PluginModule } from "@docusaurus/types";
import { XMLParser } from "fast-xml-parser";

export type Content = {
	"?xml": unknown;
	rss: {
		channel: {
			title: string;
			link: string;
			description: string;
			"dc:language": string;
			"dc:creator": string;
			"dc:date": string;
			"atom:link": unknown;
			item: {
				title: string;
				link: string;
				description: string;
				guid: string;
				"dc:subject": string;
				"dc:creator": string;
				pubDate: string;
				"content:encoded": string;
				"media:thumbnail": unknown;
				"media:content": {
					"@_width": number;
					"@_medium": string;
					"@_type": string;
					"@_url": string;
				};
				"media:community": unknown;
			}[];
		};
	};
};

export const slidesFetchPlugin: PluginModule<Content> = (
	_context,
	_options,
) => {
	return {
		name: "slides-fetch-plugin",
		async loadContent() {
			const text = await fetch(
				"https://www.docswell.com/user/ajfAfg/feed",
			).then((response) => response.text());
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
