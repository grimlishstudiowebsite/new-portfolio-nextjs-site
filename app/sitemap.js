import siteConfig from "@/app/_lib/site.config";
import { getEntriesForStaticParams } from "@/app/_lib/data-services/public";

export const dynamic = "force-dynamic";

export default async function sitemap() {
	const entries = await getEntriesForStaticParams();

	const pages = ["/", "/about", "/entries", "/contact"];

	return [
		...pages.map((path) => ({
			url: new URL(path, siteConfig.url).href,
		})),
		...entries.map(({ slug }) => ({
			url: new URL(`/entries/${encodeURIComponent(slug)}`, siteConfig.url).href,
		})),
	];
}