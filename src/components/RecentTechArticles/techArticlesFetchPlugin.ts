import type { PluginModule } from "@docusaurus/types";
import { fetchCybozuBlogArticles } from "./fetchCybozuBlogArticles";
import { fetchZennArticles } from "./fetchZennArticles";
import type { ArticleInfo } from "./types";

export const techArticlesFetchPlugin: PluginModule<ArticleInfo[]> = (
	_context,
	_options,
) => {
	return {
		name: "tech-articles-fetch-plugin",
		async loadContent() {
			return (
				await Promise.all([fetchZennArticles(), fetchCybozuBlogArticles()])
			).flat();
		},
		async contentLoaded({ content, actions }) {
			actions.setGlobalData(content);
		},
	};
};
