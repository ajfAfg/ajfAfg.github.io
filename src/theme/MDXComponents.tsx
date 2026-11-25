import { Figure } from "@site/src/components/Figure";
import { ImageRow } from "@site/src/components/ImageRow";
import MDXComponents from "@theme-original/MDXComponents";

// MDX 中で import せずに使えるコンポーネント
export default {
	...MDXComponents,
	Figure,
	ImageRow,
};
