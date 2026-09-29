import "server-only"

import { createClient } from "@/app/_lib/supabase/server";
import { createPublicClient } from "@/app/_lib/supabase/public";






async function getLatestEntries() {

	const supabase = await createClient();

	const { data: entries, error } = await supabase
		.from('entries')
		.select("*")
		.eq("status", "active")
		.order("created_at", { ascending: false })
		.limit(6)


	if (error) { throw new Error("Entries could not be loaded") }

	return entries;

}


async function getAllEntries(category = "", currentPage) {

	const categoryFilter = category.trim();

	const entriesPerPage = 6;

	const from = (currentPage - 1) * entriesPerPage;
	const to = from + entriesPerPage - 1;

	const supabase = await createClient();



	let query = supabase
		.from('entries')
		.select("id, title, description, image_url, category, slug, productSku, year",
			{ count: "exact" })
		.eq("status", "active")

	if (categoryFilter) {

		query = query.eq('category', categoryFilter)
	}


	const { data: entries, error, count } = await query
		.order("created_at", { ascending: false })
		.range(from, to)

	if (error?.code === 'PGRST103') {

		return {
			pageOutOfRange: true
		}
	}

	if (error) {
		throw new Error("Entries could not be loaded")
	}

	const totalPages = Math.ceil((count ?? 0) / entriesPerPage);

	return { entries, totalPages, pageOutOfRange: false };
}




async function getEntry(slug) {

	const supabase = createPublicClient();

	const { data: entry, error } = await supabase
		.from('entries')
		.select("*")
		.eq("status", "active")
		.eq("slug", slug)
		.maybeSingle()

	if (error) { throw new Error("Entries could not be loaded") }

	return entry;


}

async function getEntriesForStaticParams() {

	const supabase = createPublicClient();

	const { data: entries, error } = await supabase
		.from('entries')
		.select("slug")
		.eq('status', "active")

	if (error) {
		throw new Error('No Entry loaded')
	}

	return entries;

}



export { getLatestEntries, getAllEntries, getEntry, getEntriesForStaticParams }
