import { createClient } from "@/app/_lib/supabase/server";
import { redirect } from "next/navigation";


async function requireUser() {

	const supabase = await createClient();

	const { data: claimsData, error } = await supabase.auth.getClaims();

	if (error || !claimsData?.claims) {

		redirect('/login');
	}

	return {
		id: claimsData.claims.sub,
		claims: claimsData.claims
	}
}


async function requireProfile() {

	const user = await requireUser();

	const supabase = await createClient();

	const { data: profile, error } = await supabase
		.from("profiles")
		.select("username,role, created_at,id")
		.eq("id", user.id)
		.single();

	if (error || !profile) {
		throw new Error('Profile could not be loaded')
	}

	return profile;
}


async function requireAdmin() {

	const profile = await requireProfile();

	if (profile.role !== 'admin') {

		redirect('/');
	}

	return profile;

}


export { requireUser, requireProfile, requireAdmin };