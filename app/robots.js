import siteConfig from "@/app/_lib/site.config";

export default function robots() {
	return {
		rules: { userAgent: "*", allow: "/" },
		sitemap: new URL("/sitemap.xml", siteConfig.url).href,
	};
}