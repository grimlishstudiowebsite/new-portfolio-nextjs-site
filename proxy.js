import { updateSession } from "@/app/_lib/supabase/proxy";

export async function proxy(request) {
	return await updateSession(request);
}

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
	],
};