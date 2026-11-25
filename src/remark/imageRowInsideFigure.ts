import type { Nodes, Root } from "mdast";
import type {} from "mdast-util-mdx-jsx";
import type { Plugin } from "unified";

const isJsxElement = (node: Nodes, name: string): boolean =>
	(node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
	node.name === name;

// ImageRow を Figure の直下以外で使っていたらビルドを失敗させる
// （ImageRow は外側の余白を持たず Figure に任せているため、Figure の外では前後の文章にくっつく）
export const remarkImageRowInsideFigure: Plugin<[], Root> =
	() => (tree, file) => {
		const visit = (node: Nodes, parent: Nodes | undefined): void => {
			if (
				isJsxElement(node, "ImageRow") &&
				!(parent && isJsxElement(parent, "Figure"))
			) {
				// Docusaurus はエラーの原因としてメッセージしか目立たせないため、位置もメッセージに含める
				const start = node.position?.start;
				file.fail(
					`ImageRow は Figure の直下で使ってください（${start?.line}:${start?.column}）`,
					{ place: node.position },
				);
			}
			if ("children" in node) {
				for (const child of node.children) {
					visit(child, node);
				}
			}
		};
		visit(tree, undefined);
	};
