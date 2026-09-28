'use server';

import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";
import { requireAdmin } from "./auth";
import { revalidatePath } from "next/cache";




async function signInAction(_previousState, formData) {

	const supabase = await createClient();

	const email = formData.get('email');
	const password = formData.get('password');

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password
	})

	if (error) {
		return {
			error: 'invalid email or password'
		}
	}
	redirect('/account/entries');
}


async function signOutAction() {

	const supabase = await createClient();
	await supabase.auth.signOut();

	redirect('/login');
}


// ---------- CRUD ----------- //

/// Create

async function createEntryAction(_previousState, formData) {

	const title = String(formData.get("title") ?? "").trim();
	const description = String(formData.get("description") ?? "").trim();
	const category = String(formData.get("category") ?? "").trim();
	const dimensions = String(formData.get("dimensions") ?? "").trim();

	const yearInput = String(formData.get("year") ?? "").trim();
	const year = yearInput === "" ? null : Number(yearInput);

	const slug = title.toLowerCase().trim().replace(/\s+/g, "-");


	const image = formData.get('image');

	const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
	const maximumImageSize = 5 * 1024 * 1024;
	const hasImage = image instanceof File && image.size > 0;

	if (!title) {
		return { error: "Please add a title" }
	}

	if (hasImage && !allowedImageTypes.includes(image.type)) {

		return { error: 'Use Jpeg , PNG , or Webp image' }
	}
	if (hasImage && image.size > maximumImageSize) {

		return { error: 'The image must be 5mb or less' }
	}


	const user = await requireAdmin();
	const supabase = await createClient();

	let uploadedImagePath = null;
	let imageUrl = null;

	if (hasImage) {

		const fileExtensionType = {
			"image/jpeg": "jpg",
			"image/png": "png",
			"image/webp": "webp",
		}

		const fileExtension = fileExtensionType[image.type];

		uploadedImagePath = `${user.id}/${crypto.randomUUID()}.${fileExtension}`
	}


	if (hasImage) {

		const { error: uploadError } = await supabase.storage
			.from('entry-images')
			.upload(uploadedImagePath, image, {
				contentType: image.type,
				cacheControl: '31536000',
				upsert: false
			})
		if (uploadError) {
			return {
				error: "Image could not be uploaded"
			}
		}

		const { data: publicUrlData } = supabase.storage
			.from('entry-images')
			.getPublicUrl(uploadedImagePath)

		imageUrl = publicUrlData.publicUrl

	}



	const { error } = await supabase
		.from("entries")
		.insert(
			{
				user_id: user.id,
				title,
				description,
				category,
				dimensions,
				year,
				slug,
				image_url: imageUrl,
				image_path: uploadedImagePath
			});

	if (error) {

		console.error(error);

		if (uploadedImagePath) {

			const { error: removeError } = await supabase.storage
				.from('entry-images')
				.remove([uploadedImagePath]);

			if (removeError) {
				console.error(removeError)
			}
		}

		return { error: "The Entry could not be created" }
	}



	revalidatePath("/");
	revalidatePath("/entries");
	revalidatePath("/account/entries");

	redirect("/account/entries");
}


//------ Enquiry Form ------//

async function createContactAction(_previousState, formData) {


	const name = String(formData.get('name') ?? "").trim();
	const email = String(formData.get('email') ?? "").trim();
	const phone = String(formData.get('phone') ?? "").trim();
	const message = String(formData.get('message') ?? "").trim();

	if (!name || !email || !message) {
		return { error: 'Name, email and message required' }
	}

	const supabase = await createClient();

	const enquiryObject = {

		name,
		email,
		phone,
		message
	}


	const { data: enquiry, error } = await supabase
		.from('enquiries')
		.insert(enquiryObject)


	if (error) {
		console.error(error);
		return { error: "Your enquiry could not be sent" }
	}



	redirect("/contact/success");

}


/// update


async function updateEntryAction(_previousState, formData) {

	const entryId = String(formData.get("entryId") ?? "");

	const title = String(formData.get("title") ?? "").trim();
	const description = String(formData.get("description") ?? "").trim();
	const category = String(formData.get("category") ?? "").trim();

	const dimensions = String(formData.get("dimensions") ?? "").trim();

	const yearInput = String(formData.get("year") ?? "").trim();
	const year = yearInput === "" ? null : Number(yearInput);

	const slug = title.toLowerCase().trim().replace(/\s+/g, "-");

	const image = formData.get("image");

	const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
	const maximumImageSize = 5 * 1024 * 1024;
	const hasNewImage = image instanceof File && image.size > 0;


	if (hasNewImage && !allowedImageTypes.includes(image.type)) {

		return { error: 'Use Jpeg , PNG , or Webp image' }
	}
	if (hasNewImage && image.size > maximumImageSize) {

		return { error: 'The image must be 5mb or less' }
	}



	if (!entryId) {

		return { error: 'Entry Id missing' }
	}

	if (!title) {
		return { error: "Please add a title" };
	}

	const user = await requireAdmin();
	const supabase = await createClient();


	const { data: existingEntry, error: existingEntryError } = await supabase
		.from("entries")
		.select("id, image_path")
		.eq("id", entryId)
		.eq("user_id", user.id)
		.maybeSingle()

	if (existingEntryError) {

		console.error(existingEntryError);

		return { error: " The Entry could not be loaded" }
	}

	if (!existingEntry) {

		return { error: "the entry could not be found" }
	}


	let newImagePath = null;
	let newImageUrl = null;


	if (hasNewImage) {

		const fileExtensionType = {
			"image/jpeg": "jpg",
			"image/png": "png",
			"image/webp": "webp",
		};


		const fileExtension = fileExtensionType[image.type];

		newImagePath = `${user.id}/${crypto.randomUUID()}.${fileExtension}`
	}


	if (hasNewImage) {

		const { error: uploadError } = await supabase.storage
			.from('entry-images')
			.upload(newImagePath, image, {
				contentType: image.type,
				cacheControl: "31536000",
				upsert: false
			});

		if (uploadError) {

			console.error(uploadError);
			return { error: 'Replacement Entry image could not be updated' }
		}

		const { data: publicUrlData } = supabase.storage
			.from('entry-images')
			.getPublicUrl(newImagePath)

		newImageUrl = publicUrlData.publicUrl;
	}

	const entryUpdateObject = {

		title,
		description,
		category,
		slug,
		dimensions,
		year
	}

	if (hasNewImage) {

		entryUpdateObject.image_url = newImageUrl;
		entryUpdateObject.image_path = newImagePath;
	}

	const { data: updateEntry, error } = await supabase
		.from('entries')
		.update(entryUpdateObject)
		.eq('id', entryId)
		.eq('user_id', user.id)
		.select('id')
		.maybeSingle()


	if (error || !updateEntry) {

		if (error) {
			console.error(error);
		}

		if (newImagePath) {
			const { error: removeError } = await supabase.storage
				.from('entry-images')
				.remove([newImagePath])

			if (removeError) {
				console.error(removeError)

			}
		}


		return { error: error ? 'Entry could not be updated' : "Entry could not be found" }
	}


	if (hasNewImage && existingEntry.image_path) {

		const { error: removeOldImageError } = await supabase.storage
			.from('entry-images')
			.remove([existingEntry.image_path])

		if (removeOldImageError) {

			console.error(removeOldImageError)
		}

	}




	revalidatePath("/")
	revalidatePath("/entries")
	revalidatePath(`/entries/${entryId}`)
	revalidatePath("/account/entries")

	redirect("/account/entries")
}



/// delete


async function deleteEntryAction(_previousState, formData) {

	const entryId = String(formData.get('entryId') ?? "");

	if (!entryId) {

		return { error: "Entry ID missing" }
	}


	const user = await requireAdmin();
	const supabase = await createClient();

	const { data: entry, error: entryError } = await supabase
		.from('entries')
		.select('id , image_path')
		.eq('id', entryId)
		.eq('user_id', user.id)
		.maybeSingle()

	if (entryError) {
		console.error(entryError);
		return { error: "The entry could not be found to delete" }
	}

	if (!entry) {
		return { error: 'The entry could not be found' }
	}


	const { data: deleteEntry, error: deleteEntryError } = await supabase
		.from('entries')
		.delete()
		.eq('id', entryId)
		.eq('user_id', user.id)
		.select('id')
		.maybeSingle()


	if (deleteEntryError) {
		console.error(deleteEntryError);
		return { error: "The entry could not be deleted" }
	}

	if (!deleteEntry) {
		return { error: 'The entry could not be found' }
	}


	if (entry.image_path) {

		const { error: storageError } = await supabase.storage
			.from('entry-images')
			.remove([entry.image_path])


		if (storageError) {
			console.error(storageError);

		}
	}

	revalidatePath("/")
	revalidatePath("/entries")
	revalidatePath(`/entries/${entryId}`)
	revalidatePath("/account/entries")

	redirect("/account/entries")




}



export { signInAction, signOutAction, createEntryAction, updateEntryAction, deleteEntryAction, createContactAction };