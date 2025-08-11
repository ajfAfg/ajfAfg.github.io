import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Badge } from "../components/Badge";
import { RecentSlides } from "../components/RecentSlides";
import { RecentTechArticles } from "../components/RecentTechArticles";
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
				<section className="container margin-vert--xl">
					<h2>Recent Blog (Tech)</h2>
					<RecentTechArticles />
				</section>
				<section className="container margin-vert--xl">
					<h2>Recent Slides</h2>
					<RecentSlides />
				</section>
			</main>
		</Layout>
	);
}
