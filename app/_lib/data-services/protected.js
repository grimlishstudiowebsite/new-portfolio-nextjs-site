import "server-only"

import { createClient } from "@/app/_lib/supabase/server";

import { requireAdmin } from "@/app/_lib/auth";



async function getMyEntries() {

	const user = await requireAdmin();
	const supabase = await createClient();

	const { data: entries, error } = await supabase
		.from("entries")
		.select("*")
		.eq("user_id", user.id)
		.order("created_at", { ascending: false });



	if (error) {

		throw new Error("The Entry could not be loaded")
	}


	return entries;
}

async function getMyEntry(entryId) {

	const user = await requireAdmin();
	const supabase = await createClient();

	const { data: entry, error } = await supabase
		.from("entries")
		.select("*")
		.eq("id", entryId)
		.eq("user_id", user.id)
		.maybeSingle()


	if (error) {

		throw new Error("The Entry could not be loaded")
	}


	return entry;
}

async function getEnquiries() {
	await requireAdmin();

	const supabase = await createClient();

	const { data: enquiries, error } = await supabase
		.from("enquiries")
		.select("id, name, email, phone, message, created_at")
		.order("created_at", { ascending: false });

	if (error) {
		console.error(error);
		throw new Error("Enquiries could not be loaded");
	}

	return enquiries ?? [];
}


export { getMyEntries, getMyEntry, getEnquiries }