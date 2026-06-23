import { ContactValues } from "@/components/contact-form";
import { Blog } from "../../../types";

export async function getBlogStories():Promise<Blog[]> {
  const res = await fetch('https://blog.datastunt.com/wp-json/wp/v2/posts?categories=23');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getBlogInsights():Promise<Blog[]> {
  const res = await fetch('https://blog.datastunt.com/wp-json/wp/v2/posts?categories=24');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getBlogArticles():Promise<Blog[]> {
  const res = await fetch('https://blog.datastunt.com/wp-json/wp/v2/posts?categories=25');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getBlogImages(imageId: number):Promise<{guid: { rendered: string } }> {
  const res = await fetch(`https://blog.datastunt.com/wp-json/wp/v2/media/${imageId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function addContactDetails(formData: ContactValues) {
  const res = await fetch("https://formdata-2b142-default-rtdb.firebaseio.com/contact.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error("Failed to send");

  const data = await res.json();

  return data
}

