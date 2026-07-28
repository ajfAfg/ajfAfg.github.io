import type { PluginModule } from "@docusaurus/types";
import { fetchCybozuBlogArticles } from "./fetchCybozuBlogArticles";
import { fetchZennArticles } from "./fetchZennArticles";
import type { ArticleInfo } from "./types";

// NOTE:
// `Config.plugins` が受け付ける型は `PluginModule<unknown>` であり、
// TypeScript 7 からデフォルトで有効になった `strictFunctionTypes` の下では
// `PluginModule<ArticleInfo[]>` を代入できないため、型引数を指定していない。
export const techArticlesFetchPlugin: PluginModule = (_context, _options) => {
	return {
		name: "tech-articles-fetch-plugin",
		async loadContent(): Promise<ArticleInfo[]> {
			return (
				await Promise.all([fetchZennArticles(), fetchCybozuBlogArticles()])
			).flat();
		},
		async contentLoaded({ content, actions }) {
			actions.setGlobalData(content);
		},
	};
};
