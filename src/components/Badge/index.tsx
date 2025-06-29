import type { ReactNode } from "react";
import Link from "@docusaurus/Link";

type BadgeProps = {
  // Shields.io のバッジ画像の URL
  // （e.g. "https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=flat"）
  shieldsioUrl: string;

  // バッジの代替テキスト
  altText: string;

  // バッジをクリックしたときに遷移する URL
  linkUrl: string;
};

export const Badge = ({
  shieldsioUrl,
  altText,
  linkUrl,
}: BadgeProps): ReactNode => (
  <Link to={linkUrl}>
    <img src={shieldsioUrl} alt={altText} />
  </Link>
);
