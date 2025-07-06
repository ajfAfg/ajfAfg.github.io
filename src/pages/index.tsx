import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Badge } from "../components/Badge";
import styles from "./index.module.css";

const SnsBadges = (): ReactNode => (
	<div className={styles.badges}>
		<Badge
			shieldsioUrl="https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=flat"
			altText="GitHub バッジ"
			linkUrl="https://github.com/ajfAfg"
		/>
		<Badge
			shieldsioUrl="https://img.shields.io/badge/-X-181717?logo=x&logoColor=white&style=flat&labelColor=black"
			altText="X バッジ"
			linkUrl="https://x.com/ajfAfg"
		/>
		<Badge
			shieldsioUrl="https://img.shields.io/badge/-Last.fm-D51007?logo=lastdotfm&logoColor=white&style=flat"
			altText="Last.fm バッジ"
			linkUrl="https://www.last.fm/user/ajfAfg"
		/>
	</div>
);

const HomepageHeader = (): ReactNode => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<SnsBadges />
			</div>
		</header>
	);
};

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title} description="ajfAfg's personal website">
			<HomepageHeader />
			<main>
				{/* TODO: 各 Product や Blog などの直近コンテンツを表示したい */}
				<div className="container text--center text--bold margin-vert--xl">
					<p style={{ fontSize: 32 }}>🚧工事中🚧</p>
				</div>
			</main>
		</Layout>
	);
}
